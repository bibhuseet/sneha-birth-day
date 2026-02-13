import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const FeedbackSection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.2);
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const formatted = `My Feedback for your Wish:\n\n${message.trim()}`;
    const encoded = encodeURIComponent(formatted);
    window.open(`https://wa.me/917328864849?text=${encoded}`, "_blank");
    setMessage("");
    setShowInput(false);
  };

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-md mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-cursive text-4xl md:text-5xl text-foreground mb-10"
        >
          Feedback
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!showInput && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowInput(true)}
              className="gradient-romantic text-primary-foreground font-body font-semibold text-lg px-8 py-3 rounded-full shadow-soft transition-all duration-300"
            >
              Send Feedback
            </motion.button>
          )}

          <AnimatePresence>
            {showInput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  maxLength={1000}
                  className="w-full h-32 p-4 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border/50 text-foreground font-body text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="gradient-romantic text-primary-foreground font-body font-semibold text-base px-8 py-3 rounded-full shadow-soft transition-all duration-300"
                >
                  Send
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;
