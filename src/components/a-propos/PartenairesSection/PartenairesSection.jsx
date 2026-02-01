import { motion } from 'framer-motion';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { PARTENAIRES_AVANTAGES } from '../../../services/partenairesService';
import { TrendingUp, Users, Briefcase, Target, BarChart3, Sparkles } from 'lucide-react';
import partenaireImage from '../../../assets/images/partenaire1.jpg';

/**
 * Section Partenaires du Forum - Style magnifique avec image
 */
const PartenairesSection = () => {
  const { ref, controls } = useScrollAnimation();

  const avantagesIcons = [
    TrendingUp,
    Users,
    Briefcase,
    Target,
    BarChart3
  ];

  return (
    <Section id="partenaires" background="gradient" padding="lg">
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
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            Pourquoi devenir sponsor ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez-nous en tant que partenaire stratégique et bénéficiez d'avantages exclusifs
          </p>
        </motion.div>

        {/* Image Hero avec contenu */}
        <motion.div
          variants={fadeInUp}
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div 
            className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${partenaireImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent-orange/75 to-secondary/85"></div>
            
            {/* Contenu overlay */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center text-white mb-12"
                >
                  <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                    Devenez partenaire du Forum
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                    Profitez d'une visibilité exceptionnelle et d'opportunités business uniques
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Effets décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {/* Avantages en cards stylées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PARTENAIRES_AVANTAGES.map((avantage, index) => {
            const Icon = avantagesIcons[index];
            return (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="default" className="h-full relative overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Header avec icône */}
                  <div className="bg-gradient-to-br from-primary to-accent-orange p-6 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent-orange"></div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {/* Body avec texte */}
                  <div className="p-6 bg-white relative">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-orange"></div>
                    <h3 className="font-display font-bold text-lg mb-3 text-dark leading-tight">
                      {avantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {avantage.description}
                    </p>
                    {/* Accent en bas */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-primary/10 via-accent-orange/10 to-secondary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-dark mb-4">
              Intéressé par un partenariat ?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Contactez-nous pour découvrir nos packages de partenariat sur mesure
            </p>
            <motion.a
              href="/partenaires"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent-orange text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Devenir partenaire
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default PartenairesSection;

