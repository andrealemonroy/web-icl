import React, { FC } from 'react';
import { Button } from './Button';
import { NewsType } from '../utils/types';
import { useNavigate } from 'react-router-dom';

export const News: FC<NewsType> = ({
  id,
  titulo_noticia,
  descripcion_noticia,
  url_imagen_portada,
  fecha_noticia,
}) => {
  const router = useNavigate();
  const truncatedDescription = descripcion_noticia
    .split(' ')
    .slice(0, 45)
    .join(' ');
  return (
    <div className="sm:flex gap-4 border-2 border-primary rounded-md sm:h-64">
      <div className="h-full w-fit">
        <img
          src={url_imagen_portada}
          alt="news"
          className="rounded-t-sm sm:rounded-tr-none h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between sm:text-left text-center py-2 mr-2">
        <h3 className="font-acto text-primary text-xl">{titulo_noticia}</h3>
        <div>
          <span className="font-lato text-md">{truncatedDescription}</span>
          <span className="text-gray ml-1">... </span>
        </div>
        <p className="text-primary text-xs mt-2">{fecha_noticia}</p>
        <div className="flex justify-center sm:justify-end">
          <div className="mt-2 w-48 mx-auto sm:mx-0">
            <Button
              onClick={() => {
                router(`/noticias/${id}`);
              }}
            >
              Ir a la noticia
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
