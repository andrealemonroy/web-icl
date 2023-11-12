import React, { FC } from 'react';
import { Button } from './Button';

interface CardInfoProps {
  id: string;
  denominacion_servicio: string;
  monto_uit: string;
  monto_soles: string;
  numero_servicio: string;
  sub_nivel_servicio: string;
  requisitos_servicio: string;
}

interface CardListProps {
  selected: any;
  setSelected: any;
  info: CardInfoProps;
  setItems: any;
}

export const CardList: FC<CardListProps> = ({
  selected,
  setSelected,
  info,
  setItems,
}) => {
  return (
    <div>
      <div className="grid col-span-full sm:col-span-6 xl:col-span-3 bg-white  shadow-lg rounded-md border border-primary overflow-hidden min-h-[260px]">
        <div className="flex flex-col justify-between">
          {/* Card Content */}
          <div className="grow flex flex-col p-5 pb-0">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h3 className="text-lg text-primary  font-semibold">
                  {info.denominacion_servicio}
                </h3>
              </header>
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="flex items-center space-x-2 mr-2">
                  {info.requisitos_servicio != '' && (
                    <p className="text-md text-primary  font-semibold">
                      Requisitos:
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-primary">Costo:</p>
                  <div className="inline-flex text-md font-medium bg-emerald-100  text-emerald-600  rounded-full text-center px-2 py-0.5">
                    {/* S/{info.monto_soles} */}
                    {info.monto_soles == '0' && info.sub_nivel_servicio == '0'
                      ? 'Por calcular'
                      : 'S/' + info.monto_soles}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm text-slate-400 dark:text-slate-500">
                  {info.requisitos_servicio}
                </p>
              </div>
            </div>
          </div>
          {/* Card footer */}
          <div className="p-5 pt-0">
            <Button
              onClick={() => {
                setSelected((prev: any) => {
                  const index = prev.findIndex(
                    (item: any) => item.id === info.id
                  );
                  if (index !== -1) {
                    return prev.filter((item: any) => item.id !== info.id);
                  } else {
                    return [...prev, info];
                  }
                });
                setItems((prev: any) => {
                  const index = prev.findIndex(
                    (item: any) => item.id === info.id
                  );
                  if (index !== -1) {
                    return prev.filter((item: any) => item.id !== info.id);
                  } else {
                    return [...prev, info];
                  }
                });
              }}
            >
              Agregar servicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
