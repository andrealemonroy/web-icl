import React, { useEffect } from 'react';

import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';

import { useGetServicioQuery } from '../../redux/reduxQuery/servicios';
import { Table } from '../../components/Table';
import { useForm } from 'react-hook-form';

export default function Servicios({
  id,
}: {
  id: string | string[] | undefined;
}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const idUpperCased = id?.toString().toUpperCase();
  const [selectedItems, setSelectedItems] = React.useState<any>([]);
  const [resultado, setResultado] = React.useState(0);
  const form = useForm();

  const {
    data: dataServicio,
    error: errorServicio,
    refetch: refetchServicio,
  } = useGetServicioQuery(idUpperCased);
  const dataServicioFiltered = dataServicio?.filter(
    (item: any) => item.autorizado === '1' && item.activo === '1'
  );

  React.useEffect(() => {
    InitialProcess();
  }, [id]);

  const InitialProcess = () => {
    setSelectedItems([]);
    setResultado(0);
  };

  const calculateTotalCostSelected = () => {
    let total = 0;
    selectedItems.forEach((item: any) => {
      // Ensure item.monto_soles is a string representing a number
      const amount = parseFloat(item.monto_soles.replace(/,/g, '')); // remove commas if any
      if (!isNaN(amount)) {
        total += amount;
      } else {
        console.error('Invalid number:', item.monto_soles);
      }
    });

    // To handle floating point precision, round to a fixed number of decimal places
    total = parseFloat(total.toFixed(2)); // Adjust the number of decimal places as needed
    setResultado(total);
  };

  useEffect(() => {
    calculateTotalCostSelected();
  }, [selectedItems]);

  return (
    <>
      <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
        <SectionBanner
          caption="Servicios"
          {...(idUpperCased === 'TUPA' ? firstObj : secondObj)}
          image={`/images/servicios/${idUpperCased}.svg`}
        />

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
            <div className="ml-auto p-4 bg-blue text-white font-lato-bold rounded-md">
              Costo total: S/ {resultado ? resultado : '0.00'}
            </div>
          </div>
          {dataServicioFiltered && (
            <div className="mt-4">
              <Table
                data={dataServicioFiltered}
                columns={[
                  {
                    Header: 'N°',
                    accessor: 'numero_servicio',
                    width: window.innerWidth < 780 ? 50 : 100,
                    Cell: ({ row }: any) => {
                      if (row.original.sub_nivel_servicio == 0) {
                        return (
                          <div className="flex justify-center items-center">
                            <p className="text-center">
                              {row.original.numero_servicio}
                            </p>
                          </div>
                        );
                      }
                    },
                  },
                  {
                    Header: 'Denominación',
                    accessor: 'denominacion_servicio',
                    width:
                      window.innerWidth > 1800 && window.innerWidth < 2100
                        ? window.innerWidth / 2
                        : window.innerWidth < 780
                        ? 100
                        : window.innerWidth / 2,
                    Cell: ({ row }: any) => {
                      if (row.original.sub_nivel_servicio != 0) {
                        return (
                          <div className="flex justify-center items-center pl-10">
                            <p className="text-left">
                              {row.original.denominacion_servicio}
                            </p>
                          </div>
                        );
                      } else {
                        return (
                          <div className="flex justify-center items-center">
                            <p className="text-left">
                              {row.original.denominacion_servicio}
                            </p>
                          </div>
                        );
                      }
                    },
                  },
                  {
                    Header: 'Costo(S/)',
                    accessor: 'monto_soles',
                    width:
                      window.innerWidth > 1800 && window.innerWidth < 2100
                        ? window.innerWidth / 5
                        : window.innerWidth < 780
                        ? 100
                        : window.innerWidth > 2200
                        ? window.innerWidth / 3.5
                        : window.innerWidth / 8,
                    Cell: ({ row }: any) => {
                      if (
                        (row.original.sub_nivel_servicio != 0 &&
                          row.original.monto_soles == 0) ||
                        (row.original.sub_nivel_servicio == 0 &&
                          row.original.monto_soles != 0) ||
                        (row.original.sub_nivel_servicio != 0 &&
                          row.original.monto_soles != 0)
                      ) {
                        return (
                          <div className="flex justify-center items-center">
                            <p className="text-center">
                              {row.original.monto_soles}
                            </p>
                          </div>
                        );
                      }
                    },
                  },
                  {
                    Header: 'Seleccionar',
                    accessor: 'id',
                    width: window.innerWidth < 780 ? 100 : 200,
                    Cell: ({ row }: any) => {
                      if (
                        (row.original.sub_nivel_servicio != 0 &&
                          row.original.monto_soles == 0) ||
                        (row.original.sub_nivel_servicio == 0 &&
                          row.original.monto_soles != 0) ||
                        (row.original.sub_nivel_servicio != 0 &&
                          row.original.monto_soles != 0)
                      ) {
                        return (
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox"
                              checked={
                                selectedItems.filter(
                                  (item: any) => item.id == row.original.id
                                ).length > 0
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedItems([
                                    ...selectedItems,
                                    row.original,
                                  ]);
                                } else {
                                  setSelectedItems(
                                    selectedItems.filter(
                                      (item: any) => item.id != row.original.id
                                    )
                                  );
                                }
                              }}
                            />
                          </label>
                        );
                      }
                    },
                  },
                ]}
              />
            </div>
          )}
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
