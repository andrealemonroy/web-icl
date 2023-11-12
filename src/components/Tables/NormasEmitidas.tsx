import React from 'react';
import {
  useGetResolucionesPeriodoQuery,
  useGetResolucionesQuery,
} from '../../redux/reduxQuery/resoluciones';
import { Table } from '../Table';
import { Button } from '../Button';
import { CustomSelect } from '../Select';
import { Controller, useForm } from 'react-hook-form';
import {
  useGetAreasQuery,
  useGetTiposDocumentoQuery,
} from '../../redux/reduxQuery/utils';
import { forEach } from 'lodash';

const NormasEmitidas = () => {
  const form = useForm();
  const [params, setParams] = React.useState('autorizado=1&activo=1');

  const {
    data: normasEmitidas,
    isLoading,
    isError,
    refetch: refetchNormasEmitidas,
  } = useGetResolucionesQuery(params);

  const filteredDataByAutorizado = React.useMemo(() => {
    if (normasEmitidas) {
      return normasEmitidas.filter(
        (normaEmitida: any) => normaEmitida.autorizado === '1'
      );
    }
  }, [normasEmitidas]);

  const {
    data: dataPeriodosResoluciones,
    isLoading: isLoadingPeriodosResoluciones,
    isError: isErrorPeriodosResoluciones,
  } = useGetResolucionesPeriodoQuery('');

  const {
    data: dataTiposDocumento,
    isLoading: isLoadingTiposDocumento,
    isError: isErrorTiposDocumento,
  } = useGetTiposDocumentoQuery('');

  const {
    data: dataAreas,
    isLoading: isLoadingAreas,
    isError: isErrorAreas,
  } = useGetAreasQuery('');

  const handleSubmit = form.handleSubmit((data) => {
    data.id_tipo_documento = data.id_tipo_documento?.value || '';
    data.periodo_resolucion = data.periodo_resolucion?.value || '';
    data.id_area = data.id_area?.value || '';
    forEach(data, (value, key) => {
      if (value === '' || value === null || value === undefined) {
        delete data[key];
      }
    });
    data.autorizado = 1;
    data.activo=1;
    const params = new URLSearchParams(data).toString();
    setParams(params);
    refetchNormasEmitidas();
  });

  return normasEmitidas ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de normas:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las RESOLUCIONES
        emitidas por nuestra entidad:
      </p>
      <div className="flex gap-4 items-center">
        <Controller
          name="id_tipo_documento"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="id_tipo_documento"
              options={dataTiposDocumento?.map((tipoDocumento: any) => ({
                value: tipoDocumento.id,
                label: tipoDocumento.descripcion_tipo_documento,
              }))}
              label="Tipo de documento"
              placeholder="Tipo de documento"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="periodo_resolucion"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo_resolucion"
              options={dataPeriodosResoluciones?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Seleccione un año"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="id_area"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="id_area"
              options={dataAreas?.map((area: any) => ({
                value: area.id,
                label: area.descripcion_area,
              }))}
              label="Área"
              placeholder="Seleccione un área"
              className="w-full mb-4"
            />
          )}
        />
        <div className="h-fit flex gap-2 items-center">
          <Button onClick={handleSubmit}>Buscar</Button>
          <Button
            color="border border-primary"
            onClick={() => {
              form.setValue('id_tipo_documento', '');
              form.setValue('periodo_resolucion', '');
              form.setValue('id_area', '');
              setParams('');
              refetchNormasEmitidas();
            }}
          >
            Limpiar
          </Button>
        </div>
      </div>
      <Table
        columns={[
          {
            Header: 'N° de documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center font-lato">
                <span className="text-sm font-medium">
                  {row.original.numero_resolucion}-
                  {row.original.periodo_resolucion}-
                  {row.original.abreviacion_area}
                  -ICL/MML
                </span>
              </div>
            ),
            width: window.innerWidth * 0.15,
          },
          {
            Header: 'Sumilla',
            accessor: 'sumilla_resolucion',
            width: window.innerWidth * 0.53,
            Cell: ({ row }: any) => (
              <div className="flex items-center font-lato">
                <span className="text-sm font-medium">
                  {row.original.sumilla_resolucion}
                </span>
              </div>
            ),
          },
          {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_documento_resolucion === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(
                        row.original.url_documento_resolucion,
                        '_blank'
                      )
                    }
                  >
                    Ver documento
                  </Button>
                )}
              </div>
            ),
            width: window.innerWidth * 0.15,
          },
        ]}
        data={filteredDataByAutorizado}
        loading={isLoading}
      />
    </>
  ) : (
    <div className="flex justify-center items-center h-64">
      {isError ? (
        <span className="text-red-500">
          Ocurrió un error al cargar las normas emitidas
        </span>
      ) : (
        <span className="text-blue-500">Cargando normas emitidas...</span>
      )}
    </div>
  );
};

export default NormasEmitidas;
