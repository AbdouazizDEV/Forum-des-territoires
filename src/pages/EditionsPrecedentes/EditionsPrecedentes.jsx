import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import ImageCarousel from '../../components/common/ImageCarousel/ImageCarousel';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { EDITIONS_DATA } from '../../services/editionsService';
import { Calendar, Users, Award, TrendingUp, MapPin, Mic, User, Quote, ArrowRight, Sparkles } from 'lucide-react';
// Import des images pour le carousel
import galleryImage1 from '../../assets/images/img2.jpg';
import galleryImage2 from '../../assets/images/img3.jpg';
import galleryImage3 from '../../assets/images/img4.jpg';
import galleryImage4 from '../../assets/images/img5.jpg';
import galleryImage5 from '../../assets/images/img6.jpg';
import galleryImage6 from '../../assets/images/img7.jpg';

/**
 * Page Editions précédentes - Style magnifique avec données réelles
 */
const EditionsPrecedentes = () => {
  const { ref: refHero, controls: controlsHero } = useScrollAnimation();
  const { ref: refContent, controls: controlsContent } = useScrollAnimation();

  // Images pour le carousel
  const carouselImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6
  ];

  const edition = EDITIONS_DATA[0]; // Édition 2025

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          ref={refHero}
          initial="initial"
          animate={controlsHero}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
              Éditions précédentes
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white via-accent-orange to-white mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Retour sur les moments forts du Forum des Territoires
            </p>
          </motion.div>
        </motion.div>
        {/* Effets décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Section Édition 2025 */}
      <Section id="edition-2025" background="default" padding="lg">
        <motion.div
          ref={refContent}
          initial="initial"
          animate={controlsContent}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header Édition */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-dark">
              {edition.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {edition.subtitle}
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">{edition.location}</span>
              <span>•</span>
              <span>{edition.dates}</span>
            </div>
          </motion.div>

          {/* Thème Général */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <Card variant="default" className="bg-gradient-to-br from-primary/10 via-accent-orange/10 to-secondary/10 border-2 border-primary/20">
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-dark mb-4">
                      Thème Général
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed mb-4">
                      {edition.theme}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {edition.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Les panels du Forum */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark">
                Les panels du Forum
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto"></div>
            </div>

            <div className="space-y-8">
              {edition.panels.map((panel, index) => (
                <motion.div
                  key={panel.id}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  custom={index}
                >
                  <Card variant="default" className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Header Panel */}
                    <div className="bg-gradient-to-r from-primary to-accent-orange p-6 text-white">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                              <Mic className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-display font-bold text-xl md:text-2xl">
                              Panel {panel.id}
                            </h4>
                          </div>
                          <h5 className="text-lg md:text-xl font-semibold mb-2">
                            {panel.title}
                          </h5>
                          <div className="flex items-center space-x-2 text-white/90">
                            <User className="w-4 h-4" />
                            <span className="text-sm">Modéré par {panel.moderator}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Body Panel */}
                    <div className="p-6 md:p-8 space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {panel.description}
                      </p>

                      {/* Speakers */}
                      <div>
                        <h6 className="font-display font-semibold text-lg text-dark mb-3 flex items-center space-x-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span>Intervenants</span>
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {panel.speakers.map((speaker, idx) => (
                            <div key={idx} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-gray-700">{speaker}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Message clé */}
                      <div className="bg-gradient-to-br from-primary/5 to-accent-orange/5 rounded-xl p-6 border-l-4 border-primary">
                        <div className="flex items-start space-x-3">
                          <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-800 font-semibold italic text-lg leading-relaxed">
                              "{panel.keyMessage}"
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <p className="text-gray-600 leading-relaxed">
                        {panel.conclusion}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Carousel d'images */}
          <motion.div
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark">
                Revivez les moments forts du Forum
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
            </div>
            <ImageCarousel images={carouselImages} autoPlay={true} interval={4000} />
            
            {/* Bouton Voir la Galerie */}
            <div className="text-center mt-8">
              <Link to="/galerie">
                <Button variant="primary" size="lg" className="group">
                  Voir la Galerie
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {edition.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="default" className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent-orange/5 border-2 border-primary/10">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-primary font-bold text-xl">{highlight}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default EditionsPrecedentes;
