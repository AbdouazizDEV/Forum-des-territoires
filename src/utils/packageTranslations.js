/**
 * Helper pour traduire les packages et leurs contenus
 */

export const translatePackage = (pkg, t, i18n) => {
  if (!pkg) return null;
  
  const currentLang = i18n?.language || 'fr';
  if (currentLang === 'fr') {
    return pkg;
  }
  
  // Traductions des packages
  const packageTranslations = {
    titles: {
      "Package Teranga": "Teranga Package",
      "Package Silver": "Silver Package",
      "Package Gold": "Gold Package"
    },
    descriptions: {
      "Package de base pour participer au Forum": "Basic package to participate in the Forum",
      "Package avec hébergement chambre standard": "Package with standard room accommodation",
      "Package premium avec hébergement chambre exécutive": "Premium package with executive room accommodation"
    },
    features: {
      "Accès Forum (01 badges)": "Forum Access (01 badge)",
      "Lettre d'Invitation pour participant": "Invitation letter for participant",
      "Repas & Collation pendant les activités du Forum": "Meals & Snacks during Forum activities",
      "Proposition liste de 5 hôtels partenaires pour réservation selon votre convenance": "Proposal list of 5 partner hotels for reservation according to your convenience",
      "Educ tour (visite des lieux stratégiques de Bruxelles)": "Educ tour (visit of strategic places in Brussels)",
      "Accès à la Soirée de Gala": "Access to the Gala Evening",
      "Option: Suites hôtel 5*": "Option: 5* hotel suites",
      "Hébergement Chambre Standard Hôtel 5* (4 nuitées)": "Standard Room Accommodation Hotel 5* (4 nights)",
      "Demi-pension": "Half-board",
      "Transport aéroport Zaventem-hôtel A/R": "Airport transport Zaventem-hotel A/R",
      "Transport interne pour les activités du forum": "Internal transport for forum activities",
      "Hébergement Chambre Exécutive Hôtel 5* (4 nuitées)": "Executive Room Accommodation Hotel 5* (4 nights)"
    }
  };
  
  // Créer une copie du package avec les traductions
  const translatedPackage = {
    ...pkg,
    title: packageTranslations.titles[pkg.title] || pkg.title,
    description: packageTranslations.descriptions[pkg.description] || pkg.description,
    features: pkg.features.map(feature => 
      packageTranslations.features[feature] || feature
    )
  };
  
  return translatedPackage;
};

/**
 * Traduit une liste de packages
 */
export const translatePackages = (packages, t, i18n) => {
  if (!packages || !Array.isArray(packages)) return [];
  return packages.map(pkg => translatePackage(pkg, t, i18n));
};
