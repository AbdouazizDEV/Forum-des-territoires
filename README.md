# Forum des Territoires - Site Web

Refonte complète et moderne du site web du Forum des Territoires avec React, Framer Motion et Tailwind CSS.

## 🚀 Technologies

- **React 19** - Bibliothèque UI
- **React Router v7** - Navigation
- **Framer Motion** - Animations fluides
- **Tailwind CSS v4** - Styling moderne
- **Lucide React** - Icônes
- **React Intersection Observer** - Animations au scroll
- **EmailJS** - Formulaire de contact

## 📁 Structure du Projet

```
src/
├── components/
│   ├── common/           # Composants réutilisables
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Section/
│   │   └── AnimatedCounter/
│   ├── layout/           # Composants de mise en page
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Layout/
│   └── home/            # Composants spécifiques à la page d'accueil
│       ├── Hero/
│       ├── About/
│       ├── Pillars/
│       ├── Resources/
│       └── Stats/
├── pages/               # Pages complètes
│   ├── Home/
│   ├── Forum/
│   ├── Resources/
│   ├── Format/
│   ├── Lieu/
│   ├── Partners/
│   ├── Gallery/
│   └── Contact/
├── hooks/              # Custom hooks
│   ├── useScrollAnimation.js
│   └── useParallax.js
├── utils/              # Fonctions utilitaires
│   ├── animations.js
│   ├── constants.js
│   └── helpers.js
└── App.jsx
```

## 🎨 Palette de Couleurs

- **Primary:** #E63946 (Rouge)
- **Secondary:** #52B788 (Vert)
- **Accent Orange:** #F4A261
- **Accent Teal:** #2A9D8F
- **Dark:** #264653
- **Light:** #F8F9FA

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📄 Pages Disponibles

- `/` - Page d'accueil
- `/le-forum` - Présentation du forum 2026
- `/ressources` - Ressources territoriales
- `/le-format` - Format et activités
- `/lieu-et-periode` - Informations pratiques
- `/partenaires` - Partenaires et sponsoring
- `/gallerie` - Galerie photos et vidéos
- `/contact` - Contact et inscription

## ✨ Fonctionnalités

- ✅ Animations fluides avec Framer Motion
- ✅ Responsive design (mobile-first)
- ✅ Navigation avec transitions de page
- ✅ Formulaire de contact avec validation
- ✅ Galerie avec lightbox
- ✅ Compteurs animés pour les statistiques
- ✅ Header sticky avec effet de transparence
- ✅ SEO optimisé (meta tags, Open Graph)
- ✅ Accessibilité (ARIA labels, navigation clavier)

## 🎯 Principes de Développement

Le projet suit les principes **SOLID** et les bonnes pratiques React :

- **Single Responsibility** - Chaque composant a une responsabilité unique
- **Composants réutilisables** - DRY (Don't Repeat Yourself)
- **Props validation** - PropTypes sur tous les composants
- **Performance** - Lazy loading, memoization
- **Accessibilité** - WCAG 2.1 Level AA

## 📝 Configuration EmailJS

Pour activer le formulaire de contact, configurez EmailJS dans `src/pages/Contact/Contact.jsx` :

```javascript
import emailjs from '@emailjs/browser';

// Initialiser EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

// Dans handleSubmit
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

## 🚀 Déploiement

Le projet peut être déployé sur :

- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- Tout serveur statique

```bash
npm run build
# Le dossier `dist/` contient les fichiers à déployer
```

## 📧 Contact

- Email: forumdesterritoires2024@gmail.com
- Téléphones: +221 77 516 70 23 / +221 76 693 93 90 / +32 470 73 63 74

## 📄 Licence

© 2026 Forum des Territoires. Tous droits réservés.

Propulsé par **DIGITALIS SN**
