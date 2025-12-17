import { Navbar } from "@/components/layout/Navbar";
import { Info as InfoSection } from "@/components/sections/Info";
import { Recommendations } from "@/components/sections/Recommendations";
import { Footer } from "@/components/sections/Footer";

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Info & Guide</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know for your stay, plus our curated guide to the best of Cannes.
          </p>
        </div>
      </div>

      <InfoSection />
      <Recommendations />
      
      <Footer />
    </div>
  );
}