import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Calendar, Users, TrendingUp, Award } from 'lucide-react';

/**
 * Section Editions Precedentes
 */
const EditionsPrecedentes = () => {
  const { ref, controls } = useScrollAnimation();

  const editions = [
    {
      id: 1,
      year: "2023",
      title: "Forum des Territoires Sénégal-Belgique-Luxembourg",
      location: "Bruxelles",
      stats: {
        participants: "5K+",
        projets: "150+",
        partenariats: "50+"
      },
      highlight: "Première édition historique"
    },
    {
      id: 2,
      year: "2024",
      title: "Forum des Territoires - Édition Expansion",
      location: "Bruxelles",
      stats: {
        participants: "8K+",
        projets: "200+",
        partenariats: "80+"
      },
      highlight: "Élargissement à l'Afrique de l'Ouest"
    }
  ];

  return (
    <Section id="editions-precedentes" background="default" padding="lg">
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
            Éditions Précédentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Retour sur les succès et réalisations des éditions précédentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {editions.map((edition, index) => (
            <motion.div
              key={edition.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card variant="default" className="h-full p-8 relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-display font-bold text-2xl text-dark">
                        {edition.year}
                      </h3>
                      <p className="text-gray-600">{edition.location}</p>
                    </div>
                  </div>
                  <Award className="w-8 h-8 text-accent-orange" />
                </div>
                <h4 className="font-display font-semibold text-xl mb-4 text-primary">
                  {edition.title}
                </h4>
                <p className="text-gray-600 mb-6 italic">
                  {edition.highlight}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-bold text-lg text-dark">{edition.stats.participants}</p>
                    <p className="text-xs text-gray-600">Participants</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="font-bold text-lg text-dark">{edition.stats.projets}</p>
                    <p className="text-xs text-gray-600">Projets</p>
                  </div>
                  <div className="text-center p-4 bg-accent-orange/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent-orange mx-auto mb-2" />
                    <p className="font-bold text-lg text-dark">{edition.stats.partenariats}</p>
                    <p className="text-xs text-gray-600">Partenariats</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/editions-precedentes">
            <Button variant="primary" size="lg" className="px-8">
              En savoir plus sur les éditions précédentes
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default EditionsPrecedentes;

