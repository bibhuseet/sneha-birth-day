import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import VideoSection from "@/components/VideoSection";
import FeedbackSection from "@/components/FeedbackSection";
import FloatingEmojis from "@/components/FloatingEmojis";
import { AudioProvider, useAudioPlayer } from "@/contexts/AudioContext";

const WelcomeOverlay = ({ onEnter }: { onEnter: () => void }) => (
  <motion.div
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center px-6"
    >
      <p className="text-4xl mb-4">🎂</p>
      <h2 className="font-cursive text-3xl md:text-5xl text-white mb-3">
        You've got a surprise!
      </h2>
      <p className="text-white/60 font-body text-sm md:text-base mb-8 max-w-xs mx-auto">
        This experience includes music & animations. Tap below to begin.
      </p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="gradient-romantic text-primary-foreground font-body font-semibold text-lg px-10 py-4 rounded-full shadow-glow animate-glow-pulse transition-transform duration-300 hover:scale-105"
      >
        Open 🎉
      </motion.button>
    </motion.div>
  </motion.div>
);

const SiteContent = () => {
  const [entered, setEntered] = useState(false);
  const { startMusic } = useAudioPlayer();

  const handleEnter = () => {
    startMusic();
    setEntered(true);
  };

  return (
    <>
      <AnimatePresence>
        {!entered && <WelcomeOverlay onEnter={handleEnter} />}
      </AnimatePresence>
      <main className="relative bg-background overflow-x-hidden">
        <FloatingEmojis />
        <HeroSection />
        <GallerySection />
        <MessageSection />
        <VideoSection />
        <FeedbackSection />
      </main>
    </>
  );
};

const Index = () => {
  return (
    <AudioProvider>
      <SiteContent />
    </AudioProvider>
  );
};

export default Index;
