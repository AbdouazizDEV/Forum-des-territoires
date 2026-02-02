import orpheeKinssImage from '../assets/images/Speakers/Orphée initiateur du projet.jpeg';
import bertinMampakaImage from '../assets/images/Speakers/Bertin Mampaka.jpeg';
import christianLamoulineImage from '../assets/images/Speakers/Christian Lamouline.jpeg';
import stevenRoyezImage from '../assets/images/Speakers/Steven Royez.jpeg';
import WillaneImage from '../assets/images/Speakers/Willane.jpeg';
import AliouneSarrImage from '../assets/images/Speakers/Alioune Sarr ancien ministre.jpeg';
import ElhadjDialloImage from '../assets/images/Speakers/ Elhadj DIALLO.jpeg';
import AndreFlhautImage from '../assets/images/Speakers/André FLAHAUT.jpeg';
import MarieClaireMvumbImage from '../assets/images/Speakers/Marie-Claire Mvumbi.jpeg';
import DiarraSowImage from '../assets/images/Speakers/Madame Diarra Sow.jpeg';
import NabilMessaoudiImage from '../assets/images/Speakers/Nabil Messaoudi.jpeg';
import SerigneMboupImage from '../assets/images/Speakers/serigne.png';
import NdeyeAwaNdiayeImage from '../assets/images/Speakers/Ndeye Awa Ndiaye.jpeg';
import OuryBailloDialloImage from '../assets/images/Speakers/Oury Baillo Diallo.jpeg';
import BiraneDioufImage from '../assets/images/Speakers/Birane Diouf.jpeg';
import AliounePouyeImage from '../assets/images/Speakers/Alioune Pouye.jpeg';
import CheikhIbraNdiayeImage from '../assets/images/Speakers/Cheikh Ibra Ndiaye.jpeg';
import SultanDiopImage from '../assets/images/Speakers/Sultan DIOP.jpeg';
import AichaBachaImage from '../assets/images/Speakers/Aicha Bacha.jpeg';
import SomayaKorkzineImage from '../assets/images/Speakers/ Somaya Korkzine.jpeg';
import IdrissaDiopImage from '../assets/images/Speakers/Idrissa Diop.jpeg';
import BiranDioufImage from '../assets/images/Speakers/Biran Diouf.jpeg';
import CheikhAliouneBeyeImage from '../assets/images/Speakers/Cheikh Alioune BEYE.jpeg';
import IbrahimaDiedhiouImage from '../assets/images/Speakers/Ibrahima Diedhiou.jpeg';
import AlHassaneNiangImage from '../assets/images/Speakers/Al Hassane NiANG.jpeg';
/**
 * Service contenant les données des speakers du Forum
 */
export const SPEAKERS_DATA = [
  {
    id: 1,
    name: "Orphée Kinss",
    title: "Mr",
    role: "Initiateur du Forum",
    country: "Belgique",
    bio: "Fondateur et initiateur du Forum des Territoires",
    image: orpheeKinssImage
  },
  {
    id: 2,
    name: "Christian Lamouline",
    title: "Mr",
    role: "President de BRULOCALIS et  Bourgmestre de Berchem-Sainte-Agathe",
    country: "Belgique",
    bio: "Haut représentant institutionnel belge",
    image: christianLamoulineImage
  },
  {
    id: 3,
    name: "Bertin Mampaka",
    title: "Mr",
    role: "Président du parlement bruxellois",
    country: "Belgique",
    bio: "Haut représentant institutionnel belge",
    image: bertinMampakaImage
  },
  {
    id: 4,
    name: "Steven Royez",
    title: "Mr",
    role: "Bourgmestre de Lobbes",
    country: "Belgique",
    bio: "Président d'IGRETEC et Administrateur de l'Union des villes et communes de Wallonie, asbl",
    image: stevenRoyezImage
  },
  {
    id: 5,
    name: "Diarra Sow",
    title: "Mme",
    role: "Directrice Générale OLAC",
    country: "Sénégal",
    bio: "Directrice Générale de l'Organisation pour le Logement et l'Aménagement des Collectivités",
    image: DiarraSowImage
  },
  {
    id: 6,
    name: "Abdoulaye Wilane",
    title: "Mr",
    role: "Président Conseil Régional Kaffrine",
    country: "Sénégal",
    bio: "Président du Conseil Régional de Kaffrine",
    image: WillaneImage
  },
  {
      id: 7,
    name: "Serigne Mboup",
    title: "Mr",
    role: "Président Chambre de commerce de Kaolack",
    country: "Sénégal",
    bio: "Président de la Chambre de commerce de Kaolack",
    image: SerigneMboupImage
  },
  {
    id: 8,
    name: "Biran Diouf",
    title: "Mr",
    role: "Directeur des Opérations de l'ADEPME",
    country: "Sénégal",
    bio: "Directeur des Opérations de l'Agence de Développement et d'Encadrement des Petites et Moyennes Entreprises",
    image: BiraneDioufImage
  },
  {
    id: 9,
    name: "Elhadj DIALLO  ",
    title: "Mr",
    role: "Député au Parlement de la Région de Bruxelles-Capitale  ",
    country: "Belgique",
    bio: "Sénateur de Belgique",
    image: ElhadjDialloImage
  },
  {
    id: 10,
    name: "André FLAHAUT",
    title: "Mr",
    role: "Ministre d’État, Ministre de la Défense de 1999 à 2008",
    country: "Sénégal",
    bio: " président de la Chambre des représentants (2010-2014) et occupé des fonctions ministérielles en Fédération Wallonie-Bruxelles",
    image: AndreFlhautImage
  },
  {
    id: 11,
    name: "Marie Claire Mvumb",
    title: "Mme",
    role: "Sénatrice belge",
    country: "Belgique",
    bio: "sénatrice belge",
    image: MarieClaireMvumbImage
  },
  {
    id: 12,
    name: "Nabil Messaoudi",
    title: "Mr",
    role: "Échevin des sports, Familles, Cohésion sociale, Jeunesse, Jumelages et Coopération internationale Ixelles.",
    country: "Belgique",
    bio: null,
    image: NabilMessaoudiImage
  },
  {
    id: 13,
    name: "Cheikh Ibra Ndiaye",
    title: "Mr",
    role: "Maire de Thilmakha",
    country: "Sénégal",
    bio: "Maire de la commune de Thilmakha",
    image: CheikhIbraNdiayeImage
  },
  {
    id: 14,
    name: "Alioune Pouye",
    title: "Mr",
    role: "Maire de Sebikotane",
    country: "Sénégal",
    bio: "Maire de la commune de Sebikotane",
    image: AliounePouyeImage
  },
  {
    id: 15,
    name: "Abdoulaye Ly",
    title: "Mr",
    role: "Ancien Directeur des investissements",
    country: "Sénégal",
    bio: "Ancien Directeur des investissements",
    image: null
  },
  {
    id: 16,
    name: "Al Hassane NiANG",
    title: "Mr",
    role: "Directeur du Groupe GOPA, Ancien DG de B&s Europe,Expert en Gouvernance publique et reformes Institutionnelles",
    country: "Sénégal",
    bio: "Parrains de la 1 ère édition",
    image: AlHassaneNiangImage
  },
  {
    id: 17,
    name: "Jamil Thiam",
    title: "Mr",
    role: "Président de l'Association des Sénégalais de la Belgique",
    country: "Belgique",
    bio: "Président de l'Association des Sénégalais de la Belgique",
    image: null
  },
  {
    id: 18,
    name: "Ndeye Awa Ndiaye",
    title: "Mme",
    role: "",
    country: "Sénégal",
    bio: "",
    image: NdeyeAwaNdiayeImage
  },
  {
    id: 19,
    name: "Hakewijn Timmerman",
    title: "Mr",
    role: "Chef de projet Système Alimentaire Durable, de l'entrepreneuriat et du changement climatique",
    country: "Belgique",
    bio: "Expert en systèmes alimentaires durables et entrepreneuriat",
    image: null
  },
  {
    id: 20,
    name: "Alioune Sarr",
    title: "Mr",
    role: "Ancien Ministre du Tourisme au Sénégal",
    country: "Sénégal",
    bio: "Ancien Ministre du Tourisme et des Transports aériens du Sénégal",
    image: AliouneSarrImage
  },
  {
    id: 21,
    name: "Mamadou Oury Barry",
    title: "Mr",
    role: "Secrétaire Général de l'UAL",
    country: "Sénégal",
    bio: "Secrétaire Général de l'Union des Associations de Logement",
    image: null
  },
  {
    id: 22,
    name: "Oury Baillo Diallo",
    title: "Mr",
    role: "Président UAEL",
    country: "Sénégal",
    bio: "Président de l'Union des Associations d'Élus Locaux",
    image: OuryBailloDialloImage
  },
  {
    id: 23,
    name: "Idrissa Diop",
    title: "Mr",
    role: "Secrétaire Général de l'UEAL",
    country: "Sénégal",
    bio: "Secrétaire Général de l'Union des Élus et Associations Locales",
    image: IdrissaDiopImage
  },
  {
    id: 24,
    name: "Sultan DIOP",
    title: "Mr",
    role: "PDG de NOGA MINE SARL",
    country: "Sénégal",
    bio: "",
    image: SultanDiopImage
  },
  {
    id: 25,
    name: "Aicha Bacha",
    title: "Mme",
    role: "Présidente fondatrice de l'ECDA",
    country: "Sénégal",
    bio: "",
    image: AichaBachaImage
  },
  {
    id: 26,
    name: "Somaya Korkzine",
    title: "Mme",
    role: "Presidente Asbl SO GO UP",
    country: "Sénégal",
    bio: "",
    image: SomayaKorkzineImage
  },
  {
    id: 27,
    name: "Biran Diouf",
    title: "Mr",
    role: "",
    country: "Sénégal",
    bio: "",
    image: BiranDioufImage
  },
  {
    id: 28,
    name: "Cheikh Alioune BEYE",
    title: "Mr",
    role: "Maire de Sicap Mbao et PCA  du Conseil d’orientation des pôles urbains de Diamniadio et Lac Rose",
    country: "Sénégal",
    bio: "",
    image: CheikhAliouneBeyeImage
  },
  {
    id: 29,
    name: "Ibrahima Diedhiou",
    title: "Mr",
    role: " maire de Bona",
    country: "Sénégal",
    bio: "",
    image: IbrahimaDiedhiouImage
  }
];

