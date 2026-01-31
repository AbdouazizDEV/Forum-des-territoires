import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

/**
 * Page Programme
 */
const Programme = () => {
  const { ref, controls } = useScrollAnimation();

  const programme = [
    {
      day: "Jour 1 - 3 Juin",
      title: "Cérémonie d'ouverture",
      time: "09:00 - 18:00",
      activities: [
        "Cérémonie d'ouverture officielle",
        "Panels institutionnels",
        "Sessions de networking",
        "Cocktail de bienvenue"
      ]
    },
    {
      day: "Jour 2 - 4 Juin",
      title: "Présentation de projets",
      time: "09:00 - 18:00",
      activities: [
        "Présentation de projets territoriaux",
        "Rendez-vous B2B",
        "Expositions",
        "Tables rondes thématiques"
      ]
    },
    {
      day: "Jour 3 - 5 Juin",
      title: "Visites de terrain",
      time: "09:00 - 17:00",
      activities: [
        "Visites de sites de référence",
        "Démonstrations pratiques",
        "Échanges d'expériences",
        "Clôture et engagements"
      ]
    },
    {
      day: "Jour 4 - 6 Juin",
      title: "Clôture et networking",
      time: "09:00 - 16:00",
      activities: [
        "Session de clôture",
        "Signature de partenariats",
        "Réseautage final",
        "Remise des prix"
      ]
    }
  ];

  return (
    <Section id="programme" background="default" padding="lg">
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
          Programme
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Découvrez le programme complet du Forum des Territoires 2026
        </motion.p>

        <div className="space-y-8">
          {programme.map((day, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <Card variant="default" className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent-orange p-6 text-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="font-display font-bold text-2xl mb-2">{day.day}</h2>
                      <h3 className="text-xl font-semibold">{day.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{day.time}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Programme;

