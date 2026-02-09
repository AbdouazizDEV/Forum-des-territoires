/**
 * Helper pour traduire les contenus des actualités
 */

export const translateActualite = (actualite, t, i18n) => {
  if (!actualite) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return actualite;
  }
  
  // Mapping des traductions pour les actualités
  const translations = {
    titles: {
      "Forum des Territoires 2025 : Une édition historique à Bruxelles": "Territories Forum 2025: A Historic Edition in Brussels",
      "Cérémonie d'ouverture officielle : Diplomatie territoriale en action": "Official Opening Ceremony: Territorial Diplomacy in Action",
      "Panel 1 : Gouvernance locale participative - Regards croisés Sénégal / Belgique": "Panel 1: Participatory Local Governance - Cross-Perspectives Senegal / Belgium",
      "Panel 2 : Coopération décentralisée et autonomisation des jeunes et des femmes": "Panel 2: Decentralized Cooperation and Empowerment of Youth and Women",
      "Contexte & Vision : Relier les territoires pour bâtir un développement partagé": "Context & Vision: Connecting Territories to Build Shared Development",
      "Territoires en dialogue, l'avenir en partage et en lumière": "Territories in Dialogue, the Future Shared and in Light"
    },
    categories: {
      "Événement": "Event",
      "Cérémonie": "Ceremony",
      "Panel": "Panel",
      "Vision": "Vision",
      "Résumé": "Summary"
    },
    excerpts: {
      "Le Forum des Territoires s'est tenu à Bruxelles du 1er au 5 octobre 2025, marquant un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe.": "The Territories Forum was held in Brussels from October 1-5, 2025, marking a fundamental moment for territorial cooperation between Africa and Europe.",
      "La cérémonie d'ouverture officielle du Forum sur la diplomatie territoriale s'est tenue au Parlement de Bruxelles, présidée par M. Bertin Mampaka.": "The official opening ceremony of the Forum on territorial diplomacy was held at the Brussels Parliament, chaired by Mr. Bertin Mampaka.",
      "Session modérée par M. Alioune Pouye, Maire de Sébikotane, examinant les pratiques innovantes en matière de gouvernance locale.": "Session moderated by Mr. Alioune Pouye, Mayor of Sébikotane, examining innovative practices in local governance.",
      "Panel modéré par M. Souleymane Amar d'Enabel, axé sur le rôle stratégique des collectivités dans l'inclusion économique et sociale.": "Panel moderated by Mr. Souleymane Amar from Enabel, focused on the strategic role of communities in economic and social inclusion.",
      "Le Forum des Territoires repose sur la conviction fondamentale que les grands défis du développement ne se relèvent plus depuis les capitales.": "The Territories Forum is based on the fundamental conviction that major development challenges are no longer addressed from capitals.",
      "Un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe, avec un accent sur le développement durable au niveau local.": "A fundamental moment for territorial cooperation between Africa and Europe, with a focus on sustainable development at the local level."
    },
    dates: {
      "1-5 Octobre 2025": "October 1-5, 2025",
      "2 Octobre 2025": "October 2, 2025",
      "1 Octobre 2025": "October 1, 2025",
      "1-5 Octobre 2025": "October 1-5, 2025"
    }
  };
  
  // Créer une copie de l'actualité avec les traductions
  const translatedActualite = {
    ...actualite,
    title: translations.titles[actualite.title] || actualite.title,
    category: translations.categories[actualite.category] || actualite.category,
    excerpt: translations.excerpts[actualite.excerpt] || actualite.excerpt,
    date: translations.dates[actualite.date] || actualite.date,
    content: translateContent(actualite.content, t, i18n)
  };
  
  return translatedActualite;
};

const translateContent = (content, t, i18n) => {
  if (!content) return '';
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') return content;
  
  // Traductions des phrases et termes communs dans le contenu HTML
  const contentTranslations = {
    "Le Forum des Territoires s'est tenu à Bruxelles du 1er au 5 octobre 2025": "The Territories Forum was held in Brussels from October 1-5, 2025",
    "marquant un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe": "marking a fundamental moment for territorial cooperation between Africa and Europe",
    "avec un accent sur le développement durable au niveau local": "with a focus on sustainable development at the local level",
    "Pendant cinq jours": "For five days",
    "des élus locaux": "local elected officials",
    "des investisseurs": "investors",
    "des experts": "experts",
    "des partenaires techniques et financiers": "technical and financial partners",
    "des membres de la diaspora": "members of the diaspora",
    "ont échangé leurs points de vue": "exchanged their views",
    "confronté leurs expériences": "confronted their experiences",
    "esquissé des réponses communes": "outlined common responses",
    "aux défis économiques, sociaux et environnementaux": "to economic, social and environmental challenges",
    "Ce cadre d'échange a permis de dépasser les approches théoriques": "This exchange framework made it possible to go beyond theoretical approaches",
    "pour mettre en lumière des initiatives concrètes": "to highlight concrete initiatives",
    "portées par des acteurs engagés et responsables": "carried out by committed and responsible actors",
    "Au-delà des engagements formels": "Beyond formal commitments",
    "le forum a favorisé des synergies durables": "the forum fostered sustainable synergies",
    "basées sur la confiance": "based on trust",
    "la complémentarité": "complementarity",
    "une volonté partagée de construire des territoires inclusifs et résilients": "a shared will to build inclusive and resilient territories",
    "La cérémonie d'ouverture officielle du Forum sur la diplomatie territoriale s'est tenue le 2 octobre 2025 au Parlement de Bruxelles": "The official opening ceremony of the Forum on territorial diplomacy was held on October 2, 2025 at the Brussels Parliament",
    "mettant l'accent sur la coopération internationale": "emphasizing international cooperation",
    "le dialogue inter-territorial": "inter-territorial dialogue",
    "le développement partagé": "shared development",
    "La rencontre a été présidée par M. Bertin Mampaka": "The meeting was chaired by Mr. Bertin Mampaka",
    "Président du Parlement de Bruxelles": "President of the Brussels Parliament",
    "a rassemblé une délégation sénégalaise importante": "brought together an important Senegalese delegation",
    "composée de maires": "composed of mayors",
    "de présidents d'associations": "presidents of associations",
    "de représentants du secteur privé": "representatives of the private sector",
    "d'acteurs de la société civile": "civil society actors",
    "L'atmosphère était empreinte de fraternité et d'espoir": "The atmosphere was marked by fraternity and hope",
    "visant à construire des partenariats solides et tournés vers l'avenir": "aiming to build strong partnerships focused on the future",
    "Une matinée riche en échanges et en perspectives": "A morning rich in exchanges and perspectives",
    "Les discussions du matin ont été marquées par une série de discours convergents": "The morning discussions were marked by a series of convergent speeches",
    "promouvant une diplomatie territoriale inclusive et pragmatique": "promoting an inclusive and pragmatic territorial diplomacy",
    "M. David Weystman, représentant la Ville de Bruxelles": "Mr. David Weystman, representing the City of Brussels",
    "a salué la promotion de territoires ouverts": "welcomed the promotion of open territories",
    "solidaires et tournés vers la coopération internationale": "solidarity and focused on international cooperation",
    "M. Christian Lamouline, Président de BRULOCALIS": "Mr. Christian Lamouline, President of BRULOCALIS",
    "a souligné l'importance de renforcer les partenariats institutionnels": "emphasized the importance of strengthening institutional partnerships",
    "entre les maires européens et africains": "between European and African mayors",
    "pour un développement local harmonisé": "for harmonized local development",
    "Les collectivités sénégalaises": "Senegalese communities",
    "représentées par Mamadou Woury Bailo Diallo (Président de l'UAEL) et Oumar Ba (Président de l'AMS)": "represented by Mamadou Woury Bailo Diallo (President of UAEL) and Oumar Ba (President of AMS)",
    "ont exprimé leur engagement pour des collaborations durables": "expressed their commitment to sustainable collaborations",
    "basées sur la confiance mutuelle": "based on mutual trust",
    "M. Abdoulaye Ly, représentant le Club des Investisseurs du Sénégal": "Mr. Abdoulaye Ly, representing the Senegal Investors Club",
    "a présenté une intervention sur": "presented an intervention on",
    '"les territoires comme moteurs de la croissance nationale"': '"territories as drivers of national growth"',
    "soulignant le rôle stratégique des collectivités locales": "emphasizing the strategic role of local communities",
    "dans l'attractivité économique et l'investissement productif": "in economic attractiveness and productive investment",
    "Ce forum prouve qu'ensemble": "This forum proves that together",
    "nous pouvons construire des ponts solides entre nos territoires": "we can build strong bridges between our territories",
    "et promouvoir un développement partagé": "and promote shared development",
    "ancré dans la fraternité et l'innovation": "rooted in fraternity and innovation",
    "M. Orphée A. Kinss, Président de SN Kinss Holding": "Mr. Orphée A. Kinss, President of SN Kinss Holding",
    "L'après-midi de la cérémonie officielle a été consacrée à deux panels thématiques simultanés": "The afternoon of the official ceremony was devoted to two simultaneous thematic panels",
    "mettant en évidence l'intensité des échanges": "highlighting the intensity of exchanges",
    "l'engagement partagé des délégations sénégalaises et belges": "the shared commitment of Senegalese and Belgian delegations",
    "pour renforcer la coopération territoriale par le dialogue et l'action concertée": "to strengthen territorial cooperation through dialogue and concerted action",
    "Panel 1 – Gouvernance locale participative : regards croisés Sénégal / Belgique": "Panel 1 – Participatory Local Governance: Cross-Perspectives Senegal / Belgium",
    "Cette session, modérée par M. Alioune Pouye, Maire de Sébikotane": "This session, moderated by Mr. Alioune Pouye, Mayor of Sébikotane",
    "visait à examiner les pratiques innovantes en matière de gouvernance locale": "aimed to examine innovative practices in local governance",
    "les mécanismes de participation citoyenne": "citizen participation mechanisms",
    "mis en œuvre dans les communes belges et sénégalaises": "implemented in Belgian and Senegalese municipalities",
    "Les interventions de M. Christian Lamouline et de M. Cheikh Aliou Beye": "The interventions of Mr. Christian Lamouline and Mr. Cheikh Aliou Beye",
    "Maire de Diamaguène Sicap Mbao": "Mayor of Diamaguène Sicap Mbao",
    "ont mis en lumière des approches convergentes": "highlighted convergent approaches",
    "basées sur la proximité citoyenne": "based on citizen proximity",
    "la transparence administrative": "administrative transparency",
    "la gestion participative des services publics": "participatory management of public services",
    "Les discussions ont unanimement souligné": "The discussions unanimously emphasized",
    "que la performance des collectivités dépend avant tout de leur capacité à impliquer les populations": "that the performance of communities depends above all on their ability to involve populations",
    "dans les processus de décision": "in decision-making processes",
    '"Les villes qui réussissent sont celles qui savent écouter leurs habitants avant d\'agir."': '"Successful cities are those that know how to listen to their inhabitants before acting."',
    "Panel 2 – Coopération décentralisée et autonomisation des jeunes et des femmes": "Panel 2 – Decentralized Cooperation and Empowerment of Youth and Women",
    "Le panel, modéré par M. Souleymane Amar d'Enabel": "The panel, moderated by Mr. Souleymane Amar from Enabel",
    "a porté sur le rôle stratégique des collectivités territoriales": "focused on the strategic role of territorial communities",
    "dans l'inclusion économique et sociale": "in economic and social inclusion",
    "particulièrement pour les jeunes et les femmes": "particularly for youth and women",
    "Les contributions de Mme Diarra Sow (OLAC), M. Frank Willemans (BRULOCALIS) et M. David Weystman (Ville de Bruxelles)": "The contributions of Mrs. Diarra Sow (OLAC), Mr. Frank Willemans (BRULOCALIS) and Mr. David Weystman (City of Brussels)",
    "ont mis en avant la coopération décentralisée comme un outil puissant": "highlighted decentralized cooperation as a powerful tool",
    "pour créer des opportunités locales durables": "to create sustainable local opportunities",
    "avec un accent sur la formation": "with an emphasis on training",
    "l'entrepreneuriat": "entrepreneurship",
    "l'accès équitable aux ressources économiques": "equitable access to economic resources",
    "Focus : Les collectivités, laboratoires du développement durable": "Focus: Communities, Laboratories of Sustainable Development",
    "Les discussions ont révélé que les collectivités ne sont plus seulement des relais de l'État": "The discussions revealed that communities are no longer just relays of the State",
    "mais de véritables \"laboratoires de l'avenir\"": "but true \"laboratories of the future\"",
    "En investissant dans la jeunesse": "By investing in youth",
    "la formation et la solidarité économique": "training and economic solidarity",
    "elles deviennent des acteurs clés du développement humain durable et inclusif": "they become key actors in sustainable and inclusive human development",
    "Le Forum des Territoires repose sur la conviction fondamentale": "The Territories Forum is based on the fundamental conviction",
    "que les grands défis du développement ne se relèvent plus depuis les capitales": "that major development challenges are no longer addressed from capitals",
    "mais depuis des territoires vivants, autonomes et connectés": "but from living, autonomous and connected territories",
    "Suite à l'Acte III de la Décentralisation initié il y a près d'une décennie": "Following Act III of Decentralization initiated nearly a decade ago",
    "le Sénégal a fait le choix stratégique de territorialiser ses politiques publiques": "Senegal made the strategic choice to territorialize its public policies",
    "Cette orientation vise à promouvoir la responsabilité locale": "This orientation aims to promote local responsibility",
    "stimuler la compétitivité régionale": "stimulate regional competitiveness",
    "encourager une coopération intercommunale structurée et efficace": "encourage structured and effective inter-municipal cooperation",
    "L'émergence d'une nouvelle génération d'élus locaux et d'entrepreneurs territoriaux": "The emergence of a new generation of local elected officials and territorial entrepreneurs",
    "porteurs d'initiatives innovantes ancrées dans les réalités locales": "carriers of innovative initiatives rooted in local realities",
    "nécessite la création d'un cadre international de dialogue": "requires the creation of an international framework for dialogue",
    "d'échanges et de partenariats concrets": "exchanges and concrete partnerships",
    "Bruxelles, capitale européenne et pôle institutionnel": "Brussels, European capital and institutional hub",
    "s'est naturellement imposée comme le lieu emblématique de cette ambition": "naturally established itself as the emblematic place for this ambition",
    '"Faire dialoguer les territoires, c\'est activer les leviers de la souveraineté économique et du développement endogène."': '"Making territories dialogue means activating the levers of economic sovereignty and endogenous development."',
    "Le forum répond ainsi à trois objectifs majeurs :": "The forum thus responds to three major objectives:",
    "Renforcer la coopération décentralisée entre les collectivités du Sénégal, de la Belgique et du Luxembourg": "Strengthen decentralized cooperation between communities in Senegal, Belgium and Luxembourg",
    "Promouvoir les investissements structurants portés par les territoires": "Promote structuring investments carried by territories",
    "Créer des ponts durables entre les acteurs publics, privés et communautaires": "Create lasting bridges between public, private and community actors",
    "au Nord comme au Sud": "in the North as in the South",
    "La rencontre met également en lumière le rôle décisif de la diaspora africaine en Europe": "The meeting also highlights the decisive role of the African diaspora in Europe",
    "reconnue comme un acteur clé du développement territorial": "recognized as a key actor in territorial development",
    "un lien stratégique entre les espaces africains et européens": "a strategic link between African and European spaces",
    "Éclairage": "Insight",
    "L'Acte III de la Décentralisation au Sénégal a posé les bases d'une gouvernance locale ambitieuse": "Act III of Decentralization in Senegal laid the foundations for ambitious local governance",
    "Une décennie plus tard": "A decade later",
    "la coopération internationale prolonge cette dynamique": "international cooperation extends this dynamic",
    "en connectant les collectivités africaines aux réseaux européens d'excellence territoriale": "by connecting African communities to European networks of territorial excellence",
    "ouvrant la voie à un développement équilibré, concerté et durable": "opening the way to balanced, concerted and sustainable development",
    "Le forum a également facilité la confrontation des modèles": "The forum also facilitated the confrontation of models",
    "le partage de connaissances": "knowledge sharing",
    "la construction de ponts humains et institutionnels": "the construction of human and institutional bridges",
    "entre des collectivités engagées dans la transformation de leurs espaces": "between communities engaged in transforming their spaces",
    "Ce livret retrace les temps forts de cet événement unique": "This booklet traces the highlights of this unique event",
    "une semaine d'échanges, de découvertes et d'engagements": "a week of exchanges, discoveries and commitments",
    "au cours de laquelle la coopération décentralisée a pris un visage humain": "during which decentralized cooperation took on a human face",
    "représenté par des hommes et des femmes convaincus que l'avenir se construit ensemble": "represented by men and women convinced that the future is built together",
    "territoire par territoire": "territory by territory"
  };
  
  let translatedContent = content;
  
  // Remplacer les phrases traduites (en ordre décroissant de longueur pour éviter les remplacements partiels)
  const sortedKeys = Object.keys(contentTranslations).sort((a, b) => b.length - a.length);
  sortedKeys.forEach(key => {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    translatedContent = translatedContent.replace(regex, contentTranslations[key]);
  });
  
  return translatedContent;
};

/**
 * Traduit une liste d'actualités
 */
export const translateActualites = (actualites, t, i18n) => {
  if (!actualites || !Array.isArray(actualites)) return [];
  return actualites.map(actualite => translateActualite(actualite, t, i18n));
};
