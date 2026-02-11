import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import MessageSection from "@/components/MessageSection";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <GallerySection />
      <VideoSection />
      <MessageSection />
    </main>
  );
};

export default Index;
