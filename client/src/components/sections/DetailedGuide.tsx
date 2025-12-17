import { MapPin, Star, Utensils, Music, Wine, Palmtree } from "lucide-react";

export function DetailedGuide() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Curated Guide</span>
          <h2 className="text-4xl font-serif mt-4 mb-6 text-foreground">Cannes Dining & Nightlife</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Most restaurants in the area are very good, including the beach restaurants. 
            Here is a more detailed look at our personal favorites.
          </p>
        </div>

        <div className="space-y-16">
          {/* Local Favorites */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-full">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-serif text-foreground">Local Favorites</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="text-xl font-serif mb-2">Waikiki</h4>
                <p className="text-muted-foreground">The closest beach restaurant to the apartment. Excellent food and atmosphere right on the sand.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-serif mb-2">La Petite Cannoise</h4>
                <p className="text-muted-foreground">A bit closer to the city center than Waikiki. Highly recommended for its authentic charm.</p>
              </div>

              <div>
                <h4 className="text-xl font-serif mb-2">Caveau 30</h4>
                <p className="text-muted-foreground"><span className="font-medium text-primary">Location:</span> Félix Faure</p>
                <p className="text-muted-foreground">A classic spot known for quality seafood and traditional French dishes.</p>
              </div>

              <div>
                <h4 className="text-xl font-serif mb-2">Astoux & Brun</h4>
                <p className="text-muted-foreground"><span className="font-medium text-primary">Location:</span> Félix Faure</p>
                <p className="text-muted-foreground">Famous for its seafood platters and oysters. A bustling, iconic Cannes brasserie.</p>
              </div>

              <div>
                <h4 className="text-xl font-serif mb-2">Au Mal Assis</h4>
                <p className="text-muted-foreground"><span className="font-medium text-primary">Location:</span> Old Port</p>
                <p className="text-muted-foreground">Located in the charming Old Port area, offering a great view of the boats.</p>
              </div>

              <div>
                <h4 className="text-xl font-serif mb-2">Les Marais</h4>
                <p className="text-muted-foreground"><span className="font-medium text-primary">Location:</span> Le Suquet</p>
                <p className="text-muted-foreground">Situated in the historic Le Suquet district (old town), perfect for a romantic evening.</p>
              </div>

               <div>
                <h4 className="text-xl font-serif mb-2">Le Cave</h4>
                <p className="text-muted-foreground"><span className="font-medium text-primary">Location:</span> Rue d’Antibes</p>
                <p className="text-muted-foreground">A cozy spot on the main shopping street.</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          {/* Luxury & Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-serif text-foreground">Luxury & Exclusive Experiences</h3>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-muted/30 p-8 rounded-lg border border-border/50">
                <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                  <div>
                    <h4 className="text-2xl font-serif mb-2 text-primary">La Guérite</h4>
                    <p className="text-muted-foreground mb-4">Located on Île Sainte-Marguerite</p>
                    <p className="text-foreground/80 leading-relaxed">
                      If you want a St. Tropez-style experience, visit La Guérite. You can get there by boat from Palm Beach or from the harbor outside Canopy by Hilton. It’s a lively, upscale beach club experience on the island.
                    </p>
                  </div>
                  <Palmtree className="h-8 w-8 text-primary/40 shrink-0" />
                </div>
              </div>

              <div className="space-y-8">
                 <h4 className="text-xl font-serif border-b border-border pb-2">Further out on Palm Beach (approx. 4 km east)</h4>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                      <h5 className="text-lg font-bold mb-1">La Petite Maison Cannes</h5>
                      <p className="text-muted-foreground">Offers panoramic views from Cap d’Antibes to the islands. An elegant setting for fine dining.</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-1">Zuma Cannes</h5>
                      <p className="text-muted-foreground">Japanese-inspired fine dining with a terrace overlooking the bay. Stylish and modern atmosphere.</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-1">Nammos Beach Club</h5>
                      <p className="text-muted-foreground">Exclusive Mykonos-style beach club restaurant located in the Palm Beach complex.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

           <div className="w-full h-px bg-border" />

           {/* Nightlife */}
           <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-full">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-serif text-foreground">Nightlife</h3>
            </div>
            
             <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h4 className="text-2xl font-serif mb-2">La Baoli</h4>
                <p className="text-white/80">
                  Just by Port Canto, you’ll find the famous nightclub La Baoli. A hotspot for nightlife in Cannes.
                </p>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}