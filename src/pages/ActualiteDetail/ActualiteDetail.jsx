import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, ArrowLeft, Newspaper, Share2, Clock } from 'lucide-react';
import { getActualiteById, getAllActualites } from '../../services/actualitesService';
import { useEffect } from 'react';

/**
 * Page de détails d'une actualité
 */
const ActualiteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ref, controls } = useScrollAnimation();
  const actualite = getActualiteById(id);
  const allActualites = getAllActualites();
  const relatedActualites = allActualites
    .filter(actu => actu.id !== parseInt(id) && actu.category === actualite?.category)
    .slice(0, 3);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!actualite) {
    return (
      <Section id="actualite-detail" background="default" padding="lg">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-dark mb-4">Actualité introuvable</h1>
          <p className="text-gray-600 mb-8">L'actualité que vous recherchez n'existe pas.</p>
          <Link
            to="/actualites"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux actualités
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section avec image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 z-10"></div>
        {actualite.image && (
          <img 
            src={actualite.image} 
            alt={actualite.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 h-full flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/actualites"
                className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour aux actualités
              </Link>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                  {actualite.category}
                </span>
                {actualite.featured && (
                  <span className="px-4 py-2 bg-accent-orange/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                    À la une
                  </span>
                )}
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                {actualite.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{actualite.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>5 min de lecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <Section id="actualite-content" background="default" padding="lg">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Contenu de l'article */}
          <motion.article
            variants={fadeInUp}
            className="prose prose-lg max-w-none mb-12"
          >
            <div 
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: actualite.content }}
            />
          </motion.article>

          {/* Galerie d'images supplémentaires */}
          {actualite.images && actualite.images.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-dark mb-6">Galerie photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {actualite.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    onClick={() => {
                      // Simple lightbox effect - could be enhanced with a modal
                      window.open(image, '_blank');
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${actualite.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Share2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Partage */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-gray-200 pt-8 mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Partager :</span>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: actualite.title,
                        text: actualite.excerpt,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Lien copié dans le presse-papier !');
                    }
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Partager</span>
                </button>
              </div>
              <Link
                to="/actualites"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux actualités
              </Link>
            </div>
          </motion.div>

          {/* Actualités similaires */}
          {relatedActualites.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="border-t border-gray-200 pt-12"
            >
              <h2 className="text-3xl font-bold text-dark mb-8">Actualités similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedActualites.map((relatedActu, index) => (
                  <motion.div
                    key={relatedActu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Link to={`/actualites/${relatedActu.id}`}>
                      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                        {relatedActu.image && (
                          <div className="relative h-40 overflow-hidden">
                            <img 
                              src={relatedActu.image} 
                              alt={relatedActu.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                              {relatedActu.category}
                            </span>
                            <span className="text-xs text-gray-500">{relatedActu.date}</span>
                          </div>
                          <h3 className="font-display font-bold text-lg text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedActu.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedActu.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </Section>
    </>
  );
};

export default ActualiteDetail;

