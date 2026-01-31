import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Building2, DollarSign, MapPin, Radio } from 'lucide-react';

/**
 * Page Partenaires
 */
const Partners = () => {
  const { ref, controls } = useScrollAnimation();

  const partnerCategories = [
    {
      icon: Building2,
      title: "Partenaires institutionnels",
      description: "Institutions publiques, collectivités territoriales, organisations internationales"
    },
    {
      icon: DollarSign,
      title: "Partenaires financiers",
      description: "Banques de développement, fonds d'investissement, institutions financières"
    },
    {
      icon: MapPin,
      title: "Territoires participants",
      description: "Collectivités territoriales africaines et européennes"
    },
    {
      icon: Radio,
      title: "Partenaires médias",
      description: "Médias nationaux et internationaux couvrant l'événement"
    }
  ];

  const packages = [
    {
      name: "Platine",
      features: ["Logo sur tous les supports", "Stand d'exposition premium", "Intervention dans les panels", "10 invitations VIP"]
    },
    {
      name: "Or",
      features: ["Logo sur supports principaux", "Stand d'exposition", "5 invitations VIP"]
    },
    {
      name: "Argent",
      features: ["Logo sur supports", "3 invitations"]
    }
  ];

  return (
    <Section id="partners" background="default" padding="lg">
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
          Partenaires
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Rejoignez-nous en tant que partenaire et participez à cette aventure 
          de coopération territoriale internationale
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-2xl mb-6 text-center">Catégories de partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} variant="default" className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-2xl mb-6 text-center">Packages de partenariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} variant="default" className="h-full">
                <h3 className="font-display font-bold text-xl mb-4 text-primary">{pkg.name}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Devenir partenaire</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour discuter des opportunités de partenariat et découvrir 
            comment votre organisation peut contribuer au succès du Forum des Territoires.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Nous contacter
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Partners;

