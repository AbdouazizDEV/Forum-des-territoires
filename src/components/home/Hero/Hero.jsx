import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { HERO_STATS } from '../../../utils/constants';
import AnimatedCounter from '../../common/AnimatedCounter/AnimatedCounter';

/**
 * Composant Hero - Section principale conforme à la maquette
 * Dégradé orange vers rouge avec stats box
 */
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 py-8 sm:py-12 md:py-16 lg:py-0">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-white order-2 lg:order-1"
          >
            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-display font-black text-1xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight sm:leading-snug md:leading-tight lg:leading-tight text-white"
            >
              L'habitat comme écosystème de vie, d'activités{' '}
              <br className="hidden sm:block" />
              économiques et d'investissement territorial
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-7 md:mb-8 lg:mb-10 text-white/95 leading-relaxed"
            >
              Batir ensemble les villes et territoires de demain - Bruxelles, 3-6 Juin 2026
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5"
            >
              <Link to="/reserver" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white border-2 border-primary !text-black hover:bg-primary hover:!text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg"
                >
                  Reserver ma place
                </Button>
              </Link>
              <Link to="/stand" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-amber-700 border-2 border-white text-white hover:bg-amber-800 hover:border-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg"
                >
                  Prendre un stand
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:flex justify-end order-1 lg:order-2"
          >
            <div className="bg-orange-500 rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-2xl w-full max-w-full lg:max-w-none">
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
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
