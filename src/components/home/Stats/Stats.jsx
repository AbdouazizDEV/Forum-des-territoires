import { motion } from 'framer-motion';
import Section from '../../common/Section/Section';
import AnimatedCounter from '../../common/AnimatedCounter/AnimatedCounter';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { STATS } from '../../../utils/constants';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Section Statistiques avec compteurs animés
 */
const Stats = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <Section id="stats" background="primary" padding="default">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-white"
        >
          Impact & Chiffres Clés
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-white/90 text-lg mb-12 max-w-2xl mx-auto"
        >
          Des résultats concrets et une portée internationale
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="block mb-4"
              />
              <p className="text-white/90 text-lg font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Stats;

