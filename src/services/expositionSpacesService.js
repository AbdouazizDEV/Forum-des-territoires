import { Tv, Monitor, Laptop, MapPin, Camera, Globe } from 'lucide-react';

/**
 * Service contenant les données des espaces d'exposition
 */
export const EXPOSITION_SPACES = [
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'L\'Expérience Prestige',
    icon: Monitor,
    surface: '24 m²',
    color: 'from-gray-800 via-gray-700 to-gray-900',
    badgeColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    borderColor: 'border-gray-700',
    included: [
      {
        icon: Tv,
        text: 'TV écran plat'
      },
      {
        icon: Monitor,
        text: 'Info Desk premium'
      },
      {
        icon: MapPin,
        text: 'Emplacement stratégique'
      },
      {
        icon: Camera,
        text: 'Signalétique personnalisée'
      },
      {
        icon: Globe,
        text: 'Mention digitale sur site et réseaux'
      }
    ],
    benefits: 'Votre marque se positionne comme leader et partenaire privilégié. Maximum de visibilité et impact sur vos visiteurs.'
  },
  {
    id: 'standard',
    name: 'Standard',
    subtitle: 'La Solution Visibilité',
    icon: Tv,
    surface: '12 m²',
    color: 'from-primary to-primary-dark',
    badgeColor: 'bg-gradient-to-br from-primary to-primary-dark',
    borderColor: 'border-primary',
    included: [
      {
        icon: Tv,
        text: 'TV écran plat'
      },
      {
        icon: Monitor,
        text: 'Info Desk standard'
      },
      {
        icon: Camera,
        text: 'Signalétique avec logo'
      },
      {
        icon: Globe,
        text: 'Mention digitale'
      }
    ],
    benefits: 'Idéal pour gagner en visibilité tout en maîtrisant votre budget. Votre marque est présente là où ça compte.'
  },
  {
    id: 'startup',
    name: 'Startup',
    subtitle: 'La Vitrine Innovante',
    icon: Laptop,
    surface: '9 m²',
    color: 'from-secondary to-secondary-dark',
    badgeColor: 'bg-gradient-to-br from-secondary to-secondary-dark',
    borderColor: 'border-secondary',
    included: [
      {
        icon: Tv,
        text: 'TV écran plat'
      },
      {
        icon: Monitor,
        text: 'Info Desk fonctionnel'
      },
      {
        icon: Camera,
        text: 'Signalétique avec logo'
      },
      {
        icon: Globe,
        text: 'Mention digitale'
      }
    ],
    benefits: 'Compact mais visible, parfait pour faire connaître rapidement votre innovation et attirer l\'attention.'
  }
];

