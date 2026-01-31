import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

/**
 * Composant AnimatedCounter pour les statistiques
 * Compte de manière animée jusqu'à la valeur cible
 */
const AnimatedCounter = ({ value, suffix = '', duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className={className}>
      <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
        {count}{suffix}
      </span>
    </div>
  );
};

AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string
};

export default AnimatedCounter;

