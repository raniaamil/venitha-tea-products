import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import blackTeaImg from "@/assets/tea-black-ceylon.jpg";
import greenTeaImg from "@/assets/tea-green-wellness.jpg";
import whiteTeaImg from "@/assets/tea-white-serenity.jpg";

const imageMap: { [key: string]: string } = {
  "tea-black-ceylon.jpg": blackTeaImg,
  "tea-green-wellness.jpg": greenTeaImg,
  "tea-white-serenity.jpg": whiteTeaImg,
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProducts = selectedCategory === "Tous" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in-up">
              Notre Collection
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Découvrez nos thés d'exception, cultivés avec passion dans les plantations sri-lankaises
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-card-hover transition-shadow duration-300 group"
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
                    <h3 className="text-xl font-serif font-bold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {product.price.toFixed(2)} €
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link to={`/product/${product.slug}`} className="w-full">
                      <Button className="w-full">
                        Découvrir
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
