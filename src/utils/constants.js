/**
 * Constantes du projet Forum des Territoires
 */

export const SITE_INFO = {
  name: "Forum des Territoires",
  tagline: "Batir ensemble les villes et territoires de demain",
  event: "PANEL – EXPO - VISITES - NETWORK",
  dates: "3-6 Juin 2026",
  location: "Bruxelles",
  fullLocation: "Bruxelles, 3-6 Juin 2026",
  heroTitle: "L'Habitat au coeur des Territoires",
  heroSubtitle: "Batir ensemble les villes et territoires de demain - Bruxelles, 3-6 Juin 2026"
};

export const HERO_STATS = [
  { id: 1, value: 800, suffix: "+", label: "Participants" },
  { id: 2, value: 80, suffix: "", label: "Speakers" },
  { id: 3, value: 20, suffix: "", label: "Pays représentés" },
  { id: 4, value: 120, suffix: "", label: "Investisseurs & bailleurs" }
];

export const CONTACT_INFO = {
  phones: [
    "+221 77 516 70 23",
    "+221 76 693 93 90",
    "+32 470 73 63 74"
  ],
  email: "forumdesterritoires2024@gmail.com"
};

export const NAVIGATION_LINKS = [
  { 
    path: "/a-propos", 
    label: "A propos",
    submenu: [
      { path: "/a-propos#presentation", label: "Présentation" },
      { path: "/a-propos#objectifs", label: "Objectifs" },
      { path: "/a-propos#participants", label: "Participants" }
    ]
  },
  { path: "/programme", label: "Programme" },
  { path: "/speakers", label: "Speakers" },
  { path: "/editions-precedentes", label: "Editions precedentes" },
  { path: "/actualites", label: "Actualites" },
  { path: "/partenaires", label: "Partenaires" },
  { path: "/participer", label: "Participer" }
];

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61586291537573", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/ft19.4?utm_source=qr&amp;igsh=cmcydXZ0dGgxZmlh", icon: "instagram" },
  { name: "YouTube", url: "https://youtube.com/@forumdesterritoires?si=DfHbaZ6z3NJBsXK3", icon: "youtube" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/forum-des-territoires/", icon: "linkedin" }
];

export const PILLARS = [
  {
    id: 1,
    title: "Dialogue politique et institutionnel",
    description: "Espace de dialogue structuré entre collectivités territoriales africaines, partenaires européens et institutions publiques",
    icon: "MessageSquare"
  },
  {
    id: 2,
    title: "Projets territoriaux structurants et bankables",
    description: "Mise en lumière des projets de développement territorial validés par les autorités compétentes",
    icon: "Building2"
  },
  {
    id: 3,
    title: "Mise en relation investisseurs-territoires",
    description: "Approche orientée vers l'action et connexions directes",
    icon: "Handshake"
  }
];

export const RESOURCE_SECTORS = [
  {
    id: 1,
    title: "Agriculture durable, agro-industrie et sécurité alimentaire",
    slug: "agriculture",
    icon: "Sprout"
  },
  {
    id: 2,
    title: "Élevage, cuirs et industries connexes",
    slug: "elevage",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "Énergies renouvelables et transition énergétique",
    slug: "energies",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Tourisme culturel, écologique et communautaire",
    slug: "tourisme",
    icon: "Building"
  },
  {
    id: 5,
    title: "Économie bleue (pêche, aquaculture, économie maritime)",
    slug: "economie-bleue",
    icon: "Waves"
  },
  {
    id: 6,
    title: "Gestion des déchets, assainissement, économie circulaire",
    slug: "dechets",
    icon: "Smartphone"
  },
  {
    id: 7,
    title: "Numérique, innovation et jeunesse entrepreneuriale",
    slug: "numerique",
    icon: "Smartphone"
  },
  {
    id: 8,
    title: "Infrastructures (logement social, mobilité, éducation)",
    slug: "infrastructures",
    icon: "Building"
  },
  {
    id: 9,
    title: "Inclusion (genre, jeunes, personnes en situation de handicap)",
    slug: "inclusion",
    icon: "Users"
  }
];

export const STATS = [
  { id: 1, value: 800, suffix: "+", label: "Participants" },
  { id: 2, value: 20, suffix: "", label: "Pays représentés" },
  { id: 3, value: 80, suffix: "", label: "Speakers" },
  { id: 4, value: 120, suffix: "", label: "Investisseurs & bailleurs" },
  { id: 5, value: 50, suffix: "+", label: "Projets présentés" },
  { id: 6, value: 500, suffix: "+", label: "Milliards FCFA - Montant potentiel de projets" }
];

export const FOOTER_LINKS = [
  { name: "SN KINSS", url: "https://snkinss.com/" },
  { name: "Jeux d'EDEN", url: "https://lesjeuxdeden.fr/" },
  { name: "UNCCIAS", url: "https://www.unccias.sn/" },
  { name: "UAEL", url: "https://collectivitesterritoriales.sn/union-de-lassociation-des-elus-locaux/" }
];

