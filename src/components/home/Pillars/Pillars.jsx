import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Building2, Handshake } from 'lucide-react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { PILLARS } from '../../../utils/constants';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Section "Pourquoi ce Forum ?" - Les 3 piliers
 */
const Pillars = () => {
  const { t } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  const iconMap = {
    MessageSquare,
    Building2,
    Handshake
  };

  return (
    <Section id="pillars" background="gradient" padding="default">
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
          {t('pillars.title')}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center !text-dark text-lg mb-12 max-w-2xl mx-auto"
        >
          {t('pillars.subtitle')}
          <br />
          <strong className="text-primary">{t('pillars.subtitleBold')}</strong>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            const pillarKey = `pillar${pillar.id}`;
            return (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                custom={index}
              >
                <Card variant="withIcon" className="h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl mb-4 text-dark">
                    {t(`pillars.${pillarKey}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`pillars.${pillarKey}.description`)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Pillars;



