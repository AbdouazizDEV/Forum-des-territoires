import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { User, Briefcase, Globe, Award, Sparkles } from 'lucide-react';
import { SPEAKERS_DATA } from '../../services/speakersService';
import { translateSpeakerRole, translateSpeakerBio, translateSpeakerTitle } from '../../utils/speakerTranslations';

/**
 * Page Speakers - Liste complète des speakers avec style magnifique
 */
const Speakers = () => {
  const { t, i18n } = useTranslation();
  const { ref: refHero, controls: controlsHero } = useScrollAnimation();
  const { ref: refSpeakers, controls: controlsSpeakers } = useScrollAnimation();

  // Traduire les speakers
  const translatedSpeakers = useMemo(() => {
    return SPEAKERS_DATA.map(speaker => ({
      ...speaker,
      translatedTitle: translateSpeakerTitle(speaker.title, t),
      translatedRole: translateSpeakerRole(speaker.role, t, i18n),
      translatedBio: speaker.bio ? translateSpeakerBio(speaker.bio, t, i18n) : ''
    }));
  }, [t, i18n]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          ref={refHero}
          initial="initial"
          animate={controlsHero}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('speakers.pageTitle')}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white via-accent-orange to-white mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              {t('speakers.pageSubtitle')}
            </p>
          </motion.div>
        </motion.div>
        {/* Effets décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Section Speakers */}
      <Section id="speakers" background="default" padding="lg">
        <motion.div
          ref={refSpeakers}
          initial="initial"
          animate={controlsSpeakers}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
          style={{ opacity: 1 }}
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
            style={{ opacity: 1 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark">
              {t('speakers.allSpeakers')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translatedSpeakers.length} {t('speakers.expertsWaiting')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {translatedSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
                style={{ opacity: 1 }}
              >
                <Card variant="default" className="h-full text-center relative overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Photo placeholder avec gradient */}
                  <div className="relative h-56 bg-gradient-to-br from-primary via-accent-orange to-secondary overflow-hidden rounded-t-2xl">
                    {speaker.image ? (
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-2xl"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <User className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all"></div>
                    {/* Badge pays */}
                    {/* <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-lg group-hover:scale-110 transition-transform">
                      <Globe className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-bold text-gray-700">{speaker.country}</span>
                    </div> */}
                    {/* Badge titre si important */}
                    {(speaker.role.includes('Président') || speaker.role.includes('President') || 
                      speaker.role.includes('Ministre') || speaker.role.includes('Minister') || 
                      speaker.role.includes('Directeur') || speaker.role.includes('Director') ||
                      speaker.role.includes('Gouverneur') || speaker.role.includes('Governor')) && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-accent-orange to-primary px-3 py-1.5 rounded-full shadow-lg">
                        <Award className="w-3.5 h-3.5 text-white inline mr-1" />
                        <span className="text-xs font-bold text-white">VIP</span>
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="p-6 bg-white relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary"></div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-dark leading-tight">
                      {speaker.translatedTitle} {speaker.name}
                    </h3>
                    <div className="flex items-start justify-center space-x-2 mb-3 text-primary min-h-[3rem]">
                      <Briefcase className="w-4 h-4 flex-shrink-0 mt-1" />
                      <p className="text-sm font-semibold text-center leading-tight">{speaker.translatedRole}</p>
                    </div>
                    {speaker.translatedBio && (
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-2">
                        {speaker.translatedBio}
                      </p>
                    )}
                    {/* Ligne décorative */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mt-4"></div>
                  </div>

                  {/* Accent en bas au hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Speakers;
