import React from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { useGetProyectoQuery } from '../../redux/reduxQuery/proyectos';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Proyecto() {
  const router = useNavigate();
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split('/')[2];
  const { data: project } = useGetProyectoQuery(id);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <SectionBanner
        title="Proyectos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="Proyectos"
      />
      <div className="flex flex-col items-start justify-center h-full sm:px-20 py-12 px-8">
        <h3 className="text-4xl font-semibold text-left font-acto text-primary mb-4">
          {project.title}
        </h3>
        {/* <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="rounded-md"
        /> */}
        <img src={project.image} alt={project.title} className="rounded-md" width={500} height={500} />

        <div
          className="font-lato my-4 leading-relaxed text-md"
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></div>

        <div className="w-40">
          <Button
            onClick={() => {
              window.open(project.link, '_blank');
            }}
          >
            Ver más
          </Button>
        </div>
      </div>
    </Layout>
  );
}
