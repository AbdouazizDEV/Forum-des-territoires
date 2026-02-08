import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Button from '../../common/Button/Button';
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
            Lancée en réponse aux défis et opportunités de la Décentralisation au Sénégal, 
            la première édition du Forum des Territoires Sénégal–Belgique–Luxembourg a marqué une étape déterminante 
            dans la mise en visibilité des potentiels économiques, culturels et environnementaux des territoires 
            africains. Elle a permis d'initier des dynamiques structurantes de coopération décentralisée et 
            d'investissement entre l'Afrique de l'Ouest et l'Europe.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Face à l'intérêt croissant exprimé par plusieurs pays africains, le Forum a élargi son périmètre 
            et devient <Link to="/le-forum" className="text-primary"><strong>le Forum des Territoires</strong></Link>, une plateforme transnationale dédiée au dialogue, au partage 
            d'expériences et à la mise en relation d'acteurs publics et privés autour d'opportunités d'investissement 
            concrètes. Cette évolution traduit l'ambition de consolider un espace d'échanges multilatéral, inclusif 
            et résolument orienté vers l'action.
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
                En savoir plus
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;

