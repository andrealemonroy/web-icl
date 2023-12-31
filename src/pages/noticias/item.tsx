import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { useLocation } from 'react-router-dom';
import { useGetNewsQuery } from '../../redux/reduxQuery/news';
import { useEffect, useState } from 'react';
import { returnImageFromBuffer } from '../../utils/showImageBuffer';

export default function Noticia() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { data: allNews } = useGetNewsQuery('');
  const data = allNews?.find((item: any) => item.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <SectionBanner
        caption="Noticias"
        title="Noticias"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
      />
      <div className="sm:px-20 py-12 px-8">
        <p className="font-lato text-md">{data?.fecha_publicacion}</p>
        <h3 className="font-acto text-4xl text-primary sm:w-2/3 mb-8">
          {data?.titulo_noticia}
        </h3>
        <div className="flex justify-between items-center">
          <img
            src={data?.url_imagen_portada}
            alt="news"
            width={500}
            height={500}
          />
        </div>
        <p className="font-lato text-md my-8">{data?.descripcion_noticia}</p>
        <div className="flex sm:flex-row flex-col justify-center sm:justify-end gap-4">
          {data?.imagenes?.map((image: any) => (
            <div className="h-fit relative sm:w-1/3" key={image.id}>
              <img
                src={
                  image.contenido_documento
                    ? returnImageFromBuffer(image.contenido_documento)
                    : image.url_documento
                }
                alt="news"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}