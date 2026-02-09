/**
 * Helper pour traduire les participants
 */

export const translateParticipant = (participant, t, i18n) => {
  if (!participant) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return participant;
  }
  
  // Traductions des participants
  const participantTranslations = {
    titles: {
      "Gouvernements et collectivités territoriales": "Governments and territorial communities",
      "Banques, assurances et institutions financières": "Banks, insurance and financial institutions",
      "Fonds d'investissement et family offices": "Investment funds and family offices",
      "Grandes entreprises et multinationales": "Large companies and multinationals",
      "Fintechs, startups et PME innovantes": "Fintechs, startups and innovative SMEs",
      "Organisations internationales et partenaires techniques": "International organizations and technical partners"
    },
    descriptions: {
      "Représentants de villes, régions et territoires d'Afrique et d'Europe": "Representatives of cities, regions and territories from Africa and Europe",
      "Fonds d'investissement, banques de développement, institutions financières": "Investment funds, development banks, financial institutions",
      "Investisseurs institutionnels et privés spécialisés dans le développement territorial": "Institutional and private investors specialized in territorial development",
      "Entreprises leaders dans leurs secteurs d'activité": "Leading companies in their sectors",
      "Entreprises innovantes dans les technologies financières et numériques": "Innovative companies in financial and digital technologies",
      "Organisations multilatérales et structures d'appui au développement": "Multilateral organizations and development support structures"
    }
  };
  
  return {
    ...participant,
    title: participantTranslations.titles[participant.title] || participant.title,
    description: participantTranslations.descriptions[participant.description] || participant.description
  };
};

export const translateParticipants = (participants, t, i18n) => {
  if (!participants || !Array.isArray(participants)) return [];
  return participants.map(participant => translateParticipant(participant, t, i18n));
};
