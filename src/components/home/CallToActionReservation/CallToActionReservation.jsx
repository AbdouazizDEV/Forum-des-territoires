import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../common/Section/Section';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Calendar, Users, Award, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

/**
 * Section Call-to-Action pour inciter à réserver sa place
 */
const CallToActionReservation = () => {
  const { ref, controls } = useScrollAnimation();

  const benefits = [
    { icon: Calendar, text: "Accès à tous les panels et conférences" },
    { icon: Users, text: "Réseautage avec 800+ participants" },
    { icon: Award, text: "Certificat de participation" },
    { icon: Sparkles, text: "Accès à la soirée de gala" }
  ];

  return (
    <Section id="reserver-cta" background="gradient" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent-orange to-secondary p-8 md:p-12 lg:p-16 shadow-2xl">
          {/* Effets décoratifs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12"
            >
              {/* Icône */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg"
              >
                <Calendar className="w-12 h-12 text-white" />
              </motion.div>

              {/* Titre */}
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                Réservez votre place dès maintenant
              </h2>
              
              {/* Ligne décorative */}
              <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>

              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Ne manquez pas cette opportunité unique de participer au Forum des Territoires 2026. 
                Rejoignez des centaines de participants, investisseurs et décideurs pour construire ensemble 
                l'avenir des territoires.
              </p>
            </motion.div>

            {/* Avantages */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Principal */}
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <Link to="/reserver">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white !text-black hover:bg-white/90 shadow-xl px-12 py-6 text-lg font-bold group"
                >
                  Réserver ma place
                  <ArrowRight className="w-6 h-6 ml-3 inline group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>

              {/* Texte secondaire */}
              <p className="text-white/80 text-sm mt-6 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Réservation sécurisée • Annulation gratuite jusqu'à 30 jours avant l'événement</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default CallToActionReservation;
