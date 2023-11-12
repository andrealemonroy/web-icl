import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';


export default function Objetivos() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <SectionBanner
        title="Objetivos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="Sobre nosotros"
        titlePage="Los objetivos generales del ICL son los siguientes:"
      />
      <div className="sm:px-20 px-8 pb-12">
        <div>
          <div className="flex gap-2 py-2">
            <img
              src="/images/shortArrow.svg"
              width={10}
              height={5}
              alt="Flecha"
            />
            <h3 className="text-primary font-lato text-2xl">
              Objetivo General 1 – OG1:{' '}
            </h3>
          </div>
          <div className="ml-4">
            <p className="text-justify text-lg font-lato mt-2">
              Gestionar adecuadamente el Sistema de Información Territorial
              necesario para el proceso de toma de decisiones de la Corporación
              Municipal y de las entidades públicas y privadas que lo requieran.
            </p>
            <h4 className="text-blue font-lato text-lg my-4">
              Objetivos Específicos del OG1:
            </h4>
            <ul className="list-disc list-inside">
              <li className="text-justify text-lg font-lato mb-2">
                Contar con un Sistema de Información Territorial que suministre
                información permanente.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Modernizar el Sistema de Información Catastral Predial necesario
                para su vinculación con el territorio.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Contar con información Catastral Predial de Lima Cercado
                permanentemente actualizada.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex gap-2 py-2">
            <img
              src="/images/shortArrow.svg"
              width={10}
              height={5}
              alt="Flecha"
            />
            <h3 className="text-primary font-lato text-2xl">
              Estrategias del OG1:
            </h3>
          </div>
          <div className="ml-4">
            <ul className="list-disc list-inside">
              <li className="text-justify text-lg font-lato mb-2">
                Implementar un Sistema de Información Territorial de Lima
                Metropolitana.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Mantener actualizada y disponible la información territorial de
                Lima Metropolitana vìa internet / intranet.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Re implementar el sistema de Información Catastral Predial
                SISCAT
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Realizar el levantamiento masivo de información catastral
                predial de Lima Cercado.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Mantener actualizada la información catastral predial de Lima
                Cercado
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex gap-2 py-2">
            <img
              src="/images/shortArrow.svg"
              width={10}
              height={5}
              alt="Flecha"
            />
            <h3 className="text-primary font-lato text-2xl">
              Objetivo General 2 – OG2:
            </h3>
          </div>
          <div className="ml-4">
            <p className="text-justify text-lg font-lato mt-2">
              Consolidar las capacidades institucionales del ICL dentro del
              proceso de modernización municipal.
            </p>
            <h4 className="text-blue font-lato text-lg my-4">
              Objetivos Específicos del OG2:
            </h4>
            <ul className="list-disc list-inside">
              <li className="text-justify text-lg font-lato mb-2">
                Promover progresivamente la mejora de las capacidades de los
                recursos humanos y financieros del ICL.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Contar con recursos tecnológicos e infraestructura adecuada para
                mejorar la gestión institucional del ICL.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Mejorar la gestión administrativa del ICL
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex gap-2 py-2">
            <img
              src="/images/shortArrow.svg"
              width={10}
              height={5}
              alt="Flecha"
            />
            <h3 className="text-primary font-lato text-2xl">
              Estrategias del OG2:
            </h3>
          </div>
          <div className="ml-4">
            <ul className="list-disc list-inside">
              <li className="text-justify text-lg font-lato mb-2">
                Fortalecer las capacidades de los recursos humanos necesarios
                para mejorar la gestión institucional del ICL.
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Dotar de recursos financieros necesarios para mejorar la gestión
                institucional del ICL
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Implementar de equipamiento tecnológico e infraestructura
                adecuada al ICL
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Reestructurar institucionalmente el ICL (nuevos instrumentos de
                gestión)
              </li>
              <li className="text-justify text-lg font-lato mb-2">
                Establecer los procesos claves necesarios para la mejora de la
                gestión del ICL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
