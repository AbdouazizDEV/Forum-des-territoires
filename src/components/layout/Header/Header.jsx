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
        const headerHeight = 96; // 6rem (24 * 4px) pour la hauteur du header
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
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0 z-10">
            <motion.img
              src={logoImage}
              alt="Forum des Territoires"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-16 md:h-20 w-auto object-contain"
              transition={{ duration: 0.2 }}
              loading="eager"
              onError={(e) => {
                console.error('Erreur de chargement du logo:', logoImage, e);
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.path} className="relative" ref={link.submenu ? dropdownRef : null}>
                {link.submenu ? (
                  <>
                    <motion.button
                      onClick={() => handleDropdownToggle(link.path)}
                      whileHover={{ scale: 1.05 }}
                      whileFocus={{ scale: 1.05, outline: 'none' }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative font-semibold text-base px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-1.5 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        location.pathname === link.path || location.pathname.startsWith(link.path)
                          ? 'text-primary'
                          : 'text-dark hover:text-primary'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <motion.div
                        animate={{ rotate: openDropdown === link.path ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {openDropdown === link.path && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 z-50"
                        >
                          {link.submenu.map((subItem, index) => (
                            <motion.div
                              key={subItem.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                              to={subItem.path}
                              onClick={() => {
                                setOpenDropdown(null);
                                setTimeout(() => scrollToSection(subItem.path.split('#')[1] ? `#${subItem.path.split('#')[1]}` : ''), 100);
                              }}
                                className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-primary/10 hover:text-primary transition-all duration-200 focus:outline-none focus:bg-primary/10 focus:text-primary rounded-md mx-1 whitespace-nowrap"
                            >
                              {subItem.label}
                            </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  <Link
                    to={link.path}
                      className={`relative font-semibold text-base px-3 py-2 rounded-md transition-all duration-200 block whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-dark hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/reserver" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md">
              <Button
                variant="primary"
                size="md"
                  className="px-6 transition-all duration-200"
              >
                Reserver
              </Button>
            </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/partenaires" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md">
              <Button
                variant="outline"
                size="md"
                  className="px-6 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                Devenir partenaire
              </Button>
            </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-dark hover:text-primary transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
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
                      <motion.button
                        onClick={() => handleDropdownToggle(`mobile-${link.path}`)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center justify-between py-3 px-4 font-semibold text-base rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          location.pathname === link.path
                            ? 'text-primary bg-primary/10'
                            : 'text-dark hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        <span className="whitespace-nowrap">{link.label}</span>
                        <motion.div
                          animate={{ rotate: openDropdown === `mobile-${link.path}` ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {openDropdown === `mobile-${link.path}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-8"
                          >
                            {link.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                to={subItem.path}
                                onClick={() => {
                                  closeMobileMenu();
                                  setTimeout(() => scrollToSection(subItem.path.split('#')[1] ? `#${subItem.path.split('#')[1]}` : ''), 100);
                                }}
                                  className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200 focus:outline-none focus:bg-primary/5 focus:text-primary whitespace-nowrap"
                              >
                                {subItem.label}
                              </Link>
                              </motion.div>
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
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 font-semibold text-base rounded-md transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
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
