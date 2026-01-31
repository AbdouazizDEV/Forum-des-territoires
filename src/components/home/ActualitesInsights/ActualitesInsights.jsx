import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

/**
 * Section Actualites & Insights
 */
const ActualitesInsights = () => {
  const { ref, controls } = useScrollAnimation();

  const actualites = [
    {
      id: 1,
      title: "Lancement du Forum des Territoires 2026",
      date: "15 Janvier 2026",
      category: "Actualité",
      excerpt: "Découvrez les nouveautés de cette édition et les opportunités d'investissement"
    },
    {
      id: 2,
      title: "Partenariats stratégiques annoncés",
      date: "10 Janvier 2026",
      category: "Partenariat",
      excerpt: "Plusieurs conventions de coopération décentralisée déjà signées"
    },
    {
      id: 3,
      title: "Focus sur l'Habitat au cœur des Territoires",
      date: "5 Janvier 2026",
      category: "Thématique",
      excerpt: "Le thème central de cette édition met l'accent sur le logement durable"
    }
  ];

  return (
    <Section id="actualites-insights" background="gradient" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-dark">
            Actualités & Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières actualités et insights du Forum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {actualites.map((actualite, index) => (
            <motion.div
              key={actualite.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card variant="default" className="h-full p-6 relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <Newspaper className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{actualite.category}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-dark">
                  {actualite.title}
                </h3>
                <div className="flex items-center space-x-2 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{actualite.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {actualite.excerpt}
                </p>
                <Link to="/actualites" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/actualites">
            <Button variant="secondary" size="lg" className="px-8">
              Voir toutes les actualités
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ActualitesInsights;

