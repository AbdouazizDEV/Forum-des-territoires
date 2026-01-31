# Notes de Développement - Forum des Territoires

## ✅ État Actuel

Le projet est fonctionnel avec toutes les pages et composants de base créés.

## 🔧 Prochaines Étapes

### 1. Assets & Images
- [ ] Ajouter le logo officiel dans `public/logo.svg` ou `src/assets/images/`
- [ ] Remplacer les images placeholder dans la galerie par les vraies photos
- [ ] Optimiser les images (WebP, tailles multiples)
- [ ] Ajouter les images des partenaires

### 2. Formulaire de Contact
- [ ] Configurer EmailJS avec les clés API
- [ ] Ou intégrer Formspree/autre service
- [ ] Tester l'envoi des emails

### 3. Contenu
- [ ] Remplacer les textes placeholder par le contenu final
- [ ] Ajouter les informations détaillées sur les pôles de développement
- [ ] Compléter les informations pratiques (hôtels, transports)

### 4. Fonctionnalités Avancées
- [ ] Intégrer une carte interactive (Leaflet ou Mapbox) pour Bruxelles
- [ ] Ajouter les cartes interactives des pôles de développement
- [ ] Implémenter le switcher de langue (FR/EN)
- [ ] Ajouter un système de newsletter fonctionnel

### 5. Optimisations
- [ ] Lazy loading des images
- [ ] Code splitting par route
- [ ] Optimiser les animations pour mobile
- [ ] Ajouter un service worker pour le PWA

### 6. SEO
- [ ] Créer un sitemap.xml
- [ ] Créer un robots.txt
- [ ] Ajouter les structured data (JSON-LD)
- [ ] Optimiser les meta descriptions par page

### 7. Tests
- [ ] Tester sur différents navigateurs
- [ ] Tester sur mobile/tablette
- [ ] Vérifier l'accessibilité avec un screen reader
- [ ] Tests de performance (Lighthouse)

## 🐛 Corrections à Faire

1. **Card.jsx** - Le linter signale une erreur sur `motion` mais le code est correct. 
   Solution: Vérifier la configuration ESLint ou ignorer cette erreur spécifique.

## 📝 Configuration Requise

### EmailJS (Optionnel)
Si vous utilisez EmailJS pour le formulaire de contact :

1. Créer un compte sur https://www.emailjs.com
2. Créer un service email
3. Créer un template
4. Récupérer les clés API
5. Mettre à jour `src/pages/Contact/Contact.jsx`

### Variables d'Environnement
Créer un fichier `.env` pour les clés API :

```
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans :
- `tailwind.config.js` - Configuration Tailwind
- `src/index.css` - Variables CSS

### Typographie
Les polices sont chargées depuis Google Fonts dans `src/index.css` :
- Inter (corps de texte)
- Poppins (titres)

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop le dossier dist/ sur Netlify
```

### GitHub Pages
```bash
npm install -D gh-pages
# Ajouter dans package.json:
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

