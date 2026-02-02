/**
 * Service de gestion des actualités du Forum des Territoires
 * Basé sur le contenu du Livret-Rapport 2025
 */

// Chargement dynamique des images avec Vite
const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true, as: 'url' });

// Helper pour obtenir les chemins d'images
const getImageUrl = (imagePath) => {
  const imageKey = `../assets/images/${imagePath}`;
  return images[imageKey] || `/src/assets/images/${imagePath}`;
};

export const actualites = [
  {
    id: 1,
    title: "Forum des Territoires 2025 : Une édition historique à Bruxelles",
    date: "1-5 Octobre 2025",
    category: "Événement",
    excerpt: "Le Forum des Territoires s'est tenu à Bruxelles du 1er au 5 octobre 2025, marquant un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe.",
    image: getImageUrl("hero.png"),
    images: [
      getImageUrl("img2.jpg"),
      getImageUrl("img3.jpg"),
      getImageUrl("img4.jpg")
    ],
    content: `
      <p class="mb-4">Le Forum des Territoires s'est tenu à Bruxelles du 1er au 5 octobre 2025, marquant un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe, avec un accent sur le développement durable au niveau local.</p>
      
      <p class="mb-4">Pendant cinq jours, des élus locaux, des investisseurs, des experts, des partenaires techniques et financiers, ainsi que des membres de la diaspora ont échangé leurs points de vue, confronté leurs expériences et esquissé des réponses communes aux défis économiques, sociaux et environnementaux.</p>
      
      <p class="mb-4">Ce cadre d'échange a permis de dépasser les approches théoriques pour mettre en lumière des initiatives concrètes portées par des acteurs engagés et responsables.</p>
      
      <p class="mb-4">Au-delà des engagements formels, le forum a favorisé des synergies durables basées sur la confiance, la complémentarité et une volonté partagée de construire des territoires inclusifs et résilients.</p>
    `,
    featured: true
  },
  {
    id: 2,
    title: "Cérémonie d'ouverture officielle : Diplomatie territoriale en action",
    date: "2 Octobre 2025",
    category: "Cérémonie",
    excerpt: "La cérémonie d'ouverture officielle du Forum sur la diplomatie territoriale s'est tenue au Parlement de Bruxelles, présidée par M. Bertin Mampaka.",
    image: getImageUrl("img10.jpg"),
    images: [
      getImageUrl("img11.jpg"),
      getImageUrl("img12.jpg"),
      getImageUrl("img13.jpg")
    ],
    content: `
      <p class="mb-4">La cérémonie d'ouverture officielle du Forum sur la diplomatie territoriale s'est tenue le 2 octobre 2025 au Parlement de Bruxelles, mettant l'accent sur la coopération internationale, le dialogue inter-territorial et le développement partagé.</p>
      
      <p class="mb-4">La rencontre a été présidée par M. Bertin Mampaka, Président du Parlement de Bruxelles, et a rassemblé une délégation sénégalaise importante composée de maires, de présidents d'associations, de représentants du secteur privé et d'acteurs de la société civile.</p>
      
      <p class="mb-4">L'atmosphère était empreinte de fraternité et d'espoir, visant à construire des partenariats solides et tournés vers l'avenir.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Une matinée riche en échanges et en perspectives</h3>
      
      <p class="mb-4">Les discussions du matin ont été marquées par une série de discours convergents promouvant une diplomatie territoriale inclusive et pragmatique.</p>
      
      <p class="mb-4">M. David Weystman, représentant la Ville de Bruxelles, a salué la promotion de territoires ouverts, solidaires et tournés vers la coopération internationale.</p>
      
      <p class="mb-4">M. Christian Lamouline, Président de BRULOCALIS, a souligné l'importance de renforcer les partenariats institutionnels entre les maires européens et africains pour un développement local harmonisé.</p>
      
      <p class="mb-4">Les collectivités sénégalaises, représentées par Mamadou Woury Bailo Diallo (Président de l'UAEL) et Oumar Ba (Président de l'AMS), ont exprimé leur engagement pour des collaborations durables basées sur la confiance mutuelle.</p>
      
      <p class="mb-4">M. Abdoulaye Ly, représentant le Club des Investisseurs du Sénégal, a présenté une intervention sur "les territoires comme moteurs de la croissance nationale", soulignant le rôle stratégique des collectivités locales dans l'attractivité économique et l'investissement productif.</p>
      
      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-gray-700">
        "Ce forum prouve qu'ensemble, nous pouvons construire des ponts solides entre nos territoires et promouvoir un développement partagé, ancré dans la fraternité et l'innovation." - M. Orphée A. Kinss, Président de SN Kinss Holding
      </blockquote>
    `,
    featured: true
  },
  {
    id: 3,
    title: "Panel 1 : Gouvernance locale participative - Regards croisés Sénégal / Belgique",
    date: "2 Octobre 2025",
    category: "Panel",
    excerpt: "Session modérée par M. Alioune Pouye, Maire de Sébikotane, examinant les pratiques innovantes en matière de gouvernance locale.",
    image: getImageUrl("img14.jpg"),
    images: [
      getImageUrl("img15.jpg"),
      getImageUrl("img16.jpg")
    ],
    content: `
      <p class="mb-4">L'après-midi de la cérémonie officielle a été consacrée à deux panels thématiques simultanés, mettant en évidence l'intensité des échanges et l'engagement partagé des délégations sénégalaises et belges pour renforcer la coopération territoriale par le dialogue et l'action concertée.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Panel 1 – Gouvernance locale participative : regards croisés Sénégal / Belgique</h3>
      
      <p class="mb-4">Cette session, modérée par M. Alioune Pouye, Maire de Sébikotane, visait à examiner les pratiques innovantes en matière de gouvernance locale et les mécanismes de participation citoyenne mis en œuvre dans les communes belges et sénégalaises.</p>
      
      <p class="mb-4">Les interventions de M. Christian Lamouline et de M. Cheikh Aliou Beye, Maire de Diamaguène Sicap Mbao, ont mis en lumière des approches convergentes basées sur la proximité citoyenne, la transparence administrative et la gestion participative des services publics.</p>
      
      <p class="mb-4">Les discussions ont unanimement souligné que la performance des collectivités dépend avant tout de leur capacité à impliquer les populations dans les processus de décision.</p>
      
      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-gray-700">
        "Les villes qui réussissent sont celles qui savent écouter leurs habitants avant d'agir."
      </blockquote>
    `,
    featured: false
  },
  {
    id: 4,
    title: "Panel 2 : Coopération décentralisée et autonomisation des jeunes et des femmes",
    date: "2 Octobre 2025",
    category: "Panel",
    excerpt: "Panel modéré par M. Souleymane Amar d'Enabel, axé sur le rôle stratégique des collectivités dans l'inclusion économique et sociale.",
    image: getImageUrl("img17.jpg"),
    images: [
      getImageUrl("img18.jpg"),
      getImageUrl("img19.jpg")
    ],
    content: `
      <h3 class="text-2xl font-bold mb-3 mt-6">Panel 2 – Coopération décentralisée et autonomisation des jeunes et des femmes</h3>
      
      <p class="mb-4">Le panel, modéré par M. Souleymane Amar d'Enabel, a porté sur le rôle stratégique des collectivités territoriales dans l'inclusion économique et sociale, particulièrement pour les jeunes et les femmes.</p>
      
      <p class="mb-4">Les contributions de Mme Diarra Sow (OLAC), M. Frank Willemans (BRULOCALIS) et M. David Weystman (Ville de Bruxelles) ont mis en avant la coopération décentralisée comme un outil puissant pour créer des opportunités locales durables, avec un accent sur la formation, l'entrepreneuriat et l'accès équitable aux ressources économiques.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Focus : Les collectivités, laboratoires du développement durable</h3>
      
      <p class="mb-4">Les discussions ont révélé que les collectivités ne sont plus seulement des relais de l'État, mais de véritables "laboratoires de l'avenir".</p>
      
      <p class="mb-4">En investissant dans la jeunesse, la formation et la solidarité économique, elles deviennent des acteurs clés du développement humain durable et inclusif.</p>
    `,
    featured: false
  },
  {
    id: 5,
    title: "Contexte & Vision : Relier les territoires pour bâtir un développement partagé",
    date: "1 Octobre 2025",
    category: "Vision",
    excerpt: "Le Forum des Territoires repose sur la conviction fondamentale que les grands défis du développement ne se relèvent plus depuis les capitales.",
    image: getImageUrl("img20.jpg"),
    images: [
      getImageUrl("img21.jpg"),
      getImageUrl("img22.jpg")
    ],
    content: `
      <p class="mb-4">Le Forum des Territoires repose sur la conviction fondamentale que les grands défis du développement ne se relèvent plus depuis les capitales, mais depuis des territoires vivants, autonomes et connectés.</p>
      
      <p class="mb-4">Suite à l'Acte III de la Décentralisation initié il y a près d'une décennie, le Sénégal a fait le choix stratégique de territorialiser ses politiques publiques. Cette orientation vise à promouvoir la responsabilité locale, stimuler la compétitivité régionale et encourager une coopération intercommunale structurée et efficace.</p>
      
      <div class="bg-green-50 border-l-4 border-secondary p-6 my-6 rounded-r-lg">
        <p class="mb-4">L'émergence d'une nouvelle génération d'élus locaux et d'entrepreneurs territoriaux, porteurs d'initiatives innovantes ancrées dans les réalités locales, nécessite la création d'un cadre international de dialogue, d'échanges et de partenariats concrets. Bruxelles, capitale européenne et pôle institutionnel, s'est naturellement imposée comme le lieu emblématique de cette ambition.</p>
        
        <blockquote class="mt-4 italic text-gray-700">
          "Faire dialoguer les territoires, c'est activer les leviers de la souveraineté économique et du développement endogène."
        </blockquote>
      </div>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Le forum répond ainsi à trois objectifs majeurs :</h3>
      
      <ol class="list-decimal list-inside space-y-3 mb-6">
        <li>Renforcer la coopération décentralisée entre les collectivités du Sénégal, de la Belgique et du Luxembourg</li>
        <li>Promouvoir les investissements structurants portés par les territoires</li>
        <li>Créer des ponts durables entre les acteurs publics, privés et communautaires, au Nord comme au Sud</li>
      </ol>
      
      <p class="mb-4">La rencontre met également en lumière le rôle décisif de la diaspora africaine en Europe, reconnue comme un acteur clé du développement territorial et un lien stratégique entre les espaces africains et européens.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Éclairage</h3>
      
      <p class="mb-4">L'Acte III de la Décentralisation au Sénégal a posé les bases d'une gouvernance locale ambitieuse. Une décennie plus tard, la coopération internationale prolonge cette dynamique en connectant les collectivités africaines aux réseaux européens d'excellence territoriale, ouvrant la voie à un développement équilibré, concerté et durable.</p>
    `,
    featured: true
  },
  {
    id: 6,
    title: "Territoires en dialogue, l'avenir en partage et en lumière",
    date: "1-5 Octobre 2025",
    category: "Résumé",
    excerpt: "Un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe, avec un accent sur le développement durable au niveau local.",
    image: getImageUrl("img23.jpg"),
    images: [
      getImageUrl("img24.jpg"),
      getImageUrl("img25.jpg")
    ],
    content: `
      <p class="mb-4">Le Forum des Territoires, tenu à Bruxelles du 1er au 5 octobre 2025, a constitué un moment fondamental pour la coopération territoriale entre l'Afrique et l'Europe, avec un accent sur le développement durable au niveau local.</p>
      
      <p class="mb-4">Pendant cinq jours, des élus locaux, des investisseurs, des experts, des partenaires techniques et financiers, ainsi que des membres de la diaspora ont échangé leurs points de vue, confronté leurs expériences et esquissé des réponses communes aux défis économiques, sociaux et environnementaux.</p>
      
      <p class="mb-4">Ce cadre d'échange a permis de dépasser les approches théoriques pour mettre en lumière des initiatives concrètes portées par des acteurs engagés et responsables.</p>
      
      <p class="mb-4">Au-delà des engagements formels, le forum a favorisé des synergies durables basées sur la confiance, la complémentarité et une volonté partagée de construire des territoires inclusifs et résilients.</p>
      
      <p class="mb-4">Le forum a également facilité la confrontation des modèles, le partage de connaissances et la construction de ponts humains et institutionnels entre des collectivités engagées dans la transformation de leurs espaces.</p>
      
      <p class="mb-4">Ce livret retrace les temps forts de cet événement unique : une semaine d'échanges, de découvertes et d'engagements, au cours de laquelle la coopération décentralisée a pris un visage humain, représenté par des hommes et des femmes convaincus que l'avenir se construit ensemble, territoire par territoire.</p>
    `,
    featured: false
  }
];

/**
 * Récupère toutes les actualités
 */
export const getAllActualites = () => {
  return actualites;
};

/**
 * Récupère une actualité par son ID
 */
export const getActualiteById = (id) => {
  return actualites.find(actu => actu.id === parseInt(id));
};

/**
 * Récupère les actualités mises en avant
 */
export const getFeaturedActualites = () => {
  return actualites.filter(actu => actu.featured);
};

/**
 * Récupère les actualités par catégorie
 */
export const getActualitesByCategory = (category) => {
  return actualites.filter(actu => actu.category === category);
};

