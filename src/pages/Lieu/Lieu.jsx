import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { MapPin, Hotel, Plane, Train, Car } from 'lucide-react';

/**
 * Page "Lieu et Période" - Informations pratiques
 */
const Lieu = () => {
  const { ref, controls } = useScrollAnimation();

  const practicalInfo = [
    {
      icon: Hotel,
      title: "Hébergement",
      description: "Liste d'hôtels partenaires avec tarifs préférentiels"
    },
    {
      icon: Plane,
      title: "Transport aérien",
      description: "Accès facile depuis l'aéroport de Bruxelles"
    },
    {
      icon: Train,
      title: "Transport en commun",
      description: "Réseau de métro, tram et bus très développé"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Parkings disponibles à proximité des lieux d'événements"
    }
  ];

  return (
    <Section id="lieu" background="default" padding="lg">
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
          Lieu et Période
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl text-primary">Bruxelles, Belgique</span>
          </div>
          <p className="text-lg text-gray-600">04-06 juin 2026</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="prose prose-lg max-w-none mb-12"
        >
          <h2 className="font-display font-bold text-2xl mb-4">Bruxelles, capitale européenne</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Bruxelles, en tant que capitale de la Belgique et siège de nombreuses institutions 
            européennes, constitue le lieu idéal pour ce forum international. La ville offre 
            un cadre institutionnel prestigieux et des infrastructures de qualité pour accueillir 
            cet événement d'envergure.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Les différents lieux d'événements seront communiqués prochainement, avec des informations 
            détaillées sur l'accès et les modalités pratiques.
          </p>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-display font-bold text-2xl mb-6 text-center"
        >
          Informations pratiques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {practicalInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <Card variant="default" className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-xl mb-4">Carte interactive</h3>
          <div className="h-64 bg-white/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Carte de Bruxelles à venir</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Lieu;

