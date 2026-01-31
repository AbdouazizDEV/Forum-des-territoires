import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, ArrowRight } from 'lucide-react';

/**
 * Page Actualités
 */
const Actualites = () => {
  const { ref, controls } = useScrollAnimation();

  const actualites = [
    {
      date: "15 Janvier 2026",
      title: "Ouverture des inscriptions au Forum des Territoires 2026",
      excerpt: "Les inscriptions pour la troisième édition du Forum des Territoires sont maintenant ouvertes. Réservez votre place dès maintenant.",
      category: "Inscription"
    },
    {
      date: "10 Janvier 2026",
      title: "Programme complet disponible",
      excerpt: "Découvrez le programme détaillé de l'édition 2026 avec tous les panels, conférences et activités prévues.",
      category: "Programme"
    },
    {
      date: "5 Janvier 2026",
      title: "Nouveaux speakers confirmés",
      excerpt: "Nous sommes heureux d'annoncer l'ajout de nouveaux experts internationaux à notre liste de speakers.",
      category: "Speakers"
    },
    {
      date: "20 Décembre 2025",
      title: "Partenaires stratégiques annoncés",
      excerpt: "Plusieurs partenaires stratégiques rejoignent le Forum des Territoires 2026 pour renforcer l'impact de l'événement.",
      category: "Partenaires"
    },
    {
      date: "15 Décembre 2025",
      title: "Thème 2026 : L'Habitat au coeur des Territoires",
      excerpt: "Le Forum des Territoires 2026 se concentrera sur les enjeux de l'habitat et de l'aménagement urbain durable.",
      category: "Thème"
    },
    {
      date: "1 Décembre 2025",
      title: "Lancement officiel de l'édition 2026",
      excerpt: "Le Forum des Territoires 2026 est officiellement lancé avec un focus sur l'habitat et le développement territorial.",
      category: "Lancement"
    }
  ];

  return (
    <Section id="actualites" background="default" padding="lg">
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
          Actualités
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Restez informé des dernières nouvelles et annonces du Forum des Territoires
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actualites.map((actu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <Card variant="interactive" className="h-full">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-500">{actu.date}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    {actu.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-dark">
                  {actu.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {actu.excerpt}
                </p>
                <button className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors font-medium">
                  <span>Lire la suite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Actualites;

