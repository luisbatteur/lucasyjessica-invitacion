import { useState, useEffect, useRef } from 'react';

export const useAudio = (url: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio(url);
      audioRef.current.loop = true;
    }

    // Handle play/pause based on isPlaying state
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      
      // Handle potential play() promise rejection (browsers require user interaction)
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying, url]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return { isPlaying, togglePlay };
};