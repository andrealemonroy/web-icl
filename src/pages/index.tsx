import { Key, useState } from 'react';
import { Banner } from '../components/Banner';
import { News } from '../components/News';
import { Button } from '../components/Button';
import { RevealOnScroll } from '../components/Fade';
import { useGetNewsQuery } from '../redux/reduxQuery/news';
import { NewsType, VideoType } from '../utils/types';
import { useGetVideosQuery } from '../redux/reduxQuery/videos';
import { Layout } from '../components/Layout';
import WhatsAppButton from '../components/WhatsappButton';
import { useGetPopupQuery } from '../redux/reduxQuery/popup';
import Modal from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  const { data: popupData } = useGetPopupQuery('autorizado=1&activo=1');
  const [openModal, setOpenModal] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const {
    data: newsData,
    error,
    refetch,
  } = useGetNewsQuery('autorizado=1&activo=1');
  const router = useNavigate();
  const {
    data: videosData,
    error: errorVideos,
    refetch: refetchVideos,
  } = useGetVideosQuery('autorizado=1&activo=1');
  const newsData4 = newsData?.slice(0, 4);
  const videosData4 = videosData?.slice(0, 4);

  const getDriveFileId = (url: string) => {
    const match = url?.match(/file\/d\/([^/]+)/);
    return match ? match[0] : '';
  };

  const [isClicked, setIsClicked] = useState(null);

  const handleImageClick = (index: any) => {
    setIsClicked(index);
  };

  const arrayBufferToBase64 = (buffer: any) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b: any) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  const bufferImageToImage = (buffer: any) => {
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = arrayBufferToBase64(buffer.data);
    return base64Flag + imageStr;
  };

  const validPopup = popupData?.filter((popup: any) => {
    const today = new Date();
    const startDate = new Date(popup.fecha_inicial);
    const endDate = new Date(popup.fecha_final);
    return today >= startDate && today <= endDate;
  });

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Inicio - Instituto Catastral de Lima</title>
        <meta
          name="description"
          content="Descubre cómo el Instituto Catastral de Lima promueve el desarrollo urbano sostenible y planificado en la ciudad. Información sobre servicios, proyectos y más."
        />
        <meta
          property="og:title"
          content="Inicio - Instituto Catastral de Lima"
        />
        <meta
          property="og:description"
          content="Descubre cómo el Instituto Catastral de Lima promueve el desarrollo urbano sostenible y planificado en la ciudad. Información sobre servicios, proyectos y más."
        />
        <meta
          property="og:image"
          content="URL de una imagen representativa de tu página"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Puedes añadir más meta tags según sea necesario */}
      </Helmet>
      <Layout setOpenMenu={setOpenMenu} openMenu={openMenu}>
        <Banner
          setOpenMenu={setOpenMenu}
          slides={[
            {
              id: 0,
              titleFirst: 'Dando forma a la',
              titleSecond: 'Lima del mañana',
              description:
                'Tu aliado en la gestión catastral y territorial, facilitando un desarrollo urbano sostenible y planificado.',
              image: '/images/pagina-1/banner-1.webp',
              buttonText: 'Accede a nuestros servicios',
              link: '/#servicios',
              background: 'bg-primary',
              align: 'text-left',
            },
            {
              id: 1,
              titleFirst: 'Un equipo',
              titleSecond: 'comprometido',
              description:
                'Nuestro equipo: pasión y compromiso en cada paso hacia el futuro de Lima. ',
              image: '/images/pagina-1/banner-2.webp',
              buttonText: 'Conoce a nuestro equipo',
              background: 'bg-primary',
              align: 'text-left',
              link: '/sobre-nosotros/funcionarios',
            },
            {
              id: 2,
              titleFirst: 'Convenios',
              titleSecond: 'Institucionales:',
              description:
                'Alianzas estratégicas para un desarrollo responsable',
              image: '/images/pagina-1/banner-3.webp',
              buttonText: 'Ver Convenios',
              background: 'bg-primary',
              align: 'text-left',
              link: '/marco-legal/convenios-institucionales',
            },
            {
              id: 3,
              titleFirst: 'Capacitaciones del',
              titleSecond: 'ICL',
              description:
                'Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades.',
              image: '/images/pagina-1/banner-4.webp',
              buttonText: 'Ver Capacitaciones',
              background: 'bg-primary',
              align: 'text-left',
              link: '/icl-capacitaciones',
            },
            {
              id: 4,
              titleFirst: 'Juntos construimos',
              titleSecond: 'un mañana mejor',
              description:
                'Nuestra misión: Transformar el futuro a través de una gestión territorial sólida.',
              image: '/images/pagina-1/banner-5.webp',
              buttonText: 'Ver Recursos',
              background: 'bg-primary',
              align: 'text-left',
              link: '/#recursos',
            },
          ]}
        />

        <div className={`${openMenu ? 'hidden' : 'block'}`}>
          <div className="py-12 md:pt-20 md:pb-8 sm:px-20 px-8 overflow-hidden">
            <div className="lg:flex items-start">
              {/* Left content */}
              <div className="flex-1 mb-12 lg:mb-0">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-acto font-extrabold text-primary mb-2">
                    Bienvenido al Instituto Catastral de Lima
                  </h2>
                  <div className="text-black space-y-3 mt-4">
                    <Link to="/bienvenida">
                      <div className="relative mb-4">
                        <img
                          src="/images/pagina-1/bienvenida.jpeg"
                          alt="Bienvenida"
                          width={600} // Especifica el ancho deseado
                          height={500} // Especifica el alto deseado
                          className="rounded-md"
                        />
                      </div>
                      <span className="text-white bg-primary px-4 py-2 rounded-md font-lato font-bold text-lg">
                        Ver más
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Right content */}
              <div className="lg:w-[720px] lg:ml-12 xl:ml-20 lg:mt-12 2xl:w-[1020px] 2xl:mt-12">
                <div className="grid sm:grid-cols-2 gap-4 space-y-4">
                  {/* Host */}
                  <div className="flex items-start">
                    <Link
                      to="https://sit.icl.gob.pe/conoce_lima/"
                      target="_blank"
                    >
                      <div className="flex gap-4 items-center ">
                        <img
                          src="/images/pagina-1/recursos/conoce-lima.svg"
                          width={100}
                          height={100}
                          alt="Conoce Lima"
                          className="rounded-md"
                        />
                        <div className="text-lg font-lato font-extrabold text-primary">
                          Conoce Lima
                        </div>
                      </div>
                      {/* <div className="text-slate-400 mb-4">
                        Permite a los usuarios obtener detalles específicos
                        sobre propiedades en Lima, como ubicación y dimensiones.
                      </div>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://sit.icl.gob.pe/conoce_lima/',
                            '_blank'
                          )
                        }
                      >
                        Realizar Consulta
                      </Button> */}
                    </Link>
                  </div>
                  {/* Host */}
                  <div className="flex items-start">
                    <Link
                      to="https://sit.icl.gob.pe/appconsulta/"
                      target="_blank"
                    >
                      <div className="flex gap-4 items-center ">
                        <img
                          src="/images/pagina-1/recursos/consultaCatastral.svg"
                          width={100}
                          height={100}
                          alt="Conoce Lima"
                          className="rounded-md"
                        />
                        <div className="text-lg font-lato font-extrabold text-primary">
                          Consulta Catastral
                        </div>
                      </div>
                      {/* <div className="text-slate-400 mb-4">
                        Permite a los usuarios obtener detalles específicos
                        sobre propiedades en Lima, como ubicación y dimensiones.
                      </div>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://sit.icl.gob.pe/conoce_lima/',
                            '_blank'
                          )
                        }
                      >
                        Realizar Consulta
                      </Button> */}
                    </Link>
                  </div>
                  {/* Host */}
                  <div className="flex items-start">
                    <Link to="https://sit.icl.gob.pe/sit/" target="_blank">
                      <div className="flex gap-4 items-center ">
                        <img
                          src="/images/pagina-1/recursos/sistemaInformacion.svg"
                          width={100}
                          height={100}
                          alt="Conoce Lima"
                          className="rounded-md"
                        />
                        <div className="text-lg font-lato font-extrabold text-primary">
                          Sistema de información territorial
                        </div>
                      </div>
                      {/* <div className="text-slate-400 mb-4">
                        Permite a los usuarios obtener detalles específicos
                        sobre propiedades en Lima, como ubicación y dimensiones.
                      </div>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://sit.icl.gob.pe/conoce_lima/',
                            '_blank'
                          )
                        }
                      >
                        Realizar Consulta
                      </Button> */}
                    </Link>
                  </div>
                  <div className="flex items-start">
                    <Link
                      to="https://sit.icl.gob.pe/portafolio/"
                      target="_blank"
                    >
                      <div className="flex gap-4 items-center ">
                        <img
                          src="/images/pagina-1/recursos/portafolioAplicaciones.svg"
                          width={100}
                          height={100}
                          alt="Conoce Lima"
                          className="rounded-md"
                        />
                        <div className="text-lg font-lato font-extrabold text-primary">
                          Aplicaciones GIS
                        </div>
                      </div>
                      {/* <div className="text-slate-400 mb-4">
                        Permite a los usuarios obtener detalles específicos
                        sobre propiedades en Lima, como ubicación y dimensiones.
                      </div>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://sit.icl.gob.pe/conoce_lima/',
                            '_blank'
                          )
                        }
                      >
                        Realizar Consulta
                      </Button> */}
                    </Link>
                  </div>
                  <div className="flex items-start">
                    <Link
                      to="https://icl.gob.pe/mesa/administrado/login.aspx"
                      target="_blank"
                    >
                      <div className="flex gap-4 items-center ">
                        <img
                          src="/images/pagina-1/recursos/mesaDePartes.svg"
                          width={100}
                          height={100}
                          alt="Conoce Lima"
                          className="rounded-md"
                        />
                        <div className="text-lg font-lato font-extrabold text-primary">
                          Mesa de Partes
                        </div>
                      </div>
                      {/* <div className="text-slate-400 mb-4">
                        Permite a los usuarios obtener detalles específicos
                        sobre propiedades en Lima, como ubicación y dimensiones.
                      </div>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://sit.icl.gob.pe/conoce_lima/',
                            '_blank'
                          )
                        }
                      >
                        Realizar Consulta
                      </Button> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RevealOnScroll>
            <div className="text-center py-12 sm:w-10/12 w-11/12 mx-auto">
              <h2 className="font-acto text-primary sm:text-[3vw] text-3xl">
                Noticias y eventos
              </h2>
              <p className="font-lato mt-4 sm:text-[1.3vw] text-lg">
                Mantente al día con las últimas noticias y eventos del Instituto
                Catastral de Lima.
              </p>
              <div className="flex flex-col gap-6 justify-center mt-8 sm:w-[80vw] 2xl:w-[60vw] mx-auto">
                {newsData4?.map(
                  (news: NewsType, index: Key | null | undefined) => (
                    <News key={index} {...news} />
                  )
                )}
              </div>
              <div className="mt-8 w-60 mx-auto">
                <Button onClick={() => router('/noticias')}>
                  Ver todas las noticias
                </Button>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="py-12 sm:w-10/12 mx-auto flex flex-col justify-center items-center gap-20 text-left w-11/12">
              <div className="text-center">
                <h2 className="font-acto text-primary sm:text-[3vw] text-3xl">
                  Recursos
                </h2>
                <p className="font-lato mt-4 sm:text-[1.3vw] text-lg">
                  Mantente al día con las últimas noticias y eventos del
                  Instituto Catastral de Lima. Desde desarrollos recientes hasta
                  seminarios y talleres, aquí encontrarás todo lo que necesitas
                  saber para estar al tanto de nuestras actividades.
                </p>
              </div>
              <div className="flex  sm:flex-row flex-col gap-8 w-full">
                <div className="sm:w-1/4 flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center justify-center sm:h-28 h-full w-full">
                    <img
                      src="/images/pagina-1/levantamientoCatastral.svg"
                      width={127}
                      height={120}
                      alt="Mapa"
                      className="h-full"
                    />
                  </div>
                  <h3 className="font-acto text-primary sm:text-[1.5vw] text-xl 2xl:text-[1.3vw] leading-tight h-20">
                    Manual de Levantamiento Catastral
                  </h3>
                  <Button
                    onClick={() =>
                      router('/recursos/manual-de-levantamiento-catastral')
                    }
                  >
                    Ir a Manual
                  </Button>
                </div>
                <div className="sm:w-1/4 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center sm:h-28 h-full w-full">
                    <img
                      src="/images/pagina-1/covid-19.svg"
                      width={127}
                      height={120}
                      alt="Mapa"
                      className="h-full"
                    />
                  </div>
                  <h3 className="font-acto text-primary sm:text-[1.5vw] text-xl 2xl:text-[1.3vw] leading-tight h-20">
                    Plan para vigilancia, prevención y control de Covid-19
                  </h3>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://icl.gob.pe/wp-content/uploads/2022/10/Resolucion-No-035-2022-GG-ICL.pdf',
                        '_blank'
                      )
                    }
                  >
                    Ir a Plan
                  </Button>
                </div>
                <div className="sm:w-1/4 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center sm:h-28 h-full w-full">
                    <img
                      src="/images/pagina-1/sistemaNacionalControl.svg"
                      width={127}
                      height={120}
                      alt="Mapa"
                      className="h-full"
                    />
                  </div>
                  <h3 className="font-acto text-primary sm:text-[1.5vw] text-xl 2xl:text-[1.3vw] leading-tight h-20">
                    Atención de denuncias ciudadanas por el Sistema Nacional de
                    Control
                  </h3>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://icl.gob.pe/wp-content/uploads/2021/12/Directriz_Atencion_Denuncias_Ciudadanas_por_el_Sistema_Nacional_Control_color.pdf',
                        '_blank'
                      )
                    }
                  >
                    Ir a Portal Denuncias
                  </Button>
                </div>
                <div className="sm:w-1/4 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center sm:h-28 h-full w-full">
                    <img
                      src="/images/pagina-1/libroReclamaciones.svg"
                      width={220}
                      height={120}
                      alt="Mapa"
                      className="h-full"
                    />
                  </div>
                  <h3 className="font-acto text-primary sm:text-[1.5vw] text-xl 2xl:text-[1.3vw] leading-tight h-20">
                    Libro de Reclamaciones Digital
                  </h3>
                  <div className="w-full">
                    <Button
                      onClick={() =>
                        window.open(
                          'https://reclamos.servicios.gob.pe/?institution_id=390'
                        )
                      }
                    >
                      Ir a Libro de Reclamaciones
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="text-center py-12 sm:w-10/12 mx-auto">
              <h2 className="font-acto text-primary sm:text-[3vw] text-3xl">
                Videoteca
              </h2>
              <p className="font-lato mt-4 sm:text-[1.3vw] text-lg">
                Mantente al día con las últimas noticias y eventos del Instituto
                Catastral de Lima. Desde desarrollos recientes hasta seminarios
                y talleres, aquí encontrarás todo lo que necesitas saber para
                estar al tanto de nuestras actividades.
              </p>
              <div className="flex sm:flex-row flex-col gap-4 justify-center items-center mt-4">
                {videosData4?.map(
                  (video: VideoType, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4  sm:w-[20vw] sm:h-[280px] w-[90vw] h-[200px]"
                    >
                      <div className="flex items-center justify-center h-full relative">
                        {index !== isClicked && (
                          <div
                            className="h-full w-full cursor-pointer bg-cover bg-center flex items-center justify-center rounded-md relative"
                            style={{
                              backgroundImage: `url(${video.url_imagen_video})`,
                            }}
                            onClick={() => handleImageClick(index)}
                          >
                            <img
                              src="/images/pagina-1/play.svg"
                              alt="Play"
                              width={100}
                              height={100}
                              className="z-10 absolute cursor-pointer top-[50px] left-[100px]"
                            />
                          </div>
                        )}
                        <iframe
                          src={`https://drive.google.com/${getDriveFileId(
                            video.url_video
                          )}/preview`}
                          allow="autoplay"
                          allowFullScreen
                          className={`w-full h-full ${
                            isClicked ? '' : 'hidden'
                          }`}
                        ></iframe>
                      </div>

                      <h3 className="font-acto text-primary text-xl h-[120px]">
                        {video.titulo_video}
                      </h3>
                    </div>
                  )
                )}
              </div>
              <div className="w-60 mx-auto">
                <Link
                  to="https://www.youtube.com/@InstitutoCatastraldeLimaICL?themeRefresh=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Ir al canal de videos</Button>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Layout>
      <WhatsAppButton />
      {/* {popupData?.length > 0 &&
        popupData?.map((popup: any, index: number) => (
          <Modal
            key={index}
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title=""
          >
            <div className="mb-4">
              <img
                src={bufferImageToImage(popup.contenido_documento)}
                alt="popup"
                className="w-full h-full max-h-[80vh]"
              />
            </div>
          </Modal>
        ))} */}
      {validPopup?.length > 0 &&
        validPopup?.map((popup: any, index: number) => (
          <Modal
            key={index}
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title=""
          >
            <div
              className="mb-4 cursor-pointer"
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=51920046149&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20capacitaci%C3%B3n%20del%20ICL',
                  '_blank'
                )
              }
            >
              <img
                src={bufferImageToImage(popup.contenido_documento)}
                alt="popup"
                className="w-full h-full"
              />
            </div>
          </Modal>
        ))}
    </div>
  );
}
