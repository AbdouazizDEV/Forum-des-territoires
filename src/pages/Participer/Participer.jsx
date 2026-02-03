import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Users, Building, Handshake, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Page Participer
 */
const Participer = () => {
  const { ref, controls } = useScrollAnimation();

  const participationTypes = [
    {
      icon: Users,
      title: "Participant",
      description: "Assistez aux conférences, panels et sessions de networking",
      benefits: [
        "Accès à tous les panels et conférences",
        "Sessions de networking",
        "Documentation complète",
        "Certificat de participation"
      ],
      price: "Gratuit"
    },
    {
      icon: Building,
      title: "Exposant",
      description: "Présentez vos projets et solutions lors de l'exposition",
      benefits: [
        "Stand d'exposition",
        "Visibilité accrue",
        "Documentation marketing",
        "Accès VIP"
      ],
      price: "Sur devis"
    },
    {
      icon: Handshake,
      title: "Partenaire",
      description: "Rejoignez-nous en tant que partenaire stratégique",
      benefits: [
        "Visibilité premium",
        "Intervention dans les panels",
        "Stand premium",
        "Invitations VIP"
      ],
      price: "Sur devis"
    },
    {
      icon: Target,
      title: "Speaker",
      description: "Partagez votre expertise lors des conférences",
      benefits: [
        "Intervention dans le programme",
        "Visibilité médiatique",
        "Accès VIP complet",
        "Networking privilégié"
      ],
      price: "Sur invitation"
    }
  ];

  return (
    <Section id="participer" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark text-center"
        >
          Participer
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Choisissez la formule de participation qui correspond à vos besoins
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {participationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <Card variant="default" className="h-full">
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="font-bold text-xl text-primary">{type.price}</span>
                    <Link to="/contact">
                      <Button variant="primary" size="md">
                        S'inscrire
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary to-accent-orange rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Prêt à participer ?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Rejoignez-nous au Forum des Territoires 2026 et contribuez à bâtir ensemble 
            les villes et territoires de demain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reserver">
              <Button variant="secondary" size="lg" className="bg-white text-black shadow-lg hover:bg-white/90">
                Reserver ma place
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white shadow-lg hover:bg-white hover:text-primary">
                Nous contacter
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Participer;

