import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ openMenu, setOpenMenu }: any) => {
  return (
    <div className="flex flex-col  bg-primary p-8 sm:py-10 sm:px-20">
      <div className="flex sm:flex-row flex-col justify-between gap-4">
        <div className="flex items-center sm:h-28">
          <img src="/images/footer/logo.svg" alt="logo" className="h-20" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-acto text-xl">Enlaces Rápidos</h2>
          <div className="flex flex-col gap-2 font-lato">
            <Link to="/sobre-nosotros/quienes-somos">
              <span className="text-white">¿Quiénes somos?</span>
            </Link>
            <div
              className="cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="text-white">Servicios</span>
            </div>
            <Link to="/noticias">
              <span className="text-white">Noticias</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-acto text-xl">Contacto</h2>
          <div className="flex flex-col gap-2">
            <span className="text-white">Teléfono: 01 480 1582</span>
            <span className="text-white">
              Correo:
              <a href="mailto:consultas@icl.gob.pe" className="text-white">
                consultas@icl.gob.pe
              </a>
            </span>
            <span className="text-white">
              Dirección: Jr. Conde de Superunda 303, Cercado de Lima, Lima, Perú
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-acto text-xl">Redes Sociales</h2>
          <div className="flex gap-2">
            <Link to="https://www.facebook.com/instcatastraldelima">
              <img src="/images/footer/facebook.svg" alt="facebook" className="h-8" />
            </Link>
            <Link to="https://www.instagram.com/instcatastraldelima/?igshid=YmMyMTA2M2Y%3D">
              <img
                src="/images/footer/instagram.svg"
                alt="instagram"
                className="h-8"
              />
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=969670703">
              <img src="/images/footer/whatsApp.svg" alt="whatsapp" className="h-8" />
            </Link>
            <Link to="https://www.youtube.com/@InstitutoCatastraldeLimaICL">
              <img src="/images/footer/youtube.svg" alt="youtube" className="h-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
