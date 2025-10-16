import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-tea-plantation.jpg";
import blackTeaImg from "@/assets/tea-black-ceylon.jpg";
import greenTeaImg from "@/assets/tea-green-wellness.jpg";
import whiteTeaImg from "@/assets/tea-white-serenity.jpg";

const imageMap: { [key: string]: string } = {
  "tea-black-ceylon.jpg": blackTeaImg,
  "tea-green-wellness.jpg": greenTeaImg,
  "tea-white-serenity.jpg": whiteTeaImg,
};

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/70" />
          </div>
          
          <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
              L'Excellence du Thé Sri-Lankais
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Chaque infusion raconte une histoire de nature, de savoir-faire, et d'authenticité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/products">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Découvrir nos thés
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Notre histoire
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Nos Thés Signature
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une sélection exclusive de nos thés les plus raffinés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={imageMap[product.image]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-accent font-medium mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toFixed(2)} €
                      </span>
                      <Link to={`/product/${product.slug}`}>
                        <Button variant="outline">
                          Découvrir
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products">
                <Button size="lg">
                  Voir toute la collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Pourquoi VENITHA & CO ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                  <Leaf className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Pureté Naturelle
                </h3>
                <p className="text-muted-foreground">
                  Des thés cultivés sans pesticides, dans le respect de la nature et des traditions
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Excellence Garantie
                </h3>
                <p className="text-muted-foreground">
                  Chaque récolte est soigneusement sélectionnée pour sa qualité exceptionnelle
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-6">
                  <Globe className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Commerce Équitable
                </h3>
                <p className="text-muted-foreground">
                  Nous soutenons directement les communautés de producteurs sri-lankais
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-nature text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Commencez votre voyage gustatif
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Découvrez l'univers raffiné des thés premium sri-lankais
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary">
                Explorer la collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
