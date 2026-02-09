/**
 * Helper pour traduire les contenus des éditions
 */

export const translateEdition = (edition, t, i18n) => {
  if (!edition) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return edition;
  }
  
  // Traductions des champs de l'édition
  const translations = {
    title: {
      'ÉDITION 2025': 'EDITION 2025'
    },
    subtitle: {
      "TERRITOIRES EN DIALOGUE, L'AVENIR EN PARTAGE ET EN LUMIERE": "TERRITORIES IN DIALOGUE, THE FUTURE SHARED AND IN LIGHT"
    },
    theme: {
      "Investissements territoriaux et partenariats innovants : construire ensemble des pôles de développement durables": "Territorial investments and innovative partnerships: building sustainable development hubs together"
    },
    location: {
      "Bruxelles, Belgique": "Brussels, Belgium"
    },
    dates: {
      "1er au 5 octobre 2025": "October 1-5, 2025"
    },
    description: {
      "Le Forum des Territoires, tenu à Bruxelles du 1er au 5 octobre 2025, s'est imposé comme un moment fondamental de la coopération territoriale entre l'Afrique et l'Europe. Cette rencontre a illustré avec force une conviction désormais partagée : le développement durable se construit d'abord à l'échelle des territoires, là où les réalités se vivent et les solutions prennent racines.": "The Territories Forum, held in Brussels from October 1-5, 2025, established itself as a fundamental moment for territorial cooperation between Africa and Europe. This meeting strongly illustrated a now shared conviction: sustainable development is first built at the territorial level, where realities are lived and solutions take root."
    },
    highlights: {
      "500+ participants": "500+ participants",
      "50+ territoires représentés": "50+ territories represented",
      "30+ projets présentés": "30+ projects presented",
      "15 partenariats signés": "15 partnerships signed"
    },
    panelTitles: {
      "Gouvernance locale participative: regards croisés Sénégal / Belgique": "Participatory local governance: cross-perspectives Senegal / Belgium",
      "Coopération décentralisée et autonomisation des jeunes et des femmes": "Decentralized cooperation and empowerment of youth and women"
    },
    panelDescriptions: {
      "Placée sous la modération de M. Alioune Pouye, Maire de Sébikotane, cette session a permis d'examiner les pratiques innovantes de gouvernance locale et les mécanismes de participation citoyenne mis en œuvre dans les communes belges et sénégalaises.": "Moderated by Mr. Alioune Pouye, Mayor of Sébikotane, this session examined innovative local governance practices and citizen participation mechanisms implemented in Belgian and Senegalese municipalities.",
      "Modéré par M. Souleymane Amar d'Enabel, ce second panel s'est penché sur le rôle stratégique des collectivités territoriales dans l'inclusion économique et sociale, en particulier en faveur des jeunes et des femmes.": "Moderated by Mr. Souleymane Amar from Enabel, this second panel examined the strategic role of territorial communities in economic and social inclusion, particularly for youth and women."
    },
    keyMessages: {
      "Les villes qui réussissent sont celles qui savent écouter leurs habitants avant d'agir.": "Successful cities are those that know how to listen to their inhabitants before acting.",
      "Les collectivités, laboratoires du développement durable": "Communities, laboratories of sustainable development"
    },
    conclusions: {
      "Les interventions ont mis en lumière des approches convergentes fondées sur la proximité avec les citoyens, la transparence administrative et le management participatif des services publics. Les échanges ont unanimement souligné que la performance des collectivités repose avant tout sur leur capacité à associer les populations aux processus décisionnels.": "The interventions highlighted convergent approaches based on proximity with citizens, administrative transparency and participatory management of public services. The exchanges unanimously emphasized that the performance of communities depends above all on their ability to involve populations in decision-making processes.",
      "Les contributions ont démontré que la coopération décentralisée constitue un levier opérationnel puissant pour la création d'opportunités locales durables. Les échanges ont insisté sur l'importance de programmes axés sur la formation, l'entrepreneuriat et l'accès équitable aux ressources économiques. Au terme des discussions, un message fort s'est dégagé : les collectivités territoriales ne sont plus de simples relais de l'État, mais de véritables laboratoires du futur. En investissant dans la jeunesse, la formation et la solidarité économique, elles s'imposent comme des acteurs clés du développement humain durable et inclusif.": "The contributions demonstrated that decentralized cooperation is a powerful operational lever for creating sustainable local opportunities. The exchanges emphasized the importance of programs focused on training, entrepreneurship and equitable access to economic resources. At the end of the discussions, a strong message emerged: territorial communities are no longer simple relays of the State, but true laboratories of the future. By investing in youth, training and economic solidarity, they establish themselves as key actors in sustainable and inclusive human development."
    }
  };
  
  // Créer une copie de l'édition avec les traductions
  const translatedEdition = {
    ...edition,
    title: translations.title[edition.title] || edition.title,
    subtitle: translations.subtitle[edition.subtitle] || edition.subtitle,
    theme: translations.theme[edition.theme] || edition.theme,
    location: translations.location[edition.location] || edition.location,
    dates: translations.dates[edition.dates] || edition.dates,
    description: translations.description[edition.description] || edition.description,
    highlights: edition.highlights.map(h => translations.highlights[h] || h),
    panels: edition.panels.map(panel => ({
      ...panel,
      title: translations.panelTitles[panel.title] || panel.title,
      description: translations.panelDescriptions[panel.description] || panel.description,
      keyMessage: translations.keyMessages[panel.keyMessage] || panel.keyMessage,
      conclusion: translations.conclusions[panel.conclusion] || panel.conclusion,
      moderator: translateModerator(panel.moderator, t, i18n),
      speakers: panel.speakers.map(speaker => translateSpeaker(speaker, t, i18n))
    }))
  };
  
  return translatedEdition;
};

const translateModerator = (moderator, t, i18n) => {
  if (!moderator) return '';
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') return moderator;
  
  // Traductions des modérateurs
  const translations = {
    "M. Alioune Pouye, Maire de Sébikotane": "Mr. Alioune Pouye, Mayor of Sébikotane",
    "M. Souleymane Amar d'Enabel": "Mr. Souleymane Amar from Enabel"
  };
  
  return translations[moderator] || moderator;
};

const translateSpeaker = (speaker, t, i18n) => {
  if (!speaker) return '';
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') return speaker;
  
  // Traductions des speakers
  const translations = {
    "M. Christian Lamouline": "Mr. Christian Lamouline",
    "M. Cheikh Aliou Beye, Maire de Diamaguène Sicap Mbao": "Mr. Cheikh Aliou Beye, Mayor of Diamaguène Sicap Mbao",
    "Mme Diarra Sow (OLAC)": "Mrs. Diarra Sow (OLAC)",
    "M. Frank Willemans (BRULOCALIS)": "Mr. Frank Willemans (BRULOCALIS)",
    "M. David Weystman (Ville de Bruxelles)": "Mr. David Weystman (City of Brussels)"
  };
  
  return translations[speaker] || speaker;
};
