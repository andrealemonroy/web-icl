import React, { useEffect } from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetConveniosQuery,
  useGetPeriodosConveniosQuery,
} from '../../redux/reduxQuery/convenios';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';
import {
  useGetDepartamentosQuery,
  useGetDistritosQuery,
  useGetProviciasQuery,
} from '../../redux/reduxQuery/departamentos';
import { forEach } from 'lodash';

const Convenios = () => {
  const form = useForm();
  const [params, setParams] = React.useState('autorizado=1&activo=1');
  const {
    data: normasEmitidas,
    isLoading,
    isError,
    refetch: refetchConvenios,
  } = useGetConveniosQuery(params);

  const {
    data: departamentos,
    isLoading: isLoadingDepartamentos,
    isError: isErrorDepartamentos,
  } = useGetDepartamentosQuery('');

  const {
    data: provincias,
    isLoading: isLoadingProvincias,
    isError: isErrorProvincias,
    refetch: refetchProvincias,
  } = useGetProviciasQuery({
    id_departamento: form.watch('departamento')?.value || '',
  });

  const {
    data: distritos,
    isLoading: isLoadingDistritos,
    isError: isErrorDistritos,
    refetch: refetchDistritos,
  } = useGetDistritosQuery({
    id_departamento: form.watch('departamento')?.value || '',
    id_provincia: form.watch('provincia')?.value || '',
  });

  const {
    data: dataPeriodosConvenios,
    isLoading: isLoadingPeriodosConvenios,
    isError: isErrorPeriodosConvenios,
  } = useGetPeriodosConveniosQuery('');

  useEffect(() => {
    refetchProvincias();
    form.setValue('provincia', '');
    form.setValue('distrito', '');
  }, [form.watch('departamento')]);

  useEffect(() => {
    refetchDistritos();
    form.setValue('distrito', '');
  }, [form.watch('provincia')]);

  const handleSubmit = form.handleSubmit((data) => {
    data.id_departamento = data.departamento?.value;
    delete data.departamento;
    data.id_provincia = data.provincia?.value;
    delete data.provincia;
    data.id_distrito = data.distrito?.value;
    delete data.distrito;
    data.periodo_convenio = data.año?.value ?? null;
    delete data.año;
    data.periodo_mes = data.mes?.value ?? null;
    delete data.mes;
    data.autorizado = 1;
    data.activo = 1;

    forEach(data, (value, key) => {
      if (value === '' || value === null || value === undefined) {
        delete data[key];
      }
    });

    const params = new URLSearchParams(data).toString();
    setParams(params);

    refetchConvenios();
  });
  

  return normasEmitidas ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de convenios:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de los convenios
        suscritos:
      </p>
      <div className="flex sm:flex-row flex-col gap-4">
        <Controller
          name="departamento"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="departamento"
              options={departamentos?.map((departamento: any) => ({
                value: departamento.id,
                label: departamento.departamento,
              }))}
              label="Departamento"
              placeholder="Filtrar por departamento"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="provincia"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="provincia"
              options={provincias?.map((provincia: any) => ({
                value: provincia.id,
                label: provincia.provincia,
              }))}
              label="Provincia"
              placeholder="Filtrar por provincia"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="distrito"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="distrito"
              options={distritos?.map((distrito: any) => ({
                value: distrito.id,
                label: distrito.distrito,
              }))}
              label="Distrito"
              placeholder="Filtrar por distrito"
              className="w-full mb-4"
            />
          )}
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-4 mb-4">
        <Controller
          name="año"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              options={dataPeriodosConvenios?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Filtrar por año"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="mes"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              options={[
                { value: 1, label: 'Enero' },
                { value: 2, label: 'Febrero' },
                { value: 3, label: 'Marzo' },
                { value: 4, label: 'Abril' },
                { value: 5, label: 'Mayo' },
                { value: 6, label: 'Junio' },
                { value: 7, label: 'Julio' },
                { value: 8, label: 'Agosto' },
                { value: 9, label: 'Septiembre' },
                { value: 10, label: 'Octubre' },
                { value: 11, label: 'Noviembre' },
                { value: 12, label: 'Diciembre' },
              ]}
              label="Mes"
              placeholder="Filtrar por mes"
              className="w-full mb-4"
            />
          )}
        />
        <div className="flex items-center w-fit gap-2">
          <Button onClick={handleSubmit}>Buscar</Button>
          <Button
            color="bg-white border border-primary text-primary"
            onClick={() => {
              form.setValue('departamento', '');
              form.setValue('provincia', '');
              form.setValue('distrito', '');
              form.setValue('año', '');
              form.setValue('mes', '');
              setParams('');
              refetchConvenios();
            }}
          >
            Limpiar
          </Button>
        </div>
      </div>
      <Table
        columns={[
          {
            Header: 'Descripción',
            accessor: 'descripcion_convenio',
            canFilter: false,
            width: window.outerWidth * 0.63,
          },
          {
            Header: 'Ver documento',
            canFilter: false,
            Cell: ({ row }: any) => (
              <div className="flex items-center w-full">
                {row.original.url_documento_convenio === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <div className="flex items-center">
                    <Button
                      onClick={() =>
                        window.open(
                          row.original.url_documento_convenio,
                          '_blank'
                        )
                      }
                    >
                      Ver documento
                    </Button>
                  </div>
                )}
              </div>
            ),
            width: window.innerWidth * 0.2,
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
          Ocurrió un error al cargar los convenios
        </span>
      ) : (
        <span className="text-blue-500">Cargando convenios...</span>
      )}
    </div>
  );
};

export default Convenios;
