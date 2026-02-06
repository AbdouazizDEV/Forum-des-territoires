import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { isValidEmail } from '../../utils/helpers';
import { CheckCircle, Mail, Phone, Facebook, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, API_BASE_URL } from '../../utils/constants';

/**
 * Page Reserver - Formulaire de réservation
 */
const Reserver = () => {
  const { ref, controls } = useScrollAnimation();
  const [searchParams] = useSearchParams();
  const packageIdFromUrl = searchParams.get('package');
  const participationTypeFromUrl = searchParams.get('participationType');

  // Packages pour les participants
  const participantPackages = [
    { id: '1', name: 'Package Teranga' },
    { id: '2', name: 'Package Silver' },
    { id: '3', name: 'Package Gold' }
  ];

  // Packages pour les exposants (stands)
  const standPackages = [
    { id: 'standard', name: 'Stand Standard' },
    { id: 'premium', name: 'Stand Premium' },
    { id: 'vip', name: 'Stand VIP' }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    participationType: participationTypeFromUrl || '',
    package: packageIdFromUrl || '',
    numberOfPeople: '1'
  });

  // Pré-remplir les champs depuis l'URL
  useEffect(() => {
    if (participationTypeFromUrl) {
      setFormData(prev => ({ ...prev, participationType: participationTypeFromUrl }));
    }
    if (packageIdFromUrl) {
      setFormData(prev => ({ ...prev, package: packageIdFromUrl }));
    }
  }, [participationTypeFromUrl, packageIdFromUrl]);

  // Déterminer si le champ package doit être affiché (uniquement pour les exposants)
  const showPackageField = formData.participationType === 'exposant';
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si le type de participation change, réinitialiser le package
    if (name === 'participationType') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        package: value === 'exposant' ? prev.package : '' // Garder le package si on reste exposant
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Le nom complet est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.participationType) newErrors.participationType = 'Le type de participation est requis';
    // Le package est requis uniquement pour les exposants
    if (formData.participationType === 'exposant' && !formData.package) {
      newErrors.package = 'Le stand est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Trouver le nom du package à partir de l'ID
      let packageName = '';
      
      if (formData.package) {
        if (formData.participationType === 'exposant') {
          const selectedPackage = standPackages.find(pkg => pkg.id === formData.package);
          packageName = selectedPackage ? selectedPackage.name : formData.package;
        } else if (formData.participationType === 'participant') {
          const selectedPackage = participantPackages.find(pkg => pkg.id === formData.package);
          packageName = selectedPackage ? selectedPackage.name : formData.package;
        } else {
          packageName = formData.package;
        }
      }
      // Pour les participants sans package, envoyer une chaîne vide ou "Non spécifié"
      else if (formData.participationType === 'participant') {
        packageName = ''; // Le backend peut gérer une chaîne vide
      }

      const response = await fetch(`${API_BASE_URL}/api/reservation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          participationType: formData.participationType,
          package: packageName,
          numberOfPeople: formData.numberOfPeople
        })
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            organization: '',
            participationType: '',
            package: '',
            numberOfPeople: '1'
          });
        }, 3000);
      } else {
        // Gérer les erreurs de validation du backend
        if (data.errors && Array.isArray(data.errors)) {
          const backendErrors = {};
          data.errors.forEach(error => {
            if (error.includes('email')) {
              backendErrors.email = error;
            } else if (error.includes('fullName')) {
              backendErrors.fullName = error;
            } else if (error.includes('participationType')) {
              backendErrors.participationType = error;
            } else if (error.includes('package')) {
              backendErrors.package = error;
            }
          });
          setErrors(prev => ({ ...prev, ...backendErrors }));
        } else {
          setErrors({ submit: data.message || 'Une erreur est survenue lors de la réservation' });
        }
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la réservation:', error);
      setErrors({ submit: error.message || 'Une erreur est survenue. Veuillez réessayer plus tard.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="reserver" background="default" padding="lg">
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
        className="max-w-3xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-dark text-center"
        >
          Reserver ma place
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
        >
          Réservez votre place au Forum des Territoires 2026 et participez à cet événement exceptionnel
        </motion.p>

        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-green-800 mb-2">
              Réservation confirmée !
            </h3>
            <p className="text-green-700">
              Vous recevrez un email de confirmation dans les prochaines minutes.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className={`grid grid-cols-1 ${showPackageField ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6`}>
              {showPackageField && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stand <span className="text-primary">*</span>
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.package ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required={showPackageField}
                  >
                    <option value="">Sélectionner un stand</option>
                    {standPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                  {errors.package && (
                    <p className="text-red-500 text-sm mt-1">{errors.package}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de participation <span className="text-primary">*</span>
                </label>
                <select
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.participationType ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="participant">Participant</option>
                  <option value="exposant">Exposant</option>
                  <option value="partenaire">Partenaire</option>
                  <option value="speaker">Speaker</option>
                </select>
                {errors.participationType && (
                  <p className="text-red-500 text-sm mt-1">{errors.participationType}</p>
                )}
              </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
            </div>

            {errors.submit && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <p className="text-red-600 text-sm font-medium">{errors.submit}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Traitement...' : 'Confirmer la réservation'}
            </Button>
          </motion.form>
        )}

        {/* Section Contact */}
        <motion.div
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary/5 via-accent-orange/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-dark text-center">
              Contactez-nous
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Téléphones */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-dark">Téléphone</h3>
                </div>
                <div className="space-y-3">
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="font-medium">{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold text-lg text-dark">Email</h3>
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="w-2 h-2 bg-accent-orange rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="font-medium break-all">{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-dark">Suivez-nous</h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {SOCIAL_LINKS.map((social) => {
                  const socialIcons = {
                    facebook: Facebook,
                    instagram: Instagram,
                    youtube: Youtube,
                    linkedin: Linkedin
                  };
                  const Icon = socialIcons[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Site web */}
            <div className="mt-6 text-center">
              <a
                href="https://www.forumdesterritoires.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent-orange transition-colors font-medium"
              >
                <Globe className="w-5 h-5" />
                <span>www.forumdesterritoires.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Reserver;

