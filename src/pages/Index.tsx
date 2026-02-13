import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import VideoSection from "@/components/VideoSection";
import FeedbackSection from "@/components/FeedbackSection";
import FloatingEmojis from "@/components/FloatingEmojis";
import { AudioProvider, useAudioPlayer } from "@/contexts/AudioContext";

const WelcomeOverlay = ({ onEnter }: { onEnter: () => void }) => (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, hsl(20 60% 92%), hsl(340 40% 90%), hsl(270 30% 92%))' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 py-10 mx-4 bg-white/50 backdrop-blur-sm rounded-3xl shadow-soft border border-border/30 max-w-sm"
      >
        <p className="text-5xl mb-5">🎂✨</p>
        <h2 className="font-cursive text-3xl md:text-5xl text-foreground mb-3">
          You've got a surprise! 💖
        </h2>
        <p className="text-muted-foreground font-body text-sm md:text-base mb-8 max-w-xs mx-auto">
          This experience includes music & animations 🌸 Tap below to begin.
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
  const { startMusic, isMuted, toggleMute } = useAudioPlayer();

  const handleEnter = () => {
    startMusic();
    setEntered(true);
  };

  return (
    <>
      <AnimatePresence>
        {!entered && <WelcomeOverlay onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleMute}
          className="fixed bottom-5 right-5 z-40 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground/70 hover:text-foreground hover:bg-card shadow-soft transition-all duration-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      )}

      <main className="relative bg-background overflow-x-hidden">
        <FloatingEmojis />
        <HeroSection started={entered} />
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
