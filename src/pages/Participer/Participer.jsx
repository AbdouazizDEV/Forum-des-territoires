import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Users, Building, Handshake, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Page Participer
 */
const Participer = () => {
  const { t } = useTranslation();
  const { ref, controls } = useScrollAnimation();

  const participationTypes = [
    {
      icon: Users,
      title: t('participer.participant.title'),
      description: t('participer.participant.description'),
      benefits: [
        t('participer.participant.benefits.access'),
        t('participer.participant.benefits.networking'),
        t('participer.participant.benefits.documentation'),
        t('participer.participant.benefits.certificate')
      ],
      price: "",
      redirectTo: "/reserver",
      redirectParams: { participationType: "participant" }
    },
    {
      icon: Building,
      title: t('participer.exposant.title'),
      description: t('participer.exposant.description'),
      benefits: [
        t('participer.exposant.benefits.stand'),
        t('participer.exposant.benefits.visibility'),
        t('participer.exposant.benefits.marketing'),
        t('participer.exposant.benefits.vip')
      ],
      price: t('participer.exposant.price'),
      redirectTo: "/reserver",
      redirectParams: { participationType: "exposant" }
    },
    {
      icon: Handshake,
      title: t('participer.partenaire.title'),
      description: t('participer.partenaire.description'),
      benefits: [
        t('participer.partenaire.benefits.visibility'),
        t('participer.partenaire.benefits.intervention'),
        t('participer.partenaire.benefits.stand'),
        t('participer.partenaire.benefits.invitations')
      ],
      price: t('participer.partenaire.price'),
      redirectTo: "/contact",
      redirectParams: { participationType: "partenaire" }
    },
    {
      icon: Target,
      title: t('participer.speaker.title'),
      description: t('participer.speaker.description'),
      benefits: [
        t('participer.speaker.benefits.intervention'),
        t('participer.speaker.benefits.media'),
        t('participer.speaker.benefits.vip'),
        t('participer.speaker.benefits.networking')
      ],
      price: t('participer.speaker.price'),
      redirectTo: "/contact",
      redirectParams: {}
    }
  ];

  return (
    <Section id="participer" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark text-center"
        >
          {t('participer.title')}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          {t('participer.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {participationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={`participation-type-${index}`}
                variants={fadeInUp}
                custom={index}
              >
                <Card variant="default" className="h-full">
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.benefits.map((benefit, idx) => (
                      <li key={`benefit-${index}-${idx}`} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="font-bold text-xl text-primary">{type.price}</span>
                    <Link 
                      to={Object.keys(type.redirectParams).length > 0 
                        ? {
                            pathname: type.redirectTo,
                            search: new URLSearchParams(type.redirectParams).toString()
                          }
                        : type.redirectTo
                      }
                    >
                      <Button variant="primary" size="md">
                        {t('common.subscribe')}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary to-accent-orange rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-display font-bold text-2xl mb-4">{t('participer.readyToParticipate')}</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t('participer.readyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reserver">
              <Button variant="secondary" size="lg" className="bg-white !text-black !hover:bg-white/90">
                {t('participer.reservePlace')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white !text-white !hover:bg-white !hover:text-black">
                {t('participer.contactUs')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Participer;

