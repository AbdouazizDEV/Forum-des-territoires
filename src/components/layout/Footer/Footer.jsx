import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_LINKS, SITE_INFO } from '../../../utils/constants';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import logoImage from '../../../assets/images/Logo Forum 1.png';

/**
 * Composant Footer avec toutes les informations et liens
 */
const Footer = () => {
  const { t } = useTranslation();
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin
  };

  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-dark text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <motion.div variants={fadeInUp}>
            <Link to="/" className="inline-block mb-4">
              <motion.img
                src={logoImage}
                alt="Forum des Territoires"
                whileHover={{ scale: 1.05 }}
                className="h-18 w-auto object-contain"
                transition={{ duration: 0.2 }}
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              {t('site.tagline')}
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium">{t('site.fullLocation')}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.usefulLinks')}</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-display font-semibold text-lg mb-4">{t('common.contact')}</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                <span>{CONTACT_INFO.email}</span>
              </a>
              {CONTACT_INFO.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4 mb-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-2">{t('footer.newsletter')}</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.yourEmail')}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-r-lg transition-colors text-sm font-medium">
                  {t('footer.subscribe')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t('site.name')}. {t('common.allRightsReserved')}.
          </p>
          <p className="text-gray-400 text-sm">
            {t('common.poweredBy')} <a href="https://digitalis-sn.com/" target="_blank" rel="noopener noreferrer"><span className="text-primary font-semibold">DIGITALIS SN</span></a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

