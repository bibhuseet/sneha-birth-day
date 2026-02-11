import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const MessageSection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.2);

  return (
    <section className="py-20 px-6 bg-card/50" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-secondary/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 text-center"
        >
          <h2 className="font-cursive text-4xl md:text-5xl text-foreground mb-6">
            For You, Sneha 💌
          </h2>

          <div className="space-y-4 font-body text-foreground/80 leading-relaxed text-base md:text-lg">
            <p>
              On this special day, I just want you to know how incredibly grateful I am 
              to have you in my life. Your kindness, your warmth, and your beautiful smile 
              make every day brighter.
            </p>
            <p>
              You are more than just a wonderful person — you are a blessing to everyone 
              who knows you. May this birthday bring you as much joy as you bring to the 
              people around you.
            </p>
            <p>
              Here's to another year of beautiful moments, new adventures, and dreams 
              coming true. Never stop being the amazing person you are.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 font-cursive text-2xl md:text-3xl text-primary"
          >
            With all my love 💖
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-3xl"
          >
            🎂🌸✨💝🎁
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center mt-16 text-muted-foreground font-body text-sm"
      >
        <p>Made with 💖 for Sneha</p>
      </motion.footer>
    </section>
  );
};

export default MessageSection;
