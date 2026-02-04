# Modifications Backend Requises

## 📋 Résumé des changements

Les modifications frontend nécessitent des ajustements côté backend pour gérer les nouveaux types de réservations et les packages de stands.

---

## 🔄 Endpoint `/api/reservation`

### Structure actuelle du body (avant modifications) :
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "organization": "string",
  "participationType": "string",
  "package": "string",
  "numberOfPeople": "string"
}
```

### Modifications nécessaires :

#### 1. **Champ `participationType`** - Nouvelles valeurs possibles :
- ✅ `"participant"` - Nouveau (pour réservation de place)
- ✅ `"exposant"` - Nouveau (pour réservation de stand)
- ✅ `"partenaire"` - Existant
- ✅ `"speaker"` - Existant

#### 2. **Champ `package`** - Nouvelles valeurs possibles :

**Pour les participants (`participationType: "participant"`) :**
- `"Package Teranga"`
- `"Package Silver"`
- `"Package Gold"`
- `"Non spécifié"` ou `""` (vide) - **Le package est optionnel pour les participants**

**Pour les exposants (`participationType: "exposant"`) :**
- `"Stand Standard"` - **Nouveau**
- `"Stand Premium"` - **Nouveau**
- `"Stand VIP"` - **Nouveau**
- Le package est **requis** pour les exposants

#### 3. **Validation à implémenter côté backend :**

```javascript
// Validation recommandée
if (participationType === 'exposant' && !package) {
  return {
    success: false,
    message: "Erreurs de validation",
    errors: ["Le stand est requis pour les exposants"]
  };
}

// Le package est optionnel pour les participants
if (participationType === 'participant' && !package) {
  // Accepter la réservation sans package ou avec "Non spécifié"
  package = package || "Non spécifié";
}
```

---

## 📧 Endpoint `/api/contact`

### Structure actuelle du body (inchangée) :
```json
{
  "civility": "string",
  "fullName": "string",
  "organization": "string",
  "country": "string",
  "email": "string",
  "phone": "string",
  "participationType": "string",
  "message": "string"
}
```

### Modifications nécessaires :

#### Champ `participationType` - Nouvelles valeurs possibles :
- ✅ `"territoire"` - Existant
- ✅ `"investisseur"` - Existant
- ✅ `"partenaire"` - Existant (redirigé depuis Participer)
- ✅ `"autre"` - Existant
- ✅ `"speaker"` - **Nouveau** (redirigé depuis Participer)

**Note :** Les valeurs `"partenaire"` et `"speaker"` peuvent maintenant venir de la page Participer.

---

## 📊 Exemples de requêtes

### Exemple 1 : Réservation d'un participant (sans package)
```json
POST /api/reservation
{
  "fullName": "Jean Dupont",
  "email": "jean.dupont@example.com",
  "phone": "+33 6 12 34 56 78",
  "organization": "Acme Corp",
  "participationType": "participant",
  "package": "Non spécifié",
  "numberOfPeople": "1"
}
```

### Exemple 2 : Réservation d'un stand (exposant)
```json
POST /api/reservation
{
  "fullName": "Marie Martin",
  "email": "marie.martin@example.com",
  "phone": "+33 6 98 76 54 32",
  "organization": "Tech Solutions",
  "participationType": "exposant",
  "package": "Stand Premium",
  "numberOfPeople": "3"
}
```

### Exemple 3 : Contact pour devenir partenaire
```json
POST /api/contact
{
  "civility": "Monsieur",
  "fullName": "Pierre Durand",
  "organization": "Big Corp",
  "country": "France",
  "email": "pierre.durand@example.com",
  "phone": "+33 6 11 22 33 44",
  "participationType": "partenaire",
  "message": "Je souhaite devenir partenaire du Forum"
}
```

### Exemple 4 : Contact pour devenir speaker
```json
POST /api/contact
{
  "civility": "Madame",
  "fullName": "Sophie Laurent",
  "organization": "Expert Consulting",
  "country": "Belgique",
  "email": "sophie.laurent@example.com",
  "phone": "+32 470 73 63 74",
  "participationType": "speaker",
  "message": "Je souhaite intervenir en tant que speaker"
}
```

---

## ✅ Checklist Backend

### Endpoint `/api/reservation`
- [ ] Mettre à jour la validation de `participationType` pour accepter `"participant"` et `"exposant"`
- [ ] Mettre à jour la validation de `package` pour accepter les stands (`"Stand Standard"`, `"Stand Premium"`, `"Stand VIP"`)
- [ ] Rendre le champ `package` optionnel pour les participants
- [ ] Rendre le champ `package` obligatoire pour les exposants
- [ ] Mettre à jour les templates d'email pour différencier les réservations de stands vs places

### Endpoint `/api/contact`
- [ ] Ajouter `"speaker"` comme valeur possible pour `participationType`
- [ ] Tester les redirections depuis la page Participer

### Nouvel Endpoint `/api/panels-inscription`
- [ ] Créer le nouvel endpoint `/api/panels-inscription`
- [ ] Implémenter la validation des champs obligatoires
- [ ] Implémenter la validation de l'email
- [ ] Implémenter la validation des sessions (au moins une session requise)
- [ ] Implémenter la validation des IDs de sessions (optionnel mais recommandé)
- [ ] Valider qu'un participant ne s'inscrit pas à deux sessions simultanées (jour 3)
- [ ] Créer le template d'email de confirmation d'inscription
- [ ] Stocker les inscriptions avec date, statut et détails des sessions
- [ ] Tester tous les scénarios d'inscription

### Tests généraux
- [ ] Tester tous les scénarios de réservation
- [ ] Tester tous les scénarios de contact
- [ ] Tester tous les scénarios d'inscription aux panels

---

## 🔍 Tests à effectuer

### Endpoint `/api/reservation`
1. **Réservation participant sans package** → Doit être acceptée
2. **Réservation exposant avec stand** → Doit être acceptée
3. **Réservation exposant sans stand** → Doit être rejetée avec erreur

### Endpoint `/api/contact`
4. **Contact partenaire** → Doit être accepté
5. **Contact speaker** → Doit être accepté

### Endpoint `/api/panels-inscription`
6. **Inscription avec toutes les données valides** → Doit être acceptée
7. **Inscription avec champs manquants** → Doit être rejetée avec erreurs de validation
8. **Inscription sans sessions sélectionnées** → Doit être rejetée avec erreur
9. **Inscription avec email invalide** → Doit être rejetée avec erreur
10. **Inscription avec IDs de sessions invalides** → Doit être rejetée avec erreur (si validation activée)
11. **Inscription à deux sessions simultanées (jour 3)** → Doit être rejetée ou gérée selon la logique métier
12. **Inscription avec validationCode requis** → Doit valider le code si configuré

---

---

## 🎯 Nouvel Endpoint `/api/panels-inscription`

### Description
Nouvel endpoint pour gérer les inscriptions aux panels du Forum des Territoires 2026. Permet aux participants de s'inscrire à des sessions spécifiques sur plusieurs jours.

### Structure du body :
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "organization": "string",
  "role": "string",
  "country": "string",
  "validationCode": "string",
  "remarks": "string",
  "sessions": {
    "rappel": ["string"],
    "jour1": ["string"],
    "jour2": ["string"],
    "jour3": ["string"],
    "jour4": ["string"]
  }
}
```

### Détails des champs :

#### Champs obligatoires :
- `firstName` (string) - Prénom du participant
- `lastName` (string) - Nom du participant
- `email` (string) - Email valide du participant
- `phone` (string) - Numéro de téléphone
- `organization` (string) - Organisation/Entreprise
- `role` (string) - Fonction/Rôle dans l'organisation
- `country` (string) - Pays de résidence
- `sessions` (object) - Au moins une session doit être sélectionnée

#### Champs optionnels :
- `validationCode` (string) - Code de validation (peut être requis selon la configuration)
- `remarks` (string) - Remarques ou demandes spéciales

#### Structure `sessions` :
L'objet `sessions` contient 5 propriétés correspondant aux différents jours :
- `rappel` (array) - Sessions du rappel (Forum 2023)
  - Valeurs possibles : `["rappel-1"]`
- `jour1` (array) - Sessions du jour 1
  - Valeurs possibles : `["j1-1", "j1-2", "j1-3", "j1-4"]`
- `jour2` (array) - Sessions du jour 2
  - Valeurs possibles : `["j2-1", "j2-2", "j2-3", "j2-4"]`
- `jour3` (array) - Sessions du jour 3 (Panels thématiques simultanés)
  - Valeurs possibles : `["j3-1", "j3-2", "j3-3", "j3-4"]`
- `jour4` (array) - Sessions du jour 4
  - Valeurs possibles : `["j4-1", "j4-2", "j4-3"]`

### Validation à implémenter :

```javascript
// Validation des champs obligatoires
const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'organization', 'role', 'country'];
const errors = [];

requiredFields.forEach(field => {
  if (!data[field] || !data[field].trim()) {
    errors.push(`Le champ ${field} est requis`);
  }
});

// Validation de l'email
if (data.email && !isValidEmail(data.email)) {
  errors.push('Email invalide');
}

// Validation des sessions - au moins une session doit être sélectionnée
const hasSessions = Object.values(data.sessions || {}).some(arr => Array.isArray(arr) && arr.length > 0);
if (!hasSessions) {
  errors.push('Veuillez sélectionner au moins une session');
}

// Validation des IDs de sessions (optionnel mais recommandé)
const validSessionIds = {
  rappel: ['rappel-1'],
  jour1: ['j1-1', 'j1-2', 'j1-3', 'j1-4'],
  jour2: ['j2-1', 'j2-2', 'j2-3', 'j2-4'],
  jour3: ['j3-1', 'j3-2', 'j3-3', 'j3-4'],
  jour4: ['j4-1', 'j4-2', 'j4-3']
};

Object.keys(data.sessions || {}).forEach(day => {
  if (validSessionIds[day]) {
    data.sessions[day].forEach(sessionId => {
      if (!validSessionIds[day].includes(sessionId)) {
        errors.push(`ID de session invalide: ${sessionId} pour ${day}`);
      }
    });
  }
});

if (errors.length > 0) {
  return {
    success: false,
    message: "Erreurs de validation",
    errors: errors
  };
}
```

### Réponse attendue :

**Succès (200) :**
```json
{
  "success": true,
  "message": "Inscription aux panels enregistrée avec succès"
}
```

**Erreur de validation (400) :**
```json
{
  "success": false,
  "message": "Erreurs de validation",
  "errors": [
    "Le champ firstName est requis",
    "Email invalide",
    "Veuillez sélectionner au moins une session"
  ]
}
```

### Exemple de requête complète :

```json
POST /api/panels-inscription
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@example.com",
  "phone": "+33 6 12 34 56 78",
  "organization": "Acme Corporation",
  "role": "Directeur des projets",
  "country": "France",
  "validationCode": "",
  "remarks": "Besoin d'un accès handicapé",
  "sessions": {
    "rappel": [],
    "jour1": ["j1-1", "j1-2"],
    "jour2": ["j2-1", "j2-3"],
    "jour3": ["j3-1"],
    "jour4": ["j4-1", "j4-3"]
  }
}
```

### Mapping des sessions :

| ID Session | Label | Jour | Heure |
|------------|-------|------|-------|
| `rappel-1` | 1ère Session de 10h à 18h | Rappel | 10:00 - 18:00 |
| `j1-1` | Cérémonie d'Ouverture | Jour 1 | 09:00 - 10:30 |
| `j1-2` | Gouvernance locale participative | Jour 1 | 11:00 - 12:30 |
| `j1-3` | Financement des projets territoriaux | Jour 1 | 14:00 - 15:30 |
| `j1-4` | Transition écologique et développement durable | Jour 1 | 16:00 - 17:30 |
| `j2-1` | Agro-business et sécurité alimentaire | Jour 2 | 09:00 - 10:30 |
| `j2-2` | Tourisme et patrimoine | Jour 2 | 11:00 - 12:30 |
| `j2-3` | Innovation territoriale | Jour 2 | 14:00 - 15:30 |
| `j2-4` | Rencontres B to B et B to C | Jour 2 | 16:00 - 18:00 |
| `j3-1` | Panel 1: Habitat et aménagement urbain | Jour 3 | 09:00 - 11:00 |
| `j3-2` | Panel 2: Énergies renouvelables | Jour 3 | 09:00 - 11:00 |
| `j3-3` | Panel 3: Économie numérique | Jour 3 | 14:00 - 16:00 |
| `j3-4` | Panel 4: Coopération décentralisée | Jour 3 | 14:00 - 16:00 |
| `j4-1` | Synthèse et recommandations | Jour 4 | 09:00 - 11:00 |
| `j4-2` | Signature de partenariats | Jour 4 | 11:30 - 13:00 |
| `j4-3` | Dîner de Gala | Jour 4 | 19:00 - 23:00 |

### Notes importantes :

1. **Sessions simultanées** : Le jour 3 contient des panels simultanés (j3-1 et j3-2 à 09:00, j3-3 et j3-4 à 14:00). Le backend peut valider qu'un participant ne s'inscrit pas à deux sessions simultanées.

2. **Validation du code** : Le champ `validationCode` est actuellement optionnel dans le frontend mais peut être requis selon la configuration du backend.

3. **Format des données** : Les sessions sont envoyées sous forme d'array d'IDs. Chaque jour peut contenir plusieurs sessions sélectionnées.

4. **Stockage recommandé** : Il est recommandé de stocker les inscriptions avec :
   - Date d'inscription
   - Statut (en attente, confirmée, annulée)
   - ID unique de l'inscription
   - Détails des sessions sélectionnées

---

## 📝 Notes importantes

- Le champ `package` peut maintenant être vide ou "Non spécifié" pour les participants
- Les stands sont identifiés par leur nom complet : "Stand Standard", "Stand Premium", "Stand VIP"
- Les packages participants restent : "Package Teranga", "Package Silver", "Package Gold"
- La distinction entre participant et exposant est importante pour le traitement des réservations
- Le nouvel endpoint `/api/panels-inscription` nécessite une validation stricte des IDs de sessions
