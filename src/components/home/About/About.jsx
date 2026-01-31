import { motion } from 'framer-motion';
import Section from '../../common/Section/Section';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Section "Justification et Contexte"
 */
const About = () => {
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
          Justification et Contexte
        </motion.h2>

        <motion.div
          variants={fadeInRight}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Le Forum des Territoires représente une évolution majeure dans le paysage de la coopération 
            décentralisée entre l'Afrique et l'Europe. Cette plateforme stratégique émerge dans un contexte 
            marqué par l'Acte III de la Décentralisation au Sénégal, qui renforce l'autonomie et les 
            compétences des collectivités territoriales.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Initialement conçu comme un espace de dialogue entre le Sénégal, la Belgique et le Luxembourg, 
            le forum s'est progressivement élargi pour devenir un véritable carrefour international. 
            Cette transformation reflète la volonté de créer des synergies durables entre les territoires 
            africains et européens, au-delà des frontières traditionnelles.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aujourd'hui, le Forum des Territoires se positionne comme un catalyseur d'opportunités, 
            facilitant les échanges, les investissements et les partenariats stratégiques pour un 
            développement territorial inclusif et durable.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;

