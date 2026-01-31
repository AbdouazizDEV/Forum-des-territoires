import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { User, Briefcase, Globe } from 'lucide-react';

/**
 * Page Speakers
 */
const Speakers = () => {
  const { ref, controls } = useScrollAnimation();

  const speakers = [
    {
      name: "Dr. Amadou Ba",
      role: "Ministre de l'Urbanisme",
      country: "Sénégal",
      bio: "Expert en développement territorial et aménagement urbain"
    },
    {
      name: "Marie Dubois",
      role: "Directrice de la Coopération",
      country: "Belgique",
      bio: "Spécialiste en coopération décentralisée"
    },
    {
      name: "Prof. Jean Koffi",
      role: "Chercheur en Habitat",
      country: "Côte d'Ivoire",
      bio: "Expert en politiques de logement social"
    },
    {
      name: "Sarah Johnson",
      role: "Investisseur Immobilier",
      country: "Luxembourg",
      bio: "Spécialiste en financement de projets urbains"
    },
    {
      name: "Dr. Fatou Diallo",
      role: "Architecte Urbaniste",
      country: "Sénégal",
      bio: "Pionnière en architecture durable et inclusive"
    },
    {
      name: "Pierre Martin",
      role: "Expert en Développement",
      country: "France",
      bio: "Consultant international en aménagement territorial"
    }
  ];

  return (
    <Section id="speakers" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark text-center"
        >
          Speakers
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Découvrez nos intervenants experts qui partageront leur vision et leur expertise
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <Card variant="withIcon" className="h-full text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{speaker.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <p className="text-primary font-medium">{speaker.role}</p>
                </div>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <p className="text-gray-600 text-sm">{speaker.country}</p>
                </div>
                <p className="text-gray-600 text-sm">{speaker.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Speakers;

