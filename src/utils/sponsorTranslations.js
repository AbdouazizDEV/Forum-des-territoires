/**
 * Helper pour traduire les packages de sponsoring
 */

export const translateSponsorPackage = (pkg, t, i18n) => {
  if (!pkg) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return pkg;
  }
  
  // Traductions des packages
  const packageTranslations = {
    names: {
      'SPONSOR PLATINUM': 'PLATINUM SPONSOR',
      'SPONSOR GOLD': 'GOLD SPONSOR',
      'SPONSOR SILVER': 'SILVER SPONSOR'
    },
    dimensions: {
      'Financement & Gouvernance': 'Financing & Governance',
      'Innovation & Habitat Durable': 'Innovation & Sustainable Housing',
      'Inclusion Sociale & Habitat Territorial': 'Social Inclusion & Territorial Housing'
    },
    descriptions: {
      'Le Sponsor Platinum est associé à la dimension stratégique du financement, de la gouvernance territoriale et des politiques publiques de l\'habitat, cœur des décisions structurantes internationale.': 'The Platinum Sponsor is associated with the strategic dimension of financing, territorial governance and public housing policies, the heart of structuring international decisions.',
      'Le Sponsor Gold est positionné sur la dimension innovation de l\'habitat : fintech logement, matériaux durables, construction bas carbone, smart cities et villages intelligents.': 'The Gold Sponsor is positioned on the innovation dimension of housing: housing fintech, sustainable materials, low-carbon construction, smart cities and intelligent villages.',
      'Le Sponsor Silver est associé à la dimension sociale et inclusive de l\'habitat : logement abordable, habitat rural, inclusion des jeunes, des femmes et des populations vulnérables.': 'The Silver Sponsor is associated with the social and inclusive dimension of housing: affordable housing, rural housing, inclusion of youth, women and vulnerable populations.'
    },
    advantages: {
      'Statut de Sponsor Officiel Premium du Forum': 'Official Premium Sponsor Status of the Forum',
      'Association exclusive aux sessions plénières « Habitat & Gouvernance »': 'Exclusive association with plenary sessions "Housing & Governance"',
      'Keynote d\'ouverture ou de clôture sur les enjeux de l\'habitat durable': 'Opening or closing keynote on sustainable housing challenges',
      'Logo en position dominante (grand) sur tous les supports': 'Logo in dominant position (large) on all media',
      'Stand premium (24 m² – emplacement stratégique) avec TV, Info desk, 02 tabourets, une manche debout, Machine café': 'Premium stand (24 m² – strategic location) with TV, Info desk, 02 stools, one standing table, Coffee machine',
      'Accès VIP complet (05 badges = 5 personnes prises en charge)': 'Complete VIP access (05 badges = 5 people taken care of)',
      'Hébergement Chambre Exécutive Hôtel 4*': 'Executive Room Accommodation Hotel 4*',
      'Demi-pension': 'Half-board',
      'Transport aéroport Zaventem-hôtel A/R': 'Airport transport Zaventem-hotel A/R',
      'Transport interne pour les activités du forum': 'Internal transport for forum activities',
      'Educ tour (visite des lieux stratégiques de Bruxelles)': 'Educ tour (visit of strategic places in Brussels)',
      'Branding stand et personnalisé': 'Stand branding and personalized',
      'Visibilité média internationale avant, pendant et après l\'événement': 'International media visibility before, during and after the event',
      'Accès à la Soirée de Gala': 'Access to the Gala Evening',
      'Association aux panels « Innovation, Fintech & Habitat »': 'Association with panels "Innovation, Fintech & Housing"',
      'Intervention lors d\'un panel stratégique': 'Intervention during a strategic panel',
      'Logo en visibilité forte sur supports officiels': 'Logo in strong visibility on official media',
      'Stand professionnel (12 m²) TV, Info desk, 02 tabourets, une manche debout, Machine café': 'Professional stand (12 m²) TV, Info desk, 02 stools, one standing table, Coffee machine',
      'Hébergement Chambre Standard Hôtel 4*': 'Standard Room Accommodation Hotel 4*',
      'Accès VIP (02 badges = 2 personnes prises en charge)': 'VIP access (02 badges = 2 people taken care of)',
      'Mentions médias et digitales ciblées': 'Targeted media and digital mentions',
      'Association aux ateliers « Habitat inclusif & territoires »': 'Association with workshops "Inclusive Housing & Territories"',
      'Logo sur supports officiels': 'Logo on official media',
      'Stand standard (9 m²) TV, Info desk, 02 tabourets, une manche debout': 'Standard stand (9 m²) TV, Info desk, 02 stools, one standing table',
      'Accès Forum (01 badges = 1 personne prise en charge)': 'Forum access (01 badge = 1 person taken care of)',
      'Mention dans le rapport officiel du Forum': 'Mention in the official Forum report'
    }
  };
  
  // Créer une copie du package avec les traductions
  const translatedPackage = {
    ...pkg,
    name: packageTranslations.names[pkg.name] || pkg.name,
    dimension: packageTranslations.dimensions[pkg.dimension] || pkg.dimension,
    description: packageTranslations.descriptions[pkg.description] || pkg.description,
    advantages: pkg.advantages.map(advantage => ({
      ...advantage,
      text: packageTranslations.advantages[advantage.text] || advantage.text
    }))
  };
  
  return translatedPackage;
};

/**
 * Traduit une liste de packages de sponsoring
 */
export const translateSponsorPackages = (packages, t, i18n) => {
  if (!packages || !Array.isArray(packages)) return [];
  return packages.map(pkg => translateSponsorPackage(pkg, t, i18n));
};
