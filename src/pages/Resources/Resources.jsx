import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Sprout, MapPin, Zap, Building, Waves, Smartphone, Users, Recycle, Heart, Image as ImageIcon } from 'lucide-react';

/**
 * Composant Image avec fallback pour les secteurs
 */
const SectorImage = ({ sector, Icon, isEven, variants }) => {
  const [imageError, setImageError] = useState(!sector.image);

  return (
    <motion.div
      variants={variants}
      className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-orange/20">
        {sector.image && !imageError ? (
          <motion.img
            src={sector.image}
            alt={sector.imageAlt || sector.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-secondary/30 to-accent-orange/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {Icon && <Icon className="w-12 h-12 text-primary" />}
              </div>
              <p className="text-gray-700 font-semibold text-lg max-w-xs">{sector.title}</p>
            </div>
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

/**
 * Page Ressources - Conforme au contenu du site officiel
 * https://forumdesterritoires.com/ressources/
 */
const Resources = () => {
  const location = useLocation();
  const { ref: refIntro, controls: controlsIntro } = useScrollAnimation();
  const { ref: refSectors, controls: controlsSectors } = useScrollAnimation();

  // Scroll vers la section au chargement si hash présent
  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const hash = location.hash.substring(1); // Enlever le #
        const element = document.getElementById(hash);
        
        if (element) {
          const headerHeight = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
          return true;
        }
      }
      return false;
    };

    // Essayer immédiatement
    scrollToSection();
    
    // Réessayer après des délais pour s'assurer que le DOM est complètement rendu
    const timeouts = [
      setTimeout(scrollToSection, 100),
      setTimeout(scrollToSection, 300),
      setTimeout(scrollToSection, 600),
      setTimeout(scrollToSection, 1000)
    ];

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [location]);

  const sectors = [
    {
      id: 1,
      slug: "agriculture",
      title: "Agriculture durable, agro-industrie et sécurité alimentaire",
      description: [
        "Ce secteur constitue un levier majeur de développement territorial et de résilience économique.",
        "Les opportunités portent sur la modernisation des chaînes de valeur agricoles, la transformation locale des produits, l'amélioration de la productivité et la sécurité alimentaire, en cohérence avec les stratégies nationales de développement rural."
      ],
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&auto=format",
      imagePosition: "left",
      imageAlt: "Agriculture durable"
    },
    {
      id: 2,
      slug: "elevage",
      title: "Élevage, cuirs et industries connexes",
      description: [
        "Les territoires sénégalais disposent d'un fort potentiel dans l'élevage et les filières associées.",
        "Les projets ciblent la structuration des chaînes de valeur, la transformation des produits animaux, l'amélioration des infrastructures pastorales et le développement d'industries locales à forte valeur ajoutée."
      ],
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right",
      imageAlt: "Élevage"
    },
    {
      id: 3,
      slug: "energies",
      title: "Énergies renouvelables et transition énergétique",
      description: [
        "Les opportunités concernent le développement de solutions énergétiques durables adaptées aux réalités territoriales.",
        "Elles incluent l'énergie solaire, l'électrification rurale, l'efficacité énergétique et les infrastructures locales contribuant à une transition énergétique inclusive et durable."
      ],
      icon: Zap,
      image: null, // Utiliser le placeholder au lieu d'une image externe
      imagePosition: "left",
      imageAlt: "Énergies renouvelables"
    },
    {
      id: 4,
      slug: "tourisme",
      title: "Tourisme culturel, écologique et communautaire",
      description: [
        "Ce secteur vise la valorisation du patrimoine culturel, naturel et communautaire des territoires.",
        "Les projets portent sur le tourisme responsable, l'écotourisme, les infrastructures d'accueil et la création d'emplois locaux, tout en préservant les ressources et les identités territoriales."
      ],
      icon: Building,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right",
      imageAlt: "Tourisme"
    },
    {
      id: 5,
      slug: "economie-bleue",
      title: "Économie bleue (pêche, aquaculture, économie maritime)",
      description: [
        "Les zones côtières et fluviales offrent des opportunités structurantes dans la pêche et l'aquaculture durables.",
        "Les investissements ciblent la modernisation des infrastructures, la transformation locale des produits halieutiques et la gestion durable des ressources maritimes."
      ],
      icon: Waves,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
      imagePosition: "left",
      imageAlt: "Économie bleue"
    },
    {
      id: 6,
      slug: "dechets",
      title: "Gestion des déchets, assainissement, économie circulaire",
      description: [
        "Ce secteur répond aux enjeux environnementaux et sanitaires des territoires.",
        "Les projets portent sur la collecte, le traitement et la valorisation des déchets, l'assainissement urbain et rural, ainsi que le développement de modèles d'économie circulaire créateurs d'emplois."
      ],
      icon: Recycle,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right",
      imageAlt: "Gestion des déchets"
    },
    {
      id: 7,
      slug: "numerique",
      title: "Numérique, innovation et jeunesse entrepreneuriale",
      description: [
        "Le numérique constitue un levier transversal de modernisation territoriale.",
        "Les opportunités concernent l'innovation locale, les services numériques, l'entrepreneuriat des jeunes et l'accompagnement des initiatives technologiques au service du développement territorial."
      ],
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format",
      imagePosition: "left",
      imageAlt: "Numérique"
    },
    {
      id: 8,
      slug: "infrastructures",
      title: "Infrastructures (logement social, mobilité, éducation)",
      description: [
        "Les besoins en infrastructures structurantes restent prioritaires dans les territoires.",
        "Les projets portent sur le logement social, la mobilité territoriale, les équipements éducatifs et les services essentiels, contribuant à l'attractivité et à la cohésion sociale."
      ],
      icon: Building,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right",
      imageAlt: "Infrastructures"
    },
    {
      id: 9,
      slug: "inclusion",
      title: "Inclusion (genre, jeunes, personnes en situation de handicap)",
      description: [
        "L'inclusion sociale constitue un principe transversal du Forum.",
        "Les initiatives visent à renforcer la participation économique et sociale des femmes, des jeunes et des personnes en situation de handicap, à travers des projets territoriaux inclusifs et durables."
      ],
      icon: Heart,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&auto=format",
      imagePosition: "left",
      imageAlt: "Inclusion"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-accent-teal to-primary">
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
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            RESSOURCES TERRITORIALES ET OPPORTUNITÉS D'INVESTISSEMENT
          </h1>
        </motion.div>
      </section>

      {/* Section Introduction */}
      <Section id="resources-intro" background="default" padding="lg">
        <motion.div
          ref={refIntro}
          initial="initial"
          animate={controlsIntro}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              Dans le nouveau référentiel de développement du Sénégal, les territoires seront regroupés en huit (8) 
              pôles territoires de développement (appelées aussi régions naturelles) qui regroupent chacun un ensemble 
              de localités s'identifiant par leur proximité mais également par l'homogénéité plus ou moins relative de 
              leurs ressources naturelles.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent-orange/10 rounded-xl p-6 mb-8 border-l-4 border-primary">
              <p className="text-lg md:text-xl font-semibold text-dark">
                Les secteurs d'opportunités restent centrés sur :
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section Secteurs */}
      <Section id="resources-sectors" background="default" padding="lg">
        <motion.div
          ref={refSectors}
          initial="initial"
          animate={controlsSectors}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={sector.id}
                id={sector.slug}
                variants={fadeInUp}
                custom={index}
                className="mb-16 md:mb-24"
                style={{ scrollMarginTop: '120px' }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Image */}
                  <SectorImage 
                    sector={sector} 
                    Icon={Icon} 
                    isEven={isEven}
                    variants={isEven ? fadeInLeft : fadeInRight}
                  />

                  {/* Contenu */}
                  <motion.div
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <Card variant="default" className="p-8 md:p-10 h-full">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary">
                          {sector.title}
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {sector.description.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-gray-700 text-lg leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Section Note finale */}
      <Section id="resources-note" background="gradient" padding="lg">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border-2 border-primary/20"
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
              Chaque pays africain participant sera invité à proposer des fiches projets structurants, 
              validées par les autorités locales ou nationales compétentes, afin d'assurer la crédibilité 
              et la faisabilité des opportunités présentées.
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Resources;
