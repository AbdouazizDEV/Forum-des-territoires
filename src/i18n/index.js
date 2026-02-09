import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';

// Détecter la langue préférée du navigateur ou utiliser le français par défaut
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    return savedLanguage;
  }
  const browserLanguage = navigator.language || navigator.userLanguage;
  if (browserLanguage.startsWith('en')) {
    return 'en';
  }
  return 'fr';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    }
  });

export default i18n;
