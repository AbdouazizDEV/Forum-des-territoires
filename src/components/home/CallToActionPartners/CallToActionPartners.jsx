import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Button from '../../common/Button/Button';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Handshake, TrendingUp, Eye, Users, Award, Target, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Section Call-to-Action pour inciter les entreprises à devenir partenaires
 */
const CallToActionPartners = () => {
  const { ref, controls } = useScrollAnimation();

  const advantages = [
    {
      icon: Eye,
      title: "Visibilité exceptionnelle",
      description: "Votre logo sur tous les supports de communication et une présence forte pendant l'événement"
    },
    {
      icon: Users,
      title: "Réseautage premium",
      description: "Accès exclusif aux sessions VIP et rencontres avec les décideurs et investisseurs"
    },
    {
      icon: TrendingUp,
      title: "Opportunités business",
      description: "Mise en relation directe avec les territoires et projets structurants"
    },
    {
      icon: Award,
      title: "Image de marque",
      description: "Positionnement en tant qu'acteur engagé du développement territorial"
    }
  ];

  const packages = [
    {
      name: "Platinum",
      color: "from-gray-800 to-gray-900",
      highlight: "Premium"
    },
    {
      name: "Gold",
      color: "from-yellow-500 to-yellow-600",
      highlight: "Populaire"
    },
    {
      name: "Silver",
      color: "from-gray-400 to-gray-500",
      highlight: "Essentiel"
    }
  ];

  return (
    <Section id="partenaires-cta" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
            <Handshake className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            Devenez Partenaire du Forum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rejoignez-nous en tant que partenaire stratégique et bénéficiez d'une visibilité exceptionnelle 
            et d'opportunités business uniques
          </p>
        </motion.div>

        {/* Avantages */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                custom={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-transparent hover:border-primary transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl mb-3 text-dark">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Packages Preview */}
        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-dark">
              Nos Packages de Partenariat
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${pkg.color} rounded-xl px-6 py-4 text-white font-bold text-lg shadow-lg relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="text-xs font-normal mb-1 opacity-90">{pkg.highlight}</div>
                  <div className="text-xl">SPONSOR {pkg.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent-orange to-secondary p-8 md:p-12 shadow-2xl"
        >
          {/* Effets décoratifs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg"
            >
              <Target className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-white">
              Prêt à devenir partenaire ?
            </h3>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter des opportunités de partenariat et découvrir 
              comment votre organisation peut contribuer au succès du Forum des Territoires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/partenaires">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white !text-black hover:bg-white/90 shadow-xl px-10 py-6 text-lg font-bold group"
                >
                  Découvrir les packages
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white !text-white hover:bg-white/10 shadow-xl px-10 py-6 text-lg font-bold group"
                >
                  Nous contacter
                  <Sparkles className="w-5 h-5 ml-2 inline group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default CallToActionPartners;
