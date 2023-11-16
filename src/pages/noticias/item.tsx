import axios from 'axios'; // Assuming you're using axios with react-query
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { useLocation } from 'react-router-dom';
import { useGetNewsQuery } from '../../redux/reduxQuery/news';
import { useState } from 'react';
import { returnImageFromBuffer } from '../../utils/showImageBuffer';

export default function Noticia() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { data: allNews } = useGetNewsQuery('');
  const data = allNews?.find((item: any) => item.id === parseInt(id));
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
          {/* <Image
            src={data?.url_imagen_portada}
            alt="news"
            width={500}
            height={500}
          /> */}
          <img
            src={data?.url_imagen_portada}
            alt="news"
            width={500}
            height={500}
          />
        </div>
        <p className="font-lato text-md my-8">{data?.descripcion_noticia}</p>
        <div className="flex justify-center sm:justify-end gap-4">
          {data?.imagenes?.map((image: any) => (
            <div className="h-96 relative w-1/3" key={image.id}>
              {/* <Image
                src={image.url_imagen}
                alt="news"
                width={500}
                height={500}
              /> */}
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

// This is the function that fetches the news data. It's what you'd typically use with react-query's useQuery hook.
// async function fetchNews() {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/noticias`
//   );
//   return response.data;
// }

// async function fetchNewsImages({ id }: { id: number }) {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/noticias/${id}/imagenes`
//   );
//   return response.data;
// }

// async function getNewsById(id: number) {
//   try {
//     const newsData = await fetchNews();
//     const newsImages = await fetchNewsImages({ id });
//     const news = newsData.find((item: any) => item.id === id);
//     return {
//       ...news,
//       images: newsImages,
//     };
//   } catch (error) {
//     console.error('Error fetching news by ID:', error);
//     return null;
//   }
// }
