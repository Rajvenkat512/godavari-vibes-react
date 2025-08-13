import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import bellamGavvalu from "@/assets/bellam-gavvalu.jpg";
import bandarLaddu from "@/assets/bandar-laddu.jpg";
import pickles from "@/assets/pickles.jpg";
import vadiyalu from "@/assets/vadiyalu.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Bellam Gavvalu Original Godavari Recipe",
      image: bellamGavvalu,
      price: 160,
      originalPrice: 200,
      rating: 5,
      isNew: true,
      isFeatured: true
    },
    {
      id: "2",
      name: "Bandar Laddu / Tokkudu Laddu",
      image: bandarLaddu,
      price: 180,
      originalPrice: 220,
      rating: 5,
      isFeatured: true
    },
    {
      id: "3",
      name: "Traditional Andhra Pickles Collection",
      image: pickles,
      price: 220,
      rating: 5,
      isNew: true
    },
    {
      id: "4",
      name: "Authentic Vadiyalu Variety Pack",
      image: vadiyalu,
      price: 160,
      originalPrice: 190,
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked traditional delicacies from the Godavari region
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center sm:hidden">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;