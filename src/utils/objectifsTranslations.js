/**
 * Helper pour traduire les objectifs
 */

export const translateObjectif = (objectif, t, i18n) => {
  if (!objectif) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return objectif;
  }
  
  // Traductions des objectifs
  const objectifTranslations = {
    titles: {
      "Faciliter la mobilisation d'investissements publics et privés": "Facilitate the mobilization of public and private investments",
      "Promouvoir les partenariats public-privé (PPP)": "Promote public-private partnerships (PPP)",
      "Accélérer l'innovation (fintech, IA, digital)": "Accelerate innovation (fintech, AI, digital)",
      "Valoriser les opportunités économiques territoriales": "Enhance territorial economic opportunities",
      "Générer des accords, MoU et projets financés": "Generate agreements, MoUs and funded projects"
    },
    descriptions: {
      "Créer les conditions favorables pour attirer et mobiliser les investissements nécessaires au développement territorial": "Create favorable conditions to attract and mobilize investments necessary for territorial development",
      "Encourager et faciliter la mise en place de partenariats structurants entre le secteur public et privé": "Encourage and facilitate the establishment of structuring partnerships between the public and private sectors",
      "Favoriser l'adoption et le développement d'innovations technologiques pour les territoires": "Promote the adoption and development of technological innovations for territories",
      "Identifier et mettre en valeur les potentiels économiques et les opportunités d'investissement des territoires": "Identify and enhance economic potentials and investment opportunities in territories",
      "Faciliter la conclusion d'accords formels, de mémorandums d'entente et de projets bénéficiant de financements": "Facilitate the conclusion of formal agreements, memorandums of understanding and projects benefiting from funding"
    }
  };
  
  return {
    ...objectif,
    title: objectifTranslations.titles[objectif.title] || objectif.title,
    description: objectifTranslations.descriptions[objectif.description] || objectif.description
  };
};

export const translateObjectifs = (objectifs, t, i18n) => {
  if (!objectifs || !Array.isArray(objectifs)) return [];
  return objectifs.map(objectif => translateObjectif(objectif, t, i18n));
};
