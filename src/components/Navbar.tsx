import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: FC<NavbarProps> = ({
  openMenu,
  setOpenMenu,
  setOpenSearch,
}) => {
  const route = useLocation();
  const deleteInRoute = () => {
    const newRoute = route.hash.split('#')[0];
    route.hash = newRoute;
  }
  return (
    <div className="fixed z-50 top-0 w-screen">
      <div className={`${openMenu ? 'hidden' : 'sm:block hidden'}`}>
        <div className="flex justify-between items-center h-[48px] bg-lightBlue text-primary relative shadow-md font-acto sm:px-20 py-2">
          <div className="flex justify-center items-center">
            Inscríbete a nuestros cursos de capacitación{' '}
            <Link to="/icl-capacitaciones">
              <span className="underline ml-1">AQUÍ</span>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p>Síguenos en nuestras redes sociales:</p>
            <div className="flex justify-center items-center gap-2">
              <a
                href="https://www.facebook.com/instcatastraldelima"
                target="_blank"
                className=""
              >
                <img
                  src="/images/redes-sociales/facebook.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/instcatastraldelima/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                className=""
              >
                <img
                  src="/images/redes-sociales/instagram.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.youtube.com/@InstitutoCatastraldeLimaICL"
                target="_blank"
                className=""
              >
                <img
                  src="/images/redes-sociales/youtube.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=969670703"
                target="_blank"
                className=""
              >
                <img
                  src="/images/redes-sociales/whatsapp.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center sm:h-[96px] h-[60px] bg-white text-black relative shadow-md font-acto">
        <div className="flex space-x-4 sm:mx-20 mx-2">
          <div className="my-auto">
            <Link to="/">
              <div
                className="justify-center items-center  text-gray-700 hover:text-gray-900 my-auto w-16 sm:w-40"
                onClick={() => setOpenMenu(false)}
              >
                <img
                  src="/images/institutocatastral.webp"
                  alt="logo"
                  width={172}
                  height={80}
                />
              </div>
            </Link>
          </div>
          <div className="w-0.5 h-14 bg-primary justify-center items-center my-auto"></div>
          <div className="my-auto">
            <div
              className="justify-center items-center  text-gray-700 hover:text-gray-900 my-auto w-16 sm:w-40 cursor-pointer"
              onClick={() =>
                window.open('https://www.munlima.gob.pe/', '_blank')
              }
            >
              <img
                src="/images/munilima.webp"
                alt="logo"
                width={128}
                height={43}
              />
            </div>
          </div>
        </div>
        <div className="flex  h-full">
          <div
            className="my-auto cursor-pointer hidden sm:block w-56"
            onClick={() =>
              window.open(
                'https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13132',
                '_blank'
              )
            }
          >
            <img
              src="/images/portalTransparencia.svg"
              alt="logo"
              width={230}
              height={48}
            />
          </div>
          <div
            className="flex gap-4 cursor-pointer items-center h-full transition-transform duration-300 ease-in-out justify-center w-fit sm:w-[12vw] px-4"
            onClick={() => setOpenSearch(true)}
          >
            <img
              src="/images/pagina-1/Search.svg"
              alt="Buscar"
              width={24}
              height={24}
            />
            <span className="text-lg sm:text-[1.5vw] text-primary font-acto hidden sm:block">
              Buscar
            </span>
          </div>
          <div
            className="flex gap-4 cursor-pointer items-center border-l border-x-[#D9D9D9] h-full transition-transform duration-300 ease-in-out justify-center w-[20vw] sm:w-[12vw] sm:mr-12"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <>
                <svg
                  className="transition-transform duration-300 ease-in-out transform rotate-0"
                  width="27"
                  height="11"
                  viewBox="0 0 27 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="35"
                    y2="1"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                  <line
                    y1="10"
                    x2="35"
                    y2="10"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-lg sm:text-[1.5vw] text-primary font-acto hidden sm:block">
                  Menú
                </span>
              </>
            ) : (
              <div className='flex gap-4' onClick={() => route.hash.includes('#') && deleteInRoute()}>
                <svg
                  className="transition-transform duration-300 ease-in-out transform rotate-90"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.70711"
                    y1="1.29289"
                    x2="25.7071"
                    y2="25.2929"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                  <line
                    x1="1.29289"
                    y1="25.2929"
                    x2="25.2929"
                    y2="1.29289"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-lg sm:text-[1.5vw] text-primary font-acto hidden sm:block">
                  Cerrar
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
