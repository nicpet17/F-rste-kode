import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Interiors } from "@/components/sections/Interiors";
import { VideoTour } from "@/components/sections/VideoTour";
import { Gallery } from "@/components/sections/Gallery";
import { Recommendations } from "@/components/sections/Recommendations";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Interiors />
      <VideoTour />
      <Recommendations />
      <Footer />
    </div>
  );
}