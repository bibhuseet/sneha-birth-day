import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import VideoSection from "@/components/VideoSection";
import FeedbackSection from "@/components/FeedbackSection";
import FloatingEmojis from "@/components/FloatingEmojis";

const Index = () => {
  return (
    <main className="relative bg-background overflow-x-hidden">
      <FloatingEmojis />
      <HeroSection />
      <GallerySection />
      <MessageSection />
      <VideoSection />
      <FeedbackSection />
    </main>
  );
};

export default Index;
