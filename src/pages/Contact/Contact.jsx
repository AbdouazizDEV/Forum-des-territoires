import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { isValidEmail } from '../../utils/helpers';
import { CONTACT_INFO, SOCIAL_LINKS, API_BASE_URL } from '../../utils/constants';
import { Mail, Phone, Send, MessageSquare, User, Building, Globe, ArrowRight, CheckCircle, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

/**
 * Page Contact / Inscription - Style magnifique
 */
const Contact = () => {
  const { ref: refHero, controls: controlsHero } = useScrollAnimation();
  const { ref: refForm, controls: controlsForm } = useScrollAnimation();
  const [searchParams] = useSearchParams();
  const participationTypeFromUrl = searchParams.get('participationType') || searchParams.get('type');
  
  const [formData, setFormData] = useState({
    civility: '',
    fullName: '',
    organization: '',
    country: '',
    email: '',
    phone: '',
    participationType: participationTypeFromUrl || '',
    message: ''
  });

  // Pré-remplir le type de participation depuis l'URL
  useEffect(() => {
    const typeParam = searchParams.get('type') || searchParams.get('participationType');
    if (typeParam && ['territoire', 'investisseur', 'partenaire', 'autre'].includes(typeParam)) {
      setFormData(prev => ({ ...prev, participationType: typeParam }));
    }
  }, [searchParams]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
    if (!formData.organization.trim()) newErrors.organization = 'L\'organisation est requise';
    if (!formData.participationType) newErrors.participationType = 'Le type de participation est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          civility: formData.civility,
          fullName: formData.fullName,
          organization: formData.organization,
          country: formData.country,
          email: formData.email,
          phone: formData.phone,
          participationType: formData.participationType,
          message: formData.message
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
            civility: '',
            fullName: '',
            organization: '',
            country: '',
            email: '',
            phone: '',
            participationType: '',
            message: ''
          });
        }, 3000);
      } else {
        // Gérer les erreurs de validation du backend
        if (data.errors && Array.isArray(data.errors)) {
          const backendErrors = {};
          data.errors.forEach(error => {
            if (error.includes('email')) {
              backendErrors.email = error;
            } else if (error.includes('message')) {
              backendErrors.message = error;
            } else if (error.includes('fullName')) {
              backendErrors.fullName = error;
            } else if (error.includes('organization')) {
              backendErrors.organization = error;
            }
          });
          setErrors(prev => ({ ...prev, ...backendErrors }));
        } else {
          setErrors({ submit: data.message || 'Une erreur est survenue lors de l\'envoi du message' });
        }
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setErrors({ submit: error.message || 'Une erreur est survenue. Veuillez réessayer plus tard.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
          ref={refHero}
        initial="initial"
          animate={controlsHero}
        variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
      >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
          Contact & Inscription
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white via-accent-orange to-white mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
          Inscrivez-vous au Forum des Territoires 2026 ou contactez-nous pour plus d'informations
            </p>
          </motion.div>
        </motion.div>
        {/* Effets décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Section Contact Info & Form */}
      <Section id="contact" background="default" padding="lg">
        <motion.div
          ref={refForm}
          initial="initial"
          animate={controlsForm}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <motion.div variants={fadeInLeft} className="lg:col-span-1 space-y-6">
              {/* Coordonnées */}
              <Card variant="default" className="bg-gradient-to-br from-primary/10 via-accent-orange/10 to-secondary/10 border-2 border-primary/20">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-orange rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-dark">Coordonnées</h3>
                  </div>
                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="font-medium text-gray-900 break-all">{CONTACT_INFO.email}</p>
                      </div>
                  </a>
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                        className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-1">Téléphone {index + 1}</p>
                          <p className="font-medium text-gray-900">{phone}</p>
                        </div>
                    </a>
                  ))}
                </div>
                </div>
              </Card>

              {/* Réseaux sociaux */}
              <Card variant="default" className="bg-gradient-to-br from-secondary/10 via-accent-orange/10 to-primary/10 border-2 border-secondary/20">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-dark">Réseaux sociaux</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {SOCIAL_LINKS.map((social, index) => {
                      const Icon = socialIcons[social.name.toLowerCase()];
                      if (!Icon) return null;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                        >
                          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform mb-2" />
                          <span className="text-xs font-medium text-gray-700 capitalize">{social.name}</span>
                        </a>
                      );
                    })}
              </div>
            </div>
              </Card>
          </motion.div>

          {/* Form */}
            <motion.div variants={fadeInRight} className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-3xl p-8 md:p-12 text-center shadow-xl"
              >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-green-800 mb-3">
                  Message envoyé avec succès !
                </h3>
                  <p className="text-green-700 text-lg mb-4">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
              </motion.div>
            ) : (
                <Card variant="default" className="shadow-2xl border-2 border-primary/10">
                  <div className="p-6 md:p-8">
                    <div className="mb-6">
                      <h2 className="font-display font-bold text-2xl md:text-3xl mb-2 text-dark">
                        Formulaire de contact
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent-orange to-secondary mb-4"></div>
                      <p className="text-gray-600">
                        Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>Civilité</span>
                    </label>
                    <select
                      name="civility"
                      value={formData.civility}
                      onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    >
                      <option value="">Sélectionner</option>
                      <option value="M.">M.</option>
                      <option value="Mme">Mme</option>
                      <option value="Mlle">Mlle</option>
                    </select>
                  </div>

                  <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>Nom complet <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                            <Building className="w-4 h-4 text-primary" />
                            <span>Organisation / Entreprise <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                        errors.organization ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.organization && (
                      <p className="text-red-500 text-sm mt-1">{errors.organization}</p>
                    )}
                  </div>

                  <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-primary" />
                            <span>Pays</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>Email <span className="text-primary">*</span></span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>Téléphone</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                          <User className="w-4 h-4 text-primary" />
                          <span>Type de participation <span className="text-primary">*</span></span>
                  </label>
                  <select
                    name="participationType"
                    value={formData.participationType}
                    onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
                      errors.participationType ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="territoire">Territoire</option>
                    <option value="investisseur">Investisseur</option>
                    <option value="partenaire">Partenaire</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.participationType && (
                    <p className="text-red-500 text-sm mt-1">{errors.participationType}</p>
                  )}
                </div>

                <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                          <MessageSquare className="w-4 h-4 text-primary" />
                          <span>Message / Présentation du projet</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all"
                    placeholder="Décrivez votre projet ou votre message..."
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
                        className="w-full group"
                >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                        {!isSubmitting && (
                          <Send className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                        )}
                </Button>
              </form>
                  </div>
                </Card>
            )}
          </motion.div>
        </div>
      </motion.div>
    </Section>
    </div>
  );
};

export default Contact;
