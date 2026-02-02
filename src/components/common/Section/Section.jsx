import PropTypes from 'prop-types';

/**
 * Composant Section wrapper réutilisable
 * Gère les animations d'entrée et le layout responsive
 */
const Section = ({
  children,
  id,
  className = '',
  background = 'default',
  padding = 'default',
  ...props
}) => {

  const backgrounds = {
    default: 'bg-light',
    gradient: 'bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-teal/5',
    dark: 'bg-dark text-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white'
  };

  const paddings = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-20 lg:py-28'
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.oneOf(['default', 'gradient', 'dark', 'primary', 'secondary']),
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg'])
};

export default Section;

