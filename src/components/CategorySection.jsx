import { Card, CardContent } from "@/components/ui/card";
import bellamGavvalu from "@/assets/bellam-gavvalu.jpg";
import bandarLaddu from "@/assets/bandar-laddu.jpg";
import pickles from "@/assets/pickles.jpg";
import vadiyalu from "@/assets/vadiyalu.jpg";

const CategorySection = () => {
  const categories = [
    {
      id: "sweets",
      name: "Traditional Sweets",
      image: bellamGavvalu,
      count: "25+ varieties",
      description: "Authentic Andhra sweets made with traditional recipes"
    },
    {
      id: "snacks",
      name: "Hot Snacks",
      image: bandarLaddu,
      count: "30+ varieties",
      description: "Crispy and flavorful snacks for every occasion"
    },
    {
      id: "pickles",
      name: "Godavari Pickles",
      image: pickles,
      count: "15+ varieties",
      description: "Traditional pickles with authentic flavors"
    },
    {
      id: "vadiyalu",
      name: "Vadiyalu Collection",
      image: vadiyalu,
      count: "20+ varieties",
      description: "Sun-dried delicacies from the Godavari region"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the rich culinary heritage of Andhra Pradesh through our carefully curated categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20 bg-gradient-to-br from-white to-primary-light/5"
            >
              <CardContent className="p-0 overflow-hidden">
                {/* Category Image */}
                <div className="relative overflow-hidden aspect-square bg-gradient-warm">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Count Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                    {category.count}
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-primary font-semibold text-sm">
                      Explore Collection →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;