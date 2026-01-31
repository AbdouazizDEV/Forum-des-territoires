import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Users, Presentation, Building, Handshake, Calendar } from 'lucide-react';

/**
 * Page "Le Format" - Détail des activités
 */
const Format = () => {
  const { ref, controls } = useScrollAnimation();

  const activities = [
    {
      icon: Presentation,
      title: "Panels et conférences",
      description: "Sessions plénières et tables rondes avec des experts internationaux"
    },
    {
      icon: Building,
      title: "Expositions",
      description: "Espace dédié à la présentation des projets et initiatives territoriales"
    },
    {
      icon: Calendar,
      title: "Visites de terrain",
      description: "Découverte concrète des réalisations et projets en cours"
    },
    {
      icon: Handshake,
      title: "Sessions de networking",
      description: "Rencontres B2B et opportunités de partenariats"
    },
    {
      icon: Users,
      title: "Rendez-vous B2B",
      description: "Mise en relation directe entre investisseurs et porteurs de projets"
    }
  ];

  return (
    <Section id="format" background="default" padding="lg">
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
          Le Format
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Un format diversifié et interactif pour maximiser les échanges et les opportunités
        </motion.p>

        <div className="space-y-8 mb-12">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Méthodologie</h2>
          <p className="text-gray-700 mb-4">
            Le Forum des Territoires adopte une approche participative et orientée résultats. 
            Chaque activité est conçue pour faciliter les échanges, créer des connexions durables 
            et générer des engagements concrets.
          </p>
          <p className="text-gray-700">
            Les participants bénéficient d'un programme personnalisable selon leurs intérêts 
            et objectifs, avec des outils de networking avancés pour optimiser leurs rencontres.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Format;

