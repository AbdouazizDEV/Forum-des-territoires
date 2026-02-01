import { Lightbulb, DollarSign, MapPin, Users } from 'lucide-react';

/**
 * Service contenant les données des partenariats thématiques exclusifs
 */
export const THEMATIC_PARTNERSHIPS = [
  {
    id: 'fintech',
    name: 'Partenaire Fintech & Innovation',
    icon: Lightbulb,
    description: 'Exclusivité sectorielle et visibilité ciblée dans le domaine de la fintech et de l\'innovation technologique pour l\'habitat',
    color: 'from-primary to-accent-orange',
    benefits: [
      'Visibilité exclusive dans les panels Innovation & Fintech',
      'Positionnement stratégique sur les solutions technologiques',
      'Accès privilégié aux startups et acteurs innovants',
      'Mentions ciblées dans les communications digitales'
    ]
  },
  {
    id: 'finance',
    name: 'Partenaire Finance & Investissement',
    icon: DollarSign,
    description: 'Exclusivité sectorielle et visibilité ciblée dans le financement et l\'investissement territorial',
    color: 'from-secondary to-secondary-dark',
    benefits: [
      'Association aux sessions Financement & Gouvernance',
      'Positionnement sur les opportunités d\'investissement',
      'Accès direct aux décideurs financiers',
      'Visibilité dans les rapports et publications officielles'
    ]
  },
  {
    id: 'territoires',
    name: 'Partenaire Territoires & Infrastructures',
    icon: MapPin,
    description: 'Exclusivité sectorielle et visibilité ciblée dans le développement territorial et les infrastructures',
    color: 'from-accent-teal to-secondary',
    benefits: [
      'Association aux ateliers Territoires & Infrastructures',
      'Positionnement sur les projets structurants',
      'Accès aux collectivités territoriales',
      'Visibilité dans les sessions plénières'
    ]
  },
  {
    id: 'jeunesse',
    name: 'Partenaire Jeunesse & Entrepreneuriat',
    icon: Users,
    description: 'Exclusivité sectorielle et visibilité ciblée dans l\'entrepreneuriat et l\'inclusion des jeunes',
    color: 'from-accent-orange to-primary',
    benefits: [
      'Association aux ateliers Jeunesse & Entrepreneuriat',
      'Positionnement sur l\'inclusion et l\'innovation sociale',
      'Accès aux jeunes entrepreneurs et startups',
      'Visibilité dans les programmes d\'accompagnement'
    ]
  }
];

