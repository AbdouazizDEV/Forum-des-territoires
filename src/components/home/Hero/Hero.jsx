import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { SITE_INFO, HERO_STATS } from '../../../utils/constants';
import AnimatedCounter from '../../common/AnimatedCounter/AnimatedCounter';

/**
 * Composant Hero - Section principale conforme à la maquette
 * Dégradé orange vers rouge avec stats box
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-white"
          >
            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-display font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-snug md:leading-tight text-white"
            >
              L'habitat comme écosystème de vie,  d'activités <br />
              économiques et d'investissement territorial
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl font-light mb-8 text-white/95"
            >
              Batir ensemble les villes et territoires de demain - Bruxelles, 3-6 Juin 2026
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/reserver">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white border-2 border-primary !text-black hover:bg-primary hover:!text-white px-8 rounded-lg font-semibold"
                >
                  Reserver ma place
                </Button>
              </Link>
              <Link to="/stand">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-amber-700 border-2 border-white text-white hover:bg-amber-800 hover:border-white px-8 rounded-lg font-semibold"
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
            className="lg:flex justify-end"
          >
            <div className="bg-orange-500 rounded-xl p-8 md:p-10 shadow-2xl" style={{ width: '100%' }}>
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {HERO_STATS.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-2">
                      {stat.suffix.includes('K') ? (
                        <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white block">
                          {stat.value}K+
                        </span>
                      ) : (
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          className="block"
                        />
                      )}
                    </div>
                    <p className="text-white text-sm md:text-base font-medium">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
