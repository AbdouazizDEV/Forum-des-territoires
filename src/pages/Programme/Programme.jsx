import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, Clock, MapPin, Users, Sun, Moon, Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

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

        {/* Section Contact */}
        <motion.div
          variants={fadeInUp}
          className="mt-16"
        >
          <Card variant="default" className="bg-gradient-to-br from-primary/10 via-accent-orange/10 to-secondary/10 border-2 border-primary/20">
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark">
                  Nous contacter
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-4"></div>
                <p className="text-gray-600">
                  Des questions sur le programme ? Contactez-nous pour plus d'informations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-gray-900">{CONTACT_INFO.email}</p>
                  </div>
                </a>
                
                <div className="space-y-3">
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                        <p className="font-medium text-gray-900">{phone}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="group">
                    Formulaire de contact
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Programme;

