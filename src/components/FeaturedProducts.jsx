import ProductCard from "./ProductCard";
import bellamGavvalu from "@/assets/bellam-gavvalu.jpg";
import bandarLaddu from "@/assets/bandar-laddu.jpg";
import pickles from "@/assets/pickles.jpg";
import vadiyalu from "@/assets/vadiyalu.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Traditional Bellam Gavvalu",
      image: bellamGavvalu,
      price: 250,
      originalPrice: 300,
      rating: 5,
      isNew: true,
      isFeatured: true
    },
    {
      id: "2", 
      name: "Bandar Laddu Special",
      image: bandarLaddu,
      price: 180,
      originalPrice: 220,
      rating: 5,
      isNew: false,
      isFeatured: true
    },
    {
      id: "3",
      name: "Godavari Mango Pickle",
      image: pickles,
      price: 120,
      rating: 5,
      isNew: true,
      isFeatured: false
    },
    {
      id: "4",
      name: "Mixed Vadiyalu Pack",
      image: vadiyalu,
      price: 200,
      originalPrice: 240,
      rating: 5,
      isNew: false,
      isFeatured: true
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of our most popular traditional sweets and snacks from the Godavari region
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;