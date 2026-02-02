import { motion } from 'framer-motion';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { PARTICIPANTS_DATA } from '../../../services/participantsService';
import participantImage from '../../../assets/images/participanr.jpg';

/**
 * Section Participants du Forum - Style magnifique avec image
 */
const ParticipantsSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <Section id="participants" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
        style={{ opacity: 1 }}
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark">
            Profils des participants
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent-orange to-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un réseau diversifié d'acteurs engagés pour le développement territorial
          </p>
        </motion.div>

        {/* Image Hero avec overlay stylé */}
        <motion.div
          variants={fadeInUp}
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div 
            className="relative min-h-[400px] md:min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${participantImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-accent-orange/60 to-secondary/70"></div>
            
            {/* Contenu overlay */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <div className="max-w-3xl mx-auto text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                    Un réseau d'excellence
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Rejoignez des centaines de participants venant de tous les horizons pour construire ensemble l'avenir des territoires
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Effets décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {/* Liste des profils de participants */}
        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-secondary/5 via-accent-orange/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-secondary/10">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-dark mb-8 text-center">
              Types de participants
            </h3>
            <ul className="space-y-4 max-w-4xl mx-auto">
              {[
                "Gouvernements et collectivités territoriales",
                "Banques, assurances et institutions financières",
                "Fonds d'investissement et family offices",
                "Grandes entreprises et multinationales",
                "Fintechs, startups et PME innovantes",
                "Organisations internationales et partenaires techniques"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Participants Grid avec stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTICIPANTS_DATA.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="default" className="h-full text-center relative overflow-hidden group border-2 border-transparent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative z-10 p-6">
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
      </motion.div>
    </Section>
  );
};

export default ParticipantsSection;

