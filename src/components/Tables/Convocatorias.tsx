import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetConvocatoriasPeriodoQuery,
  useGetConvocatoriasQuery,
} from '../../redux/reduxQuery/convocatorias';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';
import { forEach } from 'lodash';
import { useGetAreasQuery } from '../../redux/reduxQuery/utils';

const Convocatorias = () => {
  const form = useForm();
  const [params, setParams] = React.useState('autorizado=1&activo=1');
  const {
    data: normasEmitidas,
    isLoading,
    isError,
    refetch: refetchConvocatorias,
  } = useGetConvocatoriasQuery(params);
  const {
    data: dataAreas,
    isLoading: isLoadingAreas,
    isError: isErrorAreas,
  } = useGetAreasQuery('');
  const {
    data: dataPeriodosConvocatorias,
    isLoading: isLoadingPeriodosConvocatorias,
    isError: isErrorPeriodosConvocatorias,
  } = useGetConvocatoriasPeriodoQuery('');

  const handleSubmit = form.handleSubmit((data) => {
    data.id_area = data.id_area?.value || '';
    data.periodo_convocatoria = data.periodo_convocatoria?.value || '';
    forEach(data, (value, key) => {
      if (value === '' || value === null || value === undefined) {
        delete data[key]; 
      }
    });
    data.autorizado = 1;
    data.activo = 1;
    const params = new URLSearchParams(data).toString();

    setParams(params);
    refetchConvocatorias();
  });
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las convocatorias:
      </p>
      <div className="flex sm:flex-row flex-col gap-4">
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

        <Controller
          name="periodo_convocatoria"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo_convocatoria"
              options={dataPeriodosConvocatorias?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Filtrar por periodo"
              className="w-full mb-4"
            />
          )}
        />
        <div className="flex w-fit gap-4 h-fit justify-end items-end my-auto">
          <Button onClick={handleSubmit}>Buscar</Button>
          <Button
            color="border border-primary text-primary"
            onClick={() => {
              form.setValue('id_area', '');
              form.setValue('periodo_convocatoria', '');
              setParams('');
              refetchConvocatorias();
            }}
          >
            Limpiar
          </Button>
        </div>
      </div>
      <Table
        columns={[
          {
            Header: 'N° de convocatoria',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  {row.original.tipo_convocatoria} N°{' '}
                  {row.original.numero_convocatoria}-
                  {row.original.periodo_convocatoria}
                </span>
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.1
                : window.innerWidth > 1800
                ? window.innerWidth * 0.08
                : 120,
          },
          {
            Header: 'Descripción de convocatoria',
            accessor: 'descripcion_convocatoria',
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.16
                : window.innerWidth > 1800
                ? window.innerWidth * 0.34
                : 120,
          },
          {
            Header: 'Aviso',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_aviso === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_aviso, '_blank')
                    }
                  >
                    Ver
                  </Button>
                )}
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.04
                : window.innerWidth > 1800
                ? window.innerWidth * 0.06
                : 120,
          },
          {
            Header: 'Comunicado',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_comunicado === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_comunicacion1, '_blank')
                    }
                  >
                    Ver comunicado
                  </Button>
                )}
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.113
                : window.innerWidth > 1800
                ? window.innerWidth * 0.06
                : 120,
          },
          {
            Header: 'Evaluación Curricular',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_resultado_evaluacion_curricular === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(
                        row.original.url_resultado_evaluacion_curricular,
                        '_blank'
                      )
                    }
                  >
                    Ver resultado
                  </Button>
                )}
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.0999
                : window.innerWidth > 1800
                ? window.innerWidth * 0.08
                : 120,
          },
          {
            Header: 'Examen',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_resultado_examen_virtual === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(
                        row.original.url_resultado_examen_virtual,
                        '_blank'
                      )
                    }
                  >
                    Ver resultado
                  </Button>
                )}
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.0999
                : window.innerWidth > 1800
                ? window.innerWidth * 0.08
                : 120,
          },
          {
            Header: 'Entrevista',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_resultado_entrevista_virtual === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(
                        row.original.url_resultado_entrevista_virtual,
                        '_blank'
                      )
                    }
                  >
                    Ver resultado
                  </Button>
                )}
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.0999
                : window.innerWidth > 1800
                ? window.innerWidth * 0.08
                : 120,
          },
          {
            Header: 'Resultado final',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_puntaje_final === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_puntaje_final, '_blank')
                    }
                  >
                    Ver
                  </Button>
                )}
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.065
                : window.innerWidth > 1800
                ? window.innerWidth * 0.08
                : 120,
          },
          {
            Header: 'Estado',
            Cell: ({ row }: any) => (
              <div className="flex items-center w-full my-auto h-full">
                <span className="text-sm font-lato-bold my-auto h-full">
                  {row.original.estado_convocatoria}
                </span>
              </div>
            ),
            width:
              window.innerWidth > 768 && window.innerWidth < 1800
                ? window.innerWidth * 0.055
                : window.innerWidth > 1800
                ? window.innerWidth * 0.08
                : 120,
          },
        ]}
        data={normasEmitidas}
        loading={isLoading}
      />
    </>
  ) : (
    <div className="flex justify-center items-center h-64">
      {isError ? (
        <span className="text-red-500">
          Ocurrió un error al cargar las convocatorias
        </span>
      ) : (
        <span className="text-blue-500">Cargando convocatorias...</span>
      )}
    </div>
  );
};

export default Convocatorias;
