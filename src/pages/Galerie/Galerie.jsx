import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
// Import des images
import galleryImage1 from '../../assets/images/img2.jpg';
import galleryImage2 from '../../assets/images/img3.jpg';
import galleryImage3 from '../../assets/images/img4.jpg';
import galleryImage4 from '../../assets/images/img5.jpg';
import galleryImage5 from '../../assets/images/img6.jpg';
import galleryImage6 from '../../assets/images/img7.jpg';
import galleryImage7 from '../../assets/images/1000319723.jpg';
import galleryImage8 from '../../assets/images/participanr.jpg';
import galleryImage9 from '../../assets/images/partenaire.jpg';
import galleryImage10 from '../../assets/images/visibilité.jpg';
import galleryImage11 from '../../assets/images/théme.jpg';
import galleryImage12 from '../../assets/images/img10.jpg';
import galleryImage13 from '../../assets/images/img11.jpg';
import galleryImage14 from '../../assets/images/img12.jpg';
import galleryImage15 from '../../assets/images/img13.jpg';
import galleryImage16 from '../../assets/images/img14.jpg';
import galleryImage17 from '../../assets/images/img15.jpg';
import galleryImage18 from '../../assets/images/img16.jpg';
import galleryImage19 from '../../assets/images/img17.jpg';
import galleryImage20 from '../../assets/images/img18.jpg';
import galleryImage21 from '../../assets/images/img19.jpg';
import galleryImage22 from '../../assets/images/img20.jpg';
import galleryImage23 from '../../assets/images/img21.jpg';
import galleryImage24 from '../../assets/images/img22.jpg';
import galleryImage25 from '../../assets/images/img23.jpg';
import galleryImage26 from '../../assets/images/img24.jpg';
import galleryImage27 from '../../assets/images/img25.jpg';
import galleryImage28 from '../../assets/images/img26.jpg';

/**
 * Page Galerie - La meilleure galerie jamais vue
 */
const Galerie = () => {
  const { ref: refHero, controls: controlsHero } = useScrollAnimation();
  const { ref: refGallery, controls: controlsGallery } = useScrollAnimation();
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11,
    galleryImage12,
    galleryImage13,
    galleryImage14,
    galleryImage15,
    galleryImage16,
    galleryImage17,
    galleryImage18,
    galleryImage19,
    galleryImage20,
    galleryImage21,
    galleryImage22,
    galleryImage23,
    galleryImage24,
    galleryImage25,
    galleryImage26,
    galleryImage27,
    galleryImage28
  ];

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next = (selectedIndex + 1) % galleryImages.length;
    setSelectedIndex(next);
    setSelectedImage(galleryImages[next]);
  };

  const prevImage = () => {
    const prev = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedIndex(prev);
    setSelectedImage(galleryImages[prev]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-secondary">
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.div
          ref={refHero}
          initial="initial"
          animate={controlsHero}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
              <Camera className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-6">
              Galerie
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-white via-accent-orange to-white mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto text-white/95 leading-relaxed">
              Découvrez les moments forts et les instants mémorables du Forum des Territoires
            </p>
          </motion.div>
        </motion.div>
        {/* Effets décoratifs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Section Galerie */}
      <Section id="galerie" background="default" padding="lg">
        <motion.div
          ref={refGallery}
          initial="initial"
          animate={controlsGallery}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent-orange rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-dark">
              Moments forts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {galleryImages.length} photos capturant l'essence du Forum
            </p>
          </motion.div>

          {/* Grille de photos avec effet masonry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={image}
                    alt={`Galerie ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <Camera className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  {/* Badge numéro */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
              >
                <X className="w-6 h-6 text-primary group-hover:text-accent-orange transition-colors" />
              </button>

              {/* Image principale */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={selectedImage}
                    alt={`Galerie ${selectedIndex + 1}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </AnimatePresence>

                {/* Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                >
                  <ChevronLeft className="w-7 h-7 text-primary group-hover:text-accent-orange transition-colors" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                >
                  <ChevronRight className="w-7 h-7 text-primary group-hover:text-accent-orange transition-colors" />
                </button>
              </div>

              {/* Indicateur */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                <span className="text-gray-700 font-semibold">
                  {selectedIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galerie;

