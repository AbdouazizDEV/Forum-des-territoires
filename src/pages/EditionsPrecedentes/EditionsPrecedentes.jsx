import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

/**
 * Page Editions précédentes
 */
const EditionsPrecedentes = () => {
  const { ref, controls } = useScrollAnimation();

  const editions = [
    {
      year: "2024",
      title: "Première édition - Forum Sénégal-Belgique-Luxembourg",
      location: "Dakar, Sénégal",
      highlights: [
        "500+ participants",
        "50+ territoires représentés",
        "30+ projets présentés",
        "15 partenariats signés"
      ],
      description: "La première édition a posé les bases de la coopération décentralisée entre le Sénégal, la Belgique et le Luxembourg."
    },
    {
      year: "2025",
      title: "Deuxième édition - Expansion régionale",
      location: "Bruxelles, Belgique",
      highlights: [
        "800+ participants",
        "80+ territoires représentés",
        "60+ projets présentés",
        "25 partenariats signés"
      ],
      description: "Cette édition a élargi le réseau à d'autres pays africains et européens, renforçant les échanges intercontinentaux."
    }
  ];

  return (
    <Section id="editions-precedentes" background="default" padding="lg">
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
          Editions précédentes
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Retour sur les éditions précédentes du Forum des Territoires
        </motion.p>

        <div className="space-y-8">
          {editions.map((edition, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <Card variant="default" className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <div className="flex items-center space-x-4 mb-2">
                    <Calendar className="w-6 h-6" />
                    <h2 className="font-display font-bold text-3xl">{edition.year}</h2>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{edition.title}</h3>
                  <p className="text-white/90">{edition.location}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{edition.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {edition.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-primary font-bold text-lg mb-1">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default EditionsPrecedentes;

