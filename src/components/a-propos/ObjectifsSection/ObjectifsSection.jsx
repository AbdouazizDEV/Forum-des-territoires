import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { OBJECTIFS_DATA } from '../../../services/objectifsService';
import { translateObjectifs } from '../../../utils/objectifsTranslations';

/**
 * Section Objectifs du Forum - Style vert et jaune
 */
const ObjectifsSection = () => {
  const { t, i18n } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  const objectifs = useMemo(() => {
    return translateObjectifs(OBJECTIFS_DATA, t, i18n);
  }, [t, i18n]);

  return (
    <Section id="objectifs" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
        style={{ opacity: 1 }}
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-accent-orange rounded-2xl mb-6 shadow-lg">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-white text-3xl font-bold"
            >
              4
            </motion.div>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            {t('objectifs.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('objectifs.subtitle')}
          </p>
        </motion.div>

        {/* Objectifs Cards - Layout 3 en haut, 2 en bas avec style vert/jaune */}
        <div className="space-y-8">
          {/* Première rangée : 3 objectifs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectifs.slice(0, 3).map((objectif, index) => {
              const Icon = objectif.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Card variant="default" className="h-full relative overflow-hidden group border-2 border-transparent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Header avec icône - Style vert */}
                    <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 relative">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-accent-orange/80 to-accent-orange"></div>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    {/* Body avec texte */}
                    <div className="p-6 bg-white relative">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent-orange"></div>
                      <h3 className="font-display font-bold text-lg mb-3 text-dark text-center leading-tight">
                        {objectif.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {objectif.description}
                      </p>
                      {/* Accent jaune en bas */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Deuxième rangée : 2 objectifs centrés */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectifs.slice(3, 5).map((objectif, index) => {
              const Icon = objectif.icon;
              return (
                <motion.div
                  key={index + 3}
                  variants={fadeInUp}
                  custom={index + 3}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Card variant="default" className="h-full relative overflow-hidden group border-2 border-transparent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Header avec icône - Style vert */}
                    <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 relative">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-accent-orange/80 to-accent-orange"></div>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    {/* Body avec texte */}
                    <div className="p-6 bg-white relative">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent-orange"></div>
                      <h3 className="font-display font-bold text-lg mb-3 text-dark text-center leading-tight">
                        {objectif.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {objectif.description}
                      </p>
                      {/* Accent jaune en bas */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Élément décoratif en bas */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex justify-center"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-secondary via-accent-orange to-secondary rounded-full"></div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ObjectifsSection;

