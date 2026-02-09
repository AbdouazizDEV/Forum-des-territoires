/**
 * Helper pour traduire les fonctionnalités de communication
 */

export const translateCommunicationFeature = (feature, t, i18n) => {
  if (!feature) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return feature;
  }
  
  // Traductions des fonctionnalités
  const featureTranslations = {
    titles: {
      'Campagne média internationale': 'International media campaign',
      'Relations presse et interviews': 'Press relations and interviews',
      'Branding digital (site web, réseaux sociaux)': 'Digital branding (website, social networks)',
      'Couverture photo & vidéo': 'Photo & video coverage',
      'Livre blanc et rapport officiel du Forum': 'White paper and official Forum report'
    },
    descriptions: {
      'Visibilité maximale à travers une campagne médiatique internationale ciblée': 'Maximum visibility through a targeted international media campaign',
      'Accès privilégié aux médias et opportunités d\'interviews exclusives': 'Privileged access to media and exclusive interview opportunities',
      'Présence digitale renforcée sur tous les canaux de communication du Forum': 'Enhanced digital presence on all Forum communication channels',
      'Couverture professionnelle de l\'événement avec photos et vidéos de qualité': 'Professional coverage of the event with quality photos and videos',
      'Mention dans les documents officiels et publications du Forum': 'Mention in official documents and Forum publications'
    }
  };
  
  return {
    ...feature,
    title: featureTranslations.titles[feature.title] || feature.title,
    description: featureTranslations.descriptions[feature.description] || feature.description
  };
};

export const translateCommunicationFeatures = (features, t, i18n) => {
  if (!features || !Array.isArray(features)) return [];
  return features.map(feature => translateCommunicationFeature(feature, t, i18n));
};
