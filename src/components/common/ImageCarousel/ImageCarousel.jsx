import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Composant Carousel d'images animé et stylé
 */
const ImageCarousel = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
      <div className="relative aspect-video md:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-6 h-6 text-primary group-hover:text-accent-orange transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-6 h-6 text-primary group-hover:text-accent-orange transition-colors" />
        </button>
      </div>

      {/* Indicateurs de position */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-primary'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

