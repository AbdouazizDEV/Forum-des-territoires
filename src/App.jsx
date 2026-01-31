import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
import APropos from './pages/APropos/APropos';
import Programme from './pages/Programme/Programme';
import Speakers from './pages/Speakers/Speakers';
import EditionsPrecedentes from './pages/EditionsPrecedentes/EditionsPrecedentes';
import Actualites from './pages/Actualites/Actualites';
import Partners from './pages/Partners/Partners';
import Participer from './pages/Participer/Participer';
import Reserver from './pages/Reserver/Reserver';
import Stand from './pages/Stand/Stand';
import Forum from './pages/Forum/Forum';
import Resources from './pages/Resources/Resources';
import Format from './pages/Format/Format';
import Lieu from './pages/Lieu/Lieu';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

/**
 * Composant App principal avec routing
 */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/editions-precedentes" element={<EditionsPrecedentes />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/participer" element={<Participer />} />
          <Route path="/reserver" element={<Reserver />} />
          <Route path="/stand" element={<Stand />} />
          {/* Routes legacy pour compatibilité */}
          <Route path="/le-forum" element={<Forum />} />
          <Route path="/ressources" element={<Resources />} />
          <Route path="/le-format" element={<Format />} />
          <Route path="/lieu-et-periode" element={<Lieu />} />
          <Route path="/gallerie" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edition-1" element={<EditionsPrecedentes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
