import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { toast } from "sonner";
import blackTeaImg from "@/assets/tea-black-ceylon.jpg";
import greenTeaImg from "@/assets/tea-green-wellness.jpg";
import whiteTeaImg from "@/assets/tea-white-serenity.jpg";

const imageMap: { [key: string]: string } = {
  "tea-black-ceylon.jpg": blackTeaImg,
  "tea-green-wellness.jpg": greenTeaImg,
  "tea-white-serenity.jpg": whiteTeaImg,
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Produit non trouvé</h1>
            <Link to="/products">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux produits
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${product.name} ajouté au panier`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la boutique
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-premium">
              <img 
                src={imageMap[product.image]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-accent font-medium mb-2">
                  {product.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="text-4xl font-bold text-primary">
                {product.price.toFixed(2)} €
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ajouter au panier
              </Button>

              {/* Origin */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-2">Origine</h3>
                  <p className="text-muted-foreground">{product.origin}</p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-4">Bienfaits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Brewing Instructions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-4">
                    Conseils d'infusion
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {product.brewingInstructions.temperature}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Température
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {product.brewingInstructions.time}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Durée
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {product.brewingInstructions.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Dosage
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
