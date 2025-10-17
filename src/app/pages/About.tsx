import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Globe } from "lucide-react";
import heroImage from "@/assets/hero-tea-plantation.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
              Notre Histoire
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Chaque thé raconte une histoire de nature, de savoir-faire, et d'authenticité
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-serif text-primary float-left mr-4 leading-none">V</span>
                ENITHA & CO est née d'une passion pour le thé et d'un amour profond pour le Sri Lanka, 
                cette île aux mille trésors où pousse l'un des meilleurs thés du monde.
              </p>
              <p>
                Nos fondateurs ont passé des années à parcourir les plantations de thé sri-lankaises, 
                des hautes terres brumeuses de Nuwara Eliya aux vallées verdoyantes de Kandy. À chaque 
                rencontre avec les cultivateurs, à chaque dégustation, une certitude s'est imposée : 
                ces thés d'exception méritaient d'être partagés avec le monde.
              </p>
              <p>
                Aujourd'hui, VENITHA & CO sélectionne avec soin les plus belles récoltes, issues de 
                jardins cultivés dans le respect de la nature et des traditions ancestrales. Chaque 
                infusion est une invitation au voyage, un moment suspendu pour savourer l'essence 
                même du terroir sri-lankais.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Leaf className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Authenticité</h3>
                  <p className="text-muted-foreground">
                    Des thés purs, sans artifices, qui révèlent la richesse des terroirs sri-lankais
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Passion</h3>
                  <p className="text-muted-foreground">
                    Un amour inconditionnel pour le thé et un respect profond des artisans
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <Globe className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">Durabilité</h3>
                  <p className="text-muted-foreground">
                    Des pratiques responsables pour préserver la nature et soutenir les communautés
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-6">
                Notre Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Faire découvrir au monde l'excellence des thés sri-lankais, tout en préservant 
                les savoir-faire traditionnels et en soutenant les communautés de cultivateurs. 
                Chaque tasse de VENITHA & CO est une célébration de la nature et de l'artisanat.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
