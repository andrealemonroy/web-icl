import React, { FC } from 'react';

interface ItemInfoProps {
  id: string;
  denominacion_servicio: string;
  monto_uit: string;
  monto_soles: string;
  numero_servicio: string;
  sub_nivel_servicio: string;
}

interface ItemListProps {
  selected: any;
  setSelected: any;
  info: ItemInfoProps;
}

export const ItemList: FC<ItemListProps> = ({
  selected,
  setSelected,
  info,
}) => {
  return (
    <div>
      <div
        className={`flex justify-between items-center p-6 cursor-pointer w-full border border-blue px-6 h-16 font-lato text-base  
        ${
          selected?.find((item: any) => item.id === info.id)
            ? 'bg-lightBlue'
            : 'bg-white '
        }
        `}
        onClick={() => {
          setSelected((prev: any) => {
            const index = prev.findIndex((item: any) => item.id === info.id);
            if (index !== -1) {
              return prev.filter((item: any) => item.id !== info.id);
            } else {
              return [...prev, info];
            }
          });
        }}
      >
        <div className="flex flex-col w-7/12">
          <span className="text-md font-lato-bold">
            {info.denominacion_servicio}
          </span>
        </div>
        <div className="flex justify-end w-3/12">
          {parseFloat(info.monto_soles) > 0 && (
            <span className="text-md font-medium font-lato-bold">
              S/ {info.monto_soles}
            </span>
          )}
        </div>
      </div>
      {/* <div>
        {' '}
        <p className="text-sm font-lato text-gray-400 px-6">Requisitos</p>
        <div className="flex justify-between items-center p-6 cursor-pointer w-full border border-blue px-6 h-16 font-lato text-base bg-white">
          <div className="flex flex-col w-7/12">
            <span className="text-md font-lato-bold">
              {info.denominacion_servicio}
            </span>
          </div>
          <div className="flex justify-end w-3/12">
            {parseFloat(info.monto_soles) > 0 && (
              <span className="text-md font-medium font-lato-bold">
                S/ {info.monto_soles}
              </span>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};
