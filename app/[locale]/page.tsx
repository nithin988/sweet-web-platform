import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Hero } from "@/components/home/Hero";
import { ItemsSection } from "@/components/home/ItemsSection";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <ItemsSection />
        <WhyUs />
        <Process />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
