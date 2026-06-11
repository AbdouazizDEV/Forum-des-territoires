import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Trophy, Sparkles, Link2, Leaf, Play } from 'lucide-react';
import Section from '../../components/common/Section/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { gaindeAwardsContent, GAINDE_VIDEO_URL } from '../../data/gaindeAwardsContent';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 28 } }
};

/**
 * Page Gaindé Awards — présentation premium, vidéo Cloudinary, piliers et liste des prix.
 */
const GaindeAwards = () => {
  const { i18n } = useTranslation();
  const { ref, controls } = useScrollAnimation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'fr';
  const copy = gaindeAwardsContent[lang];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-primary-dark to-[#1a1033]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent-orange/30 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center text-white pt-8 pb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
          >
            <Trophy className="w-5 h-5 text-amber-300" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">{copy.hero.kicker}</span>
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
            {copy.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed font-medium italic">
            {copy.hero.tagline}
          </p>
        </motion.div>
      </section>

      {/* Vidéo */}
      <Section background="default" padding="lg" className="relative -mt-16 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl p-[2px] bg-gradient-to-br from-amber-300 via-primary to-accent-orange shadow-2xl">
            <div className="rounded-[22px] bg-slate-950 p-4 md:p-6">
              <div className="flex items-center gap-3 mb-4 text-white/90">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <Play className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl md:text-2xl">{copy.video.title}</h2>
                  <p className="text-sm text-white/60">{copy.video.caption}</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  src={GAINDE_VIDEO_URL}
                  controls
                  playsInline
                  preload="metadata"
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Vision + piliers */}
      <Section background="gradient" padding="lg">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-3xl md:text-4xl text-dark text-center mb-4">
            {copy.vision.title}
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-10 rounded-full" />

          <motion.div variants={fadeInUp} className="prose prose-lg max-w-none text-center text-gray-700 mb-12 mx-auto max-w-3xl">
            <p className="text-xl font-semibold text-dark mb-4">{copy.vision.lead}</p>
            <p className="leading-relaxed">{copy.vision.body}</p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-sm font-bold uppercase tracking-widest text-primary mb-8"
          >
            {copy.vision.pillarsTitle}
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {copy.vision.pillars.map((pillar, i) => {
              const Icon = [Sparkles, Link2, Leaf][i] || Sparkles;
              return (
                <motion.div
                  key={pillar.title}
                  variants={item}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="relative rounded-2xl bg-white p-6 md:p-8 shadow-xl border border-gray-100 overflow-hidden group"
                >
                  <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  <Icon className="w-10 h-10 text-primary mb-4 relative" />
                  <h3 className="font-display font-bold text-xl text-dark mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative">{pillar.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Section>

      {/* Liste des Gaïndé */}
      <Section background="default" padding="lg">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-dark text-center mb-4"
          >
            {copy.awardsTitle}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-amber-400 to-primary mx-auto mb-12 rounded-full origin-center"
          />

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-orange to-secondary rounded-full hidden sm:block" />
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6 sm:pl-14">
              {copy.awards.map((award, index) => (
                <motion.li
                  key={award.title}
                  variants={item}
                  className="relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/80 p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <span className="absolute -left-1 sm:left-0 sm:-translate-x-[2.35rem] top-8 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-orange text-white font-display font-bold text-sm shadow-lg border-2 border-white">
                    {index + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg md:text-xl text-dark mb-3 pr-2">{award.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{award.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-16 text-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-10 shadow-xl"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{copy.cta.title}</h3>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">{copy.cta.text}</p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default GaindeAwards;
