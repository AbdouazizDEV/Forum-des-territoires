import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { isValidEmail } from '../../utils/helpers';
import { API_BASE_URL } from '../../utils/constants';
import { CheckCircle, Calendar, Clock, Users, Building } from 'lucide-react';
import posterImage from '../../assets/images/img12.jpg';
import countries from 'world-countries';

/**
 * Page S'inscrire pour les Panels - Formulaire d'inscription très stylé
 */
const SinscrirePanels = () => {
  const { ref, controls } = useScrollAnimation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    country: '',
    validationCode: '',
    remarks: '',
    sessions: {
      rappel: [],
      jour1: [],
      jour2: [],
      jour3: [],
      jour4: []
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sessions = {
    rappel: [
      { id: 'rappel-1', label: '1ère Session de 10h à 18h', note: 'Repas non inclus - Visiteurs libres' }
    ],
    jour1: [
      { id: 'j1-1', label: 'Cérémonie d\'Ouverture', time: '09:00 - 10:30' },
      { id: 'j1-2', label: 'Gouvernance locale participative', time: '11:00 - 12:30' },
      { id: 'j1-3', label: 'Financement des projets territoriaux', time: '14:00 - 15:30' },
      { id: 'j1-4', label: 'Transition écologique et développement durable', time: '16:00 - 17:30' }
    ],
    jour2: [
      { id: 'j2-1', label: 'Agro-business et sécurité alimentaire', time: '09:00 - 10:30' },
      { id: 'j2-2', label: 'Tourisme et patrimoine', time: '11:00 - 12:30' },
      { id: 'j2-3', label: 'Innovation territoriale', time: '14:00 - 15:30' },
      { id: 'j2-4', label: 'Rencontres B to B et B to C', time: '16:00 - 18:00' }
    ],
    jour3: [
      { id: 'j3-1', label: 'Panel 1: Habitat et aménagement urbain', time: '09:00 - 11:00' },
      { id: 'j3-2', label: 'Panel 2: Énergies renouvelables', time: '09:00 - 11:00' },
      { id: 'j3-3', label: 'Panel 3: Économie numérique', time: '14:00 - 16:00' },
      { id: 'j3-4', label: 'Panel 4: Coopération décentralisée', time: '14:00 - 16:00' }
    ],
    jour4: [
      { id: 'j4-1', label: 'Synthèse et recommandations', time: '09:00 - 11:00' },
      { id: 'j4-2', label: 'Signature de partenariats', time: '11:30 - 13:00' },
      { id: 'j4-3', label: 'Dîner de Gala', time: '19:00 - 23:00' }
    ]
  };

  // Liste complète des pays avec support multilingue
  const countriesList = useMemo(() => {
    // Récupérer les noms en français, sinon utiliser le nom commun
    const countryNames = countries.map(country => {
      // Essayer d'obtenir le nom en français depuis les traductions
      const frenchName = country.translations?.fra?.common || 
                        country.translations?.fra?.official ||
                        country.name?.common || 
                        country.name?.official;
      return {
        name: frenchName,
        code: country.cca2
      };
    });
    
    // Trier par ordre alphabétique
    countryNames.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
    
    return countryNames;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSessionChange = (day, sessionId, checked) => {
    setFormData(prev => ({
      ...prev,
      sessions: {
        ...prev.sessions,
        [day]: checked
          ? [...prev.sessions[day], sessionId]
          : prev.sessions[day].filter(id => id !== sessionId)
      }
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    if (!formData.organization.trim()) newErrors.organization = 'L\'organisation est requise';
    if (!formData.role.trim()) newErrors.role = 'La fonction est requise';
    if (!formData.country) newErrors.country = 'Le pays est requis';
    if (!formData.validationCode.trim()) newErrors.validationCode = 'Le code de validation est requis';
    
    // Vérifier qu'au moins une session est sélectionnée
    const hasSessions = Object.values(formData.sessions).some(arr => arr.length > 0);
    if (!hasSessions) {
      newErrors.sessions = 'Veuillez sélectionner au moins une session';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/panels-inscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          role: formData.role,
          country: formData.country,
          validationCode: formData.validationCode,
          remarks: formData.remarks,
          sessions: formData.sessions
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            organization: '',
            role: '',
            country: '',
            validationCode: '',
            remarks: '',
            sessions: {
              rappel: [],
              jour1: [],
              jour2: [],
              jour3: [],
              jour4: []
            }
          });
        }, 5000);
      } else {
        // Gérer les erreurs de validation du backend
        if (data.errors && Array.isArray(data.errors)) {
          const backendErrors = {};
          data.errors.forEach(error => {
            if (error.includes('firstName')) {
              backendErrors.firstName = error;
            } else if (error.includes('lastName')) {
              backendErrors.lastName = error;
            } else if (error.includes('email')) {
              backendErrors.email = error;
            } else if (error.includes('phone')) {
              backendErrors.phone = error;
            } else if (error.includes('organization')) {
              backendErrors.organization = error;
            } else if (error.includes('role')) {
              backendErrors.role = error;
            } else if (error.includes('country')) {
              backendErrors.country = error;
            } else if (error.includes('session')) {
              backendErrors.sessions = error;
            }
          });
          setErrors(prev => ({ ...prev, ...backendErrors }));
        } else {
          setErrors({ submit: data.message || 'Une erreur est survenue lors de l\'inscription' });
        }
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'inscription:', error);
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer plus tard.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
     {/*  <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-orange to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM60 91c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM35 41c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 60c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center text-white"
        >
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            INSCRIPTION
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90">
            S'inscrire Pour Les Panels
          </p>
        </motion.div>
      </section> */}

      {/* Section Poster Image */}
      <Section id="poster-section" background="default" padding="lg">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-dark">
              Participez activement aux panels du Forum des Territoires 2026
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-6"></div>
          </motion.div>

          {/* Layout horizontal : Image et Texte côte à côte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Colonne Texte */}
            <motion.div
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Rejoignez les décideurs, experts et acteurs institutionnels pour des échanges stratégiques 
                sur la coopération décentralisée, le financement des projets, la transition écologique 
                et l'innovation territoriale.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Réservez dès maintenant votre place dans les panels thématiques 
                qui façonneront l'avenir des territoires.
              </p>
            </motion.div>

            {/* Colonne Image */}
            <motion.div
              variants={scaleIn}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={posterImage}
                  alt="Forum des Territoires 2025 - Poster"
                  className="w-full h-auto object-cover"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-orange/20 rounded-full blur-3xl hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl hidden lg:block"></div>
            </motion.div>
          </div>

          {/* Event Info Cards */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <Card variant="default" className="text-center p-6">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">Dates</h3>
              <p className="text-gray-600">Du 3 au 6 juin 2026</p>
            </Card>
            <Card variant="default" className="text-center p-6">
              <Building className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">Lieu</h3>
              <p className="text-gray-600">DoubleTree by Hilton Brussels City</p>
            </Card>
            <Card variant="default" className="text-center p-6">
              <Users className="w-8 h-8 text-accent-orange mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">Cérémonie</h3>
              <p className="text-gray-600">Au Parlement Bruxellois</p>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="inscription-panels" background="default" padding="lg">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-green-800 mb-3">
                Inscription confirmée !
              </h3>
              <p className="text-green-700 text-lg">
                Votre inscription aux panels a été enregistrée avec succès. 
                Vous recevrez un email de confirmation dans les prochaines minutes.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informations personnelles */}
              <Card variant="default" className="p-8">
                <h2 className="font-display font-bold text-2xl mb-6 text-primary flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Informations personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail <span className="text-primary">*</span>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </Card>

              {/* Informations professionnelles */}
              <Card variant="default" className="p-8">
                <h2 className="font-display font-bold text-2xl mb-6 text-primary flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  Informations professionnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organisation / Entreprise <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.organization ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.organization && (
                      <p className="text-red-500 text-sm mt-1">{errors.organization}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fonction / Rôle <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.role ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.role && (
                      <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays de résidence <span className="text-primary">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Sélectionner un pays</option>
                      {countriesList.map(country => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                    )}
                  </div>
                </div>
              </Card>

              {/* Choix de participation */}
              <Card variant="default" className="p-8">
                <h2 className="font-display font-bold text-2xl mb-6 text-primary flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Choix de participation
                </h2>
                
                {/* Rappel */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-dark">Rappel - Forum des Territoires 2023</h3>
                  {sessions.rappel.map(session => (
                    <label key={session.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.sessions.rappel.includes(session.id)}
                        onChange={(e) => handleSessionChange('rappel', session.id, e.target.checked)}
                        className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-medium">{session.label}</span>
                        {session.note && (
                          <p className="text-sm text-gray-600 mt-1">{session.note}</p>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                {/* Jour 1 */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-dark">Choix de participation (Jour 1) <span className="text-primary">*</span></h3>
                  <div className="space-y-3">
                    {sessions.jour1.map(session => (
                      <label key={session.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sessions.jour1.includes(session.id)}
                          onChange={(e) => handleSessionChange('jour1', session.id, e.target.checked)}
                          className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{session.label}</span>
                            {session.time && (
                              <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {session.time}
                              </span>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Jour 2 */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-dark">Choix de participation (Jour 2) <span className="text-primary">*</span></h3>
                  <div className="space-y-3">
                    {sessions.jour2.map(session => (
                      <label key={session.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sessions.jour2.includes(session.id)}
                          onChange={(e) => handleSessionChange('jour2', session.id, e.target.checked)}
                          className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{session.label}</span>
                            {session.time && (
                              <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {session.time}
                              </span>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Jour 3 */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-dark">Choix de participation (Jour 3 - Panels thématiques simultanés) <span className="text-primary">*</span></h3>
                  <div className="space-y-3">
                    {sessions.jour3.map(session => (
                      <label key={session.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sessions.jour3.includes(session.id)}
                          onChange={(e) => handleSessionChange('jour3', session.id, e.target.checked)}
                          className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{session.label}</span>
                            {session.time && (
                              <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {session.time}
                              </span>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Jour 4 */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-dark">Choix de participation (Jour 4) <span className="text-primary">*</span></h3>
                  <div className="space-y-3">
                    {sessions.jour4.map(session => (
                      <label key={session.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sessions.jour4.includes(session.id)}
                          onChange={(e) => handleSessionChange('jour4', session.id, e.target.checked)}
                          className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{session.label}</span>
                            {session.time && (
                              <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {session.time}
                              </span>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                {errors.sessions && (
                  <p className="text-red-500 text-sm mt-2">{errors.sessions}</p>
                )}
              </Card>

              {/* Remarques */}
              <Card variant="default" className="p-8">
                <h2 className="font-display font-bold text-xl mb-4 text-dark">Remarques / demandes spéciales</h2>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Vos remarques ou demandes spéciales..."
                />
              </Card>

              {/* Code de validation */}
              {/* <Card variant="default" className="p-8">
                <h2 className="font-display font-bold text-xl mb-4 text-dark">Code de Validation <span className="text-primary">*</span></h2>
                <input
                  type="text"
                  name="validationCode"
                  value={formData.validationCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.validationCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Entrez le code de validation"
                  required
                />
                {errors.validationCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.validationCode}</p>
                )}
              </Card> */}

              {/* Erreur de soumission */}
              {errors.submit && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm font-medium">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="px-12 py-4 text-lg"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </Section>
    </div>
  );
};

export default SinscrirePanels;

