import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Target, Users, Building, Globe, TrendingUp, Handshake } from 'lucide-react';

/**
 * Page "A propos" avec 3 sections stylées et animées
 * Présentation, Objectifs, Participants
 */
const APropos = () => {
  const location = useLocation();
  const { ref: refPresentation, controls: controlsPresentation } = useScrollAnimation();
  const { ref: refObjectifs, controls: controlsObjectifs } = useScrollAnimation();
  const { ref: refParticipants, controls: controlsParticipants } = useScrollAnimation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  const objectifs = [
    {
      icon: Target,
      title: "Faciliter le dialogue",
      description: "Créer des espaces de discussion structurés entre les différents acteurs du développement territorial"
    },
    {
      icon: TrendingUp,
      title: "Promouvoir l'investissement",
      description: "Mettre en relation directe les investisseurs et les porteurs de projets territoriaux"
    },
    {
      icon: Handshake,
      title: "Renforcer les partenariats",
      description: "Développer des collaborations durables entre territoires africains et européens"
    },
    {
      icon: Building,
      title: "Valoriser l'habitat",
      description: "Mettre l'accent sur l'habitat comme pilier du développement territorial durable"
    }
  ];

  const participantCategories = [
    {
      icon: Users,
      title: "Décideurs publics",
      description: "Maires, gouverneurs, ministres et responsables d'institutions publiques",
      count: "500+",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Building,
      title: "Investisseurs privés",
      description: "Fonds d'investissement, banques de développement, institutions financières",
      count: "200+",
      color: "from-secondary to-secondary-dark"
    },
    {
      icon: Globe,
      title: "Acteurs économiques",
      description: "Entreprises, promoteurs immobiliers, consultants en développement",
      count: "300+",
      color: "from-accent-orange to-primary"
    },
    {
      icon: Handshake,
      title: "Collectivités territoriales",
      description: "Représentants de villes, régions et territoires d'Afrique et d'Europe",
      count: "150+",
      color: "from-accent-teal to-secondary"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-primary-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM60 91c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM35 41c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 60c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
        >
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            A propos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Découvrez le Forum des Territoires et son engagement pour le développement durable
          </p>
        </motion.div>
      </section>

      {/* Section Présentation */}
      <Section id="presentation" background="default" padding="lg">
        <motion.div
          ref={refPresentation}
          initial="initial"
          animate={controlsPresentation}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              Présentation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme stratégique de dialogue, d'investissement et de coopération décentralisée
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Placeholder - Stylé et animé */}
            <motion.div
              variants={fadeInLeft}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-orange/20 to-primary-dark/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Image de présentation</p>
                    <p className="text-sm text-gray-400 mt-2">Placeholder pour image stylée</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-orange/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={fadeInRight}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <h3 className="font-display font-bold text-2xl mb-4 text-dark">
                  Le Forum des Territoires
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Le Forum des Territoires est une initiative majeure qui rassemble les décideurs publics, 
                  investisseurs privés, acteurs économiques et collectivités territoriales autour d'un 
                  objectif commun : créer des synergies durables pour le développement territorial.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Cette plateforme stratégique émerge dans un contexte marqué par l'Acte III de la 
                  Décentralisation au Sénégal et la volonté de renforcer la coopération décentralisée 
                  entre l'Afrique et l'Europe.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  L'édition 2026 se concentre sur <strong className="text-primary">"L'Habitat au coeur 
                  des Territoires"</strong>, mettant en lumière les enjeux cruciaux du logement et de 
                  l'aménagement urbain dans le développement territorial durable.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery Placeholder */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent-orange/30 to-secondary/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-medium">Image {item}</p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Section Objectifs */}
      <Section id="objectifs" background="gradient" padding="lg">
        <motion.div
          ref={refObjectifs}
          initial="initial"
          animate={controlsObjectifs}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              Objectifs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos objectifs stratégiques pour un développement territorial durable
            </p>
          </motion.div>

          {/* Image Hero pour Objectifs */}
          <motion.div
            variants={scaleIn}
            className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[21/9] bg-gradient-to-r from-primary via-accent-orange to-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Target className="w-32 h-32 text-white/30 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">Image Hero Objectifs</p>
                  <p className="text-white/80">Placeholder pour image stylée et animée</p>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Objectifs Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectifs.map((objectif, index) => {
              const Icon = objectif.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="default" className="h-full relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-4 text-dark">
                        {objectif.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {objectif.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* Section Participants */}
      <Section id="participants" background="default" padding="lg">
        <motion.div
          ref={refParticipants}
          initial="initial"
          animate={controlsParticipants}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              Participants
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent-teal mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un réseau diversifié d'acteurs engagés pour le développement territorial
            </p>
          </motion.div>

          {/* Image Hero pour Participants */}
          <motion.div
            variants={fadeInUp}
            className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[21/9] bg-gradient-to-r from-secondary via-accent-teal to-primary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Users className="w-32 h-32 text-white/30 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">Image Hero Participants</p>
                  <p className="text-white/80">Placeholder pour image stylée et animée</p>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Participants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {participantCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="default" className="h-full text-center relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                      <h3 className="font-display font-bold text-xl mb-3 text-dark">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Image Gallery pour Participants */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent-orange/40 to-secondary/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-medium text-sm">Photo {item}</p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default APropos;
