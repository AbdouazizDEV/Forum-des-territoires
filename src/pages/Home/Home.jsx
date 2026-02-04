import Hero from '../../components/home/Hero/Hero';
import About from '../../components/home/About/About';
import Pillars from '../../components/home/Pillars/Pillars';
import Resources from '../../components/home/Resources/Resources';
import Stats from '../../components/home/Stats/Stats';
import ProgrammeHighlights from '../../components/home/ProgrammeHighlights/ProgrammeHighlights';
import SpeakersInternationaux from '../../components/home/SpeakersInternationaux/SpeakersInternationaux';
import EditionsPrecedentes from '../../components/home/EditionsPrecedentes/EditionsPrecedentes';
import ActualitesInsights from '../../components/home/ActualitesInsights/ActualitesInsights';
import AcheterPass from '../../components/home/AcheterPass/AcheterPass';
import CallToActionReservation from '../../components/home/CallToActionReservation/CallToActionReservation';
import PartenairesLogos from '../../components/home/PartenairesLogos/PartenairesLogos';
import CallToActionPartners from '../../components/home/CallToActionPartners/CallToActionPartners';

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
      <ProgrammeHighlights />
      <SpeakersInternationaux />
      <EditionsPrecedentes />
      <ActualitesInsights />
      <AcheterPass />
      <CallToActionReservation />
      <PartenairesLogos />
      <CallToActionPartners />
      <Stats />
    </>
  );
};

export default Home;

