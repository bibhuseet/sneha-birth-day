import React, { createContext, useContext, useRef, useState, useCallback } from "react";

interface AudioContextType {
  audioRef: React.RefObject<HTMLAudioElement>;
  isMuted: boolean;
  userMuted: boolean;
  toggleMute: () => void;
  startMusic: () => void;
  pauseForVideo: () => void;
  resumeAfterVideo: () => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export const useAudioPlayer = () => {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudioPlayer must be used within AudioProvider");
  return ctx;
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [userMuted, setUserMuted] = useState(false);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      const newMuted = !audioRef.current.muted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);
      setUserMuted(newMuted);
    }
  }, []);

  const startMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setIsMuted(false);
      }).catch(() => {
        // Browser still blocked unmuted playback — try muted
        if (audioRef.current) {
          audioRef.current.muted = true;
          audioRef.current.play().then(() => {
            setIsMuted(true);
          }).catch(() => {});
        }
      });
    }
  }, []);

  const pauseForVideo = useCallback(() => {
    if (audioRef.current && !audioRef.current.muted) {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  }, []);

  const resumeAfterVideo = useCallback(() => {
    if (audioRef.current && !userMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  }, [userMuted]);

  return (
    <AudioCtx.Provider value={{ audioRef, isMuted, userMuted, toggleMute, startMusic, pauseForVideo, resumeAfterVideo }}>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      {children}
    </AudioCtx.Provider>
  );
};
