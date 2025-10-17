export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  description: string;
  origin: string;
  benefits: string[];
  brewingInstructions: {
    temperature: string;
    time: string;
    amount: string;
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ceylan Impérial",
    slug: "ceylan-imperial",
    price: 24.90,
    image: "tea-black-ceylon.jpg",
    category: "Thé Noir",
    description: "Un thé noir d'exception des hautes plantations de Ceylon. Notes maltées et légèrement épicées, parfait pour le matin.",
    origin: "Nuwara Eliya, Sri Lanka - Altitude 2000m",
    benefits: [
      "Riche en théine pour un réveil énergisant",
      "Antioxydants naturels",
      "Favorise la concentration"
    ],
    brewingInstructions: {
      temperature: "95°C",
      time: "3-4 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  },
  {
    id: "2",
    name: "Jardin de Sérénité",
    slug: "jardin-serenite",
    price: 22.90,
    image: "tea-green-wellness.jpg",
    category: "Thé Vert",
    description: "Thé vert premium aux feuilles délicates. Fraîcheur végétale et notes marines pour un moment de pure détente.",
    origin: "Kandy, Sri Lanka - Récolte matinale",
    benefits: [
      "Puissant antioxydant",
      "Favorise la digestion",
      "Effet relaxant naturel"
    ],
    brewingInstructions: {
      temperature: "75-80°C",
      time: "2-3 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  },
  {
    id: "3",
    name: "Perles de Lune",
    slug: "perles-de-lune",
    price: 29.90,
    image: "tea-white-serenity.jpg",
    category: "Thé Blanc",
    description: "Le plus précieux de nos thés. Bourgeons argentés récoltés à l'aube, saveur subtile et raffinée.",
    origin: "Sabaragamuwa, Sri Lanka - Récolte manuelle",
    benefits: [
      "Exceptionnellement riche en antioxydants",
      "Anti-âge naturel",
      "Hydratation et bien-être"
    ],
    brewingInstructions: {
      temperature: "70°C",
      time: "4-5 minutes",
      amount: "3g pour 200ml"
    },
    inStock: true
  },
  {
    id: "4",
    name: "Épices d'Orient",
    slug: "epices-orient",
    price: 26.90,
    image: "tea-black-ceylon.jpg",
    category: "Thé Noir",
    description: "Mélange épicé de thé noir Ceylon, cardamome, cannelle et gingembre. Un voyage sensoriel.",
    origin: "Mélange artisanal, base Ceylon",
    benefits: [
      "Stimulant et réchauffant",
      "Favorise la digestion",
      "Propriétés anti-inflammatoires"
    ],
    brewingInstructions: {
      temperature: "95°C",
      time: "4-5 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  },
  {
    id: "5",
    name: "Harmonie Verte",
    slug: "harmonie-verte",
    price: 23.90,
    image: "tea-green-wellness.jpg",
    category: "Thé Vert",
    description: "Thé vert aux notes florales délicates. Équilibre parfait entre douceur et caractère.",
    origin: "Uva Province, Sri Lanka",
    benefits: [
      "Booste le métabolisme",
      "Effet détoxifiant",
      "Clarté mentale"
    ],
    brewingInstructions: {
      temperature: "80°C",
      time: "2-3 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  },
  {
    id: "6",
    name: "Nuage Argenté",
    slug: "nuage-argente",
    price: 31.90,
    image: "tea-white-serenity.jpg",
    category: "Thé Blanc",
    description: "Thé blanc rare aux notes florales exquises. Une expérience de dégustation unique.",
    origin: "Ella, Sri Lanka - Production limitée",
    benefits: [
      "Le plus délicat des thés",
      "Teneur minimale en théine",
      "Bienfaits anti-stress"
    ],
    brewingInstructions: {
      temperature: "70°C",
      time: "5-6 minutes",
      amount: "3g pour 200ml"
    },
    inStock: true
  },
  {
    id: "7",
    name: "Rubis de Ceylon",
    slug: "rubis-ceylon",
    price: 25.90,
    image: "tea-black-ceylon.jpg",
    category: "Thé Noir",
    description: "Thé noir corsé à la liqueur rouge profond. Notes boisées et maltées prononcées.",
    origin: "Dimbula, Sri Lanka",
    benefits: [
      "Haute teneur en théine",
      "Effet énergisant durable",
      "Renforce l'immunité"
    ],
    brewingInstructions: {
      temperature: "95°C",
      time: "3-4 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  },
  {
    id: "8",
    name: "Rosée du Matin",
    slug: "rosee-matin",
    price: 24.90,
    image: "tea-green-wellness.jpg",
    category: "Thé Vert",
    description: "Thé vert printanier aux arômes frais et vivifiants. Parfait pour commencer la journée.",
    origin: "Matale, Sri Lanka - Première récolte",
    benefits: [
      "Énergisant doux",
      "Riche en vitamines",
      "Améliore la concentration"
    ],
    brewingInstructions: {
      temperature: "75°C",
      time: "2 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  },
  {
    id: "9",
    name: "Trésor Impérial",
    slug: "tresor-imperial",
    price: 34.90,
    image: "tea-white-serenity.jpg",
    category: "Thé Blanc",
    description: "Notre thé blanc le plus raffiné. Bourgeons d'or aux saveurs incomparables.",
    origin: "Galle, Sri Lanka - Édition limitée",
    benefits: [
      "Excellence antioxydante",
      "Pureté et finesse",
      "Rituel de bien-être ultime"
    ],
    brewingInstructions: {
      temperature: "70°C",
      time: "5-7 minutes",
      amount: "3g pour 200ml"
    },
    inStock: true
  },
  {
    id: "10",
    name: "Crépuscule Doré",
    slug: "crepuscule-dore",
    price: 27.90,
    image: "tea-black-ceylon.jpg",
    category: "Thé Noir",
    description: "Thé noir aromatique aux notes caramélisées. Douceur et profondeur en harmonie.",
    origin: "Ratnapura, Sri Lanka",
    benefits: [
      "Réconfortant et chaleureux",
      "Favorise la relaxation du soir",
      "Arômes apaisants"
    ],
    brewingInstructions: {
      temperature: "90°C",
      time: "4 minutes",
      amount: "2g pour 200ml"
    },
    inStock: true
  }
];

export const categories = [
  "Tous",
  "Thé Noir",
  "Thé Vert",
  "Thé Blanc"
];
