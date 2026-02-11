import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import MessageSection from "@/components/MessageSection";
import GiftSection from "@/components/GiftSection";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <GallerySection />
      <VideoSection />
      <MessageSection />
      <GiftSection />
    </main>
  );
};

export default Index;
