import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    "HOME",
    "SWEETS", 
    "HOT",
    "VADIYALU",
    "GODAVARI SPECIALS",
    "PODULU",
    "PICKLES",
    "RAKHIS & GIFTS"
  ];

  return (
    <header className="bg-background shadow-sm border-b border-border">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Godavari Vantillu" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-primary">GODAVARI</h1>
              <p className="text-sm text-secondary font-semibold">Vantillu</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for traditional foods..." 
                className="pl-10 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon - Mobile */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Account */}
            <Button variant="outline" className="hidden sm:inline-flex">
              Account
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col gap-4 pt-8">
                  {categories.map((category) => (
                    <Button key={category} variant="ghost" className="justify-start">
                      {category}
                    </Button>
                  ))}
                  <Button className="mt-4">Account</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for traditional foods..." 
                className="pl-10 border-primary/20 focus:border-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-light hover:text-primary text-sm font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;