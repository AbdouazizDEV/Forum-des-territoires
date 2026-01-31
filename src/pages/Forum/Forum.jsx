import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, Users, Target, Briefcase } from 'lucide-react';

/**
 * Page "Le Forum" - Édition 2026
 */
const Forum = () => {
  const { ref, controls } = useScrollAnimation();

  const objectives = [
    {
      icon: Users,
      title: "Renforcer le dialogue",
      description: "Créer des espaces de discussion structurés entre les différents acteurs"
    },
    {
      icon: Target,
      title: "Faciliter les investissements",
      description: "Mettre en relation directe les investisseurs et les territoires"
    },
    {
      icon: Briefcase,
      title: "Promouvoir les projets",
      description: "Valoriser les projets territoriaux structurants et bankables"
    }
  ];

  return (
    <Section id="forum" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark text-center"
        >
          Le Forum 2026
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">04-06 juin 2026 | Bruxelles</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="prose prose-lg max-w-none mb-12"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Présentation</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Le Forum des Territoires 2026 représente une étape majeure dans le renforcement 
            de la coopération décentralisée entre l'Afrique et l'Europe. Cette édition 
            rassemble les décideurs publics, investisseurs privés, acteurs économiques et 
            collectivités territoriales autour d'un objectif commun : créer des synergies 
            durables pour le développement territorial.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-2xl mb-6">Objectifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <Card key={index} variant="withIcon">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{obj.title}</h3>
                  <p className="text-gray-600 text-sm">{obj.description}</p>
                </Card>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="prose prose-lg max-w-none"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Programme prévisionnel</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold text-lg">Jour 1 - 4 juin</h3>
              <p className="text-gray-600">Cérémonie d'ouverture, panels institutionnels, sessions de networking</p>
            </div>
            <div className="border-l-4 border-secondary pl-4 py-2">
              <h3 className="font-semibold text-lg">Jour 2 - 5 juin</h3>
              <p className="text-gray-600">Présentation de projets, rendez-vous B2B, expositions</p>
            </div>
            <div className="border-l-4 border-accent-orange pl-4 py-2">
              <h3 className="font-semibold text-lg">Jour 3 - 6 juin</h3>
              <p className="text-gray-600">Visites de terrain, clôture et engagements</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Forum;

