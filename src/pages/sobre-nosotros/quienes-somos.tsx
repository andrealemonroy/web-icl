import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';

export default function QuienesSomos() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <SectionBanner
        title="¿Quiénes Somos?"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="Sobre nosotros"
        titlePage="Instituto Catastral de Lima"
      />
      <div className="sm:px-20 px-8 pb-12">
        <p className="text-justify text-lg font-lato">
          El Instituto Catastral de Lima – ICL es un organismo público
          descentralizado de la Municipalidad Metropolitana de Lima, creado el
          26 de enero de 1989 por medio del Acuerdo de Concejo N°19-1989. Esta
          entidad cuenta con personería jurídica de Derecho Público Interno y
          con autonomía administrativa, económica y técnica.
        </p>
        <br />
        <p className="text-justify text-lg font-lato">
          Así mismo, mediante la Ley N°28294 – Ley que crea el Sistema Nacional
          Integrado de Catastro y su vinculación con el registro de predios, el
          Instituto Catastral de Lima forma parte del Consejo Nacional de
          Catastro del Sistema Nacional Integrado de Información Catastral
          Predial – SNCP.
        </p>
        <p className="text-justify text-lg font-lato">
          Además, según el artículo 7 de la Ordenanza N°1630, el ICL es el ente
          rector del Sistema de Información Territorial de la Municipalidad
          Metropolitana de Lima y responsable de supervisar, evaluar y difundir
          la versión actualizada de la segmentación espacial de las zonas del
          Cercado de Lima en coordinación con las dependencias involucradas en
          el tema. Por ello, todas las dependencias tienen la obligación de
          organizar la información que producen e incorporarla a una plataforma
          con soporte informático de uso compartido por medios virtuales.
        </p>
        <br />
        <h3 className="text-blue font-acto text-3xl">Misión</h3>
        <p className="text-justify text-lg font-lato">
          Ser la entidad pública, modelo de gestión catastral municipal del
          Perú, debido a la calidad de servicio al ciudadano, la promoción de
          las capacidades en los sistemas de información territorial y la
          eficiencia en nuestros procesos.
        </p>
        <br />
        <h3 className="text-blue font-acto text-3xl">Visión</h3>
        <p className="text-justify text-lg font-lato">
          Ser una institución líder y modelo en gestión catastral a nivel
          nacional e internacional que brinde información territorial de
          calidad, actualizada y oportuna de Lima Metropolitana, que interopere
          con todas las entidades públicas y privadas que administran
          información georreferenciada, y que contribuya a una gestión
          transparente en el marco de un gobierno digital al servicio de la
          corporación municipal, de las entidades públicas y privadas y del
          ciudadano en general.
        </p>
        <br />
        <h3 className="text-blue font-acto text-3xl">Valores</h3>
        <p className="text-justify text-lg font-lato">
          Compromiso: Estamos plenamente involucrados en el proceso de
          modernización municipal, capaz de servir de manera oportuna y
          eficiente al contribuyente.
        </p>
        <p className="text-justify text-lg font-lato">
          Confianza: Generamos un ambiente basado en la igualdad jurídica de los
          contribuyentes. Honestidad: Nuestra actuación respeta los principios
          de verdad, justicia y transparencia.
        </p>
      </div>
    </Layout>
  );
}
