import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { User, Globe, Briefcase, Award } from 'lucide-react';
import { SPEAKERS_DATA } from '../../../services/speakersService';

/**
 * Section Speakers Internationaux - Affiche les 4 premiers speakers
 */
const SpeakersInternationaux = () => {
  const { ref, controls } = useScrollAnimation();

  // Afficher les 4 premiers speakers pour la page d'accueil
  const featuredSpeakers = SPEAKERS_DATA.slice(0, 4);

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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-dark">
            Speakers Internationaux
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rencontrez les experts et décideurs qui façonneront l'avenir des territoires
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card variant="default" className="h-full text-center relative overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Photo placeholder avec gradient */}
                <div className="relative h-48 bg-gradient-to-br from-primary via-accent-orange to-secondary overflow-hidden">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                        <User className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Badge pays */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                    <Globe className="w-3 h-3 text-primary" />
                    <span className="text-xs font-semibold text-gray-700">{speaker.country}</span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 bg-white relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary"></div>
                  <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-dark leading-tight">
                    {speaker.title} {speaker.name}
                </h3>
                  <div className="flex items-center justify-center space-x-2 mb-3 text-primary">
                    <Briefcase className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm font-medium text-center leading-tight">{speaker.role}</p>
                </div>
                  {speaker.bio && (
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                      {speaker.bio}
                    </p>
                  )}
                </div>

                {/* Accent en bas au hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/speakers">
            <Button variant="secondary" size="lg" className="px-8 group">
              Voir tous les speakers
              <Globe className="w-5 h-5 ml-2 inline group-hover:rotate-12 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default SpeakersInternationaux;
