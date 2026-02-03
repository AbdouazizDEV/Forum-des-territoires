import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SPONSOR_PACKAGES } from '../../services/sponsorPackagesService';
import { THEMATIC_PARTNERSHIPS } from '../../services/thematicPartnershipsService';
import { Building2, DollarSign, MapPin, Radio, Sparkles, Check, ArrowRight, Handshake } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

/**
 * Page Partenaires - Style magnifique avec packages de sponsoring
 */
const Partners = () => {
  const { ref: refHero, controls: controlsHero } = useScrollAnimation();
  const { ref: refPackages, controls: controlsPackages } = useScrollAnimation();
  const { ref: refThematic, controls: controlsThematic } = useScrollAnimation();
  const { ref: refCTA, controls: controlsCTA } = useScrollAnimation();

  const partnerCategories = [
    {
      icon: Building2,
      title: "Partenaires institutionnels",
      description: "Institutions publiques, collectivités territoriales, organisations internationales",
      color: "from-primary to-primary-dark"
    },
    {
      icon: DollarSign,
      title: "Partenaires financiers",
      description: "Banques de développement, fonds d'investissement, institutions financières",
      color: "from-secondary to-secondary-dark"
    },
    {
      icon: MapPin,
      title: "Territoires participants",
      description: "Collectivités territoriales africaines et européennes",
      color: "from-accent-orange to-primary"
    },
    {
      icon: Radio,
      title: "Partenaires médias",
      description: "Médias nationaux et internationaux couvrant l'événement",
      color: "from-accent-teal to-secondary"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-secondary">
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
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
              Devenez Partenaire
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white via-accent-orange to-white mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Rejoignez-nous en tant que partenaire stratégique et bénéficiez d'une visibilité exceptionnelle 
              et d'opportunités business uniques
            </p>
          </motion.div>
        </motion.div>
        {/* Effets décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Section Catégories de partenaires */}
      <Section id="categories" background="default" padding="lg">
        <motion.div
          initial="initial"
          animate={controlsHero}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
          variants={fadeInUp}
            className="text-center mb-12"
        >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-dark">
              Catégories de partenaires
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Différents types de partenariats pour répondre à vos objectifs stratégiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="default" className="h-full text-center relative overflow-hidden group border-2 border-transparent hover:border-secondary transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative z-10 p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2 text-dark">
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
        </motion.div>
      </Section>

      {/* Section Packages de Sponsoring */}
      <Section id="packages" background="gradient" padding="lg">
        <motion.div
          ref={refPackages}
          initial="initial"
          animate={controlsPackages}
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
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              Offres de sponsoring
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le package qui correspond à vos objectifs stratégiques et bénéficiez d'avantages exclusifs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {SPONSOR_PACKAGES.map((pkg, index) => {
              const Icon = pkg.icon;
              const isPlatinum = pkg.id === 'platinum';
              return (
                <motion.div
                  key={pkg.id}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  custom={index}
                  whileHover={{ scale: isPlatinum ? 1.02 : 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`relative ${isPlatinum ? ' ': ''}`}
                >
                  {isPlatinum && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl z-20"
                    >
                      Premium
                    </motion.div>
                  )}
                  <Card 
                    variant="default" 
                    className={`h-full relative overflow-hidden group border-2 ${pkg.borderColor} ${isPlatinum ? 'shadow-2xl' : 'shadow-lg hover:shadow-2xl'} transition-all duration-300`}
                  >
                    {/* Header avec gradient */}
                    <div className={`bg-gradient-to-br ${pkg.color} p-8 relative h-[240px] flex items-center`}>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-white/50 to-accent-orange"></div>
                      <div className="text-center text-white w-full flex flex-col justify-center">
                        <div className="w-20 h-20 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="font-display font-bold text-xl md:text-2xl mb-2 leading-tight">
                          {pkg.name}
                        </h4>
                        <div className="w-16 h-0.5 bg-white/50 mx-auto mb-3"></div>
                        <p className="text-sm text-white/90 font-medium px-2 h-[48px] flex items-center justify-center leading-tight">
                          {pkg.dimension}
                        </p>
                      </div>
                    </div>

                    {/* Body avec avantages */}
                    <div className="p-6 bg-white relative">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-orange"></div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">
                        {pkg.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {pkg.advantages.map((advantage, advIndex) => {
                          const AdvIcon = advantage.icon;
                          return (
                            <div key={advIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <AdvIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm leading-relaxed flex-1">
                                {advantage.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <Link to="/reserver" className="block">
                        <Button 
                          variant="primary" 
                          size="lg" 
                          className="w-full group"
                        >
                          Nous contacter
                          <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                  </div>

                    {/* Accent en bas */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* Section Partenariats Thématiques */}
      <Section id="thematic" background="default" padding="lg">
        <motion.div
          ref={refThematic}
          initial="initial"
          animate={controlsThematic}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
          variants={fadeInUp}
            className="text-center mb-16"
        >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
              Partenariats thématiques exclusifs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent-orange to-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Chaque partenariat inclut une exclusivité sectorielle et une visibilité ciblée
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {THEMATIC_PARTNERSHIPS.map((partnership, index) => {
              const Icon = partnership.icon;
              return (
                <motion.div
                  key={partnership.id}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  custom={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="default" className="h-full relative overflow-hidden group border-2 border-transparent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${partnership.color} p-6 relative`}>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-secondary"></div>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border-2 border-white/30">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-xl text-white mb-2">
                            {partnership.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {partnership.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Body avec bénéfices */}
                    <div className="p-6 bg-white relative">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent-orange"></div>
                      <h4 className="font-display font-semibold text-lg mb-4 text-dark">
                        Avantages exclusifs
                      </h4>
                      <ul className="space-y-2">
                        {partnership.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start space-x-2">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                      <div className="mt-6">
                        <Link to="/reserver" className="block">
                          <Button variant="outline" size="md" className="w-full group">
                  En savoir plus
                            <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Button>
                        </Link>
                      </div>
                    </div>
              </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* Section CTA */}
      <Section id="cta" background="gradient" padding="lg">
        <motion.div
          ref={refCTA}
          initial="initial"
          animate={controlsCTA}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div
          variants={fadeInUp}
            className="bg-gradient-to-br from-primary via-accent-orange to-secondary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
            {/* Effets décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg"
              >
                <Handshake className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Devenir partenaire
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Contactez-nous pour discuter des opportunités de partenariat et découvrir 
            comment votre organisation peut contribuer au succès du Forum des Territoires.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/reserver" className="block">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-black hover:bg-white/90 shadow-lg"
                  >
            Nous contacter
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Button>
                </Link>
                <a href={`tel:${CONTACT_INFO.phones[0]}`} className="block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10"
                  >
                    Appeler maintenant
          </Button>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">Contactez-nous également par :</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/90 hover:text-white underline">
                    {CONTACT_INFO.email}
                  </a>
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`} className="text-white/90 hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
      </motion.div>
    </Section>
    </div>
  );
};

export default Partners;
