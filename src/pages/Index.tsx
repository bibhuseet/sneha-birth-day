import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import VideoSection from "@/components/VideoSection";
import FeedbackSection from "@/components/FeedbackSection";
import FloatingEmojis from "@/components/FloatingEmojis";
import { AudioProvider } from "@/contexts/AudioContext";

const Index = () => {
  return (
    <AudioProvider>
      <main className="relative bg-background overflow-x-hidden">
        <FloatingEmojis />
        <HeroSection />
        <GallerySection />
        <MessageSection />
        <VideoSection />
        <FeedbackSection />
      </main>
    </AudioProvider>
  );
};

export default Index;
