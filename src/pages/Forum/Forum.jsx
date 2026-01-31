import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Target, Handshake, Building, TrendingUp, Users, FileText, CheckCircle, Globe, Sparkles } from 'lucide-react';

/**
 * Page "Le Forum" - Conforme au contenu du site officiel avec style amélioré
 */
const Forum = () => {
  const { ref: refOrigin, controls: controlsOrigin } = useScrollAnimation();
  const { ref: refVision, controls: controlsVision } = useScrollAnimation();
  const { ref: refResults, controls: controlsResults } = useScrollAnimation();

  const objectifsSpecifiques = [
    {
      id: 1,
      title: "Objectif spécifique 1",
      description: "Faciliter la signature de conventions de coopération décentralisée entre collectivités africaines, belges et luxembourgeoises.",
      icon: Handshake,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "Objectif spécifique 2",
      description: "Mettre en lumière des opportunités d'investissement concrètes dans les territoires africains, appuyées par des études de faisabilité et des garanties institutionnelles.",
      icon: TrendingUp,
      color: "from-secondary to-secondary-dark"
    },
    {
      id: 3,
      title: "Objectif spécifique 3",
      description: "Organiser des ateliers sectoriels et des speed meetings entre décideurs locaux, opérateurs économiques, bailleurs de fonds et experts techniques.",
      icon: Users,
      color: "from-accent-orange to-primary"
    },
    {
      id: 4,
      title: "Objectif spécifique 4",
      description: "Renforcer les capacités des acteurs locaux africains en matière de marketing territorial, attractivité et structuration de projets bankables.",
      icon: Building,
      color: "from-accent-teal to-secondary"
    },
    {
      id: 5,
      title: "Objectif spécifique 5",
      description: "Mettre en place un mécanisme de suivi post-forum pour assurer la concrétisation des intentions de partenariat et des déclarations d'intérêt.",
      icon: FileText,
      color: "from-primary to-accent-orange"
    }
  ];

  const resultatsAttendus = [
    {
      id: 1,
      title: "Résultat 1",
      description: "Signature de conventions de coopération décentralisée entre territoires africains et européens.",
      icon: Handshake
    },
    {
      id: 2,
      title: "Résultat 2",
      description: "Publication d'un « Portfolio d'Opportunités Territoriales Nord-Sud », incluant des projets bankables de plusieurs pays africains.",
      icon: FileText
    },
    {
      id: 3,
      title: "Résultat 3",
      description: "Mise en relation effective entre au moins 50 porteurs de projets territoriaux et des investisseurs institutionnels ou privés.",
      icon: Users
    },
    {
      id: 4,
      title: "Résultat 4",
      description: "Engagements formels (lettres d'intention, protocoles d'accord) pour des partenariats publics-privés, financements ou transferts de compétences.",
      icon: CheckCircle
    },
    {
      id: 5,
      title: "Résultat 5",
      description: "Création d'un comité de suivi multi-acteurs chargé d'accompagner la mise en œuvre des engagements pris pendant le Forum.",
      icon: Target
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section Amélioré */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-primary-dark">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="absolute inset-0 opacity-10">
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
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
              LE FORUM
            </h1>
            <div className="w-32 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
              Une plateforme transnationale de dialogue et de coopération décentralisée
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Origine et évolution - Style amélioré */}
      <Section id="origine" background="default" padding="lg">
        <motion.div
          ref={refOrigin}
          initial="initial"
          animate={controlsOrigin}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark relative inline-block"
            >
              Origine et évolution
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent-orange"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <Card variant="default" className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-50 border-2 border-primary/10 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-tr-full"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                  Lancée dans le contexte de l'Acte III de la Décentralisation au Sénégal, la première édition 
                  du Forum des Territoires Sénégal–Belgique–Luxembourg a permis de révéler les potentiels économiques, 
                  culturels et environnementaux des territoires sénégalais, tout en initiant des dynamiques de 
                  coopération décentralisée avec l'Europe. Fort de cet élan et face à l'intérêt croissant d'autres 
                  pays africains, le Forum évolue et devient le <strong className="text-primary font-bold">Forum des Territoires</strong>, 
                  élargissant son périmètre à l'ensemble du continent africain.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section Ambition Nord-Sud - Style amélioré */}
      <Section id="ambition" background="gradient" padding="lg">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-dark relative inline-block"
            >
              Une ambition Nord–Sud équilibrée
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-secondary to-accent-teal"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>

            <Card variant="default" className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-2 border-secondary/20 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent-teal rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                Le Forum promet un dialogue structuré, équilibré et mutuellement bénéfique entre territoires 
                africains et partenaires européens, fondé sur la confiance, la transparence et la co-construction 
                de solutions durables.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section Vision & Objectifs - Style amélioré */}
      <Section id="vision-objectifs" background="default" padding="lg">
        <motion.div
          ref={refVision}
          initial="initial"
          animate={controlsVision}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              VISION & OBJECTIFS
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent-orange mx-auto mb-8"></div>
          </motion.div>

          {/* Objectif global - Style amélioré */}
          <motion.div
            variants={fadeInUp}
            className="mb-20"
          >
            <Card variant="default" className="p-10 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent-orange/10 border-2 border-primary/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="w-12 h-12 md:w-14 md:h-14 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 text-dark">Objectif global</h3>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      Créer un espace de dialogue Nord-Sud et Sud-Sud permettant aux territoires africains de 
                      valoriser leurs atouts, d'établir des partenariats stratégiques avec de collectivités 
                      européennes et des investisseurs, et de mobiliser des financements publics et privés pour 
                      des projets de développement local durable.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Objectifs spécifiques - Style amélioré avec zoom */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <h3 className="font-display font-bold text-3xl mb-12 text-dark text-center">
              Objectifs spécifiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {objectifsSpecifiques.map((objectif, index) => {
                const Icon = objectif.icon;
                return (
                  <motion.div
                    key={objectif.id}
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ scale: 1.08, zIndex: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card variant="default" className="h-full p-8 relative overflow-hidden group border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                      {/* Gradient background au hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${objectif.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
                      
                      <div className="relative z-10">
                        <motion.div
                          className={`w-16 h-16 mb-6 bg-gradient-to-br ${objectif.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h4 className="font-display font-bold text-xl mb-4 text-primary group-hover:text-primary-dark transition-colors">
                          {objectif.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {objectif.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section Résultats attendus - Style amélioré avec zoom */}
      <Section id="resultats" background="gradient" padding="lg">
        <motion.div
          ref={refResults}
          initial="initial"
          animate={controlsResults}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              Résultats attendus
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-secondary via-accent-teal to-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              À l'issue du Forum des Territoires (04–06 juin 2026), les résultats suivants sont attendus :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultatsAttendus.map((resultat, index) => {
              const Icon = resultat.icon;
              return (
                <motion.div
                  key={resultat.id}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.08, zIndex: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full"
                >
                  <Card variant="default" className="h-full p-8 relative overflow-hidden group border-2 border-gray-100 hover:border-secondary/30 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent-teal/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-start space-x-4 mb-6"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-secondary to-accent-teal rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h4 className="font-display font-bold text-xl text-primary pt-2 group-hover:text-primary-dark transition-colors">
                          {resultat.title}
                        </h4>
                      </motion.div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors text-base">
                        {resultat.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Forum;
