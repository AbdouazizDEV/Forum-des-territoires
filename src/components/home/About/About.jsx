import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../../common/Section/Section';
import Button from '../../common/Button/Button';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Section "Justification et Contexte"
 */
const About = () => {
  const { t } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  return (
    <Section id="about" background="default" padding="default">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInLeft}
          className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-8 text-dark"
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          variants={fadeInRight}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {t('about.paragraph1')}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {t('about.paragraph2')}{' '}
            <Link to="/le-forum" className="text-primary"><strong>{t('about.paragraph2Link')}</strong></Link>
            {t('about.paragraph2End')}
          </p>
          <motion.div
            variants={fadeInRight}
            className="mt-8"
          >
            <Link to="/sinscrire-pour-les-panels">
              <Button
                variant="primary"
                size="lg"
                className="px-8"
              >
                {t('common.learnMore')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;

