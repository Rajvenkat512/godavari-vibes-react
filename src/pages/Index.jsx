import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedProducts />
        <CategorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;