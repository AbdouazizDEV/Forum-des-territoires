import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sprout, MapPin, Zap, Building, Waves, Smartphone, Users } from 'lucide-react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { RESOURCE_SECTORS } from '../../../utils/constants';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Section "Ressources Territoriales"
 */
const Resources = () => {
  const { ref, controls } = useScrollAnimation();

  const iconMap = {
    Sprout,
    MapPin,
    Zap,
    Building,
    Waves,
    Smartphone,
    Users
  };

  return (
    <Section id="resources" background="default" padding="default">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-dark"
        >
          Ressources Territoriales
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center !text-dark text-lg mb-4 max-w-3xl mx-auto"
        >
          Le Sénégal demeure un pilier central du Forum, notamment à travers ses six pôles de développement (Sine Saloum, Casamance, Sénégal Oriental, Dakar/Thiès, Triangle Touba–Louga, Delta du Fleuve Sénégal). Cependant, cette deuxième édition ouvrira la parole à d’autres pays africains qui présenteront, eux aussi, leurs potentialités sectorielles leurs stratégies territoriales et leurs projets bankables.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-center !text-dark text-lg mb-12 max-w-3xl mx-auto"
        >
          Découvrez les secteurs d'opportunités porteurs de croissance et de développement durable
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RESOURCE_SECTORS.map((sector, index) => {
            const Icon = iconMap[sector.icon];
            return (
              <motion.div
                key={sector.id}
                variants={fadeInUp}
                custom={index}
              >
                <Link to={`/ressources#${sector.slug}`}>
                  <Card
                    variant="interactive"
                    className="h-full group hover:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-12 h-12 bg-gradient-to-br from-primary to-accent-orange rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-secondary group-hover:to-accent-teal transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2 text-dark group-hover:text-primary transition-colors">
                          {sector.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Resources;

