import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { EDITIONS_DATA } from '../../../services/editionsService';
import { Calendar, Users, TrendingUp, Award, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import editionImage from '../../../assets/images/1000319723.jpg';
import { translateEdition } from '../../../utils/editionTranslations';

/**
 * Section Editions Precedentes - Basée sur les données réelles
 */
const EditionsPrecedentes = () => {
  const { t, i18n } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  // Utiliser les données réelles de l'édition 2025 avec traductions
  const edition = useMemo(() => {
    return translateEdition(EDITIONS_DATA[0], t, i18n);
  }, [t, i18n]);

  return (
    <Section id="editions-precedentes" background="default" padding="lg">
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
            {t('editions.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('editions.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
          {/* Carte principale de l'édition */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card variant="default" className="h-full p-8 relative overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
              {/* Header avec gradient */}
              <div className="bg-gradient-to-br from-primary to-accent-orange p-6 text-white mb-6 rounded-xl relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent-orange"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-8 h-8" />
                    <div>
                      <h3 className="font-display font-bold text-2xl">
                        {edition.year}
                      </h3>
                      <div className="flex items-center space-x-2 text-white/90 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edition.location}</span>
                      </div>
                    </div>
                  </div>
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-display font-semibold text-xl mb-2">
                  {edition.title}
                </h4>
                <p className="text-white/90 text-sm italic">
                  {edition.subtitle}
                </p>
              </div>

              {/* Thème */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h5 className="font-display font-semibold text-lg text-dark">
                    {t('editions.theme')}
                  </h5>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {edition.theme}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent-orange/10 rounded-xl border border-primary/20">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-xl text-dark">{edition.highlights[0]}</p>
                  <p className="text-xs text-gray-600 mt-1">{t('stats.participants')}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-secondary-dark/10 rounded-xl border border-secondary/20">
                  <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="font-bold text-xl text-dark">{edition.highlights[2]}</p>
                  <p className="text-xs text-gray-600 mt-1">{t('stats.projects')}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-accent-orange/10 to-primary/10 rounded-xl border border-accent-orange/20">
                  <MapPin className="w-6 h-6 text-accent-orange mx-auto mb-2" />
                  <p className="font-bold text-xl text-dark">{edition.highlights[1]}</p>
                  <p className="text-xs text-gray-600 mt-1">{t('stats.countries')}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-accent-teal/10 to-secondary/10 rounded-xl border border-accent-teal/20">
                  <Award className="w-6 h-6 text-accent-teal mx-auto mb-2" />
                  <p className="font-bold text-xl text-dark">{edition.highlights[3]}</p>
                  <p className="text-xs text-gray-600 mt-1">{t('editions.partnerships')}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {edition.description}
              </p>

              {/* Accent en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          </motion.div>

          {/* Carte Panels */}
          <motion.div
            variants={fadeInUp}
            custom={1}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card variant="default" className="h-full p-8 relative overflow-hidden group border-2 border-transparent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl">
              {/* Header avec gradient */}
              <div className="bg-gradient-to-br from-secondary to-accent-teal p-6 text-white mb-6 rounded-xl relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-orange"></div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">
                      {t('editions.panels')}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {edition.panels.length} {t('editions.thematicPanels')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Liste des panels */}
              <div className="space-y-4">
                {edition.panels.map((panel) => (
                  <div key={panel.id} className="p-4 bg-gradient-to-br from-primary/5 to-accent-orange/5 rounded-xl border-l-4 border-primary">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display font-bold text-lg text-dark">
                        {t('editions.panel')} {panel.id}
                      </h4>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {panel.id === 1 ? t('editions.governance') : t('editions.cooperation')}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-tight mb-2">
                      {panel.title}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-600 text-xs">
                      <Users className="w-3 h-3" />
                      <span>{panel.speakers.length} {t('editions.speakersCount')}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accent en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent-teal to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          </motion.div>
        </div>

        {/* Image de l'édition */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="mb-8"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
            <motion.img
              src={editionImage}
              alt="Forum des Territoires - Édition 2025"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                {t('editions.highlightMoment')}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {t('editions.historicMeeting')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/editions-precedentes">
            <Button variant="primary" size="lg" className="px-8 group">
              {t('editions.learnMore')}
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default EditionsPrecedentes;
