/**
 * Helper pour traduire les rôles et bios des speakers
 */

export const translateSpeakerRole = (role, t, i18n) => {
  if (!role) return '';
  
  // Si la langue actuelle est le français, retourner tel quel
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return role;
  }
  
  // Mapping des phrases complètes (priorité aux phrases longues)
  const fullPhrases = {
    'Président du parlement bruxellois et Sénateur belge': 'President of the Brussels Parliament and Belgian Senator',
    'Président de l\'Union des Associations d\'Élus Locaux': 'President of the Union of Local Elected Officials Associations',
    'Président de BRULOCALIS et Bourgmestre de Berchem-Sainte-Agathe': 'President of BRULOCALIS and Mayor of Berchem-Sainte-Agathe',
    'Président de l\'UNCCIAS et Maire de Kaolack': 'President of UNCCIAS and Mayor of Kaolack',
    'GOUVERNEUR de la Province de Namur': 'GOVERNOR of the Province of Namur',
    'Bourgmestre de Lobbes': 'Mayor of Lobbes',
    'Président d\'IGRETEC et Administrateur de l\'Union des villes et communes de Wallonie, asbl': 'President of IGRETEC and Administrator of the Union of Cities and Municipalities of Wallonia, non-profit',
    'Ancien Ministre du Tourisme au Sénégal': 'Former Minister of Tourism in Senegal',
    'Ancien Ministre du Tourisme et des Transports aériens du Sénégal': 'Former Minister of Tourism and Air Transport of Senegal',
    'Député et Parrain 1ère édition': 'Deputy and Patron 1st edition',
    'Directeur du Groupe GOPA, Ancien DG de B&s Europe, Expert en Gouvernance publique et reformes Institutionnelles': 'Director of GOPA Group, Former DG of B&s Europe, Expert in Public Governance and Institutional Reforms',
    'Parrains de la 1 ère édition': 'Patrons of the 1st edition',
    'Conseiller en coopération internationale': 'International cooperation advisor',
    'Directrice Générale OLAC': 'General Director OLAC',
    'Directrice Générale de l\'Organisation pour le Logement et l\'Aménagement des Collectivités': 'General Director of the Organization for Housing and Community Planning',
    'Sénatrice belge': 'Belgian Senator',
    'Ancien Directeur des investissements': 'Former Director of Investments',
    'Initiateur du Forum': 'Forum Initiator',
    'Fondateur et initiateur du Forum des Territoires': 'Founder and initiator of the Territories Forum',
    'Président Conseil Régional Kaffrine': 'President of the Regional Council of Kaffrine',
    'Président du Conseil Régional de Kaffrine': 'President of the Regional Council of Kaffrine',
    'Directeur des Opérations de l\'ADEPME': 'Director of Operations of ADEPME',
    'Directeur des Opérations de l\'Agence de Développement et d\'Encadrement des Petites et Moyennes Entreprises': 'Director of Operations of the Agency for Development and Support of Small and Medium Enterprises',
    'Député au Parlement de la Région de Bruxelles-Capitale': 'Deputy in the Parliament of the Brussels-Capital Region',
    'Sénateur de Belgique': 'Belgian Senator',
    'Ministre d\'État, Ministre de la Défense de 1999 à 2008': 'Minister of State, Minister of Defense from 1999 to 2008',
    'Président de la Chambre des représentants (2010-2014) et occupé des fonctions ministérielles en Fédération Wallonie-Bruxelles': 'President of the Chamber of Representatives (2010-2014) and held ministerial positions in the Wallonia-Brussels Federation',
    'Échevin des sports, Familles, Cohésion sociale, Jeunesse, Jumelages et Coopération internationale Ixelles.': 'Alderman of Sports, Families, Social Cohesion, Youth, Twinning and International Cooperation Ixelles.',
    'Maire de Thilmakha': 'Mayor of Thilmakha',
    'Maire de la commune de Thilmakha': 'Mayor of the municipality of Thilmakha',
    'Maire de Sebikotane': 'Mayor of Sebikotane',
    'Maire de la commune de Sebikotane': 'Mayor of the municipality of Sebikotane',
    'Président de l\'Association des Sénégalais de la Belgique': 'President of the Association of Senegalese in Belgium',
    'DG TRANXPERT LOGISTIQUE': 'DG TRANXPERT LOGISTICS',
    'Chef de projet Système Alimentaire Durable, de l\'entrepreneuriat et du changement climatique': 'Project Manager for Sustainable Food System, Entrepreneurship and Climate Change',
    'Expert en systèmes alimentaires durables et entrepreneuriat': 'Expert in sustainable food systems and entrepreneurship',
    'Secrétaire Général de l\'UAEL - Union des Associations des Elus Locaux du Sénégal': 'Secretary General of UAEL - Union of Local Elected Officials Associations of Senegal',
    'Maire de Labgar': 'Mayor of Labgar',
    'PDG de NOGA MINE SARL': 'CEO of NOGA MINE SARL',
    'Présidente fondatrice de l\'ECDA': 'Founding President of ECDA',
    'Presidente Asbl SO GO UP': 'President of non-profit SO GO UP',
    'Président de Senebel': 'President of Senebel',
    'Maire de Sicap Mbao et PCA du Conseil d\'orientation des pôles urbains de Diamniadio et Lac Rose': 'Mayor of Sicap Mbao and Chairman of the Orientation Council of the urban hubs of Diamniadio and Pink Lake',
    'Maire de Bona': 'Mayor of Bona',
    'Député et Sénateur': 'Deputy and Senator'
  };
  
  // Vérifier d'abord les phrases complètes
  for (const [fr, en] of Object.entries(fullPhrases)) {
    if (role === fr || role.includes(fr)) {
      return en;
    }
  }
  
  // Mapping des termes individuels pour les cas non couverts
  const translations = {
    'Président': 'President',
    'Présidente': 'President',
    'Maire': 'Mayor',
    'Ministre': 'Minister',
    'Directeur': 'Director',
    'Directrice': 'Director',
    'Député': 'Deputy',
    'Sénateur': 'Senator',
    'Sénatrice': 'Senator',
    'Gouverneur': 'Governor',
    'Bourgmestre': 'Mayor',
    'Échevin': 'Alderman',
    'Ancien': 'Former',
    'Ancienne': 'Former',
    'Conseiller': 'Counselor',
    'Secrétaire': 'Secretary',
    'PDG': 'CEO',
    'Initiateur': 'Initiator',
    'Parrain': 'Patron',
    'Expert': 'Expert',
    'Chef': 'Head',
    'du': 'of',
    'de': 'of',
    'de la': 'of the',
    'des': 'of',
    'au': 'in',
    'en': 'in',
    'et': 'and',
    'Parlement': 'Parliament',
    'Sénat': 'Senate',
    'Chambre': 'Chamber',
    'Conseil': 'Council',
    'Régional': 'Regional',
    'Région': 'Region',
    'Province': 'Province',
    'Bruxelles': 'Brussels',
    'Belgique': 'Belgium',
    'Sénégal': 'Senegal',
    'Wallonie': 'Wallonia',
    'Bruxelles-Capitale': 'Brussels-Capital'
  };

  let translatedRole = role;
  
  // Remplacer les termes traduits (en ordre décroissant de longueur)
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  sortedKeys.forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    translatedRole = translatedRole.replace(regex, translations[key]);
  });

  return translatedRole;
};

export const translateSpeakerBio = (bio, t, i18n) => {
  if (!bio) return '';
  return translateSpeakerRole(bio, t, i18n);
};

export const translateSpeakerTitle = (title, t) => {
  if (!title) return '';
  
  const titleMap = {
    'Mr': t('speakers.titles.mr'),
    'Mme': t('speakers.titles.mme'),
    'M.': t('speakers.titles.m'),
    'Madame': t('speakers.titles.madame')
  };
  
  return titleMap[title] || title;
};
