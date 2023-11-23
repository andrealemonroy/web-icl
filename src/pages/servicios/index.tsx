import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useGetServicioQuery } from '../../redux/reduxQuery/servicios';
import { List } from '../../components/List';
import RadioButton from '../../components/Radio';

export default function Servicios({
  id,
}: {
  id: string | string[] | undefined;
}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [secondStep, setSecondStep] = React.useState(false);
  const [thirdStep, setThirdStep] = React.useState(false);
  const form = useForm();
  const idUpperCased = id?.toString().toUpperCase();
  const [loaded, setLoaded] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<any>([]);
  const [error, setError] = React.useState('');
  const [total, setTotal] = React.useState(0);
  const [resultado, setResultado] = React.useState(false);

  const {
    data: dataServicio,
    error: errorServicio,
    refetch: refetchServicio,
  } = useGetServicioQuery(idUpperCased);
  const dataServicioFiltered = dataServicio?.filter(
    (item: any) =>
      item.flag_seleccion === '1' &&
      item.autorizado === '1' &&
      item.activo === '1'
  );
  const [dataFiltered, setDataFiltered] = React.useState(dataServicioFiltered);

  React.useEffect(() => {
    setLoaded(true);
    InitialProcess();
  }, [id]);

  const InitialProcess = () => {
    form.setValue('metraje', '');
    setError('');
    setDataFiltered(dataServicioFiltered);
    setSelectedItems([]);
    setTotal(0);
    setResultado(false);
    setSecondStep(false);
    setThirdStep(false);
  };

  const handleCalculate = form.handleSubmit((data) => {
    try {
      setTotal(0);
      Promise.all(
        selectedItems.map((item: any) => {
          axios
            .get(process.env.REACT_APP_API_URL + '/calculoservicios', {
              params: {
                metraje: data.metraje,
                flag_construccion: data.construido.toUpperCase(),
                tipo_servicio: idUpperCased,
                numero_servicio: item.numero_servicio,
                sub_nivel_servicio: item.sub_nivel_servicio,
                periodo_servicio: item.periodo_servicio,
              },
            })
            .then((res) => {
              const total = res.data.valor_servicio;
              setTotal((prev) => prev + parseFloat(total));
              setResultado(true);
            })
            .catch((err: any) => console.log(err));
        })
      );
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (dataServicio) {
      setDataFiltered(dataServicio);
    }
  }, [dataServicio]);

  return (
    <>
      <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
        <SectionBanner
          caption="Servicios"
          {...(idUpperCased === 'TUPA' ? firstObj : secondObj)}
          image={`/images/servicios/${idUpperCased}.svg`}
        />
        {!resultado && (
          <div className="px-8 sm:px-20 py-12">
            <div className="flex items-center">
              <div>
                <h3 className="font-acto text-4xl text-primary">
                  Calculadora del servicio {idUpperCased}
                </h3>
                <p className="mt-4 ml-0.5">
                  Calcula el costo de los servicios que deseas solicitar
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-8 items-center mt-4">
              <div className="flex sm:flex-row flex-col gap-4 items-center w-full">
                <span className="font-lato-bold text-4xl leading-tight text-primary border-2 rounded-full w-16 h-16 text-center flex justify-center items-center">
                  1
                </span>
                <Input
                  labelText="¿Cuál es el metraje del predio?"
                  placeholderText="Ej: 100"
                  type="number"
                  {...form.register('metraje')}
                  onChange={(e) => {
                    const value = e.target.value;
                    const regex = /^[0-9\b]+$/;
                    if (value === '' || regex.test(value)) {
                      form.setValue('metraje', value);
                    }
                  }}
                />
                {!secondStep && !thirdStep && (
                  <div className="flex gap-4 justify-end">
                    <div className="flex items-center w-40 sm:mt-4">
                      <Button onClick={() => setSecondStep(true)}>
                        <p className="font-lato-bold text-md text-white">
                          Siguiente
                        </p>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {secondStep && (
                <div className="flex sm:flex-row flex-col gap-4 items-center w-full">
                  <span className="font-lato-bold text-4xl leading-tight text-primary border-2 rounded-full w-16 h-16 text-center flex justify-center items-center">
                    2
                  </span>
                  <div className="flex flex-col">
                    <p className="font-lato-bold text-md text-primary">
                      ¿Está construído?
                    </p>
                    <div className="flex sm:flex-row flex-col gap-4 items-center">
                      <div className="flex gap-4 items-center mt-4">
                        <RadioButton
                          id="si"
                          value="si"
                          label="Sí"
                          name="construido"
                          onChange={(e) =>
                            form.setValue('construido', e.target.value)
                          }
                        />
                        <RadioButton
                          id="no"
                          value="no"
                          label="No"
                          name="construido"
                          onChange={(e) =>
                            form.setValue('construido', e.target.value)
                          }
                        />
                      </div>
                      {secondStep && !thirdStep && (
                        <div className="w-40 ml-4">
                          <Button onClick={() => setThirdStep(true)}>
                            <p className="font-lato-bold text-md text-white">
                              Siguiente
                            </p>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {thirdStep && (
                <div className="ml-auto w-40">
                  <Button
                    onClick={handleCalculate}
                    color={`${
                      selectedItems.length > 0
                        ? 'bg-primary text-white border border-primary'
                        : 'bg-slate-400 text-white cursor-not-allowed'
                    }`}
                  >
                    <p className="font-lato-bold text-md text-white">
                      Calcular total
                    </p>
                  </Button>
                </div>
              )}
            </div>

            {thirdStep && (
              <div>
                {selectedItems.length > 0 && (
                  <div>
                    {selectedItems.length > 0 && (
                      <div>
                        <p className="font-lato-bold text-md text-primary">
                          Servicios seleccionados
                        </p>
                        <div className="grid sm:grid-cols-4 gap-6">
                          {selectedItems.map((item: any) => (
                            <div key={item.id} className="w-full">
                              <div className="grid col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-lg rounded-md border border-primary overflow-hidden min-h-[260px]">
                                <div className="flex flex-col justify-between">
                                  {/* Card Content */}
                                  <div className="grow flex flex-col p-5 pb-0">
                                    {/* Card body */}
                                    <div className="grow">
                                      {/* Header */}
                                      <header className="mb-3">
                                        <h3 className="text-lg text-primary  font-semibold">
                                          {item.denominacion_servicio}
                                        </h3>
                                      </header>
                                      <div className="flex flex-wrap justify-between items-center mb-4">
                                        <div className="flex items-center space-x-2 mr-2">
                                          {item.requisitos_servicio != '' && (
                                            <p className="text-md text-primary  font-semibold">
                                              Requisitos:
                                            </p>
                                          )}
                                        </div>
                                        <div>
                                          <p className="text-xs text-primary">
                                            Costo:
                                          </p>
                                          <div className="inline-flex text-md font-medium bg-emerald-100  text-emerald-600  rounded-full text-center px-2 py-0.5">
                                            {/* S/{info.monto_soles} */}
                                            {item.monto_soles == '0' &&
                                            item.sub_nivel_servicio == '0'
                                              ? 'Por calcular'
                                              : 'S/' + item.monto_soles}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mb-3">
                                        <p className="text-sm text-slate-400 dark:text-slate-500">
                                          {item.requisitos_servicio}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Card footer */}
                                  <div className="p-5 pt-0">
                                    <Button
                                      onClick={() => {
                                        setSelectedItems((prev: any) =>
                                          prev.filter(
                                            (itemSelected: any) =>
                                              itemSelected.id !== item.id
                                          )
                                        );
                                      }}
                                    >
                                      Remover servicio
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <p className="font-lato-bold text-md text-primary mt-4">
                  Selecciona los servicios que deseas solicitar
                </p>
                {/* List component */}
                <List
                  items={dataFiltered}
                  setItems={setDataFiltered}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  total={total}
                />
              </div>
            )}
          </div>
        )}

        {resultado && (
          <div className="px-8 sm:px-20 py-12">
            <div className="flex items-center">
              <div>
                <h3 className="font-acto text-4xl text-primary">
                  Resultado del cálculo
                </h3>
                <p className="mt-4 ml-0.5">
                  El metraje del predio es de:
                  <span className="font-lato-bold text-2xl text-primary">
                    {form.getValues('metraje')} m2
                  </span>
                </p>
                <p className="mt-4 ml-0.5">
                  El predio se encuentra:{' '}
                  <span className="font-lato-bold text-2xl text-primary">
                    {form.getValues('construido') === 'si'
                      ? 'Construído'
                      : 'Sin construir'}
                  </span>
                </p>
                <p className="mt-4 ml-0.5">
                  Los servicios solicitados son los siguientes:
                </p>
                <p className="mt-4 ml-0.5">
                  El costo total de los servicios es de:{' '}
                  <span className="font-lato-bold text-2xl text-primary">
                    S/ {total.toFixed(2)}
                  </span>
                </p>
                <div className="mt-4">
                  <Button
                    onClick={() => {
                      InitialProcess();
                    }}
                  >
                    <p className="font-lato-bold text-md text-white">
                      Calcular otro servicio
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

const firstObj = {
  id: 'tupa',
  title: 'Resumen del Texto Único de Procedimiento Administrativo (TUPA)',
  description:
    'Descubre y calcula fácilmente los procedimientos administrativos del Instituto Catastral de Lima con nuestro servicio TUPA.',
  image: 'https://picsum.photos/200/300',
};

const secondObj = {
  id: 'tusne',
  title: 'Resumen del Texto Único de Servicios No Exclusivos – TUSNE',
  description:
    'Explora la variedad de servicios no exclusivos ofrecidos por el Instituto Catastral de Lima a través de nuestro portal TUSNE.',
  image: 'https://picsum.photos/200/300',
};
