import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useAudioPlayer } from "@/contexts/AudioContext";

const VideoSection = () => {
  const { ref, isVisible } = useScrollFadeIn(0.2);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { pauseForVideo, resumeAfterVideo } = useAudioPlayer();

  const driveFileId = "1nAzcB_GGgDUGmAxw1Tz0vgbkVttRTbRU";
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  // For Google Drive embeds, we can't attach play/pause listeners directly.
  // Instead, mute music when iframe is in view and user scrolls to it.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          pauseForVideo();
        } else {
          resumeAfterVideo();
        }
      },
      { threshold: 0.5 }
    );

    const el = iframeRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [pauseForVideo, resumeAfterVideo]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/40 via-muted/30 to-secondary/40" ref={ref}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="font-cursive text-3xl md:text-4xl text-foreground leading-snug">
            <span className="block">Special Gift</span>
            <span className="block">for the</span>
            <span className="block">Most Amazing Person ✨💖🌸</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-soft bg-card border border-border/30"
        >
          <div className="aspect-[3/4] w-full">
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Special video"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground font-body mt-5"
        >
          Hope you like it!
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
