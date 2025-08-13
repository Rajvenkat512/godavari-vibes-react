import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  rating = 5,
  isNew = false,
  isFeatured = false 
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-semibold">
            NEW
          </span>
        )}
        {isFeatured && (
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
            FEATURED
          </span>
        )}
        {discount > 0 && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <Heart className="h-4 w-4" />
      </Button>

      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-warm aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-xs text-muted-foreground ml-1">({rating})</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                From Rs. {price}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  Rs. {originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;