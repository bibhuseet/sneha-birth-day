import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import MessageSection from "@/components/MessageSection";
import GiftSection from "@/components/GiftSection";
import FloatingEmojis from "@/components/FloatingEmojis";

const Index = () => {
  return (
    <main className="relative bg-background overflow-x-hidden">
      <FloatingEmojis />
      <HeroSection />
      <GallerySection />
      <VideoSection />
      <MessageSection />
      <GiftSection />
    </main>
  );
};

export default Index;
