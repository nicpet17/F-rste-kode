import { motion } from "framer-motion";
import heroImage from "@assets/Bilde_9_leilighet_1765992903087.PNG";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Villa Norvic Terrace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Reduced overlay opacity to show off the real image quality */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white z-10 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4 shadow-black/50 text-shadow-sm"
        >
          Elegant Seaside Apartment
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight drop-shadow-md"
        >
          Villa Norvic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-light max-w-2xl mb-2 text-white/95 drop-shadow-sm"
        >
          Villa Victoria, No 5 Av. Dr. Raymond Picaud
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl font-light max-w-2xl mb-10 text-white/95 drop-shadow-sm"
        >
          06400 Cannes
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest drop-shadow-sm">Explore</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </motion.div>
    </section>
  );
}