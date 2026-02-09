import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { getFeaturedActualites } from '../../../services/actualitesService';
import { translateActualites } from '../../../utils/actualiteTranslations';

/**
 * Section Actualites & Insights
 */
const ActualitesInsights = () => {
  const { t, i18n } = useTranslation();
  const { ref, controls } = useScrollAnimation();
  
  // Traduire les actualités
  const actualites = useMemo(() => {
    return translateActualites(getFeaturedActualites().slice(0, 3), t, i18n);
  }, [t, i18n]);

  return (
    <Section id="actualites-insights" background="gradient" padding="lg">
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
            {t('actualites.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('actualites.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {actualites.map((actualite, index) => (
            <motion.div
              key={actualite.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <Card variant="default" className="h-full p-0 relative shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  {actualite.image ? (
                    <img 
                      src={actualite.image} 
                      alt={actualite.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Newspaper className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-md">
                      {actualite.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{actualite.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-dark line-clamp-2 group-hover:text-primary transition-colors">
                    {actualite.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {actualite.excerpt}
                  </p>
                  <Link 
                    to={`/actualites/${actualite.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group/link"
                  >
                    {t('actualites.readMore')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <Link to="/actualites">
            <Button variant="secondary" size="lg" className="px-8">
              {t('actualites.seeAll')}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ActualitesInsights;

