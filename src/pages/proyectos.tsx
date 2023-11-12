import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectItem } from '../components/ProjectItem';
import { SectionBanner } from '../components/SectionBanner';
import { useGetProyectosQuery } from '../redux/reduxQuery/proyectos';

export default function Proyectos() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { data: projectsData } = useGetProyectosQuery('autorizado=1&activo=1');
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
            image={project.image}
            title={project.title}
            id={project.id}
          />
        ))}
      </div>
    </Layout>
  );
}
