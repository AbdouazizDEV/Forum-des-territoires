/**
 * Helper pour traduire les avantages partenaires
 */

export const translatePartenaireAvantage = (avantage, t, i18n) => {
  if (!avantage) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return avantage;
  }
  
  // Traductions des avantages
  const avantageTranslations = {
    titles: {
      "Visibilité institutionnelle panafricaine et internationale": "Pan-African and international institutional visibility",
      "Accès direct à des décideurs de haut niveau": "Direct access to high-level decision-makers",
      "Opportunités business qualifiées": "Qualified business opportunities",
      "Positionnement stratégique sur des projets structurants": "Strategic positioning on structuring projects",
      "Contribution mesurable au développement territorial": "Measurable contribution to territorial development"
    },
    descriptions: {
      "Bénéficiez d'une exposition maximale auprès des décideurs et acteurs clés du développement territorial": "Benefit from maximum exposure to decision-makers and key actors in territorial development",
      "Rencontrez et échangez directement avec les dirigeants publics et privés les plus influents": "Meet and exchange directly with the most influential public and private leaders",
      "Accédez à des opportunités d'affaires ciblées et qualifiées dans le secteur du développement territorial": "Access targeted and qualified business opportunities in the territorial development sector",
      "Positionnez votre organisation sur des projets à fort impact pour le développement durable": "Position your organization on high-impact projects for sustainable development",
      "Participez activement à des initiatives ayant un impact concret et mesurable sur les territoires": "Actively participate in initiatives with concrete and measurable impact on territories"
    }
  };
  
  return {
    ...avantage,
    title: avantageTranslations.titles[avantage.title] || avantage.title,
    description: avantageTranslations.descriptions[avantage.description] || avantage.description
  };
};

export const translatePartenairesAvantages = (avantages, t, i18n) => {
  if (!avantages || !Array.isArray(avantages)) return [];
  return avantages.map(avantage => translatePartenaireAvantage(avantage, t, i18n));
};
