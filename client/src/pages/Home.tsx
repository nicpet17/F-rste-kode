import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Interiors } from "@/components/sections/Interiors";
import { Recommendations } from "@/components/sections/Recommendations";
import { Info } from "@/components/sections/Info";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Interiors />
      <Recommendations />
      <Info />
      <Footer />
    </div>
  );
}