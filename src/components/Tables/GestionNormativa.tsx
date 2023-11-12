import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetDirectivasPeriodoQuery,
  useGetDirectivasQuery,
} from '../../redux/reduxQuery/directivas';
import { Controller, useForm } from 'react-hook-form';
import {
  useGetAreasQuery,
  useGetTiposDocumentoQuery,
} from '../../redux/reduxQuery/utils';
import { CustomSelect } from '../Select';
import { forEach } from 'lodash';

const GestionNormativa = () => {
  const form = useForm();
  const [params, setParams] = React.useState('autorizado=1&activo=1');
  const {
    data: gestionNormativaData,
    isLoading,
    isError,
    refetch: refetchGestionNormativa,
  } = useGetDirectivasQuery(params);
  const { data: dataTiposDocumento } = useGetTiposDocumentoQuery('');
  const { data: dataPeriodosDirectivas } = useGetDirectivasPeriodoQuery('');

  const { data: dataAreas } = useGetAreasQuery('');

  const filteredDataByAutorizado = React.useMemo(() => {
    if (gestionNormativaData) {
      return gestionNormativaData.filter(
        (gestionNormativa: any) => gestionNormativa.autorizado === '1'
      );
    }
  }, [gestionNormativaData]);

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
    refetchGestionNormativa();
  });

  return gestionNormativaData ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de normas:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las directivas
        emitidas por nuestra entidad:
      </p>
      <div className="flex sm:flex-row flex-col gap-4 items-center">
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
              placeholder="Filtrar por tipo de documento"
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
              id="periodo"
              options={dataPeriodosDirectivas?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Periodo"
              placeholder="Filtrar por periodo"
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
              placeholder="Filtrar por área"
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
              refetchGestionNormativa();
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
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  {row.original.numero_resolucion}-
                  {row.original.periodo_resolucion}-
                  {row.original.abreviacion_area}
                  -ICL/MML
                </span>
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.14
                : window.innerWidth > 1800 
                ? window.innerWidth * 0.23
                : window.innerWidth * 0.4,
          },
          {
            Header: 'Sumilla',
            accessor: 'sumilla_resolucion',
            width: 800,
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
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.14
                : window.innerWidth > 1800
                ? window.innerWidth * 0.23
                : window.innerWidth * 0.4,
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
          Ocurrió un error al cargar las directivas
        </span>
      ) : (
        <span className="text-blue-500">Cargando directivas...</span>
      )}
    </div>
  );
};

export default GestionNormativa;
