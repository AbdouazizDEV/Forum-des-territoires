/**
 * Helper pour traduire le programme du Forum
 */

export const translateProgramme = (programme, t, i18n) => {
  if (!programme || !Array.isArray(programme)) return [];
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return programme;
  }
  
  // Traductions des éléments du programme
  const translations = {
    days: {
      "Mercredi 03 juin 2026": "Wednesday, June 3, 2026",
      "Jeudi 4 juin": "Thursday, June 4",
      "Vendredi 05 juin": "Friday, June 5",
      "Samedi 06 juin": "Saturday, June 6"
    },
    titles: {
      "Pré-Forum": "Pre-Forum",
      "Ouverture officielle du Forum": "Official Opening of the Forum",
      "Journée économique & coopération": "Economic Day & Cooperation",
      "Engagements et clôture": "Commitments and Closing"
    },
    times: {
      "14h": "2:00 PM",
      "Journée complète": "Full day"
    },
    periods: {
      "14 h": "2:00 PM",
      "Matinée": "Morning",
      "Après-midi": "Afternoon",
      "Après-midi / Soirée": "Afternoon / Evening"
    },
    activities: {
      "Visite d'une cité caractéristique illustrant les enjeux de l'habitat, des services et des activités économiques territoriales": "Visit of a characteristic city illustrating the challenges of housing, services and territorial economic activities",
      "Échanges techniques avec les acteurs locaux (collectivités, entreprises, promoteurs, structures d'appui)": "Technical exchanges with local actors (communities, companies, developers, support structures)",
      "Accueil des participants": "Welcome of participants",
      "Cérémonie officielle d'ouverture": "Official opening ceremony",
      "Allocutions institutionnelles": "Institutional speeches",
      "Présentation des objectifs et du positionnement stratégique du Forum": "Presentation of the Forum's objectives and strategic positioning",
      "Déjeuner d'affaires (networking institutionnel et économique)": "Business lunch (institutional and economic networking)",
      "Panel 1: Habitat, territoires et développement économique": "Panel 1: Housing, territories and economic development",
      "Panel 2: Rôle du secteur privé et attractivité des investissements territoriaux": "Panel 2: Role of the private sector and attractiveness of territorial investments",
      "Ouverture de l'espace exposition (territoires, entreprises, projets, partenaires)": "Opening of the exhibition space (territories, companies, projects, partners)",
      "Demi-journée économique Enabel": "Enabel economic half-day",
      "Panels thématiques": "Thematic panels",
      "Sessions de rencontres B2B, B2G et B2I (entre entreprises et investisseurs)": "B2B, B2G and B2I meeting sessions (between companies and investors)",
      "Expositions et présentations de projets, d'entreprises et de territoires": "Exhibitions and presentations of projects, companies and territories",
      "Visites auprès des structures économiques belges (chambres de commerce, institutions d'appui au secteur privé)": "Visits to Belgian economic structures (chambers of commerce, private sector support institutions)",
      "Panels thématiques sur l'habitat, l'investissement et les partenariats économiques": "Thematic panels on housing, investment and economic partnerships",
      "Session de restitution et de synthèse": "Restitution and synthesis session",
      "Présentation des engagements, partenariats et perspectives": "Presentation of commitments, partnerships and perspectives",
      "Cérémonie officielle de clôture": "Official closing ceremony",
      "Gala de clôture et networking de haut niveau (Célébrer la Culture des deux continents)": "Closing gala and high-level networking (Celebrating the Culture of both continents)"
    },
    sectionTitles: {
      "Visite de terrain": "Field visit"
    }
  };
  
  return programme.map(day => ({
    ...day,
    day: translations.days[day.day] || day.day,
    title: translations.titles[day.title] || day.title,
    time: translations.times[day.time] || day.time,
    sections: day.sections.map(section => ({
      ...section,
      period: translations.periods[section.period] || section.period,
      title: section.title ? (translations.sectionTitles[section.title] || section.title) : section.title,
      activities: section.activities.map(activity => 
        translations.activities[activity] || activity
      )
    }))
  }));
};
