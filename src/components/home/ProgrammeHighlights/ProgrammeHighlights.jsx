import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Calendar, Clock, MapPin, Users, Sun, Moon, Building2, Handshake, Award } from 'lucide-react';

/**
 * Section Programme Highlights - Basé sur le programme réel
 */
const ProgrammeHighlights = () => {
  const { ref, controls } = useScrollAnimation();

  const highlights = [
    {
      id: 1,
      title: "Pré-Forum",
      subtitle: "Visite de terrain",
      date: "03 Juin 2026",
      day: "Mercredi",
      time: "14h",
      location: "Bruxelles",
      description: "Visite d'une cité caractéristique illustrant les enjeux de l'habitat, des services et des activités économiques territoriales",
      icon: Building2,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "Ouverture officielle",
      subtitle: "Cérémonie d'ouverture",
      date: "04 Juin 2026",
      day: "Jeudi",
      time: "Journée complète",
      location: "Bruxelles",
      description: "Cérémonie officielle d'ouverture, allocutions institutionnelles, panels sur l'habitat et le développement économique",
      icon: Award,
      color: "from-accent-orange to-primary"
    },
    {
      id: 3,
      title: "Journée économique",
      subtitle: "Coopération & rencontres",
      date: "05 Juin 2026",
      day: "Vendredi",
      time: "Journée complète",
      location: "Bruxelles",
      description: "Demi-journée économique Enabel, sessions B2B/B2G/B2I, rencontres avec les structures économiques belges",
      icon: Handshake,
      color: "from-secondary to-secondary-dark"
    },
    {
      id: 4,
      title: "Engagements & clôture",
      subtitle: "Gala de clôture",
      date: "06 Juin 2026",
      day: "Samedi",
      time: "Journée complète",
      location: "Bruxelles",
      description: "Session de restitution, présentation des engagements et partenariats, gala de clôture et networking de haut niveau",
      icon: Users,
      color: "from-accent-teal to-secondary"
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
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les moments forts du Forum des Territoires 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.id}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card variant="default" className="h-full relative overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Header avec gradient */}
                  <div className={`bg-gradient-to-br ${highlight.color} p-6 text-white relative`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-white/50 to-accent-orange"></div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{highlight.day}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-2">
                        {highlight.subtitle}
                      </p>
                      <div className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                        {highlight.date}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 bg-white relative">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-orange"></div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{highlight.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{highlight.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Accent en bas */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/programme">
            <Button variant="primary" size="lg" className="px-8 group">
              Voir le programme complet
              <Calendar className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProgrammeHighlights;
