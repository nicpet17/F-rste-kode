import { Home, Users, Bath, Wifi, Wind, Sun, Utensils, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "4 Bedrooms",
    description: "Sleeps up to 8 guests comfortably"
  },
  {
    icon: <Bath className="h-6 w-6" />,
    title: "3 Bathrooms",
    description: "Modern, fresh and well-maintained"
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "Private Garden",
    description: "200 sqm garden with barbecue"
  },
  {
    icon: <Waves className="h-6 w-6" />,
    title: "Sea View",
    description: "Terrace with partial sea views"
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Air Conditioned",
    description: "Smart panels in all rooms"
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "High-Speed Wi-Fi",
    description: "Stay connected throughout"
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "Full Kitchen",
    description: "Induction cooktop & modern appliances"
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "170 sqm",
    description: "Spacious renovated apartment"
  }
];

export function Features() {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">Overview & Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A beautifully renovated apartment offering a serene retreat by the French Riviera. 
            Villa Norvic combines classic elegance with modern comfort — just a short walk 
            from the beach and Cannes city centre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-muted/30 hover:bg-muted/60 transition-colors">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}