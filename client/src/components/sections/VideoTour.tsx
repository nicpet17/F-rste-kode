import { motion } from "framer-motion";

export function VideoTour() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Virtual Tour</span>
          <h2 className="text-4xl font-serif mt-4 mb-6 text-foreground">Experience Villa Norvic</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Take a walk through the apartment and garden to get a feel for the space.
          </p>
        </div>

        <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/A6F6J5D2K1A" 
            title="Villa Norvic Tour" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}