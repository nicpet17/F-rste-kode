import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star } from "lucide-react";

const restaurants = [
  { name: "La Môme", note: "Also has a beach location – pricey but excellent" },
  { name: "Caveau 30", note: "Located on Félix Faure" },
  { name: "Astoux & Brun", note: "Famous for seafood on Félix Faure" },
  { name: "Au Mal Assis", note: "Charming spot in the Old Port" },
  { name: "Les Marais", note: "Located in the historic Le Suquet" },
  { name: "Le Cave", note: "Located on Rue d’Antibes" },
  { name: "Waikiki", note: "Excellent beach restaurant nearby" },
  { name: "La Petite Cannoise", note: "Closer to city center" },
];

const luxury = [
  { name: "La Guérite", note: "Île Sainte-Marguerite – St. Tropez style experience" },
  { name: "La Petite Maison", note: "Panoramic views from Cap d’Antibes to islands" },
  { name: "Zuma Cannes", note: "Japanese-inspired fine dining overlooking the bay" },
  { name: "Nammos Beach Club", note: "Exclusive Mykonos-style beach club" },
  { name: "La Baoli", note: "Famous nightclub by Port Canto" },
];

export function Recommendations() {
  return (
    <section id="guide" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern could go here */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Local Guide</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-white">Our Recommendations</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Cannes offers a culinary journey from charming local bistros to world-class fine dining. 
            Here are our personal favorites for your stay.
          </p>
        </div>

        <Tabs defaultValue="restaurants" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 p-1 mb-8">
            <TabsTrigger value="restaurants" className="data-[state=active]:bg-white data-[state=active]:text-primary text-white">Local Favorites</TabsTrigger>
            <TabsTrigger value="luxury" className="data-[state=active]:bg-white data-[state=active]:text-primary text-white">Luxury & Nightlife</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((place, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors text-white">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    <UtensilsIcon className="h-4 w-4" />
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
                    <Star className="h-4 w-4" />
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

function UtensilsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}