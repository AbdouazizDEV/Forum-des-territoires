import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, Clock, MapPin, Users, Sun, Moon } from 'lucide-react';

/**
 * Page Programme - Contenu officiel du Forum des Territoires 2026
 */
const Programme = () => {
  const { ref, controls } = useScrollAnimation();

  const programme = [
    {
      day: "Mercredi 03 juin 2026",
      title: "Pré-Forum",
      time: "14h",
      sections: [
        {
          period: "14 h",
          title: "Visite de terrain",
          activities: [
            "Visite d'une cité caractéristique illustrant les enjeux de l'habitat, des services et des activités économiques territoriales",
            "Échanges techniques avec les acteurs locaux (collectivités, entreprises, promoteurs, structures d'appui)"
          ]
        }
      ]
    },
    {
      day: "Jeudi 4 juin",
      title: "Ouverture officielle du Forum",
      time: "Journée complète",
      sections: [
        {
          period: "Matinée",
          activities: [
            "Accueil des participants",
            "Cérémonie officielle d'ouverture",
            "Allocutions institutionnelles",
            "Présentation des objectifs et du positionnement stratégique du Forum",
            "Déjeuner d'affaires (networking institutionnel et économique)"
          ]
        },
        {
          period: "Après-midi",
          activities: [
            "Panel 1: Habitat, territoires et développement économique",
            "Panel 2: Rôle du secteur privé et attractivité des investissements territoriaux",
            "Ouverture de l'espace exposition (territoires, entreprises, projets, partenaires)"
          ]
        }
      ]
    },
    {
      day: "Vendredi 05 juin",
      title: "Journée économique & coopération",
      time: "Journée complète",
      sections: [
        {
          period: "Matinée",
          activities: [
            "Demi-journée économique Enabel",
            "Panels thématiques",
            "Sessions de rencontres B2B, B2G et B2I (entre entreprises et investisseurs)",
            "Expositions et présentations de projets, d'entreprises et de territoires"
          ]
        },
        {
          period: "Après-midi",
          activities: [
            "Visites auprès des structures économiques belges (chambres de commerce, institutions d'appui au secteur privé)",
            "Panels thématiques sur l'habitat, l'investissement et les partenariats économiques"
          ]
        }
      ]
    },
    {
      day: "Samedi 06 juin",
      title: "Engagements et clôture",
      time: "Journée complète",
      sections: [
        {
          period: "Matinée",
          activities: [
            "Session de restitution et de synthèse",
            "Présentation des engagements, partenariats et perspectives",
            "Cérémonie officielle de clôture"
          ]
        },
        {
          period: "Après-midi / Soirée",
          activities: [
            "Gala de clôture et networking de haut niveau (Célébrer la Culture des deux continents)"
          ]
        }
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
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <h2 className="font-display font-bold text-2xl mb-2">{day.day}</h2>
                        <h3 className="text-xl font-semibold">{day.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{day.time}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {day.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-3">
                        {section.period === "Matinée" || section.period.includes("14 h") ? (
                          <Sun className="w-5 h-5 text-accent-orange" />
                        ) : (
                          <Moon className="w-5 h-5 text-primary" />
                        )}
                        <h4 className="font-semibold text-lg text-dark">
                          {section.title ? `${section.period} - ${section.title}` : section.period}
                        </h4>
                      </div>
                      <ul className="space-y-2.5 ml-7">
                        {section.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-primary mt-1.5 font-bold">•</span>
                            <span className="text-gray-700 leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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

