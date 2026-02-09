/**
 * Helper pour traduire les espaces d'exposition
 */

export const translateExpositionSpace = (space, t, i18n) => {
  if (!space) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return space;
  }
  
  // Traductions des espaces
  const spaceTranslations = {
    names: {
      'Premium': 'Premium',
      'Standard': 'Standard',
      'Startup': 'Startup'
    },
    subtitles: {
      'L\'Expérience Prestige': 'The Prestige Experience',
      'La Solution Visibilité': 'The Visibility Solution',
      'La Vitrine Innovante': 'The Innovative Showcase'
    },
    included: {
      'TV écran plat': 'Flat screen TV',
      'Info Desk premium': 'Premium Info Desk',
      'Emplacement stratégique': 'Strategic location',
      'Signalétique personnalisée': 'Custom signage',
      'Mention digitale sur site et réseaux': 'Digital mention on website and networks',
      'Info Desk standard': 'Standard Info Desk',
      'Signalétique avec logo': 'Signage with logo',
      'Mention digitale': 'Digital mention',
      'Info Desk fonctionnel': 'Functional Info Desk'
    },
    benefits: {
      'Votre marque se positionne comme leader et partenaire privilégié. Maximum de visibilité et impact sur vos visiteurs.': 'Your brand positions itself as a leader and privileged partner. Maximum visibility and impact on your visitors.',
      'Idéal pour gagner en visibilité tout en maîtrisant votre budget. Votre marque est présente là où ça compte.': 'Ideal for gaining visibility while controlling your budget. Your brand is present where it matters.',
      'Compact mais visible, parfait pour faire connaître rapidement votre innovation et attirer l\'attention.': 'Compact but visible, perfect for quickly making your innovation known and attracting attention.'
    }
  };
  
  return {
    ...space,
    name: spaceTranslations.names[space.name] || space.name,
    subtitle: spaceTranslations.subtitles[space.subtitle] || space.subtitle,
    included: space.included.map(item => ({
      ...item,
      text: spaceTranslations.included[item.text] || item.text
    })),
    benefits: spaceTranslations.benefits[space.benefits] || space.benefits
  };
};

export const translateExpositionSpaces = (spaces, t, i18n) => {
  if (!spaces || !Array.isArray(spaces)) return [];
  return spaces.map(space => translateExpositionSpace(space, t, i18n));
};
