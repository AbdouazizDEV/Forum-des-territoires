# Guide de Déploiement sur IONOS - SFTP

## 📋 Prérequis

✅ Le build de production a été créé dans le dossier `dist/`
✅ Vous avez vos identifiants IONOS SFTP
✅ FileZilla installé (ou un autre client SFTP)

---

## 🔥 ÉTAPE 1 – Connexion SFTP (FileZilla)

### 1️⃣ Ouvrir FileZilla

Dans la barre en haut de FileZilla, entrez les informations suivantes :

| Champ | Valeur |
|-------|--------|
| **Hôte** | `access921856711.webspace-data.io` |
| **Nom d'utilisateur** | `u109322489` |
| **Mot de passe** | 🔐 (celui défini sur IONOS) |
| **Port** | `22` |

👉 Cliquez sur **"Connexion rapide"**

✅ Si FileZilla te demande une clé → **OK** / **Toujours faire confiance**

---

## 🔥 ÉTAPE 2 – Aller dans le bon dossier serveur

Dans FileZilla (partie droite – serveur) :

Tu dois voir quelque chose comme :

```
/
├── htdocs
├── logs
└── tmp
```

👉 **Double-clique sur `htdocs`**

⚠️ **IMPORTANT**

C'est **LE SEUL dossier visible par ton site**

Tout ce qui n'est pas dans `htdocs` ne s'affiche pas

---

## 🔥 ÉTAPE 3 – Nettoyer htdocs (si besoin)

Si tu vois :
- `index.html`
- `index.php`

👉 **Supprime-les** (ils viennent du template IONOS)

---

## 🔥 ÉTAPE 4 – Uploader ton build React

Sur ton PC (partie gauche de FileZilla) :

```
FORUM DES TERRITOIRES/
└── dist/
    ├── index.html
    ├── .htaccess
    └── assets/
```

⚠️ **ACTION TRÈS IMPORTANTE**

👉 Ouvre le dossier `dist`
👉 Sélectionne **TOUT** ce qu'il contient :
   - `index.html`
   - `.htaccess`
   - Tout le contenu du dossier `assets/`
👉 Glisse dans `htdocs`

❌ **Ne fais PAS** :
```
htdocs/dist/index.html  ❌
```

✅ **Résultat attendu** :
```
htdocs/
├── index.html
├── .htaccess
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── ...
```

---

## 🔥 ÉTAPE 5 – Fix React Router (OBLIGATOIRE si routes)

Le fichier `.htaccess` est **déjà créé** dans ton dossier `dist/` et sera uploadé automatiquement.

Il contient :
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

👉 **Sinon** `/contact`, `/about` → **404**

---

## 🔥 ÉTAPE 6 – Vérification Vite (rapide)

Dans ton `vite.config.js` :

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/",
})
```

✅ **Déjà configuré !**

Puis :

```bash
npm run build
```

(et re-upload si modifié)

---

## 🎉 ÉTAPE 7 – Tester

Va sur :

```
https://ton-domaine.fr
```

ou

```
https://www.forumdesterritoires.com
```

---

## 📋 Checklist de Déploiement

- [ ] Build de production créé (`npm run build`)
- [ ] FileZilla installé
- [ ] Connexion SFTP réussie avec les identifiants IONOS
- [ ] Navigation vers le dossier `htdocs` sur le serveur
- [ ] Anciens fichiers supprimés de `htdocs` (si nécessaire)
- [ ] Tous les fichiers du dossier `dist/` uploadés dans `htdocs/`
- [ ] Fichier `.htaccess` présent dans `htdocs/`
- [ ] Site accessible via le domaine
- [ ] Images et assets se chargent correctement
- [ ] Navigation fonctionne (toutes les routes React Router)
- [ ] Formulaires testés et fonctionnels
- [ ] SSL/HTTPS activé
- [ ] Tests finaux effectués

---

## ⚠️ Points d'Attention

1. **Backup** : Faites une sauvegarde de l'ancien site avant de déployer
2. **Permissions** : Les fichiers doivent avoir les permissions 644, les dossiers 755
3. **Taille des fichiers** : Si certains fichiers sont trop gros, contactez le support IONOS
4. **API Backend** : Vérifiez que l'URL de l'API backend est accessible depuis le serveur

---

## 🆘 En Cas de Problème

### Le site ne s'affiche pas
- Vérifiez que `index.html` est dans `htdocs/` (pas dans `htdocs/dist/`)
- Vérifiez les permissions des fichiers
- Vérifiez les logs d'erreur dans IONOS

### Les routes ne fonctionnent pas
- Vérifiez que le fichier `.htaccess` est présent dans `htdocs/`
- Vérifiez que mod_rewrite est activé (contactez le support)

### Les images ne se chargent pas
- Vérifiez que le dossier `assets/` a été transféré
- Vérifiez les chemins dans le code

### Les formulaires ne fonctionnent pas
- Vérifiez que l'URL de l'API backend est correcte
- Vérifiez les CORS côté backend
- Vérifiez la console du navigateur pour les erreurs

---

## 📞 Support IONOS

Si vous rencontrez des problèmes :
- **Support IONOS** : https://www.ionos.fr/assistance/
- **Téléphone** : Disponible dans votre espace client
- **Chat en ligne** : Disponible dans votre espace client

---

**Bon déploiement ! 🚀**

### Étape 8 : Vérifier le Déploiement

1. Ouvrez votre navigateur
2. Allez sur votre domaine : `https://www.forumdesterritoires.com`
3. Vérifiez que :
   - Le site s'affiche correctement
   - Les images se chargent
   - La navigation fonctionne
   - Les formulaires fonctionnent

### Étape 9 : Vérifier les Variables d'Environnement

Assurez-vous que l'URL de l'API backend est correcte dans le code :
- Vérifiez `src/utils/constants.js` → `API_BASE_URL`
- Si nécessaire, modifiez et refaites un build

---

## 🔧 Configuration Post-Déploiement

### SSL/HTTPS

IONOS propose généralement un certificat SSL gratuit :
1. Dans votre espace IONOS, cherchez **"SSL"** ou **"Certificats"**
2. Activez le certificat SSL pour votre domaine
3. Forcez HTTPS (redirection HTTP → HTTPS)

### Domaine et DNS

Si vous utilisez un sous-domaine ou un domaine personnalisé :
1. Vérifiez les paramètres DNS
2. Assurez-vous que le domaine pointe vers le bon serveur

---

## ⚠️ Points d'Attention

1. **Backup** : Faites une sauvegarde de l'ancien site avant de déployer
2. **Permissions** : Les fichiers doivent avoir les permissions 644, les dossiers 755
3. **Taille des fichiers** : Si certains fichiers sont trop gros, contactez le support IONOS
4. **API Backend** : Vérifiez que l'URL de l'API backend est accessible depuis le serveur

---

## 🆘 En Cas de Problème

### Le site ne s'affiche pas
- Vérifiez que `index.html` est dans le bon dossier
- Vérifiez les permissions des fichiers
- Vérifiez les logs d'erreur dans IONOS

### Les routes ne fonctionnent pas
- Vérifiez que le fichier `.htaccess` est présent
- Vérifiez que mod_rewrite est activé (contactez le support)

### Les images ne se chargent pas
- Vérifiez que le dossier `assets/` a été transféré
- Vérifiez les chemins dans le code

### Les formulaires ne fonctionnent pas
- Vérifiez que l'URL de l'API backend est correcte
- Vérifiez les CORS côté backend
- Vérifiez la console du navigateur pour les erreurs

---

## 📞 Support IONOS

Si vous rencontrez des problèmes :
- **Support IONOS** : https://www.ionos.fr/assistance/
- **Téléphone** : Disponible dans votre espace client
- **Chat en ligne** : Disponible dans votre espace client

---

## ✅ Checklist de Déploiement

- [ ] Build de production créé (`npm run build`)
- [ ] Connexion à l'espace IONOS réussie
- [ ] Type d'utilisation du domaine modifié (WordPress → Espace Web) si nécessaire
- [ ] Accès au gestionnaire de fichiers obtenu
- [ ] Dossier public identifié (htdocs/public_html/www/html)
- [ ] Anciens fichiers sauvegardés (si nécessaire)
- [ ] Fichiers du dossier `dist/` transférés
- [ ] Fichier `.htaccess` créé et configuré
- [ ] Site accessible via le domaine
- [ ] Images et assets se chargent correctement
- [ ] Navigation fonctionne
- [ ] Formulaires testés et fonctionnels
- [ ] SSL/HTTPS activé
- [ ] Tests finaux effectués

---

**Bon déploiement ! 🚀**
