import { Trophy, Award, Medal, Sparkles, Mic, Tv, Coffee, Hotel, Plane, Bus, MapPin, Users, FileText, Camera } from 'lucide-react';

/**
 * Service contenant les données des packages de sponsoring
 */
export const SPONSOR_PACKAGES = [
  {
    id: 'platinum',
    name: 'SPONSOR PLATINUM',
    icon: Trophy,
    dimension: 'Financement & Gouvernance de l\'Habitat',
    description: 'Le Sponsor Platinum est associé à la dimension stratégique du financement, de la gouvernance territoriale et des politiques publiques de l\'habitat, cœur des décisions structurantes internationale.',
    color: 'from-gray-800 via-gray-700 to-gray-900',
    badgeColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    borderColor: 'border-gray-700',
    advantages: [
      {
        icon: Trophy,
        text: 'Statut de Sponsor Officiel Premium du Forum'
      },
      {
        icon: Mic,
        text: 'Association exclusive aux sessions plénières « Habitat & Gouvernance »'
      },
      {
        icon: Sparkles,
        text: 'Keynote d\'ouverture ou de clôture sur les enjeux de l\'habitat durable'
      },
      {
        icon: Camera,
        text: 'Logo en position dominante (grand) sur tous les supports'
      },
      {
        icon: Tv,
        text: 'Stand premium (24 m² – emplacement stratégique) avec TV, Info desk, 02 tabourets, une manche debout, Machine café'
      },
      {
        icon: Users,
        text: 'Accès VIP complet (05 badges = 5 personnes prises en charge)'
      },
      {
        icon: Hotel,
        text: 'Hébergement Chambre Exécutive Hôtel 4*'
      },
      {
        icon: Coffee,
        text: 'Demi-pension'
      },
      {
        icon: Plane,
        text: 'Transport aéroport Zaventem-hôtel A/R'
      },
      {
        icon: Bus,
        text: 'Transport interne pour les activités du forum'
      },
      {
        icon: MapPin,
        text: 'Educ tour (visite des lieux stratégiques de Bruxelles)'
      },
      {
        icon: Sparkles,
        text: 'Branding stand et personnalisé'
      },
      {
        icon: Camera,
        text: 'Visibilité média internationale avant, pendant et après l\'événement'
      },
      {
        icon: Award,
        text: 'Accès à la Soirée de Gala'
      }
    ]
  },
  {
    id: 'gold',
    name: 'SPONSOR GOLD',
    icon: Award,
    dimension: 'Innovation & Habitat Durable',
    description: 'Le Sponsor Gold est positionné sur la dimension innovation de l\'habitat : fintech logement, matériaux durables, construction bas carbone, smart cities et villages intelligents.',
    color: 'from-yellow-500 via-yellow-400 to-yellow-600',
    badgeColor: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
    borderColor: 'border-yellow-500',
    advantages: [
      {
        icon: Mic,
        text: 'Association aux panels « Innovation, Fintech & Habitat »'
      },
      {
        icon: Sparkles,
        text: 'Intervention lors d\'un panel stratégique'
      },
      {
        icon: Camera,
        text: 'Logo en visibilité forte sur supports officiels'
      },
      {
        icon: Tv,
        text: 'Stand professionnel (12 m²) TV, Info desk, 02 tabourets, une manche debout, Machine café'
      },
      {
        icon: Hotel,
        text: 'Hébergement Chambre Standard Hôtel 4*'
      },
      {
        icon: Coffee,
        text: 'Demi-pension'
      },
      {
        icon: Plane,
        text: 'Transport aéroport Zaventem-hôtel A/R'
      },
      {
        icon: Bus,
        text: 'Transport interne pour les activités du forum'
      },
      {
        icon: MapPin,
        text: 'Educ tour (visite des lieux stratégiques de Bruxelles)'
      },
      {
        icon: Sparkles,
        text: 'Branding stand et personnalisé'
      },
      {
        icon: Users,
        text: 'Accès VIP (02 badges = 2 personnes prises en charge)'
      },
      {
        icon: Camera,
        text: 'Mentions médias et digitales ciblées'
      },
      {
        icon: Award,
        text: 'Accès à la Soirée de Gala'
      }
    ]
  },
  {
    id: 'silver',
    name: 'SPONSOR SILVER',
    icon: Medal,
    dimension: 'Inclusion Sociale & Habitat Territorial',
    description: 'Le Sponsor Silver est associé à la dimension sociale et inclusive de l\'habitat : logement abordable, habitat rural, inclusion des jeunes, des femmes et des populations vulnérables.',
    color: 'from-gray-400 via-gray-300 to-gray-500',
    badgeColor: 'bg-gradient-to-br from-gray-400 to-gray-600',
    borderColor: 'border-gray-400',
    advantages: [
      {
        icon: Mic,
        text: 'Association aux ateliers « Habitat inclusif & territoires »'
      },
      {
        icon: Camera,
        text: 'Logo sur supports officiels'
      },
      {
        icon: Tv,
        text: 'Stand standard (9 m²) TV, Info desk, 02 tabourets, une manche debout'
      },
      {
        icon: Hotel,
        text: 'Hébergement Chambre Standard Hôtel 4*'
      },
      {
        icon: Coffee,
        text: 'Demi-pension'
      },
      {
        icon: Plane,
        text: 'Transport aéroport Zaventem-hôtel A/R'
      },
      {
        icon: Bus,
        text: 'Transport interne pour les activités du forum'
      },
      {
        icon: MapPin,
        text: 'Educ tour (visite des lieux stratégiques de Bruxelles)'
      },
      {
        icon: Sparkles,
        text: 'Branding stand et personnalisé'
      },
      {
        icon: Users,
        text: 'Accès Forum (01 badges = 1 personne prise en charge)'
      },
      {
        icon: FileText,
        text: 'Mention dans le rapport officiel du Forum'
      },
      {
        icon: Award,
        text: 'Accès à la Soirée de Gala'
      }
    ]
  }
];

