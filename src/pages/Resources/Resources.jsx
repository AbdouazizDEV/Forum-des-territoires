import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Map, FileText, Download } from 'lucide-react';

/**
 * Page Ressources - Cartes interactives et documents
 */
const Resources = () => {
  const { ref, controls } = useScrollAnimation();

  const resources = [
    {
      title: "Pôles de développement du Sénégal",
      description: "Découvrez les 6 pôles de développement territorial",
      icon: Map,
      type: "carte"
    },
    {
      title: "Fiches sectorielles",
      description: "Documents détaillés par secteur d'opportunité",
      icon: FileText,
      type: "document"
    },
    {
      title: "Études de cas",
      description: "Success stories et projets réalisés",
      icon: Download,
      type: "etude"
    }
  ];

  return (
    <Section id="resources-page" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark text-center"
        >
          Ressources Territoriales
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Explorez les opportunités d'investissement et les ressources disponibles 
          pour le développement territorial
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <Card variant="interactive" className="h-full">
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Cartes interactives</h2>
          <p className="text-gray-700 mb-6">
            Les cartes interactives seront bientôt disponibles. Elles vous permettront 
            d'explorer les différents pôles de développement et leurs opportunités.
          </p>
          <div className="h-64 bg-white/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Carte interactive à venir</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Resources;

