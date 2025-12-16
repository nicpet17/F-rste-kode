import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Utensils, Music, Palmtree } from "lucide-react";

const restaurants = [
  { name: "La Môme", note: "Also has a beach location – a bit on the pricey side" },
  { name: "Caveau 30", note: "On Félix Faure" },
  { name: "Astoux & Brun", note: "On Félix Faure" },
  { name: "Au Mal Assis", note: "In the Old Port" },
  { name: "Les Marais", note: "In Le Suquet" },
  { name: "Le Cave", note: "On Rue d’Antibes" },
  { name: "Waikiki", note: "The closest beach restaurant, excellent" },
  { name: "La Petite Cannoise", note: "A bit closer to the city center, recommended" },
];

const luxury = [
  { name: "La Guérite", note: "Île Sainte-Marguerite – St. Tropez-style experience (boat access)" },
  { name: "La Petite Maison Cannes", note: "Palm Beach – panoramic views from Cap d’Antibes to the islands" },
  { name: "Zuma Cannes", note: "Japanese-inspired fine dining with a terrace overlooking the bay" },
  { name: "Nammos Beach Club", note: "Exclusive Mykonos-style beach club in the Palm Beach complex" },
  { name: "La Baoli", note: "Famous nightclub just by Port Canto" },
];

export function Recommendations() {
  return (
    <section id="guide" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Our Recommendations</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-white">Cannes Guide</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Most restaurants in the area are very good, including the beach restaurants. Here are our top picks.
          </p>
        </div>

        <Tabs defaultValue="restaurants" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 p-1 mb-8">
            <TabsTrigger value="restaurants" className="data-[state=active]:bg-white data-[state=active]:text-primary text-white">Restaurants</TabsTrigger>
            <TabsTrigger value="luxury" className="data-[state=active]:bg-white data-[state=active]:text-primary text-white">Luxury & Nightlife</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((place, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors text-white">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Utensils className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-serif">{place.name}</CardTitle>
                    <CardDescription className="text-white/60">{place.note}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="luxury" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {luxury.map((place, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors text-white">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    {place.name.includes("Baoli") ? <Music className="h-4 w-4" /> : <Palmtree className="h-4 w-4" />}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-serif">{place.name}</CardTitle>
                    <CardDescription className="text-white/60">{place.note}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}