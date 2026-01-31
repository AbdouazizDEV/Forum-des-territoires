/**
 * Fonctions utilitaires réutilisables
 */

/**
 * Formate un numéro de téléphone pour l'affichage
 */
export const formatPhone = (phone) => {
  return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
};

/**
 * Valide un email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function pour optimiser les performances
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Smooth scroll vers un élément
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Génère un ID unique
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Clamp une valeur entre min et max
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

