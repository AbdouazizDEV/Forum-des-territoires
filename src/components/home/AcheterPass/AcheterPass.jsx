import { motion } from 'framer-motion';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Check, Star, Building2 } from 'lucide-react';

/**
 * Section Acheter un Pass
 */
const AcheterPass = () => {
  const { ref, controls } = useScrollAnimation();

  const passes = [
    {
      id: 1,
      title: "Pass Standard",
      description: "Accès complet au forum",
      features: [
        "Accès à toutes les sessions",
        "Rencontres B to B",
        "Documentation du Forum",
        "Networking"
      ],
      price: "À partir de",
      buttonText: "Acheter",
      variant: "primary",
      icon: Check
    },
    {
      id: 2,
      title: "Pass VIP",
      description: "Accès complet au forum",
      features: [
        "Tous les avantages du Pass Standard",
        "Accès VIP aux sessions",
        "Dîner de Gala inclus",
        "Rencontres privilégiées",
        "Documentation premium"
      ],
      price: "À partir de",
      buttonText: "Acheter",
      variant: "primary",
      icon: Star,
      popular: true
    },
    {
      id: 3,
      title: "Pass Institutionnel",
      description: "Accès complet au forum",
      features: [
        "Tous les avantages du Pass VIP",
        "Stand d'exposition",
        "Présentation de projets",
        "Rencontres institutionnelles",
        "Support dédié"
      ],
      price: "Sur devis",
      buttonText: "Acheter",
      variant: "primary",
      icon: Building2
    }
  ];

  return (
    <Section id="acheter-pass" background="default" padding="lg">
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
            Acheter un Pass
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choisissez le pass qui correspond à vos besoins et participez au Forum des Territoires 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {passes.map((pass, index) => {
            const Icon = pass.icon;
            return (
              <motion.div
                key={pass.id}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {pass.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-accent-orange to-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Populaire
                    </span>
                  </div>
                )}
                <Card 
                  variant="default" 
                  className={`h-full p-8 relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                    pass.popular ? 'border-2 border-primary' : ''
                  }`}
                >
                  {pass.popular && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        pass.popular 
                          ? 'bg-gradient-to-br from-accent-orange to-primary' 
                          : 'bg-gradient-to-br from-primary to-secondary'
                      }`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2 text-center text-dark">
                      {pass.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      {pass.description}
                    </p>
                    <div className="mb-6">
                      {pass.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-2 mb-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <p className="text-center text-gray-600 mb-4 font-medium">
                        {pass.price}
                      </p>
                      <Button 
                        variant={pass.variant} 
                        size="lg" 
                        className="w-full"
                      >
                        {pass.buttonText}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default AcheterPass;

