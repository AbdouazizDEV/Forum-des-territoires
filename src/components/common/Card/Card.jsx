import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { hoverLift } from '../../../utils/animations';

/**
 * Composant Card réutilisable avec animations 3D
 * Suit les principes SOLID
 */
const Card = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-md overflow-hidden';
  
  const variants = {
    default: 'p-6',
    withImage: 'p-0',
    withIcon: 'p-8 text-center',
    interactive: 'p-6 cursor-pointer'
  };

  const cardContent = (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );

  if (onClick || variant === 'interactive') {
    return (
      <motion.div
        onClick={onClick}
        {...hoverLift}
        {...props}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {cardContent}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'withImage', 'withIcon', 'interactive']),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Card;

