import livingRoomImg from "@assets/generated_images/bright_open_plan_living_room_leading_to_garden.png";
import bedroomImg from "@assets/generated_images/elegant_bedroom_with_double_bed.png";
import kitchenImg from "@assets/generated_images/modern_kitchen_with_induction_cooktop.png";
import { motion } from "framer-motion";

const sections = [
  {
    id: "living",
    title: "Living Spaces",
    description: "The open-plan living room is bright and spacious, leading directly to the garden terrace. Designed for relaxation and social gatherings, it seamlessly connects indoor comfort with outdoor Riviera living.",
    image: livingRoomImg,
    align: "right"
  },
  {
    id: "kitchen",
    title: "Gourmet Kitchen",
    description: "The fully equipped kitchen offers modern appliances, an induction cooktop, and elegant finishes. Whether you're preparing a quick breakfast or a dinner party, you'll find everything you need.",
    image: kitchenImg,
    align: "left"
  },
  {
    id: "bedrooms",
    title: "Restful Bedrooms",
    description: "Four beautifully appointed bedrooms, each with two single beds put together as doubles for flexibility. One room features a loft with a mattress suitable for children. The bathrooms are fresh, modern, and always pristine.",
    image: bedroomImg,
    align: "right"
  }
];

export function Interiors() {
  return (
    <section id="interiors" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className={`flex flex-col ${section.align === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-24 last:mb-0`}
          >
            <div className="flex-1 space-y-6">
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">0{index + 1}</span>
              <h2 className="text-4xl font-serif text-foreground">{section.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{section.description}</p>
            </div>
            <div className="flex-1 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl"
              >
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}