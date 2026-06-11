import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Section from '../../common/Section/Section';
import {
  ALL_PARTNER_LOGOS,
  MAJOR_PARTNER_LOGOS,
  SECONDARY_PARTNER_LOGOS
} from '../../../config/partnersLogos';

/**
 * Logos partenaires — variantes :
 * - homeSection : section complète + défilement (tous les logos ou secondaires selon usage)
 * - topBar : 5 partenaires principaux, bandeau compact sous le header
 * - footerMarquee : partenaires « secondaires », même style carte + défilement infini
 */
const PartenairesLogos = ({ variant = 'homeSection' }) => {
  const { t } = useTranslation();

  const partnerLogos =
    variant === 'topBar'
      ? MAJOR_PARTNER_LOGOS
      : variant === 'footerMarquee'
        ? SECONDARY_PARTNER_LOGOS
        : ALL_PARTNER_LOGOS;

  const duplicatedLogos = [...partnerLogos, ...partnerLogos];
  const itemWidth = variant === 'topBar' ? 120 : variant === 'footerMarquee' ? 140 : 192;
  const gap = variant === 'topBar' ? 24 : variant === 'footerMarquee' ? 32 : 48;
  const setWidth = partnerLogos.length * (itemWidth + gap);
  const duration = variant === 'topBar' ? 28 : variant === 'footerMarquee' ? 35 : 40;

  const cardClass =
    variant === 'topBar'
      ? 'w-24 h-16 md:w-28 md:h-20 p-2 rounded-xl border border-gray-200/80'
      : variant === 'footerMarquee'
        ? 'w-28 h-20 md:w-36 md:h-24 p-3 rounded-xl border-2 border-gray-200'
        : 'w-32 md:w-48 h-28 md:h-40 p-4 md:p-6 rounded-2xl border-2 border-gray-200';

  const inner = (
    <>
      {variant !== 'topBar' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${variant === 'footerMarquee' ? 'mb-6' : 'mb-12'}`}
        >
          <h2
            className={`font-display font-bold text-dark ${
              variant === 'footerMarquee' ? 'text-xl md:text-2xl mb-2' : 'text-3xl md:text-4xl mb-4'
            }`}
          >
            {variant === 'footerMarquee' ? t('partners.footerStripTitle') : t('partners.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto" />
        </motion.div>
      )}

      <div className={`relative overflow-hidden ${variant === 'topBar' ? 'py-2' : 'py-4 md:py-8'}`}>
        <div className="flex">
          <motion.div
            className={`flex ${variant === 'topBar' ? 'gap-4 md:gap-6' : 'gap-8 md:gap-12'}`}
            animate={{ x: [0, -setWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration,
                ease: 'linear'
              }
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${variant}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: itemWidth }}
              >
                <div
                  className={`w-full h-full bg-white flex items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 group overflow-hidden shadow-sm ${cardClass}`}
                >
                  <img
                    src={logo}
                    alt={`${t('partners.title')} ${(index % partnerLogos.length) + 1}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );

  if (variant === 'topBar') {
    return (
      <div className="border-b border-gray-200/80 bg-gradient-to-r from-white via-primary/5 to-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{inner}</div>
      </div>
    );
  }

  if (variant === 'footerMarquee') {
    return (
      <div className="bg-gray-50/90 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 md:py-8">{inner}</div>
      </div>
    );
  }

  return (
    <Section id="partenaires-logos" background="default" padding="lg">
      <div className="max-w-7xl mx-auto">{inner}</div>
    </Section>
  );
};

PartenairesLogos.propTypes = {
  variant: PropTypes.oneOf(['homeSection', 'topBar', 'footerMarquee'])
};

export default PartenairesLogos;
