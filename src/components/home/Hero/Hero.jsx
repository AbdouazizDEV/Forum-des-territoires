import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { HERO_STATS } from '../../../utils/constants';
import AnimatedCounter from '../../common/AnimatedCounter/AnimatedCounter';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from '../../../assets/images/1000319723.jpg';
import heroImage2 from '../../../assets/images/théme.jpg';
import heroImage3 from '../../../assets/images/ima3.jpg';

/**
 * Composant Hero - Carrousel avec 3 slides
 * Slide 1: Contenu principal avec stats
 * Slide 2: Incitation à réserver
 * Slide 3: Incitation à devenir partenaire
 */
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 0,
      title: "L'habitat comme écosystème de vie, d'activités",
      title2: "économiques et d'investissement territorial",
      subtitle: "Batir ensemble les villes et territoires de demain - Bruxelles, 3-6 Juin 2026",
      backgroundImage: heroImage1,
      showStats: true,
      buttons: [
        { text: "Reserver ma place", link: "/reserver", variant: "secondary", className: "bg-white border-2 border-primary !text-black hover:bg-primary hover:!text-white" },
        { text: "Prendre un stand", link: "/stand", variant: "outline", className: "bg-amber-700 border-2 border-white text-white hover:bg-amber-800 hover:border-white" }
      ]
    },
    {
      id: 1,
      title: "Réservez votre place dès maintenant",
      title2: "et participez à l'événement de l'année",
      subtitle: "Rejoignez des centaines de participants pour échanger, apprendre et construire l'avenir des territoires ensemble",
      backgroundImage: heroImage2,
      showStats: false,
      highlight: "Places limitées",
      buttons: [
        { text: "Reserver ma place", link: "/reserver", variant: "secondary", className: "bg-white border-2 border-white !text-blue-600 hover:bg-blue-50 hover:!text-blue-700 shadow-xl" }
      ]
    },
    {
      id: 2,
      title: "Devenez partenaire du Forum",
      title2: "et valorisez votre entreprise",
      subtitle: "Profitez d'une visibilité exceptionnelle auprès d'un public ciblé et participez à un événement d'envergure internationale",
      backgroundImage: heroImage3,
      showStats: false,
      highlight: "Opportunités exclusives",
      buttons: [
        { text: "Devenir partenaire", link: "/partenaires", variant: "secondary", className: "bg-white border-2 border-white !text-emerald-600 hover:bg-emerald-50 hover:!text-emerald-700 shadow-xl" }
      ]
    }
  ];

  // Auto-play carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000); // Change toutes les 30 secondes

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-0">
      {/* Background avec image animée */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          {/* Image de fond */}
          <motion.img
            src={currentSlideData.backgroundImage}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onError={(e) => {
              console.error('Erreur de chargement de l\'image:', currentSlideData.backgroundImage);
              // Fallback vers un gradient si l'image ne charge pas
              e.target.style.display = 'none';
            }}
          />
          {/* Fallback gradient si l'image ne charge pas */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600" style={{ display: 'none' }} id="gradient-fallback"></div>
          
          {/* Overlay sombre pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
          
          {/* Effets décoratifs animés */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
          >
            {/* Left Side - Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-white order-2 lg:order-1"
            >
              {/* Highlight Badge */}
              {currentSlideData.highlight && (
                <motion.div
                  variants={fadeInUp}
                  className="inline-block mb-4 sm:mb-5"
                >
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm sm:text-base font-semibold border border-white/30">
                    {currentSlideData.highlight}
                  </span>
                </motion.div>
              )}

              {/* Main Title */}
              <motion.h1
                variants={fadeInUp}
                className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight sm:leading-snug md:leading-tight lg:leading-tight text-white"
              >
                {currentSlideData.title}{' '}
                <br className="hidden sm:block" />
                {currentSlideData.title2}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-7 md:mb-8 lg:mb-10 text-white/95 leading-relaxed"
              >
                {currentSlideData.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5"
              >
                {currentSlideData.buttons.map((button, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link to={button.link} className="w-full sm:w-auto block">
                      <Button
                        variant={button.variant}
                        size="lg"
                        className={`w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ${button.className}`}
                      >
                        {button.text}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Stats Box ou contenu alternatif */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:flex justify-end order-1 lg:order-2"
            >
              {currentSlideData.showStats ? (
                <div className="bg-orange-500/40 backdrop-blur-md rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-2xl w-full max-w-full lg:max-w-none border-2 border-orange-200/50">
                  <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {HERO_STATS.map((stat, index) => (
                      <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="mb-1 sm:mb-2">
                          {stat.suffix.includes('K') ? (
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white block">
                              {stat.value}K+
                            </span>
                          ) : (
                            <AnimatedCounter
                              value={stat.value}
                              suffix={stat.suffix}
                              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                            />
                          )}
                        </div>
                        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight sm:leading-normal">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-2xl w-full max-w-full lg:max-w-md border border-white/20"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <div className="text-6xl sm:text-7xl md:text-8xl mb-4">✨</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentSlide === 1 ? "Rejoignez-nous !" : "Partenairez avec nous !"}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      {currentSlide === 1 
                        ? "Ne manquez pas cette opportunité unique" 
                        : "Bénéficiez d'une visibilité maximale"}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Cachées en mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 group items-center justify-center"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 group items-center justify-center"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'bg-white w-8 sm:w-10 h-2 sm:h-3'
                : 'bg-white/50 w-2 sm:w-3 h-2 sm:h-3 hover:bg-white/70'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 hidden sm:block z-20"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
