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
import { returnLinkPDFFromBuffer } from '../../utils/showImageBuffer';

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
              setParams('autorizado=1&activo=1');
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
            Header: 'Anexos',
            width: 80,
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() => {
                    const contenido_documento =
                      row.original.anexos[0]?.contenido_documento;
                    const url_documento = row.original.anexos[0]?.url_documento;

                    if (
                      contenido_documento !== null &&
                      contenido_documento !== undefined
                    ) {
                      const link = returnLinkPDFFromBuffer(contenido_documento);

                      if (link) {
                        window.open(link, '_blank');
                      } else {
                        // Handle the case when returnLinkPDFFromBuffer returns null
                        console.error('Error generating PDF link.');
                      }
                    } else if (
                      url_documento !== null &&
                      url_documento !== undefined
                    ) {
                      window.open(url_documento, '_blank');
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Button>
              </div>
            ),
          },
          {
            Header: 'Aviso',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.avisos?.length === 0 ? (
                  <span className="text-sm font-medium ">-</span>
                ) : (
                  <Button
                    onClick={() => {
                      const contenido_documento =
                        row.original.avisos[0]?.contenido_documento;
                      const url_documento =
                        row.original.avisos[0]?.url_documento;

                      if (
                        contenido_documento !== null &&
                        contenido_documento !== undefined
                      ) {
                        const link =
                          returnLinkPDFFromBuffer(contenido_documento);

                        if (link) {
                          window.open(link, '_blank');
                        } else {
                          // Handle the case when returnLinkPDFFromBuffer returns null
                          console.error('Error generating PDF link.');
                        }
                      } else if (
                        url_documento !== null &&
                        url_documento !== undefined
                      ) {
                        window.open(url_documento, '_blank');
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
                {row.original.comunicacion1s?.length === 0 ? (
                  <span className="text-sm font-medium ">-</span>
                ) : (
                  <Button
                    onClick={() => {
                      const contenido_documento =
                        row.original.comunicacion1s[0]?.contenido_documento;
                      const url_documento =
                        row.original.comunicacion1s[0]?.url_documento;

                      if (
                        contenido_documento !== null &&
                        contenido_documento !== undefined
                      ) {
                        const link =
                          returnLinkPDFFromBuffer(contenido_documento);

                        if (link) {
                          window.open(link, '_blank');
                        } else {
                          // Handle the case when returnLinkPDFFromBuffer returns null
                          console.error('Error generating PDF link.');
                        }
                      } else if (
                        url_documento !== null &&
                        url_documento !== undefined
                      ) {
                        window.open(url_documento, '_blank');
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
                {row.original.curriculos?.length === 0 ? (
                  <span className="text-sm font-medium ">-</span>
                ) : (
                  <Button
                    onClick={() => {
                      const contenido_documento =
                        row.original.curriculos[0]?.contenido_documento;
                      const url_documento =
                        row.original.curriculos[0]?.url_documento;

                      if (
                        contenido_documento !== null &&
                        contenido_documento !== undefined
                      ) {
                        const link =
                          returnLinkPDFFromBuffer(contenido_documento);

                        if (link) {
                          window.open(link, '_blank');
                        } else {
                          // Handle the case when returnLinkPDFFromBuffer returns null
                          console.error('Error generating PDF link.');
                        }
                      } else if (
                        url_documento !== null &&
                        url_documento !== undefined
                      ) {
                        window.open(url_documento, '_blank');
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
                {row.original.examens?.length === 0 ? (
                  <span className="text-sm font-medium ">-</span>
                ) : (
                  <Button
                    onClick={() => {
                      const contenido_documento =
                        row.original.examens[0]?.contenido_documento;
                      const url_documento =
                        row.original.examens[0]?.url_documento;

                      if (
                        contenido_documento !== null &&
                        contenido_documento !== undefined
                      ) {
                        const link =
                          returnLinkPDFFromBuffer(contenido_documento);

                        if (link) {
                          window.open(link, '_blank');
                        } else {
                          // Handle the case when returnLinkPDFFromBuffer returns null
                          console.error('Error generating PDF link.');
                        }
                      } else if (
                        url_documento !== null &&
                        url_documento !== undefined
                      ) {
                        window.open(url_documento, '_blank');
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
                {row.original.entrevista?.length === 0 ? (
                  <span className="text-sm font-medium ">-</span>
                ) : (
                  <Button
                    onClick={() => {
                      const contenido_documento =
                        row.original.entrevista[0]?.contenido_documento;
                      const url_documento =
                        row.original.entrevista[0]?.url_documento;

                      if (
                        contenido_documento !== null &&
                        contenido_documento !== undefined
                      ) {
                        const link =
                          returnLinkPDFFromBuffer(contenido_documento);

                        if (link) {
                          window.open(link, '_blank');
                        } else {
                          // Handle the case when returnLinkPDFFromBuffer returns null
                          console.error('Error generating PDF link.');
                        }
                      } else if (
                        url_documento !== null &&
                        url_documento !== undefined
                      ) {
                        window.open(url_documento, '_blank');
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
                {row.original.finals?.length === 0 ? (
                  <span className="text-sm font-medium ">-</span>
                ) : (
                  <Button
                    onClick={() => {
                      const contenido_documento =
                        row.original.finals[0]?.contenido_documento;
                      const url_documento =
                        row.original.finals[0]?.url_documento;

                      if (
                        contenido_documento !== null &&
                        contenido_documento !== undefined
                      ) {
                        const link =
                          returnLinkPDFFromBuffer(contenido_documento);

                        if (link) {
                          window.open(link, '_blank');
                        } else {
                          // Handle the case when returnLinkPDFFromBuffer returns null
                          console.error('Error generating PDF link.');
                        }
                      } else if (
                        url_documento !== null &&
                        url_documento !== undefined
                      ) {
                        window.open(url_documento, '_blank');
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
