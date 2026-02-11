import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [titleText, setTitleText] = useState("");
  const [showName, setShowName] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [phase, setPhase] = useState(0);

  const title = "Happy Birthday";
  const message = "Wishing you a day filled with love, laughter, and all the happiness your heart can hold. You deserve the world and more!";

  useEffect(() => {
    // Phase 0: type title
    if (phase === 0) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < title.length) {
          setTitleText(title.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 400);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    // Phase 1: show name
    if (phase === 1) {
      setShowName(true);
      setTimeout(() => setPhase(2), 800);
    }

    // Phase 2: type message
    if (phase === 2) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.length) {
          setMessageText(message.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowButton(true), 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const handleScroll = useCallback(() => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Clean pastel background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="font-cursive text-5xl md:text-7xl font-bold text-foreground mb-4">
          {titleText}
          {phase === 0 && (
            <span className="typewriter-cursor" />
          )}
        </h1>

        {/* Name */}
        {showName && (
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-cursive text-6xl md:text-8xl font-bold text-primary text-glow mb-8"
          >
            Sneha
          </motion.h2>
        )}

        {/* Message */}
        {phase >= 2 && (
          <p className="text-base md:text-lg text-foreground/80 font-body leading-relaxed max-w-lg mx-auto mb-2">
            {messageText}
            {!showButton && <span className="typewriter-cursor" />}
          </p>
        )}

        {/* Emojis */}
        {showButton && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl mb-10"
          >
            ✨🎂💖🌸
          </motion.p>
        )}

        {/* Button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={handleScroll}
            className="gradient-romantic text-primary-foreground font-body font-semibold text-lg px-10 py-4 rounded-full shadow-glow animate-glow-pulse transition-transform duration-300 hover:scale-105"
          >
            Start Celebrating 🎉
          </motion.button>
        )}
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-30 animate-float"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 text-3xl opacity-30"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-2xl opacity-20"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        ✨
      </motion.div>
    </section>
  );
};

export default HeroSection;
