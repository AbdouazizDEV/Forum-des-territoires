import Hero from '../../components/home/Hero/Hero';
import About from '../../components/home/About/About';
import Pillars from '../../components/home/Pillars/Pillars';
import Resources from '../../components/home/Resources/Resources';
import Stats from '../../components/home/Stats/Stats';

/**
 * Page d'accueil du Forum des Territoires
 */
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Resources />
      <Stats />
    </>
  );
};

export default Home;

