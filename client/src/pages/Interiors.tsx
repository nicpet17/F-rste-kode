import { Navbar } from "@/components/layout/Navbar";
import { Interiors as InteriorsSection } from "@/components/sections/Interiors";
import { VideoTour } from "@/components/sections/VideoTour";
import { Footer } from "@/components/sections/Footer";

export default function InteriorsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Interiors</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the thoughtfully designed spaces of Villa Norvic, where classic Riviera charm meets modern luxury.
          </p>
        </div>
      </div>

      <InteriorsSection />
      <VideoTour />
      
      <Footer />
    </div>
  );
}