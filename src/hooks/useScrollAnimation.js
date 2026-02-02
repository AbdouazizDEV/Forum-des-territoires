import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

/**
 * Hook personnalisé pour les animations au scroll
 * Utilise react-intersection-observer et framer-motion
 */
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else if (!triggerOnce) {
      controls.start('initial');
    }
  }, [controls, inView, triggerOnce]);

  // Fallback: initialiser l'animation après un court délai pour garantir l'affichage
  // même si l'intersection observer ne se déclenche pas immédiatement
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!inView) {
        controls.start('animate');
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [controls, inView]);

  return { ref, controls };
};

