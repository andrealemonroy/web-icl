import { Layout } from '../../components/Layout';
import React, { useEffect } from 'react';
import { useGetServicioQuery } from '../../redux/reduxQuery/servicios';
import { List } from '../../components/List';
import { SectionBanner } from '../../components/SectionBanner';
import FAQComponent from '../../components/Faq';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import RadioButton from '../../components/Radio';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Servicios({
  id,
}: {
  id: string | string[] | undefined;
}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const router = useNavigate();
  const form = useForm();
  const idUpperCased = id?.toString().toUpperCase();
  const [loaded, setLoaded] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<any>([]);
  const [error, setError] = React.useState('');
  const [total, setTotal] = React.useState(0);
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
  const faqs = [
    {
      question: '¿Cómo puedo solicitar un procedimiento administrativo?',
      answer:
        'Puedes solicitar un procedimiento administrativo a través de nuestra plataforma web.',
    },
    {
      question: '¿Dónde puedo encontrar más información sobre las tasas?',
      answer: 'Puedes encontrar más información sobre las tasas en el TUPA.',
    },
  ];

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
  };

  const handleCalculate = form.handleSubmit((data) => {
    if (data.metraje === '' || data.construido === '') {
      setError('Por favor, complete todos los campos');
      return;
    } else if (selectedItems.length === 0) {
      setError('Por favor, seleccione al menos un servicio');
      return;
    }
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
              console.log(res.data);
              const total = res.data.valor_servicio;
              setTotal((prev) => prev + parseFloat(total));
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
        <div className="px-8 sm:px-20 py-12">
          <h3 className="font-acto text-4xl text-primary">
            Calculadora del servicio {idUpperCased}
          </h3>
          <div className="flex sm:flex-rol flex-col mt-8 gap-8">
            <Input
              labelText="¿Cuál es el metraje?"
              placeholderText="Ej: 100"
              type="text"
              {...form.register('metraje')}
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[0-9\b]+$/;
                if (value === '' || regex.test(value)) {
                  form.setValue('metraje', value);
                }
              }}
            />
            <div>
              <p className="font-lato-bold text-md text-primary">
                ¿Está construído?
              </p>
              <div className="flex gap-4 p-2">
                <RadioButton
                  id="si"
                  value="si"
                  label="Sí"
                  name="construido"
                  onChange={(e) => form.setValue('construido', e.target.value)}
                />
                <RadioButton
                  id="no"
                  value="no"
                  label="No"
                  name="construido"
                  onChange={(e) => form.setValue('construido', e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center w-40 sm:mt-4">
                <Button onClick={handleCalculate}>
                  <p className="font-lato-bold text-md text-white">Calcular</p>
                </Button>
              </div>
              <div className="flex items-center w-40 sm:mt-4">
                <p
                  className="font-lato-bold text-md text-primary cursor-pointer"
                  onClick={InitialProcess}
                >
                  Nueva búsqueda
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:w-40 w-full sm:mt-4 gap-4 bg-blue rounded-md ml-auto">
              <p className="font-lato-bold text-md text-white">Total:</p>
              <p className="font-lato-bold text-lg text-white ">
                S/{total.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {error && (
              <p className="font-lato-bold text-md text-red-500">{error}</p>
            )}
          </div>
          <div>
            {selectedItems.length > 0 && (
              <div>
                <p className="font-lato-bold text-md text-primary">
                  Servicios seleccionados
                </p>
                <div className="grid sm:grid-cols-4 gap-6">
                  {selectedItems.map((item: any) => (
                    <div key={item.id}>
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
                                  <p className="text-xs text-primary">Costo:</p>
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
                                setSelectedItems((prev: any) => {
                                  const index = prev.findIndex(
                                    (item: any) => item.id === item.id
                                  );
                                  if (index !== -1) {
                                    return prev.filter(
                                      (item: any) => item.id !== item.id
                                    );
                                  } else {
                                    return [...prev, item];
                                  }
                                });
                                setTotal((prev) => prev - item.monto_soles);
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
            <p className="font-lato-bold text-md text-primary mt-4">
              Selecciona los servicios que deseas solicitar
            </p>
            <List
              items={dataFiltered}
              setItems={setDataFiltered}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              total={total}
            />
          </div>
        </div>
        <div className="px-8 sm:px-20 py-12">
          <FAQComponent items={faqs} />
        </div>
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
