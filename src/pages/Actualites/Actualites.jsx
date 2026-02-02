import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { getAllActualites } from '../../services/actualitesService';

/**
 * Page Actualités
 */
const Actualites = () => {
  const { ref, controls } = useScrollAnimation();
  const actualites = getAllActualites();

  return (
    <Section id="actualites" background="default" padding="lg">
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
          Actualités
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Restez informé des dernières nouvelles et annonces du Forum des Territoires
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((actu, index) => (
            <motion.div
              key={actu.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card variant="default" className="h-full p-0 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  {actu.image ? (
                    <img 
                      src={actu.image} 
                      alt={actu.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Newspaper className="w-20 h-20 text-primary/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-lg">
                      {actu.category}
                    </span>
                  </div>
                  {actu.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-accent-orange/95 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                        À la une
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{actu.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-dark line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
                    {actu.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 text-sm">
                    {actu.excerpt}
                  </p>
                  <Link 
                    to={`/actualites/${actu.id}`}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors font-medium group/link"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Actualites;

