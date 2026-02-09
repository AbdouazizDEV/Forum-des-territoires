/**
 * Helper pour traduire les partenariats thématiques
 */

export const translateThematicPartnership = (partnership, t, i18n) => {
  if (!partnership) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return partnership;
  }
  
  // Traductions des partenariats thématiques
  const partnershipTranslations = {
    names: {
      'Partenaire Fintech & Innovation': 'Fintech & Innovation Partner',
      'Partenaire Finance & Investissement': 'Finance & Investment Partner',
      'Partenaire Territoires & Infrastructures': 'Territories & Infrastructure Partner',
      'Partenaire Jeunesse & Entrepreneuriat': 'Youth & Entrepreneurship Partner'
    },
    descriptions: {
      'Exclusivité sectorielle et visibilité ciblée dans le domaine de la fintech et de l\'innovation technologique pour l\'habitat': 'Sector exclusivity and targeted visibility in fintech and technological innovation for housing',
      'Exclusivité sectorielle et visibilité ciblée dans le financement et l\'investissement territorial': 'Sector exclusivity and targeted visibility in territorial financing and investment',
      'Exclusivité sectorielle et visibilité ciblée dans le développement territorial et les infrastructures': 'Sector exclusivity and targeted visibility in territorial development and infrastructure',
      'Exclusivité sectorielle et visibilité ciblée dans l\'entrepreneuriat et l\'inclusion des jeunes': 'Sector exclusivity and targeted visibility in entrepreneurship and youth inclusion'
    },
    benefits: {
      'Visibilité exclusive dans les panels Innovation & Fintech': 'Exclusive visibility in Innovation & Fintech panels',
      'Positionnement stratégique sur les solutions technologiques': 'Strategic positioning on technological solutions',
      'Accès privilégié aux startups et acteurs innovants': 'Privileged access to startups and innovative actors',
      'Mentions ciblées dans les communications digitales': 'Targeted mentions in digital communications',
      'Association aux sessions Financement & Gouvernance': 'Association with Financing & Governance sessions',
      'Positionnement sur les opportunités d\'investissement': 'Positioning on investment opportunities',
      'Accès direct aux décideurs financiers': 'Direct access to financial decision-makers',
      'Visibilité dans les rapports et publications officielles': 'Visibility in official reports and publications',
      'Association aux ateliers Territoires & Infrastructures': 'Association with Territories & Infrastructure workshops',
      'Positionnement sur les projets structurants': 'Positioning on structuring projects',
      'Accès aux collectivités territoriales': 'Access to territorial communities',
      'Visibilité dans les sessions plénières': 'Visibility in plenary sessions',
      'Association aux ateliers Jeunesse & Entrepreneuriat': 'Association with Youth & Entrepreneurship workshops',
      'Positionnement sur l\'inclusion et l\'innovation sociale': 'Positioning on inclusion and social innovation',
      'Accès aux jeunes entrepreneurs et startups': 'Access to young entrepreneurs and startups',
      'Visibilité dans les programmes d\'accompagnement': 'Visibility in support programs'
    }
  };
  
  // Créer une copie du partenariat avec les traductions
  const translatedPartnership = {
    ...partnership,
    name: partnershipTranslations.names[partnership.name] || partnership.name,
    description: partnershipTranslations.descriptions[partnership.description] || partnership.description,
    benefits: partnership.benefits.map(benefit => 
      partnershipTranslations.benefits[benefit] || benefit
    )
  };
  
  return translatedPartnership;
};

/**
 * Traduit une liste de partenariats thématiques
 */
export const translateThematicPartnerships = (partnerships, t, i18n) => {
  if (!partnerships || !Array.isArray(partnerships)) return [];
  return partnerships.map(partnership => translateThematicPartnership(partnership, t, i18n));
};
