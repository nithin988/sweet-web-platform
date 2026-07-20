import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { ItemsSection } from "@/components/home/ItemsSection";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { Gallery } from "@/components/home/Gallery";
import { AboutStory } from "@/components/home/AboutStory";
import { Reviews } from "@/components/home/Reviews";
import { Contact } from "@/components/home/Contact";
import { getPublicProducts } from "@/lib/supabase/queries";
import { products as staticProducts } from "@/lib/data/products";

export default async function HomePage() {
  const dbProducts = await getPublicProducts();
  const products = dbProducts.length > 0 ? dbProducts : staticProducts;

  return (
    <SmoothScrollProvider>
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <TrustBar />
        <CategoryTiles />
        <ItemsSection products={products} />
        <WhyUs />
        <Process />
        <Gallery />
        <AboutStory />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
