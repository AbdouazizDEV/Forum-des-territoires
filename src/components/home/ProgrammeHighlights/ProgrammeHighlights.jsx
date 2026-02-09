import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Calendar, Clock, MapPin, Users, Sun, Moon, Building2, Handshake, Award } from 'lucide-react';

/**
 * Section Programme Highlights - Basé sur le programme réel
 */
const ProgrammeHighlights = () => {
  const { t } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  // Utiliser useMemo pour recréer les highlights quand la langue change
  const highlights = useMemo(() => [
    {
      id: 1,
      title: t('programmeHighlights.preForum'),
      subtitle: t('programmeHighlights.fieldVisit'),
      date: t('programmeHighlights.dates.june3'),
      day: t('programmeHighlights.days.wednesday'),
      time: t('programmeHighlights.time.14h'),
      location: t('programmeHighlights.location'),
      description: t('programmeHighlights.descriptions.preForum'),
      icon: Building2,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: t('programmeHighlights.opening'),
      subtitle: t('programmeHighlights.openingCeremony'),
      date: t('programmeHighlights.dates.june4'),
      day: t('programmeHighlights.days.thursday'),
      time: t('programmeHighlights.fullDay'),
      location: t('programmeHighlights.location'),
      description: t('programmeHighlights.descriptions.opening'),
      icon: Award,
      color: "from-accent-orange to-primary"
    },
    {
      id: 3,
      title: t('programmeHighlights.economicDay'),
      subtitle: t('programmeHighlights.cooperation'),
      date: t('programmeHighlights.dates.june5'),
      day: t('programmeHighlights.days.friday'),
      time: t('programmeHighlights.fullDay'),
      location: t('programmeHighlights.location'),
      description: t('programmeHighlights.descriptions.economicDay'),
      icon: Handshake,
      color: "from-secondary to-secondary-dark"
    },
    {
      id: 4,
      title: t('programmeHighlights.commitments'),
      subtitle: t('programmeHighlights.closingGala'),
      date: t('programmeHighlights.dates.june6'),
      day: t('programmeHighlights.days.saturday'),
      time: t('programmeHighlights.fullDay'),
      location: t('programmeHighlights.location'),
      description: t('programmeHighlights.descriptions.commitments'),
      icon: Users,
      color: "from-accent-teal to-secondary"
    }
  ], [t]);

  return (
    <Section id="programme-highlights" background="default" padding="lg">
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
            {t('programmeHighlights.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('programmeHighlights.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.id}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card variant="default" className="h-full relative overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Header avec gradient */}
                  <div className={`bg-gradient-to-br ${highlight.color} p-6 text-white relative`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-white/50 to-accent-orange"></div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{highlight.day}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-2">
                        {highlight.subtitle}
                      </p>
                      <div className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                        {highlight.date}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 bg-white relative">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-orange"></div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{highlight.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{highlight.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Accent en bas */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/programme">
            <Button variant="primary" size="lg" className="px-8 group">
              {t('programmeHighlights.seeFullProgram')}
              <Calendar className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProgrammeHighlights;
