import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Story", 
    "Recipes",
    "Blog",
    "Contact Us"
  ];

  const categories = [
    "Traditional Sweets",
    "Hot Snacks",
    "Pickles",
    "Vadiyalu",
    "Godavari Specials",
    "Gift Combos"
  ];

  const customerService = [
    "Shipping Info",
    "Returns",
    "Size Guide",
    "FAQ",
    "Track Order"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-secondary">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
              Stay Connected for Traditional Recipes
            </h3>
            <p className="text-secondary-foreground/80 mb-6">
              Subscribe to get updates on new products, traditional recipes, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="secondary" className="bg-white text-secondary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Godavari Vantillu" className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-xl font-bold">GODAVARI</h2>
                <p className="text-secondary font-semibold">Vantillu</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Bringing you the authentic taste of Andhra Pradesh with traditional recipes passed down through generations. Experience the rich culinary heritage of the Godavari region.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">info@godavarivantillu.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <span className="text-sm">
                  Godavari Region,<br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Button 
                    variant="link" 
                    className="text-primary-foreground/80 hover:text-secondary p-0 h-auto text-sm justify-start"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <Button 
                    variant="link" 
                    className="text-primary-foreground/80 hover:text-secondary p-0 h-auto text-sm justify-start"
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((service) => (
                <li key={service}>
                  <Button 
                    variant="link" 
                    className="text-primary-foreground/80 hover:text-secondary p-0 h-auto text-sm justify-start"
                  >
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Godavari Vantillu. All rights reserved. | Authentic Andhra Recipes
          </p>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;