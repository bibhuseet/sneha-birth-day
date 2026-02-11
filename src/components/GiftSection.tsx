import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const GiftSection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.2);

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-cursive text-4xl md:text-5xl text-center text-foreground mb-4"
        >
          A Special Gift For You ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground mb-10 font-body"
        >
          Something just for you 💝
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-soft bg-card"
        >
          <video
            controls
            className="w-full aspect-video bg-muted rounded-2xl"
            poster=""
          >
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4 text-center">
            <p className="text-muted-foreground text-sm font-body italic">
              Replace this with your special gift video 🎁
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
