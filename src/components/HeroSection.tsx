import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAudioPlayer } from "@/contexts/AudioContext";
import heroBg from "@/assets/hero-bg-new.png";

const HeroSection = () => {
  const [titleText, setTitleText] = useState("");
  const [showName, setShowName] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [phase, setPhase] = useState(0);
  const [showBg, setShowBg] = useState(false);
  const { isMuted, toggleMute, startMusic } = useAudioPlayer();

  const title = "Happy Birthday";
  const message = "Wishing you a day filled with joy, laughter, and all the happiness your heart can hold. You deserve the world and more!";

  useEffect(() => {
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

    if (phase === 1) {
      setShowName(true);
      setTimeout(() => setShowBg(true), 300);
      
      setTimeout(() => setPhase(2), 800);
    }

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
    startMusic();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  }, [startMusic]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-foreground" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showBg ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {showName && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleMute}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      )}

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="font-cursive text-5xl md:text-7xl font-bold text-white mb-4">
          {titleText}
          {phase === 0 && <span className="typewriter-cursor" />}
        </h1>

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

        {phase >= 2 && (
          <p className="text-base md:text-lg text-white/80 font-body leading-relaxed max-w-lg mx-auto mb-2">
            {messageText}
            {!showButton && <span className="typewriter-cursor" />}
          </p>
        )}

        {showButton && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl mb-10">
            ✨🎂💖🌸
          </motion.p>
        )}

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

      <motion.div className="absolute top-20 left-10 text-4xl opacity-30 animate-float" animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}>🌸</motion.div>
      <motion.div className="absolute bottom-32 right-10 text-3xl opacity-30" animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}>💖</motion.div>
      <motion.div className="absolute top-40 right-20 text-2xl opacity-20" animate={{ y: [-8, 8, -8] }} transition={{ duration: 3.5, repeat: Infinity }}>✨</motion.div>
    </section>
  );
};

export default HeroSection;
