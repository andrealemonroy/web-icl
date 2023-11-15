import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectItem } from '../components/ProjectItem';
import { SectionBanner } from '../components/SectionBanner';
import { useGetProyectosQuery } from '../redux/reduxQuery/proyectos';

export default function Proyectos() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { data: projectsData } = useGetProyectosQuery('autorizado=1&activo=1');

  const arrayBufferToBase64 = (buffer: any) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b: any) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  const showImageBuffer = (buffer: any) => {
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = arrayBufferToBase64(buffer.data);
    return base64Flag + imageStr;
  }
  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <SectionBanner
        title="Proyectos"
        caption="Proyectos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
      />
      <div className="flex sm:flex-wrap sm:flex-row flex-col justify-start sm:px-20 px-8 py-12 gap-4 sm:gap-0">
        {projectsData?.map((project: any) => (
          <ProjectItem
            key={project.title}
            image={
              project.contenido_documento
                ? showImageBuffer(project.contenido_documento)
                : project.url_documento
            }
            title={project.title}
            id={project.id}
          />
        ))}
      </div>
    </Layout>
  );
}
