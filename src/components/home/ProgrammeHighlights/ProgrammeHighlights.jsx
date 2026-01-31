import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

/**
 * Section Programme Highlights
 */
const ProgrammeHighlights = () => {
  const { ref, controls } = useScrollAnimation();

  const highlights = [
    {
      id: 1,
      title: "Cérémonie d'Ouverture",
      date: "3 Juin 2026",
      time: "09:00 - 10:30",
      location: "Parlement Bruxellois",
      description: "Ouverture officielle du Forum avec les personnalités politiques et institutionnelles"
    },
    {
      id: 2,
      title: "Panels Thématiques",
      date: "4-5 Juin 2026",
      time: "09:00 - 18:00",
      location: "Bruxelles Expo",
      description: "Sessions de dialogue sur les enjeux du développement territorial"
    },
    {
      id: 3,
      title: "Rencontres B to B",
      date: "5 Juin 2026",
      time: "14:00 - 18:00",
      location: "Bruxelles Expo",
      description: "Mise en relation directe entre investisseurs et porteurs de projets"
    },
    {
      id: 4,
      title: "Dîner de Gala",
      date: "6 Juin 2026",
      time: "19:00 - 23:00",
      location: "DoubleTree by Hilton",
      description: "Cérémonie de clôture et signature de partenariats"
    }
  ];

  return (
    <Section id="programme-highlights" background="default" padding="lg">
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
            Programme Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les moments forts du Forum des Territoires 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card variant="default" className="h-full p-6 relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{highlight.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-dark">
                  {highlight.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{highlight.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{highlight.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/programme">
            <Button variant="primary" size="lg" className="px-8">
              Voir le programme complet
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProgrammeHighlights;

