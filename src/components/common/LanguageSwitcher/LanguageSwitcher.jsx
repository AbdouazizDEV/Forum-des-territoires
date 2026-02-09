import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

/**
 * Bouton flottant pour changer de langue
 * Positionné en bas à droite avec animation élégante
 */
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-white rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-4 flex items-center justify-between space-x-4 transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-primary text-white'
                    : 'text-dark hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-semibold">{lang.name}</span>
                </div>
                {currentLanguage === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <Check size={20} />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-gradient-to-br from-primary via-accent-orange to-secondary rounded-full shadow-2xl flex items-center justify-center text-white relative overflow-hidden group"
        aria-label="Change language"
      >
        {/* Effet de brillance animé */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'linear'
          }}
        />
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Globe size={28} className="relative z-10" />
        </motion.div>
        
        {/* Badge avec la langue actuelle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary"
        >
          <span className="text-xs font-bold text-primary">{currentLang.code.toUpperCase()}</span>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
