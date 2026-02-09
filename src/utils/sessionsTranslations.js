/**
 * Helper pour traduire les sessions des panels
 */

export const translateSessions = (sessions, t, i18n) => {
  if (!sessions) return sessions;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return sessions;
  }
  
  // Traductions des sessions
  const sessionTranslations = {
    rappel: {
      "1ère Session de 10h à 18h": "1st Session from 10:00 AM to 6:00 PM",
      "Repas non inclus - Visiteurs libres": "Meals not included - Free visitors"
    },
    jour1: {
      "Cérémonie d'Ouverture": "Opening Ceremony",
      "Gouvernance locale participative": "Participatory local governance",
      "Financement des projets territoriaux": "Financing of territorial projects",
      "Transition écologique et développement durable": "Ecological transition and sustainable development"
    },
    jour2: {
      "Agro-business et sécurité alimentaire": "Agribusiness and food security",
      "Tourisme et patrimoine": "Tourism and heritage",
      "Innovation territoriale": "Territorial innovation",
      "Rencontres B to B et B to C": "B to B and B to C meetings"
    },
    jour3: {
      "Panel 1: Habitat et aménagement urbain": "Panel 1: Housing and urban planning",
      "Panel 2: Énergies renouvelables": "Panel 2: Renewable energies",
      "Panel 3: Économie numérique": "Panel 3: Digital economy",
      "Panel 4: Coopération décentralisée": "Panel 4: Decentralized cooperation"
    },
    jour4: {
      "Synthèse et recommandations": "Synthesis and recommendations",
      "Signature de partenariats": "Partnership signing",
      "Dîner de Gala": "Gala Dinner"
    }
  };
  
  const translatedSessions = {};
  
  Object.keys(sessions).forEach(day => {
    translatedSessions[day] = sessions[day].map(session => {
      const dayTranslations = sessionTranslations[day] || {};
      return {
        ...session,
        label: dayTranslations[session.label] || session.label,
        note: session.note ? (sessionTranslations.rappel[session.note] || session.note) : session.note
      };
    });
  });
  
  return translatedSessions;
};
