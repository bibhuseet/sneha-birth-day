import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

import gallery1 from "@/assets/gallery-1-new.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryItems = [
  { src: gallery1, quote: "smiles and miles" },
  { src: gallery2, quote: "You turn a simple chai stall into an Asthetic café." },
  { src: gallery3, quote: "You are as perfect as this month of February." },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.1);

  return (
    <section id="gallery" className="py-20 px-6 bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-cursive text-4xl md:text-5xl text-center text-foreground mb-4"
        >
          Beautiful Memories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 font-body"
        >
          Every picture tells our story 💕
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GalleryCardProps {
  item: { src: string; quote: string };
  index: number;
  isVisible: boolean;
}

const GalleryCard = ({ item, index, isVisible }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group rounded-2xl overflow-hidden shadow-soft cursor-pointer aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <img
        src={item.src}
        alt={`Memory ${index + 1}`}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-foreground/50 flex items-center justify-center p-6 transition-opacity duration-400 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-primary-foreground text-center font-body text-sm md:text-base font-medium leading-relaxed whitespace-pre-line">
          {item.quote}
        </p>
      </div>
    </motion.div>
  );
};

export default GallerySection;
