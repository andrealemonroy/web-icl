import { useState } from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { SectionBanner } from '../components/SectionBanner';
import { useGetCursosQuery } from '../redux/reduxQuery/cursos';
import Loader from '../components/Loader';

export default function ICLCapacitaciones() {
  const [openMenu, setOpenMenu] = useState(false);
  const { data: cursosData } = useGetCursosQuery('autorizado=1&activo=1');

  if (!cursosData) {
    return <Loader />;
  }
  const arrayBufferToBase64 = (buffer: any) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b: any) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };
  const showImageBuffer = (buffer: any) => {
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = arrayBufferToBase64(buffer.data);
    return base64Flag + imageStr;
  };
  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <SectionBanner
        title="Capacitaciones"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="ICL Capacitaciones"
      />
      <div className="sm:px-20 px-8 py-12 flex flex-col gap-8">
        {cursosData?.map((capacitacion: any) => (
          <div
            key={capacitacion.id}
            className="border border-primary rounded-md p-4 flex"
          >
            <img
              src={capacitacion.contenido_documento ? showImageBuffer(capacitacion.contenido_documento) : `/${capacitacion.url_documento}`}
              alt={capacitacion.title}
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-center gap-2 ml-4">
              <h2 className="font-acto text-2xl text-primary">
                {capacitacion.title}
              </h2>
              <p
                className="font-lato text-md"
                dangerouslySetInnerHTML={{ __html: capacitacion.content }}
              ></p>
              <div className="w-80">
                <Button
                  onClick={() => window.open(capacitacion.link, '_blank')}
                >
                  Inscribirme
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
