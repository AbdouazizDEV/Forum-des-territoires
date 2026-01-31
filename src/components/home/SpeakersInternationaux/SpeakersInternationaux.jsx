import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { User, Globe, Briefcase } from 'lucide-react';

/**
 * Section Speakers Internationaux
 */
const SpeakersInternationaux = () => {
  const { ref, controls } = useScrollAnimation();

  const speakers = [
    {
      id: 1,
      name: "Expert International",
      role: "Spécialiste en Développement Territorial",
      country: "Europe",
      image: null
    },
    {
      id: 2,
      name: "Décideur Africain",
      role: "Ministre du Développement Local",
      country: "Afrique",
      image: null
    },
    {
      id: 3,
      name: "Investisseur Privé",
      role: "Directeur Investissements",
      country: "International",
      image: null
    },
    {
      id: 4,
      name: "Expert Technique",
      role: "Consultant en Coopération",
      country: "International",
      image: null
    }
  ];

  return (
    <Section id="speakers-internationaux" background="gradient" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-dark">
            Speakers Internationaux
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rencontrez les experts et décideurs qui façonneront l'avenir des territoires
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card variant="default" className="h-full p-6 text-center relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-dark">
                  {speaker.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">{speaker.role}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{speaker.country}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/speakers">
            <Button variant="secondary" size="lg" className="px-8">
              Voir tous les speakers
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default SpeakersInternationaux;

