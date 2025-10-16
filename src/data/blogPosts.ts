export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "art-infusion-parfaite",
    title: "L'art de l'infusion parfaite",
    excerpt: "Découvrez les secrets d'une infusion réussie pour révéler tous les arômes de votre thé.",
    content: `
# L'art de l'infusion parfaite

L'infusion du thé est un art millénaire qui demande patience et précision. Chaque type de thé nécessite une température et un temps d'infusion spécifiques pour révéler tous ses arômes.

## La température de l'eau

- **Thé blanc** : 70-75°C
- **Thé vert** : 75-80°C
- **Thé noir** : 90-95°C
- **Thé oolong** : 85-90°C

## Le temps d'infusion

Un temps d'infusion trop court ne permettra pas aux feuilles de libérer tous leurs arômes. À l'inverse, une infusion trop longue rendra votre thé amer.

Pour un thé vert, comptez 2 à 3 minutes. Pour un thé noir, 3 à 5 minutes suffisent généralement.

## La qualité de l'eau

Utilisez une eau de source ou filtrée. Une eau trop calcaire altérera le goût de votre thé.

## Le rituel

Prenez le temps de savourer ce moment. L'infusion du thé est une invitation à la contemplation et au calme.
    `,
    author: "Venitha",
    date: "2025-03-15",
    readTime: "5 min",
    category: "Guide",
    image: "/placeholder.svg"
  },
  {
    slug: "bienfaits-the-vert",
    title: "Les bienfaits du thé vert sur la santé",
    excerpt: "Le thé vert est reconnu pour ses nombreuses vertus. Découvrez pourquoi l'intégrer à votre routine quotidienne.",
    content: `
# Les bienfaits du thé vert sur la santé

Le thé vert est l'une des boissons les plus saines au monde. Riche en antioxydants et en nutriments, il offre de nombreux bienfaits pour la santé.

## Riche en antioxydants

Les catéchines du thé vert combattent les radicaux libres et protègent nos cellules du vieillissement prématuré.

## Améliore les fonctions cérébrales

La combinaison de caféine et de L-théanine améliore la concentration et la vigilance sans les effets secondaires du café.

## Favorise la perte de poids

Le thé vert accélère le métabolisme et aide à brûler les graisses plus efficacement.

## Protège le cœur

Une consommation régulière de thé vert réduit les risques de maladies cardiovasculaires.

## Renforce le système immunitaire

Les polyphénols du thé vert ont des propriétés antibactériennes et antivirales.
    `,
    author: "Dr. Silva",
    date: "2025-03-10",
    readTime: "7 min",
    category: "Santé",
    image: "/placeholder.svg"
  },
  {
    slug: "histoire-the-sri-lanka",
    title: "L'histoire du thé de Ceylan",
    excerpt: "Plongez dans l'histoire fascinante du thé sri-lankais, autrefois appelé thé de Ceylan.",
    content: `
# L'histoire du thé de Ceylan

Le Sri Lanka, anciennement appelé Ceylan, est l'un des plus grands producteurs de thé au monde. Son histoire est aussi riche que ses plantations.

## Les débuts

Au XIXe siècle, le Sri Lanka était principalement connu pour ses plantations de café. Mais en 1869, une maladie décima les caféiers, poussant les planteurs à se tourner vers le thé.

## L'ère James Taylor

C'est James Taylor, un planteur écossais, qui introduisit la culture du thé au Sri Lanka en 1867. Il planta les premiers théiers sur la plantation de Loolecondera.

## L'âge d'or

À la fin du XIXe siècle, le thé de Ceylan était exporté dans le monde entier et devint rapidement célèbre pour sa qualité exceptionnelle.

## Aujourd'hui

Le Sri Lanka produit aujourd'hui près de 300 000 tonnes de thé par an, exportées vers plus de 140 pays. Les thés de Ceylan sont réputés pour leur saveur unique, influencée par l'altitude et le climat tropical.

## Notre engagement

Chez VENITHA & CO, nous travaillons directement avec des petits producteurs sri-lankais pour vous offrir des thés d'exception, cultivés dans le respect des traditions.
    `,
    author: "Venitha",
    date: "2025-03-05",
    readTime: "8 min",
    category: "Histoire",
    image: "/placeholder.svg"
  },
  {
    slug: "rituel-the-matinal",
    title: "Créer votre rituel du thé matinal",
    excerpt: "Commencez chaque journée avec sérénité grâce à un rituel du thé qui vous ressemble.",
    content: `
# Créer votre rituel du thé matinal

Dans notre monde moderne en perpétuel mouvement, prendre le temps d'un rituel matinal est essentiel pour bien commencer la journée.

## Choisissez votre thé

Pour le matin, privilégiez des thés tonifiants comme le thé noir ou le thé vert. Ils vous apporteront l'énergie nécessaire sans la nervosité du café.

## Créez votre espace

Aménagez un coin dédié à votre rituel : une belle théière, vos tasses préférées, un espace calme près d'une fenêtre.

## Le rituel en 5 étapes

1. **Préparez votre eau** : portez-la à la bonne température
2. **Choisissez votre thé** : en fonction de votre humeur du jour
3. **Infusez avec intention** : observez les feuilles se déployer
4. **Savourez** : prenez le temps de sentir les arômes
5. **Contemplez** : profitez de ce moment de calme avant la journée

## Les bienfaits

Ce rituel quotidien devient une ancre de sérénité, un moment rien qu'à vous, qui vous prépare mentalement et physiquement à affronter la journée.
    `,
    author: "Venitha",
    date: "2025-02-28",
    readTime: "6 min",
    category: "Bien-être",
    image: "/placeholder.svg"
  }
];
