import React, { FC, useEffect } from 'react';
import { ItemList } from './ItemList';
import { Button } from './Button';
import { CardList } from './CardList';

interface Item {
  id: string;
  denominacion_servicio: string;
  monto_uit: string;
  monto_soles: string;
  numero_servicio: string;
  sub_nivel_servicio: string;
  requisitos_servicio: string;
}

interface ListProps {
  items: Item[];
  setItems: any;
  total?: number;
  selectedItems: any;
  setSelectedItems: any;
}

export const List: FC<ListProps> = ({
  items,
  setItems,
  total,
  selectedItems,
  setSelectedItems,
}) => {
  return (
    <div className="grid sm:grid-cols-4 gap-6">
      {items?.map((item) => (
        <CardList
          key={item.id}
          selected={selectedItems}
          setSelected={setSelectedItems}
          info={item}
          setItems={setItems}
          {...item}
        />
      ))}
    </div>
  );
};
