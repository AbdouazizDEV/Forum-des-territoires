import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Package, Users, Megaphone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Page Stand - Prendre un stand
 */
const Stand = () => {
  const { ref, controls } = useScrollAnimation();

  const standPackages = [
    {
      name: "Standard",
      price: "2 500€",
      features: [
        "Stand 6m²",
        "Table et 2 chaises",
        "Éclairage de base",
        "Inscription au catalogue",
        "2 badges d'accès"
      ],
      icon: Package
    },
    {
      name: "Premium",
      price: "5 000€",
      features: [
        "Stand 12m²",
        "Mobilier personnalisé",
        "Éclairage professionnel",
        "Visibilité accrue",
        "4 badges d'accès",
        "Intervention dans le programme"
      ],
      icon: Award,
      popular: true
    },
    {
      name: "VIP",
      price: "Sur devis",
      features: [
        "Stand 20m²+",
        "Design sur mesure",
        "Emplacement stratégique",
        "Visibilité maximale",
        "Badges illimités",
        "Intervention privilégiée",
        "Support dédié"
      ],
      icon: Megaphone
    }
  ];

  return (
    <Section id="stand" background="default" padding="lg">
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
          Prendre un stand
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Présentez vos projets, solutions et innovations lors de l'exposition du Forum des Territoires 2026
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {standPackages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className={`relative ${pkg.popular ? 'md:-mt-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Populaire
                  </div>
                )}
                <Card variant="default" className={`h-full ${pkg.popular ? 'border-2 border-primary shadow-xl' : ''}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    pkg.popular 
                      ? 'bg-gradient-to-br from-primary to-accent-orange' 
                      : 'bg-gradient-to-br from-primary to-secondary'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block">
                    <Button
                      variant={pkg.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      Choisir ce stand
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary/10 to-accent-orange/10 rounded-2xl p-8"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Pourquoi prendre un stand ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Visibilité maximale</h3>
              <p className="text-gray-600">
                Présentez vos projets et solutions à plus de 12 000 participants, 
                investisseurs et décideurs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Networking privilégié</h3>
              <p className="text-gray-600">
                Créez des connexions directes avec les acteurs clés du développement territorial.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Opportunités d'affaires</h3>
              <p className="text-gray-600">
                Générez des leads qualifiés et développez votre portefeuille de partenaires.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Image de marque</h3>
              <p className="text-gray-600">
                Renforcez votre positionnement en tant qu'acteur du développement territorial.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Stand;

