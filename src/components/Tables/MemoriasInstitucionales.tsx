import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetMemoriasPeriodoQuery,
  useGetMemoriasQuery,
} from '../../redux/reduxQuery/memoriasInstitucionales';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';
import { forEach } from 'lodash';

const MemoriasInstitucionales = () => {
  const form = useForm();
  const [params, setParams] = React.useState('autorizado=1&activo=1');
  const {
    data: normasEmitidas,
    isLoading,
    isError,
    refetch: refetchMemoriasInstitucionales,
  } = useGetMemoriasQuery(params);
  const {
    data: dataPeriodosMemorias,
    isLoading: isLoadingPeriodosMemorias,
    isError: isErrorPeriodosMemorias,
  } = useGetMemoriasPeriodoQuery('');
  const handleSubmit = form.handleSubmit((data) => {
    data.periodo_memoria = data.periodo_memoria?.value || '';
    forEach(data, (value, key) => {
      if (value === '' || value === null || value === undefined) {
        delete data[key];
      }
    });
    const params = new URLSearchParams(data).toString();
    data.autorizado = 1;
    data.activo=1;
    setParams(params);
    refetchMemoriasInstitucionales();
  });
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las rendiciones de
        cuentas:
      </p>
      <div className="flex gap-4">
        <Controller
          name="periodo_memoria"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo_memoria"
              options={dataPeriodosMemorias?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Filtrar por año"
              className="w-full mb-4"
            />
          )}
        />
        <div className="flex w-fit gap-4 h-fit justify-end items-end my-auto">
          <Button onClick={handleSubmit}>Buscar</Button>
          <Button
            color="border border-primary text-primary"
            onClick={() => {
              form.setValue('periodo_memoria', '');
              setParams('');
              refetchMemoriasInstitucionales();
            }}
          >
            Limpiar
          </Button>
        </div>
      </div>
      <Table
        columns={[
          {
            Header: 'Año',
            accessor: 'periodo_memoria',
          },
          {
            Header: 'Descripción',
            accessor: 'descripcion_memoria',
            width: 400,
          },
          {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_memoria === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_memoria, '_blank')
                    }
                  >
                    Ver documento
                  </Button>
                )}
              </div>
            ),
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
          Ocurrió un error al cargar las normas emitidas
        </span>
      ) : (
        <span className="text-blue-500">Cargando normas emitidas...</span>
      )}
    </div>
  );
};

export default MemoriasInstitucionales;
