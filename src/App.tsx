import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages';
import Servicios from './pages/servicios';
import Bienvenida from './pages/bienvenida';
import QuienesSomos from './pages/sobre-nosotros/quienes-somos';
import Funcionarios from './pages/sobre-nosotros/funcionarios';
import Objetivos from './pages/sobre-nosotros/objetivos';
import NormasDeLaInstitucion from './pages/sobre-nosotros/normas-de-la-institucion';
import LeyDeMarcoLegal from './pages/marco-legal';
import GestionAdministrativa from './pages/gestion-administrativa';
import Proyectos from './pages/proyectos';
import ICLCapacitaciones from './pages/capacitaciones';
import ContactPage from './pages/contacto';
import Proyecto from './pages/sobre-nosotros/proyecto';
import Noticias from './pages/noticias';
import Noticia from './pages/noticias/item';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/tupa" element={<Servicios id={'tupa'} />} />
          <Route path="/servicios/tusne" element={<Servicios id={'tusne'} />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route
            path="/sobre-nosotros/quienes-somos"
            element={<QuienesSomos />}
          />
          <Route
            path="/sobre-nosotros/funcionarios"
            element={<Funcionarios />}
          />
          <Route path="/sobre-nosotros/objetivos" element={<Objetivos />} />
          <Route
            path="/sobre-nosotros/normas-de-la-institucion"
            element={<NormasDeLaInstitucion />}
          />
          <Route
            path="/marco-legal/ley-organica-de-municipalidades"
            element={
              <LeyDeMarcoLegal slug={'ley-organica-de-municipalidades'} />
            }
          />
          <Route
            path="/marco-legal/ley-tributacion-municipal"
            element={<LeyDeMarcoLegal slug={'ley-tributacion-municipal'} />}
          />
          <Route
            path="/marco-legal/ley-organica-de-gobiernos-regionales"
            element={
              <LeyDeMarcoLegal slug={'ley-organica-de-gobiernos-regionales'} />
            }
          />
          <Route
            path="/marco-legal/reglamento-de-acondicionamiento-territorial"
            element={
              <LeyDeMarcoLegal
                slug={'reglamento-de-acondicionamiento-territorial'}
              />
            }
          />
          <Route
            path="/marco-legal/ley-que-crea-el-sncp"
            element={<LeyDeMarcoLegal slug={'ley-que-crea-el-sncp'} />}
          />
          <Route
            path="/marco-legal/resolucion-de-gerencia"
            element={<LeyDeMarcoLegal slug={'resolucion-de-gerencia'} />}
          />
          <Route
            path="/marco-legal/codigo-de-etica-y-reglamento"
            element={<LeyDeMarcoLegal slug={'codigo-de-etica-y-reglamento'} />}
          />
          <Route
            path="/marco-legal/normas-emitidas-por-la-entidad"
            element={
              <LeyDeMarcoLegal slug={'normas-emitidas-por-la-entidad'} />
            }
          />
          <Route
            path="/marco-legal/convenios-institucionales"
            element={<LeyDeMarcoLegal slug={'convenios-institucionales'} />}
          />
          <Route
            path="/gestion-administrativa/gestion-financiera-y-presupuestal"
            element={
              <GestionAdministrativa
                slug={'gestion-financiera-y-presupuestal'}
              />
            }
          />
          <Route
            path="/gestion-administrativa/gestion-de-bienes-e-infraestructura-del-icl"
            element={
              <GestionAdministrativa
                slug={'gestion-de-bienes-e-infraestructura-del-icl'}
              />
            }
          />
          <Route
            path="/gestion-administrativa/gestion-normativa"
            element={<GestionAdministrativa slug={'gestion-normativa'} />}
          />
          <Route
            path="/gestion-administrativa/rendicion-de-cuentas-de-titulares"
            element={
              <GestionAdministrativa
                slug={'rendicion-de-cuentas-de-titulares'}
              />
            }
          />
          <Route
            path="/gestion-administrativa/convocatorias"
            element={<GestionAdministrativa slug={'convocatorias'} />}
          />
          <Route
            path="/gestion-administrativa/memorias-institucionales"
            element={
              <GestionAdministrativa slug={'memorias-institucionales'} />
            }
          />
          <Route
            path="/gestion-administrativa/plan-operativo-institucional"
            element={
              <GestionAdministrativa slug={'plan-operativo-institucional'} />
            }
          />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<Proyecto />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/noticias/:id' element={<Noticia />} />
          <Route path="/icl-capacitaciones" element={<ICLCapacitaciones />} />
          <Route path='/contacto' element={<ContactPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
