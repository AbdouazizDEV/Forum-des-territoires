import { motion } from 'framer-motion';
import Section from '../../common/Section/Section';
// Import des logos des partenaires
import logo1 from '../../../assets/images/partenaire/Screenshot_20260202_041610.png';
import logo2 from '../../../assets/images/partenaire/Screenshot_20260202_041640.png';
import logo3 from '../../../assets/images/partenaire/Screenshot_20260202_041700.png';
import logo4 from '../../../assets/images/partenaire/Screenshot_20260202_041722.png';
import logo5 from '../../../assets/images/partenaire/Screenshot_20260202_041737.png';
import logo6 from '../../../assets/images/partenaire/Screenshot_20260202_041748.png';
import logo7 from '../../../assets/images/partenaire/Screenshot_20260202_041802.png';
import logo8 from '../../../assets/images/partenaire/Screenshot_20260202_041812.png';
import logo9 from '../../../assets/images/partenaire/Screenshot_20260202_041837.png';
import logo10 from '../../../assets/images/partenaire/Screenshot_20260202_041854.png';
import logo11 from '../../../assets/images/partenaire/Screenshot_20260202_041909.png';
import logo12 from '../../../assets/images/partenaire/Screenshot_20260202_041921.png';
import logo13 from '../../../assets/images/partenaire/Screenshot_20260202_041932.png';
import logo14 from '../../../assets/images/partenaire/Screenshot_20260202_042004.png';
import logo15 from '../../../assets/images/partenaire/Screenshot_20260202_042023.png';
import logo16 from '../../../assets/images/partenaire/Screenshot_20260202_042038.png';
import logo17 from '../../../assets/images/partenaire/Screenshot_20260202_042053.png';
import logo18 from '../../../assets/images/partenaire/Screenshot_20260202_042109.png';
import logo19 from '../../../assets/images/partenaire/Screenshot_20260202_042128.png';
import logo20 from '../../../assets/images/partenaire/Screenshot_20260202_042144.png';
import logo21 from '../../../assets/images/partenaire/Screenshot_20260202_042159.png';
import logo22 from '../../../assets/images/partenaire/Screenshot_20260202_042213.png';
import logo23 from '../../../assets/images/partenaire/Screenshot_20260202_042224.png';
import logo24 from '../../../assets/images/partenaire/Screenshot_20260202_042238.png';
import logo25 from '../../../assets/images/partenaire/Screenshot_20260202_042302.png';
import logo26 from '../../../assets/images/partenaire/Screenshot_20260202_042309.png';
import logo27 from '../../../assets/images/partenaire/Screenshot_20260202_042321.png';
import logo28 from '../../../assets/images/partenaire/Screenshot_20260202_042333.png';
import logo29 from '../../../assets/images/partenaire/Screenshot_20260202_042348.png';
import logo30 from '../../../assets/images/partenaire/Screenshot_20260202_042402.png';

/**
 * Section Partenaires Logos - Carousel infini qui défile sans arrêt
 */
const PartenairesLogos = () => {
  // Liste des logos des partenaires
  const partnerLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30
  ];

  // Dupliquer les logos pour un défilement infini fluide
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  // Calculer la largeur totale d'un set de logos
  const itemWidth = 192; // w-48 en pixels (md:w-48)
  const gap = 48; // gap-12 en pixels
  const setWidth = partnerLogos.length * (itemWidth + gap);

  return (
    <Section id="partenaires-logos" background="default" padding="lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark">
            Nos Partenaires
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto"></div>
        </motion.div>

        {/* Carousel infini */}
        <div className="relative overflow-hidden py-8">
          <div className="flex">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -setWidth]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear'
                }
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 w-32 md:w-48 h-28 md:h-40 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-white rounded-2xl border-2 border-gray-200 flex items-center justify-center p-4 md:p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <img
                      src={logo}
                      alt={`Partenaire ${index + 1}`}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PartenairesLogos;
