import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { EXPOSITION_SPACES } from '../../../services/expositionSpacesService';
import { translateExpositionSpaces } from '../../../utils/expositionTranslations';
import { Check, Award, Sparkles } from 'lucide-react';
import visibiliteImage from '../../../assets/images/visibilité.jpg';

/**
 * Section Espaces d'exposition - Style magnifique avec image
 */
const ExpositionSection = () => {
  const { t, i18n } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  const spaces = useMemo(() => {
    return translateExpositionSpaces(EXPOSITION_SPACES, t, i18n);
  }, [t, i18n]);

  return (
    <Section id="exposition" background="default" padding="lg">
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            {t('exposition.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('exposition.subtitle')}
          </p>
        </motion.div>

        {/* Image Hero */}
        <motion.div
          variants={fadeInUp}
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div 
            className="relative min-h-[400px] md:min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${visibiliteImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent-orange/70 to-secondary/80"></div>
            
            {/* Contenu overlay */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                    {t('exposition.maximizeVisibility')}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {t('exposition.maximizeDescription')}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Effets décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {/* Packages d'exposition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => {
            const Icon = space.icon;
            const isPremium = space.id === 'premium';
            return (
              <motion.div
                key={space.id}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative ${isPremium ? 'lg:-mt-4 lg:-mb-4' : ''}`}
              >
                {isPremium && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl z-20"
                  >
                    {t('exposition.premium')}
                  </motion.div>
                )}
                <Card 
                  variant="default" 
                  className={`h-full relative overflow-hidden group border-2 ${space.borderColor} ${isPremium ? 'shadow-2xl' : 'shadow-lg hover:shadow-2xl'} transition-all duration-300`}
                >
                  {/* Header avec gradient */}
                  <div className={`bg-gradient-to-br ${space.color} p-8 relative`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-white/50 to-accent-orange"></div>
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                        {space.name}
                      </h3>
                      <div className="w-16 h-0.5 bg-white/50 mx-auto mb-3"></div>
                      <p className="text-sm text-white/90 font-medium mb-3">
                        {space.subtitle}
                      </p>
                      <div className="inline-flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                        <span className="text-lg font-bold">{space.surface}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body avec inclus */}
                  <div className="p-6 bg-white relative">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-orange"></div>
                    <h4 className="font-display font-semibold text-lg mb-4 text-dark text-center">
                      {t('exposition.included')}
                    </h4>
                    <div className="space-y-3 mb-6">
                      {space.included.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={itemIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <ItemIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm leading-relaxed flex-1">
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent-orange/5 rounded-lg p-4 border border-primary/10">
                      <p className="text-gray-700 text-sm leading-relaxed text-center italic">
                        {space.benefits}
                      </p>
                    </div>
                  </div>

                  {/* Accent en bas */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${space.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default ExpositionSection;

