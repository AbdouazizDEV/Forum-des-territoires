import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../../utils/constants';
import logoImage from '../../../assets/images/Logo Forum 1.png';
import Button from '../../common/Button/Button';

/**
 * Composant Header avec navigation sticky et menu mobile
 * Conforme à la maquette avec boutons "Reserver" et "Devenir partenaire"
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleDropdownToggle = (path) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };

  const scrollToSection = (hash) => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={logoImage}
              alt="Forum des Territoires"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 md:h-14 w-auto object-contain"
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.path} className="relative" ref={link.submenu ? dropdownRef : null}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.path)}
                      className={`relative font-medium text-sm transition-colors flex items-center space-x-1 ${
                        location.pathname === link.path || location.pathname.startsWith(link.path)
                          ? 'text-primary'
                          : 'text-dark hover:text-primary'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${openDropdown === link.path ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.path && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                        >
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => {
                                setOpenDropdown(null);
                                setTimeout(() => scrollToSection(subItem.path.split('#')[1] ? `#${subItem.path.split('#')[1]}` : ''), 100);
                              }}
                              className="block px-4 py-2 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative font-medium text-sm transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-dark hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/reserver">
              <Button
                variant="primary"
                size="md"
                className="px-6"
              >
                Reserver
              </Button>
            </Link>
            <Link to="/partenaires">
              <Button
                variant="outline"
                size="md"
                className="px-6 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Devenir partenaire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-dark hover:text-primary transition-colors"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              {NAVIGATION_LINKS.map((link, index) => (
                <div key={link.path}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${link.path}`)}
                        className={`w-full flex items-center justify-between py-3 px-4 font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'text-primary bg-primary/10'
                            : 'text-dark hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${openDropdown === `mobile-${link.path}` ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === `mobile-${link.path}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-8"
                          >
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={() => {
                                  closeMobileMenu();
                                  setTimeout(() => scrollToSection(subItem.path.split('#')[1] ? `#${subItem.path.split('#')[1]}` : ''), 100);
                                }}
                                className="block py-2 px-4 text-sm text-gray-600 hover:text-primary hover:bg-primary/5"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'text-primary bg-primary/10'
                            : 'text-dark hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-200 mt-4">
                <Link to="/reserver" onClick={closeMobileMenu}>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Reserver
                  </Button>
                </Link>
                <Link to="/partenaires" onClick={closeMobileMenu}>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Devenir partenaire
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
