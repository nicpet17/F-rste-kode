import livingRoomImg from "@assets/generated_images/bright_open_plan_living_room_leading_to_garden.png";
import bedroomImg from "@assets/generated_images/elegant_bedroom_with_double_bed.png";
import kitchenImg from "@assets/generated_images/modern_kitchen_with_induction_cooktop.png";
import gardenImg from "@assets/generated_images/lush_private_garden_with_barbecue_area.png";
import bathroomImg from "@assets/generated_images/modern_clean_bathroom_with_fresh_towels.png";
import { motion } from "framer-motion";

const sections = [
  {
    id: "living",
    title: "Living Spaces",
    description: "The open-plan living room is bright and spacious, leading directly to the garden terrace. The fully equipped kitchen offers modern appliances, an induction cooktop, and elegant finishes.",
    image: livingRoomImg,
    align: "right"
  },
  {
    id: "outdoor",
    title: "Outdoor & Surroundings",
    description: "Enjoy your morning coffee on the sun-drenched terrace with a partial sea view. The private garden offers an ideal setting for relaxing or entertaining guests. The apartment is 170 sqm with a 200 sqm garden with a barbecue.",
    image: gardenImg,
    align: "left"
  },
  {
    id: "bedrooms",
    title: "4 Bedrooms & 3 Bathrooms",
    description: "Each bedroom has two single beds put together as doubles. One of the rooms has a loft with a mattress suitable for 1–2 children. The bathrooms are fresh and modern, always clean and well-maintained.",
    image: bedroomImg,
    align: "right"
  },
  {
    id: "comfort",
    title: "Comfort & Amenities",
    description: "The apartment provides all essentials for a relaxing stay. Towels and bedsheets are available. Apple TV is provided for entertainment (log in with your own profile), and Wi-Fi is included. Laundry facilities are located on the first floor.",
    image: bathroomImg,
    align: "left"
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