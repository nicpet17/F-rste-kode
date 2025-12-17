import img1 from "@assets/Bilde_1_leilighet_1765992903087.PNG";
import img2 from "@assets/Bilde_2_leilighet_1765992903087.PNG";
import img3 from "@assets/Bilde_3_leilighet_1765992903087.PNG";
import img4 from "@assets/Bilde_4_leilighet_1765992903087.PNG";
import img5 from "@assets/Bilde_5_leilighet_1765992903087.PNG";
import img6 from "@assets/Bilde_6_leilighet_1765992903087.PNG";
import img7 from "@assets/Bilde_7_leilighet_1765992903087.PNG";
import img8 from "@assets/Bilde_8_leilighet_1765992903087.PNG";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  { src: img1, alt: "Living Room View" },
  { src: img2, alt: "Terrace Sea View" },
  { src: img3, alt: "Garden Dining" },
  { src: img4, alt: "Open Plan Living" },
  { src: img5, alt: "Modern Kitchen" },
  { src: img6, alt: "Luxury Bathroom" },
  { src: img7, alt: "Bedroom View" },
  { src: img8, alt: "Terrace Relax Area" },
];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">A Visual Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the details of Villa Norvic. From the sun-drenched terrace to the carefully curated interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer aspect-square overflow-hidden rounded-lg bg-muted"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}