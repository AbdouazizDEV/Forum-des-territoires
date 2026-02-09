import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import ObjectifsSection from '../../components/a-propos/ObjectifsSection/ObjectifsSection';
import ParticipantsSection from '../../components/a-propos/ParticipantsSection/ParticipantsSection';
import PartenairesSection from '../../components/a-propos/PartenairesSection/PartenairesSection';
import ExpositionSection from '../../components/a-propos/ExpositionSection/ExpositionSection';
import CommunicationSection from '../../components/a-propos/CommunicationSection/CommunicationSection';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Sparkles, Eye, Lightbulb, CircleDollarSign, DollarSign, Network, Link2, ShieldCheck, Building, TrendingUp, Handshake, Globe } from 'lucide-react';
import heroImage from '../../assets/images/hero.png';
import presentationImage from '../../assets/images/1000319723.jpg';
import themeImage from '../../assets/images/théme.jpg';
import galleryImage2 from '../../assets/images/img2.jpg';
import galleryImage3 from '../../assets/images/img3.jpg';
import galleryImage5 from '../../assets/images/img5.jpg';
import galleryImage1 from '../../assets/images/img4.jpg';
import galleryImage6 from '../../assets/images/img6.jpg';
import galleryImage7 from '../../assets/images/img7.jpg';

/**
 * Page "A propos" avec 3 sections stylées et animées
 * Présentation, Objectifs, Participants
 */
const APropos = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { ref: refPresentation, controls: controlsPresentation } = useScrollAnimation();
  const { ref: refTheme, controls: controlsTheme } = useScrollAnimation();

  // Tableau des images de la galerie - facilement extensible
  const galleryImages = [
    galleryImage2,
    galleryImage3,
    galleryImage5,
    galleryImage1,
    galleryImage6,
    galleryImage7
    // Ajouter d'autres images ici si nécessaire
    // Exemple: import newImage from '../../assets/images/newImage.jpg';
    // puis ajouter: newImage,
  ];

  // État pour le carrousel (seulement si plus de 3 images)
  const [currentIndex, setCurrentIndex] = useState(0);
  const showCarousel = galleryImages.length > 3;
  
  // Nombre d'images à afficher selon la taille d'écran
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 images
      if (window.innerWidth >= 768) return 2;  // md: 2 images
      return 1; // mobile: 1 image
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMaxIndex = () => Math.max(0, galleryImages.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIdx = getMaxIndex();
      const next = prev + 1;
      return next > maxIdx ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIdx = getMaxIndex();
      const prevIndex = prev - 1;
      return prevIndex < 0 ? maxIdx : prevIndex;
    });
  };

  // Calculer maxIndex pour les indicateurs
  const maxIndex = getMaxIndex();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-primary-dark"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent-orange/80 to-primary-dark/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
        >
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            {t('aPropos.pageTitle')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            {t('aPropos.pageSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* Section Présentation */}
      <Section id="presentation" background="default" padding="lg">
        <motion.div
          ref={refPresentation}
          initial="initial"
          animate={controlsPresentation}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              {t('aPropos.presentation.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aPropos.presentation.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image de présentation */}
            <motion.div
              variants={fadeInLeft}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={presentationImage}
                  alt="Présentation du Forum des Territoires"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-orange/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={fadeInRight}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <h3 className="font-display font-bold text-2xl mb-4 text-dark">
                  {t('aPropos.presentation.forumTitle')}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {t('aPropos.presentation.paragraph1')}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {t('aPropos.presentation.paragraph2')}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('aPropos.presentation.paragraph3')} <strong className="text-primary">{t('aPropos.presentation.paragraph3Highlight')}</strong>{t('aPropos.presentation.paragraph3End')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery - Carrousel si plus de 3 images, sinon grille */}
          {showCarousel ? (
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {galleryImages
                      .slice(currentIndex, currentIndex + visibleCount)
                      .map((image, idx) => {
                        const actualIndex = currentIndex + idx;
                        return (
                          <motion.div
                            key={`${currentIndex}-${actualIndex}`}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer"
                          >
                            <motion.img
                              src={image}
                              alt={`${t('aPropos.presentation.galleryAlt')} ${actualIndex + 1}`}
                              className="w-full h-full object-cover"
                              initial={{ scale: 1.1 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            />
                          </motion.div>
                        );
                      })}
                  </motion.div>
                </AnimatePresence>

                {/* Boutons de navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </button>
              </div>

              {/* Indicateurs de position */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller à la slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <motion.img
                    src={image}
                    alt={`${t('aPropos.presentation.galleryAlt')} ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Section>

      {/* Section Thème */}
      <Section id="theme" background="default" padding="lg">
        <motion.div
          ref={refTheme}
          initial="initial"
          animate={controlsTheme}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              {t('aPropos.theme.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aPropos.theme.subtitle')}
            </p>
          </motion.div>

          {/* Section Thème avec image stylée */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            {/* Image de fond avec overlay */}
            <div 
              className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${themeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent-orange/85 to-primary-dark/90"></div>
              
              {/* Contenu */}
              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    variants={fadeInUp}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {t('aPropos.theme.centralTheme')}
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInLeft}
                    className="mb-8"
                  >
                    <div className="relative pl-6 border-l-4 border-accent-orange">
                      <h4 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                        {t('aPropos.theme.themeQuote')}
                      </h4>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInRight}
                    className="space-y-6 text-white/95"
                  >
                    <p className="text-lg md:text-xl leading-relaxed">
                      {t('aPropos.theme.paragraph1')}
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                      {t('aPropos.theme.paragraph2')}
                    </p>
                  </motion.div>

                  {/* Éléments décoratifs */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-12 flex flex-wrap gap-4"
                  >
                    {[
                      t('aPropos.theme.pillars.governance'),
                      t('aPropos.theme.pillars.justice'),
                      t('aPropos.theme.pillars.land'),
                      t('aPropos.theme.pillars.financing'),
                      t('aPropos.theme.pillars.innovation'),
                      t('aPropos.theme.pillars.resilience')
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white font-medium text-sm md:text-base"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Effets décoratifs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Cards informatives supplémentaires */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Building,
                title: t('aPropos.theme.ecosystem.title'),
                description: t('aPropos.theme.ecosystem.description')
              },
              {
                icon: TrendingUp,
                title: t('aPropos.theme.economic.title'),
                description: t('aPropos.theme.economic.description')
              },
              {
                icon: Handshake,
                title: t('aPropos.theme.investment.title'),
                description: t('aPropos.theme.investment.description')
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="default" className="h-full text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10 p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-xl mb-3 text-dark">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Section Vision */}
          <motion.div
            variants={fadeInUp}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-primary/5 via-accent-orange/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              {/* Vision */}
              <motion.div
                variants={fadeInLeft}
                className="mb-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-2 h-16 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-dark mb-4">
                      {t('aPropos.theme.vision.label')}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                      {t('aPropos.theme.vision.text')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Positionnement stratégique */}
              <motion.div
                variants={fadeInRight}
                className="mb-8"
              >
                <h4 className="font-display font-bold text-2xl md:text-3xl text-primary mb-8 underline decoration-primary decoration-2 underline-offset-4">
                  {t('aPropos.theme.strategicPositioning')}
                </h4>
              </motion.div>

              {/* Grille des 6 domaines stratégiques */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Building,
                    title: t('aPropos.theme.domains.institutional.title'),
                    description: t('aPropos.theme.domains.institutional.description')
                  },
                  {
                    icon: DollarSign,
                    title: t('aPropos.theme.domains.economic.title'),
                    description: t('aPropos.theme.domains.economic.description')
                  },
                  {
                    icon: CircleDollarSign,
                    title: t('aPropos.theme.domains.investment.title'),
                    description: t('aPropos.theme.domains.investment.description')
                  },
                  {
                    icon: Lightbulb,
                    title: t('aPropos.theme.domains.innovation.title'),
                    description: t('aPropos.theme.domains.innovation.description')
                  },
                  {
                    icon: Globe,
                    title: t('aPropos.theme.domains.territories.title'),
                    description: t('aPropos.theme.domains.territories.description')
                  },
                  {
                    icon: Handshake,
                    title: t('aPropos.theme.domains.cooperation.title'),
                    description: t('aPropos.theme.domains.cooperation.description')
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-primary transition-all duration-300 h-full">
                        {/* Header avec icône */}
                        <div className="bg-primary from-primary to-primary-dark p-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Body avec texte */}
                        <div className="p-6 bg-white">
                          <h5 className="font-display font-bold text-xl text-dark mb-3 text-center">
                            {item.title}
                          </h5>
                          <p className="text-gray-600 text-sm leading-relaxed text-center">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section Objectifs */}
      <ObjectifsSection />

      {/* Section Participants */}
      <ParticipantsSection />

      {/* Section Partenaires */}
      <PartenairesSection />

      {/* Section Espaces d'exposition */}
      <ExpositionSection />

      {/* Section Communication & Visibilité */}
      <CommunicationSection />
    </div>
  );
};

export default APropos;
