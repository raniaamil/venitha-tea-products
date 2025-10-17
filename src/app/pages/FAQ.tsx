import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "D'où proviennent vos thés ?",
      answer: "Tous nos thés proviennent directement du Sri Lanka, anciennement Ceylan. Nous travaillons avec des plantations familiales qui perpétuent des méthodes de culture traditionnelles et respectueuses de l'environnement."
    },
    {
      question: "Comment conserver mes thés ?",
      answer: "Pour préserver tous les arômes de vos thés, conservez-les dans un endroit frais et sec, à l'abri de la lumière et de l'humidité. Nos sachets hermétiques sont conçus pour une conservation optimale. Une fois ouverts, consommez vos thés dans les 6 mois."
    },
    {
      question: "Quelle est la durée de livraison ?",
      answer: "Nous expédions sous 24-48h ouvrées. La livraison prend ensuite 3-5 jours ouvrés en France métropolitaine et 7-10 jours pour l'international. Vous recevrez un email de suivi dès l'expédition de votre commande."
    },
    {
      question: "Proposez-vous des coffrets cadeaux ?",
      answer: "Oui ! Nos coffrets découverte vous permettent de voyager à travers nos différentes gammes. Parfaits pour offrir ou pour découvrir notre collection. Chaque coffret est soigneusement emballé dans un packaging premium."
    },
    {
      question: "Vos thés sont-ils bio ?",
      answer: "Nos thés proviennent de plantations qui utilisent des méthodes de culture traditionnelles et naturelles. Bien que certaines ne soient pas certifiées bio, elles respectent les mêmes principes : pas de pesticides, culture raisonnée et respect de l'environnement."
    },
    {
      question: "Comment préparer mon thé ?",
      answer: "Chaque thé a ses spécificités. Sur chaque fiche produit, vous trouverez les conseils d'infusion détaillés : température de l'eau, temps d'infusion et dosage. En général, comptez 2-3g de thé pour 200ml d'eau."
    },
    {
      question: "Puis-je retourner ma commande ?",
      answer: "Vous disposez de 14 jours pour retourner votre commande si elle ne vous convient pas, sous réserve que l'emballage soit intact. Les frais de retour sont à votre charge. Contactez-nous pour initier un retour."
    },
    {
      question: "Proposez-vous un programme de fidélité ?",
      answer: "Nous préparons actuellement un programme de fidélité et d'abonnement pour nos clients réguliers. Inscrivez-vous à notre newsletter pour être informé du lancement et bénéficier d'offres exclusives."
    },
    {
      question: "Les frais de port sont-ils offerts ?",
      answer: "Les frais de port sont offerts en France métropolitaine dès 50€ d'achat. Pour les autres destinations, les frais varient selon le poids et la destination. Ils sont calculés automatiquement lors du checkout."
    },
    {
      question: "Comment vous contacter ?",
      answer: "Vous pouvez nous joindre via notre formulaire de contact, par email à contact@venithaandco.com ou par téléphone au +33 1 23 45 67 89. Nous répondons sous 24-48h ouvrées."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur VENITHA & CO
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous aider
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
