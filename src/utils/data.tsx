import Convenios from '../components/Tables/Convenios';
import Convocatorias from '../components/Tables/Convocatorias';
import GestionNormativa from '../components/Tables/GestionNormativa';
import MemoriasInstitucionales from '../components/Tables/MemoriasInstitucionales';
import NormasEmitidas from '../components/Tables/NormasEmitidas';
import RendicionDeCuentas from '../components/Tables/RendicionDeCuentas';
import { Funcionario } from '../pages/sobre-nosotros/funcionarios';

export const funcionariosList: Funcionario[] = [
  {
    name: 'Molina Arles, Luis Alfonso',
    position: 'PRESIDENTE EJECUTIVO',
    image: '/images/funcionarios/funcionario-1.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/83447-luis-alfonso-molina-arles',
  },
  {
    name: 'Fernández Gonzáles, Ruth Mery',
    position: 'GERENTE GENERAL',
    image: '/images/funcionarios/funcionario-2.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/117983-ruth-mery-fernandez-gonzales',
  },
  {
    name: 'Zegarra Buitron, Paola Giovanna',
    position: 'SECRETARÍA GENERAL',
    image: '/images/funcionarios/funcionario-3.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/83448-paola-giovanna-zegarra-buitron',
  },
  {
    name: 'Del Hierro Salinas, Ana María',
    position: 'GERENTE DE CATASTRO',
    image: '/images/funcionarios/funcionario-4.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/121543-ana-maria-del-hierro-salinas',
  },
  {
    name: 'Guardia Gonzales, Julio Alonso',
    position: 'GERENTE DE CARTOGRAFÍA Y TECNOLOGÍA DE LA INFORMACIÓN',
    image: '/images/funcionarios/funcionario-5.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/83756-julio-alonso-guardia-gonzales',
  },
  {
    name: 'Soto Remuzgo, Víctor Miguel',
    position: 'GERENTE DE ASUNTOS JURIDICOS',
    image: '/images/funcionarios/funcionario-6.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/118315-victor-miguel-soto-remuzgo',
  },
  {
    name: 'Mendoza Vásquez, Herlinda Rosalía',
    position: 'GERENTE DE ADMINISTRACIÓN',
    image: '/images/funcionarios/funcionario-7.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/123936-mendoza-vasquez-herlinda-rosalia',
  },
  {
    name: 'Asencio Arnao, Ernesto Ricardo',
    position: 'GERENTE DE PROYECTOS',
    image: '/images/funcionarios/funcionario-8.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/84468-ernesto-ricardo-asencio-arnao',
  },
  {
    name: 'Valencia Flores, Kelvin Alain',
    position: 'JEFE DEL ÓRGANO DE CONTROL INSTITUCIONAL',
    image: '/images/funcionarios/no-foto.webp',
    link: 'https://www.gob.pe/institucion/icl/funcionarios/110822-kelvin-alain-valencia-flores',
  },
];

export const resources = [
  {
    title: 'Conoce Lima',
    description:
      'Permite a los usuarios obtener detalles específicos sobre propiedades en Lima, como ubicación y dimensiones.',
    buttonText: 'Realizar Consulta',
    img: '/images/pagina-1/recursos/conoce-lima.svg',
    link: 'https://sit.icl.gob.pe/conoce_lima/',
  },
  {
    title: 'Consulta Catastral en Línea',
    description:
      'Permite a los usuarios obtener detalles específicos sobre propiedades en Lima, como ubicación y dimensiones.',
    buttonText: 'Realizar Consulta',
    img: '/images/consultaCatastral.svg',
    link: 'https://sit.icl.gob.pe/appconsulta/',
  },
  {
    title: 'Sistema de información territorial',
    description:
      'Provee información detallada sobre el uso del suelo, zonificación, y otros aspectos territoriales en Lima.',
    buttonText: 'Acceder al Sistema',
    img: '/images/sistemaInformacion.svg',
    link: 'https://sit.icl.gob.pe/sit/',
  },
  {
    title: 'Portafolio de Aplicaciones GIS',
    description:
      'Herramientas y aplicaciones que facilitan el análisis espacial y la visualización de datos georreferenciados.',
    buttonText: 'Explorar Aplicaciones',
    img: '/images/portafolioAplicaciones.svg',
    link: 'https://sit.icl.gob.pe/portafolio/',
  },
  {
    title: 'Mesa de Partes Virtual',
    description:
      'Facilita la presentación de documentos y la realización de trámites administrativos de manera virtual.',
    buttonText: 'Iniciar Trámite',
    img: '/images/mesaDePartes.svg',
    link: 'https://icl.gob.pe/mesa/administrado/login.aspx',
  },
];

export const news = [
  {
    title: 'Noticia 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros.',
    img: 'https://drive.google.com/uc?export=view&id=1rYmnuCd0kfmFp9728Cp5DZpc4Q3K-K0R',
  },
  {
    title: 'Noticia 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros.',
    img: 'https://drive.google.com/uc?export=view&id=1rYmnuCd0kfmFp9728Cp5DZpc4Q3K-K0R',
  },
  {
    title: 'Noticia 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros.',
    img: 'https://drive.google.com/uc?export=view&id=1rYmnuCd0kfmFp9728Cp5DZpc4Q3K-K0R',
  },
];

export const faqItems = [
  {
    question: 'Finalidad de Instituto Catastral de Lima',
    answer:
      'El Instituto Catastral de Lima es el pilar que sustenta el desarrollo sostenible y planificado de nuestra vibrante ciudad. Con una rica historia de dedicación y servicio, nos esforzamos por ser la fuente confiable y precisa de información catastral y territorial.',
  },
  {
    question: 'Misión',
    answer:
      'Ser la entidad pública, modelo de gestión catastral municipal del Perú, debido a la calidad de servicio al ciudadano, la promoción de las capacidades en los sistemas de información territorial y la eficiencia en nuestros procesos.',
  },
  {
    question: 'Visión',
    answer:
      'Ser una institución líder y modelo en gestión catastral a nivel nacional e internacional que brinde información territorial de calidad, actualizada y oportuna de Lima Metropolitana, que interopere con todas las entidades públicas y privadas que administran información georreferenciada, y que contribuya a una gestión transparente en el marco de un gobierno digital al servicio de la corporación municipal, de las entidades públicas y privadas y del ciudadano en general.',
  },
];

type DataItem = {
  id: string;
  title: string;
  description: string;
  caption: string;
  titleContent: string;
  content: () => JSX.Element;
};

export const GestionNormativaData: DataItem[] = [
  {
    id: 'gestion-financiera-y-presupuestal',
    title: 'Gestión Financiera y Presupuestal',
    description:
      'Nuestra gestión financiera y presupuestal se destaca por su eficiencia y transparencia. Garantizamos una asignación efectiva de recursos para cumplir con nuestra misión y objetivos institucionales, manteniendo una sólida estabilidad económica.',
    caption: 'Gestión Administrativa',
    titleContent: 'Gestión Financiera y Presupuestal',
    content: () => (
      <div className="p-4 space-y-8">
        {/* First Item */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 font-acto text-primary">
            1.- Incremento de 39% del Presupuesto Institucional
          </h2>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Situación encontrada
            </p>
            <p>
              Transferencia de la MML por S/ 1´800,000. Dicha cantidad se
              mantiene desde hace diez (10) años aproximadamente.
            </p>
          </div>
          <p className="mt-2 text-gray-700">
            <p className="font-lato text-blue text-xl my-2">
              → Gestión años 2011-2013
            </p>
            <p>
              A partir del año 2013 se logró incrementar el presupuesto
              Institucional en S/. 700,000. pasando de S/. 1´800,000 a S/.
              2´500,000.
            </p>
          </p>
        </div>

        {/* Second Item */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 font-acto text-primary">
            2.- Recuperación de deudas pendientes de cobranza de gestiones
            anteriores 2003 - 2009
          </h2>
          <p className="mt-2 text-gray-700">
            <p className="font-lato text-blue text-xl my-2">
              → Situación encontrada
            </p>
            <p>
              Se encontró deuda de cobranza por S/. 89,948 que la Municipalidad
              Provincial de Ica mantenía con el ICL, desde el año 2005. Se
              encontró deuda pendiente de cobro por S/. 52,930 que la MML
              mantenía con el ICL por productos y servicios brindados entre los
              años 2003 y 2009.
            </p>
          </p>
          <p className="mt-2 text-gray-700">
            <p className="font-lato text-blue text-xl my-2">
              → Gestión años 2011-2013
            </p>
            <p>
              Dentro de un proceso de conciliacion extra judicial se logro el
              reconociminto de la deuda y el compromiso de cobro de 50%
              ascendente a S/ 44,974 mas los intereses legales de S/. 10,165;
              haciendo un total de S/. 55,139, que sera cobrado en el año 2014.
              Se logro cobrar a la MML el 100% de la deuda de gestiones
              anteriores (S/. 52,930 ).
            </p>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'gestion-de-bienes-e-infraestructura-del-icl',
    title: 'Gestión de Bienes e Infraestructura del ICL',
    description:
      'En el Instituto Catastral de Lima, gestionamos nuestros recursos de manera eficiente para mantener un entorno de trabajo óptimo. Nuestra inversión en infraestructura refleja nuestro compromiso con la calidad en la gestión catastral y el servicio a la comunidad de Lima.',
    caption: 'Gestión Administrativa',
    titleContent: 'Gestión de Bienes e Infraestructura del ICL',
    content: () => (
      <>
        <div>
          <h2 className="text-xl font-bold text-blue-600 font-acto text-primary">
            1.- Renovación de unidad de transporte
          </h2>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Situación encontrada
            </p>
            <p>
              Se encontraron dos (02) vehículos (Nissan Sunny y Toyota Hilux)
              con mas de diez (10) años de antigüedad y en estado inoperativo.
            </p>
          </div>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Gestión años 2011-2013
            </p>
            <p>
              Se aprobó la Baja de Bienes de los dos (02) vehículos por la
              causal de mantenimiento o reparación onerosa. – Se vendió por
              subasta pública los dos vehículos y se obtuvo un total de S/
              19,600 – Se adquirió una camioneta minivan Hyundai 0 Km. para doce
              (12) pasajeros.
            </p>
          </div>
        </div>

        {/* Fourth Item */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 font-acto text-primary mt-4">
            2.- Registro de Bienes en Software – SIMI de la Superintendencia de
            Bienes Nacionales
          </h2>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Situación encontrada
            </p>
            <p>
              No se encontraron registrados los bienes del activo Fijo en el
              sistema de la Superintendencia de Bienes Nacionales, acto de
              cumplimiento obligatorio de acuerdo a ley.
            </p>
          </div>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Gestión años 2011-2013
            </p>
            <p>
              Se realizó el registro de más de 1,500 bienes del Activo Fijo del
              ICL en el Software SIMI de la Superintendencia de Bienes
              Nacionales.
            </p>
          </div>
        </div>

        {/* Fifth Item */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 font-acto text-primary mt-4">
            3.- Modernización de la Gestión de los bienes e infraestructura del
            ICL y equipamiento tecnológico.
          </h2>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Situación encontrada
            </p>
            <p>
              Se encontraron equipos de computo con ciclo de vida vencido, sin
              ambiente adecuado para los servidores y sin equipos adecuados para
              levantamiento de información en trabajo de campo.
            </p>
          </div>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Gestión años 2011-2013
            </p>
            <p>
              Se gestionó la adquisición de bienes y acondicionamiento de la
              infraestructura de ICL. – Quince (15) computadoras nuevas – Cuatro
              (04) impresoras – Sala y acondicionamiento de servidores – Equipo
              Tape Backup – Equipo UPS – Implementación de comedor para
              trabajadores.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'gestion-normativa',
    title: 'Gestión Normativa',
    description:
      'Las normas emitidas por el Instituto Catastral de Lima son fundamentales para asegurar un funcionamiento eficaz y transparente de nuestra institución. Estas normativas guían nuestras operaciones y establecen los estándares de calidad y legalidad que nos comprometemos a cumplir.',
    caption: 'Gestión Administrativa',
    titleContent: 'Mejora de los sistemas administrativos',
    content: () => (
      <div>
        <div className="mt-2 text-gray-700 font-lato">
          <p className="font-lato text-blue text-xl my-2">
            → Situación encontrada
          </p>
          <p>
            Se encontraron cinco (05) directivas emitidas relacionadas con
            formulación del Plan Estratégico, Plan Operativo, Normas de
            Ecoeficiencia y para el Cierre de Estados Financieros y
            presupuestales del ICL.
          </p>
        </div>
        <div className="mt-2 text-gray-700 font-lato">
          <p className="font-lato text-blue text-xl my-2 mt-4">
            → Gestión años 2011-2013
          </p>
          <p>
            Se formularon DIECISEIS (16) DIRECTIVAS con la finalidad de mejorar
            los controles internos en los Sistemas Administrativos de Personal,
            Tesorería, Contabilidad, Logística, Informática, así como directivas
            relacionadas al cumplimiento de transparencia y acceso a la
            información pública, seguridad y vigilancia, entre otros.
          </p>
        </div>
        <div className="mt-8">{renderTableGestionNormativa()}</div>
      </div>
    ),
  },
  {
    id: 'rendicion-de-cuentas-de-titulares',
    title: 'Rendición de Cuentas de Titulares',
    description:
      'La rendición de cuentas es un pilar fundamental en nuestra gestión. Los titulares en el Instituto Catastral de Lima están comprometidos con la transparencia y la responsabilidad en todas nuestras acciones',
    caption: 'Gestión Administrativa',
    titleContent: 'Listado de rendiciones de cuentas:',
    content: () => <div>{renderTableRendicionCuentas()}</div>,
  },
  {
    id: 'convocatorias',
    title: 'Convocatorias',
    description:
      'Las convocatorias son una parte esencial de nuestra interacción con la comunidad y profesionales interesados. En el Instituto Catastral de Lima, estamos comprometidos en mantener un proceso de convocatoria abierto y transparente, donde se promueve la participación de talento diverso.',
    caption: 'Gestión Administrativa',
    titleContent: 'Listado de convocatorias',
    content: () => <div>{renderTableConvocatorias()}</div>,
  },
  {
    id: 'memorias-institucionales',
    title: 'Memorias Institucionales',
    description:
      'Nuestras Memorias Institucionales son un reflejo de nuestro compromiso con la transparencia y la rendición de cuentas. A través de ellas, compartimos nuestros logros, desafíos y avances a lo largo de nuestro recorrido.',
    caption: 'Gestión Administrativa',
    titleContent: 'Listado de memorias institucionales',
    content: () => <div>{renderTableMemoriasInstitucionales()}</div>,
  },
];

const renderTableGestionNormativa = () => {
  return <GestionNormativa />;
};
const renderTableRendicionCuentas = () => {
  return <RendicionDeCuentas />;
};
const renderTableConvocatorias = () => {
  return <Convocatorias />;
};
const renderTableMemoriasInstitucionales = () => {
  return <MemoriasInstitucionales />;
};

export const capacitacionesData = [
  {
    id: 1,
    image: '/images/cursos/1.svg',
    title: 'Diseño y formulación de proyectos catastrales',
    content: () => (
      <div>
        <p className="font-lato">
          El objetivo de este curso es dar a conocer las herramientas
          metodológicas con ejemplos de casos prácticos de la formulación de
          proyectos en el sector público, en especial aquellos dirigidos a
          diseñar y formular proyectos catastrales.
        </p>
        <p>
          <strong className="font-acto text-primary">
            *Incluye Certificado
          </strong>
        </p>
      </div>
    ),
    link: 'https://wa.link/koj026',
  },
  {
    id: 2,
    image: '/images/cursos/2.svg',
    title: 'Levantamiento catastral en el marco de la Ley 28294',
    content: () => (
      <div>
        <p>
          Este curso tiene el objetivo de brindar las herramientas necesarias
          para que el participante adquiera los conocimientos del proceso de
          levantamiento catastral usando la normativa vigente y las metodologías
          adecuadas para su elaboración desde una visión eminentemente práctica.
        </p>
        <p>
          <strong className="font-acto text-primary">
            *Incluye Certificado
          </strong>
        </p>
      </div>
    ),
    link: 'https://wa.link/koj026',
  },
  {
    id: 3,
    image: '/images/cursos/3.svg',
    title: 'ArcGIS Pro Aplicado al Catastro',
    content: () => (
      <div>
        <p>
          Este curso tiene el objetivo de dar a conocer el entorno del software
          e identificar las herramientas necesarias para que el participante
          este en la capacidad de manejar el componente geométrico y la temática
          de la información catastral, a fin de generar nuevos elementos de
          información y establecer una simbología de acuerdo a una clasificación
          temática o espacial.
        </p>
        <p>
          <strong className="font-acto text-primary">
            *Incluye Certificado
          </strong>
        </p>
      </div>
    ),
    link: 'https://wa.link/koj026',
  },
];

export const LeyMarcoLegalData = [
  {
    id: 'ley-organica-de-municipalidades',
    title: 'Ley Orgánica de Municipalidades',
    description:
      'La Ley Nº 27972, conocida como la Ley Orgánica de Municipalidades, es la columna vertebral de la gestión y administración de los gobiernos locales en el Perú. En el Instituto Catastral de Lima, comprendemos la relevancia de esta legislación como la base de nuestra colaboración con las municipalidades y el soporte de nuestro compromiso con el desarrollo ordenado y sostenible de Lima',
    caption: 'Marco Legal',
    titleContent:
      'Ley Orgánica de Municipalidades: Fundamento de Nuestra Labor Municipal',
    buttonText: 'Descargar Ley Nº 27972',
    content: () => (
      <div className="font-acto-reg">
        <h2>
          <strong>Artículo 79</strong>.- Organización del espacio físico y uso
          del suelo.
        </h2>
        <p>
          Las municipalidades, en materia de organización del espacio físico y
          uso del suelo, ejercen las siguientes funciones:
        </p>

        <ol>
          <li>
            Funciones específicas exclusivas de las{' '}
            <strong>municipalidades provinciales:</strong>
            <ol>
              <li>
                Aprobar el Plan de Acondicionamiento Territorial de nivel
                provincial que identifique las áreas urbanas y de expansión
                urbana, así como las áreas de protección o de seguridad por
                riesgos naturales; las áreas agrícolas y las áreas de
                conservación ambiental.
              </li>
              <li>(…)</li>
              <li>
                Aprobar la regulación provincial respecto del otorgamiento de
                licencias y las labores de control y fiscalización de las
                municipalidades distritales en las materias reguladas por los
                planes antes mencionados, de acuerdo con las normas técnicas de
                la materia, sobre:
                <ol>
                  <li>
                    <strong>
                      Elaboración y mantenimiento del catastro urbano y rural.
                    </strong>
                  </li>
                </ol>
              </li>
              <li>(…)</li>
            </ol>
          </li>
          <li>
            Funciones específicas exclusivas de las{' '}
            <strong>municipalidades distritales:</strong>
            <ol>
              <li>(…)</li>
              <li>
                <strong>Elaborar y mantener el catastro distrital.</strong>
              </li>
            </ol>
          </li>
        </ol>

        <h2>
          <strong>
            Artículo 161.- Competencias y Funciones de la Municipalidad
            Metropolitana de Lima
          </strong>
        </h2>
        <p>
          La Municipalidad Metropolitana de Lima tiene las siguientes
          competencias y funciones metropolitanas especiales:
        </p>
        <p>En materia de planificación, desarrollo urbano y vivienda</p>
        <ol>
          <li>(…)</li>
          <li>
            <strong>
              1.4. Administrar y mantener actualizado el catastro metropolitano;
            </strong>
          </li>
        </ol>
      </div>
    ),
    download:
      'https://icl.gob.pe/wp-content/uploads/2022/01/01.-ley-27972-ley-organica-de-municipalidades.pdf',
  },
  {
    id: 'ley-tributacion-municipal',
    title: 'Ley de Tributación Municipal',
    description:
      'La Ley de Tributación Municipal es un pilar fundamental en la gestión de recursos para el desarrollo de nuestras comunidades. En el Instituto Catastral de Lima, estamos comprometidos en facilitar la comprensión y el cumplimiento de esta importante legislación. ',
    caption: 'Marco Legal',
    titleContent: 'Entendiendo Nuestro Marco Normativo',
    content: () => (
      <div className="font-acto-reg">
        <article>
          <h2>
            <strong>
              Decreto Legislativo Nº 776 – Ley Tributación Municipal.
            </strong>
          </h2>

          <h3 className="my-4">
            <strong>CAPITULO I: DEL IMPUESTO PREDIAL</strong>
          </h3>

          <p>
            Artículo 20°.- El rendimiento del impuesto constituye renta de la
            Municipalidad Distrital respectiva en cuya jurisdicción se
            encuentren ubicados los predios materia del impuesto, estando a su
            cargo la administración del mismo.
          </p>

          <p>
            El 5% (cinco por ciento) del rendimiento del impuesto se destina
            exclusivamente a financiar el desarrollo y mantenimiento del
            catastro distrital, así como a las acciones que realice la
            administración tributaria, destinadas a reforzar su gestión y
            mejorar la recaudación.
          </p>
        </article>
      </div>
    ),
  },
  {
    id: 'ley-organica-de-gobiernos-regionales',
    title: 'Ley Nº 27867 – Ley Orgánica de Gobiernos Regionales',
    description:
      'En el Instituto Catastral de Lima, reconocemos la importancia de esta ley como un marco regulatorio que guía nuestra colaboración y coordinación con las regiones circundantes. En esta sección, proporcionamos una visión general completa de la Ley Nº 27867, sus disposiciones clave y su influencia en la toma de decisiones y la planificación estratégica.',
    caption: 'Marco Legal',
    titleContent: 'Fundamento de Nuestra Estructura Administrativa',
    buttonText: 'Descargar Ley N°27867',
    content: () => (
      <div className="my-4">
        <article>
          <h3>
            <strong>Artículo 46.-</strong> Contexto de las funciones específicas
          </h3>
          <p>
            Las funciones específicas que ejercen los Gobiernos Regionales se
            desarrollan en base a las políticas regionales, las cuales se
            formulan en concordancia con las políticas nacionales sobre la
            materia.
          </p>

          <h3>
            <strong>Artículo 50.-</strong> Funciones en materia de población
          </h3>
          <ul>
            <li>(…)</li>
            <li>
              c) Programar y desarrollar acciones que impulsen una distribución
              territorial de la población en función a las potencialidades del
              desarrollo regional y en base a los planes de ordenamiento
              territorial y de la capacidad de las ciudades para absorber flujos
              migratorios.
            </li>
          </ul>

          <h3>
            <strong>Artículo 53.-</strong> Funciones en matera ambiental y de
            ordenamiento territorial
          </h3>
          <ul>
            <li>(…)</li>
            <li>
              <strong>
                f) Planificar y desarrollar acciones de ordenamiento y
                delimitación en el ámbito del territorio regional, así como
                organizar, evaluar y tramitar los expedientes técnicos de
                demarcación territorial, en armonía con las políticas y normas
                de la materia.
              </strong>
            </li>
          </ul>
        </article>
      </div>
    ),
    download:
      'http://icl.gob.pe/wp-content/uploads/2022/01/02.-ley-27867-ley-organica-de-gobiernos-regionales.pdf',
  },
  {
    id: 'reglamento-de-acondicionamiento-territorial',
    title: 'Reglamento de Acondicionamiento Territorial',
    description:
      'El Reglamento de Acondicionamiento Territorial es un instrumento esencial en la planificación y desarrollo de nuestras áreas urbanas y rurales. En el Instituto Catastral de Lima, reconocemos su papel fundamental en la promoción del crecimiento sostenible y el uso adecuado de nuestros recursos territoriales',
    caption: 'Marco Legal',
    titleContent:
      'Reglamento de Acondicionamiento Territorial: Orientando el Desarrollo Responsable',
    content: () => (
      <div>
        <article>
          <h2>
            <strong>DISPOSICIÓN COMPLEMENTARIA FINAL</strong>
          </h2>
          <h3>
            Decreto Supremo Nº 004-2011-VIVIENDA – Aprobación Reglamento de
            Acondicionamiento Territorial y Desarrollo Urbano
          </h3>

          <p>
            Sexta.- Los catastros, inventarios técnicos-descriptivos de la
            propiedad y de las actividades económicas, como fuente de
            información para la planificación, la gestión urbana y tributación
            local.
          </p>

          <p>
            Los catastros urbano, rural y minero, como inventarios técnicos y
            descriptivos de la propiedad y de las actividades económicas,
            constituyen fuente de información para la planificación, la gestión
            urbana y la tributación local, teniendo carácter de servicio
            público.
          </p>

          <p>
            Corresponde a las Municipalidades el catastro de los predios
            urbanos, así como de los predios rústicos y eriazos que se ubican
            dentro del área de expansión urbana prevista en los planes urbanos,
            de acuerdo a la normativa vigente aplicable al catastro.
          </p>
        </article>
      </div>
    ),
  },
  {
    id: 'ley-que-crea-el-sncp',
    title: 'Ley que crea el Sistema Nacional de Catastro',
    description:
      'La Ley que crea el Sistema Nacional de Catastro Público (SNCP) es la piedra angular de nuestra labor en el Instituto Catastral de Lima. Esta legislación proporciona la base legal que respalda la organización y el funcionamiento del sistema catastral en todo el país.',
    caption: 'Marco Legal',
    titleContent: 'Fundamento de la Gestión Catastral',
    content: () => (
      <div>
        <article>
          <h2>
            Ley Nº 28294 – Ley que crea el Sistema Nacional Integrado de
            Catastro y su vinculación con el registro de predios
          </h2>

          <h3>Artículo 7°.- Integrantes del Consejo Nacional.</h3>

          <p>El Consejo Nacional de Catastro está integrado por:</p>

          <ol>
            <li>
              El Superintendente Nacional de los Registros Públicos – SUNARP,
              quien lo preside.
            </li>
            <li>Un representante de los Gobiernos Regionales.</li>
            <li>
              El presidente de la Asociación de Municipalidades o su
              representante.
            </li>
            <li>
              El jefe Institucional del Instituto Nacional de Concesiones y
              Catastro Minero- INACC o su representante.
            </li>
            <li>
              El jefe del Instituto Geográfico Nacional – IGN o su
              representante.
            </li>
            <li>
              El Director Ejecutivo del Instituto Catastral de Lima – ICL o su
              representante.
            </li>
          </ol>
        </article>
      </div>
    ),
  },
  {
    id: 'resolucion-de-gerencia',
    title: 'Resolución de Gerencia Municipal Metropolitana',
    description:
      'Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
    caption: 'Marco Legal',
    titleContent: 'Avanzando en Nuestra Misión',
    content: () => (
      <div>
        <article>
          <h3>Articulo N° 1:</h3>
          <p>
            Establecer como Unidad Ejecutora de Proyectos de Inversión Pública
            de la Municipalidad Metropolitana de Lima al Instituto Catastral de
            Lima – ICL (UE-IG)
          </p>

          <h3>Articulo N° 2:</h3>
          <p>
            Designar al Presidente Ejecutivo del Instituto Catastral de Lima –
            ICL como responsable de la Unidad Ejecutora (UE-GL) constituida
            mediante la presente Resolución.
          </p>
        </article>
      </div>
    ),
  },
  {
    id: 'codigo-de-etica-y-reglamento',
    title: 'Código de Ética y Reglamento',
    description:
      'En el Instituto Catastral de Lima, entendemos la importancia de mantener altos estándares éticos y operativos en todas nuestras actividades. Nuestro Código de Ética y Reglamento establece los principios fundamentales que guían nuestro comportamiento y nuestras relaciones con todas las partes interesadas. Estos principios reflejan nuestro compromiso con la integridad, la equidad y la excelencia en todo lo que hacemos.',
    caption: 'Marco Legal',
    titleContent: 'Código de Ética y Reglamento',
    content: () => (
      <div>
        <article>
          <h3>
            <strong>Fines de la Función Pública</strong>
          </h3>
          <p>
            Los fines de la función pública son el Servicio a la Nación, de
            conformidad con lo dispuesto en la Constitución Política y la
            obtención de mayores niveles de eficiencia del aparato estatal, de
            manera que se logre una mejor atención a la ciudadanía, priorizando
            y optimizando el uso de los recursos públicos.
          </p>

          <h3>
            <strong>Empleado Público</strong>
          </h3>
          <p>
            Es todo funcionario o servidor de las entidades de la Administración
            Pública, en cualquiera de los niveles jerárgicos sea éste nombrado,
            contratado, designado, de confianza o electo que desempeñe
            actividades o funciones en nombre o al servicio del Estado, no
            importando el régimen jurídico de la entidad en la que se preste
            servicios ni el régimen laboral o de contratación al que esté
            sujeto.
          </p>
        </article>
      </div>
    ),
  },
  {
    id: 'normas-emitidas-por-la-entidad',
    title: 'Normas Emitidas por la Entidad',
    description:
      'Las normas emitidas por el Instituto Catastral de Lima son fundamentales para asegurar un funcionamiento eficaz y transparente de nuestra institución. Estas normativas guían nuestras operaciones y establecen los estándares de calidad y legalidad que nos comprometemos a cumplir.',
    caption: 'Marco Legal',
    content: () => renderContentNormas(),
  },
  {
    id: 'convenios-institucionales',
    title: 'Convenios Institucionales',
    description:
      'En el Instituto Catastral de Lima, estamos comprometidos en fortalecer la cooperación y la transparencia en la gestión pública. A lo largo de los años, hemos establecido una serie de valiosos convenios y alianzas estratégicas con municipalidades distritales, provinciales y departamentales del país. Estos convenios representan un esfuerzo conjunto para mejorar la planificación territorial, el desarrollo urbano sostenible y la eficiencia en la administración de recursos. A través de esta sección, les invitamos a explorar estos acuerdos, conocer sus objetivos y detalles, y seguir de cerca nuestro compromiso continuo de contribuir al progreso y la ordenación territorial en Lima y sus alrededores.',
    caption: 'Marco Legal',
    content: () => renderContentConvenios(),
  },
];

const renderContentConvenios = () => {
  return <Convenios />;
};
const renderContentNormas = () => {
  return <NormasEmitidas />;
};

export const categoriesMegamenu = [
  {
    id: 1,
    name: 'Servicios',
    slug: 'Servicios',
    children: [
      {
        id: 2,
        name: 'TUPA',
        slug: 'tupa',
        description: 'Resumen del Texto Único de Procedimiento Administrativo',
        children: [],
        link: '/servicios/tupa',
      },
      {
        id: 7,
        name: 'TUSNE',
        slug: 'tusne',
        description: 'Resumen del Texto Único de Servicios No Exclusivos',
        children: [],
        link: '/servicios/tusne',
      },
    ],
  },
  {
    id: 9,
    name: 'Recursos',
    slug: 'Recursos',
    children: [
      {
        id: 10,
        name: 'Conoce Lima',
        slug: 'conoce-lima',
        children: [],
        description:
          'Explora Lima virtualmente, desde el Parque de la Reserva hasta monumentos históricos, a través de un mapa 3D interactivo que destaca su riqueza arquitectónica y cultural.',
        link: 'https://sit.icl.gob.pe/conoce_lima/',
      },
      {
        id: 11,
        name: 'Consulta Catastral en Línea',
        slug: 'consulta-catastral-en-linea',
        children: [],
        description:
          'Accede rápidamente a información catastral detallada y actualizada, facilitando la gestión y planificación urbana desde la comodidad de tu hogar u oficina.',
        link: 'https://sit.icl.gob.pe/appconsulta/',
      },
      {
        id: 12,
        name: 'Portafolio de Aplicaciones GIS',
        slug: 'portafolio-de-aplicaciones-gis',
        children: [],
        description:
          'Accede rápidamente a información catastral detallada y actualizada, facilitando la gestión y planificación urbana desde la comodidad de tu hogar u oficina.',
        link: 'https://sit.icl.gob.pe/portafolio/',
      },
      {
        id: 14,
        name: 'Sistema de Información Territorial',
        slug: 'sistema-de-informacion-territorial',
        children: [],
        description:
          'Acceso integral a datos territoriales de Lima, proporcionando información valiosa para proyectos de desarrollo urbano y planificación estratégica.',
        link: 'https://sit.icl.gob.pe/sit/',
      },
      {
        id: 15,
        name: 'Mesa de Partes Virtual',
        slug: 'mesa-de-partes-virtual',
        children: [],
        description:
          'Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
        link: 'https://icl.gob.pe/mesa/administrado/login.aspx',
      },
    ],
  },
  {
    id: 13,
    name: 'Sobre Nosotros',
    slug: 'about-us',
    children: [
      {
        id: 17,
        name: '¿Quiénes somos?',
        slug: 'quienes-somos',
        description:
          'Conozca la misión, visión y valores que guían nuestras operaciones en el Instituto Catastral de Lima.',
        children: [],
        link: '/sobre-nosotros/quienes-somos',
      },
      {
        id: 18,
        name: 'Objetivos',
        slug: 'objetivos',
        description:
          'Descubra los objetivos estratégicos que guían nuestras acciones y decisiones hacia el cumplimiento de nuestra misión en el Instituto Catastral de Lima.',
        children: [],
        link: '/sobre-nosotros/objetivos',
      },
      {
        id: 19,
        name: 'Funcionarios',
        slug: 'funcionarios',
        description:
          'Descubra el equipo de profesionales dedicados que trabajan para servir a la comunidad en nuestra institución.',
        children: [],
        link: '/sobre-nosotros/funcionarios',
      },
      {
        id: 20,
        name: 'Normas de la Institución',
        slug: 'normas-la-institucion',
        description:
          'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
        children: [],
        link: '/sobre-nosotros/normas-de-la-institucion',
      },
    ],
  },
  {
    id: 21,
    name: 'Marco Legal',
    slug: 'marco-legal',
    children: [
      {
        id: 22,
        name: 'Ley Nº 27972 – Ley Orgánica de Municipalidades',
        slug: 'ley-organica-de-municipalidades',
        description:
          'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
        children: [],
        link: '/marco-legal/ley-organica-de-municipalidades',
      },
      {
        id: 23,
        name: 'Ley Tributación Municipal',
        slug: 'ley-tributacion-municipal',
        description:
          'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
        children: [],
        link: '/marco-legal/ley-tributacion-municipal',
      },
      {
        id: 24,
        name: 'Ley Nº 27867 – Ley Orgánica de Gobiernos Regionales',
        slug: 'ley-organica-de-gobiernos-regionales',
        description:
          'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
        children: [],
        link: '/marco-legal/ley-organica-de-gobiernos-regionales',
      },
      {
        id: 25,
        name: 'Reglamento de Acondicionamiento Territorial',
        slug: 'reglamento-de-acondicionamiento-territorial',
        description:
          'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
        children: [],
        link: '/marco-legal/reglamento-de-acondicionamiento-territorial',
      },
      {
        id: 26,
        name: 'Ley que crea el SNCP',
        slug: 'ley-que-crea-el-sncp',
        description:
          '¿Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
        children: [],
        link: '/marco-legal/ley-que-crea-el-sncp',
      },
      {
        id: 34,
        name: 'Resolución de Gerencia Municipal Metropolitana',
        slug: 'resolucion-de-gerencia',
        description:
          'Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
        children: [],
        link: '/marco-legal/resolucion-de-gerencia',
      },
      {
        id: 35,
        name: 'Código de Ética y Reglamento',
        slug: 'codigo-de-etica-y-reglamento',
        description:
          'En el Instituto Catastral de Lima, entendemos la importancia de mantener altos estándares éticos y operativos en todas nuestras actividades.',
        children: [],
        link: '/marco-legal/codigo-de-etica-y-reglamento',
      },
      {
        id: 36,
        name: 'Normas emitidas por la entidad',
        slug: 'normas-emitidas-por-la-entidad',
        description:
          'Las normas emitidas por el Instituto Catastral de Lima son fundamentales para asegurar un funcionamiento eficaz y transparente de nuestra institución.',
        children: [],
        link: '/marco-legal/normas-emitidas-por-la-entidad',
      },
      {
        id: 37,
        name: 'Convenios institucionales',
        slug: 'convenios-institucionales',
        description:
          'En el Instituto Catastral de Lima, estamos comprometidos en fortalecer la cooperación y la transparencia en la gestión pública.',
        children: [],
        link: '/marco-legal/convenios-institucionales',
      },
    ],
  },
  {
    id: 27,
    name: 'Gestión Administrativa',
    slug: 'gestion-administrativa',
    children: [
      {
        id: 28,
        name: 'Gestión Financiera y Presupuestal',
        slug: 'gestion-financiera-y-presupuestal',
        description:
          'Conozca cómo administramos y asignamos nuestros recursos financieros para garantizar la eficiencia y transparencia en nuestras operaciones.',
        link: '/gestion-administrativa/gestion-financiera-y-presupuestal',
      },
      {
        id: 29,
        name: 'Gestión de Bienes e Infraestructura del ICL',
        slug: 'gestion-de-bienes-e-infraestructura-del-icl',
        description:
          'Descubra cómo gestionamos y mantenemos nuestras instalaciones, equipos y otros activos para ofrecer servicios de calidad.',
        link: '/gestion-administrativa/gestion-de-bienes-e-infraestructura-del-icl',
      },
      {
        id: 30,
        name: 'Gestión Normativa',
        slug: 'gestion-normativa',
        description:
          'Explore las normativas y regulaciones internas que guían nuestras operaciones y aseguran el cumplimiento de los estándares legales y éticos.',
        link: '/gestion-administrativa/gestion-normativa',
      },
      {
        id: 31,
        name: 'Rendición de Cuentas de Titulares',
        slug: 'rendicion-de-cuentas-de-titulares',
        description:
          'Acceda a los informes y documentos que presentan un resumen detallado de nuestras actividades, logros y desafíos.',
        link: '/gestion-administrativa/rendicion-de-cuentas-de-titulares',
      },
      {
        id: 32,
        name: 'Convocatorias',
        slug: 'convocatorias',
        description:
          'Manténgase informado sobre las últimas convocatorias y oportunidades para colaborar o trabajar con nosotros.',
        link: '/gestion-administrativa/convocatorias',
      },
      {
        id: 33,
        name: 'Memorias Institucionales',
        slug: 'memorias-institucionales',
        description:
          'Revise nuestros informes anuales que destacan los logros, desafíos y planes futuros de la institución.',
        link: '/gestion-administrativa/memorias-institucionales',
      },
    ],
  },
  {
    id: 38,
    name: 'Proyectos',
    slug: 'proyectos',
    link: '/proyectos',
  },
  {
    id: 39,
    name: 'ICL Capacitaciones',
    slug: 'icl-capacitaciones',
    link: '/icl-capacitaciones',
  },
];