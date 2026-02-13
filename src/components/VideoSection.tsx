import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const VideoSection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.2);

  // Convert Google Drive link to embeddable format
  const driveFileId = "1nAzcB_GGgDUGmAxw1Tz0vgbkVttRTbRU";
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-soft bg-card"
        >
          <div className="aspect-[3/4] w-full">
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Special video"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
