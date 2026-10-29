import React, { useState, useEffect, useRef } from 'react';
import { VolumeX } from 'lucide-react';

interface MusicToggleProps {
  autoPlayTrigger?: boolean;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ autoPlayTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const webAudioCtxRef = useRef<AudioContext | null>(null);
  const isWebAudioPlayingRef = useRef<boolean>(false);
  const loopTimeoutRef = useRef<number | null>(null);

  // Web Audio ambient synthesizer fallback
  const startWebAudioMelody = () => {
    try {
      if (!webAudioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        webAudioCtxRef.current = new AudioContextClass();
      }

      const ctx = webAudioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      isWebAudioPlayingRef.current = true;

      // Romantic chord notes (D, F#, A, B, E)
      const chordChains = [
        [293.66, 369.99, 440.0, 587.33], // D major
        [220.0, 277.18, 329.63, 440.0],  // A major
        [246.94, 293.66, 369.99, 493.88], // B minor
        [196.0, 246.94, 293.66, 392.0],  // G major
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!isWebAudioPlayingRef.current || !ctx) return;
        const currentChord = chordChains[chordIndex % chordChains.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.2);

          // Gentle harp envelope
          gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.2);
          gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + i * 0.2 + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.2 + 2.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + i * 0.2);
          osc.stop(ctx.currentTime + i * 0.2 + 3.0);
        });

        loopTimeoutRef.current = window.setTimeout(playChord, 3200);
      };

      playChord();
    } catch {
      // Audio not supported or blocked; safely do nothing
    }
  };

  const stopWebAudio = () => {
    isWebAudioPlayingRef.current = false;
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  };

  const toggleMusic = async () => {
    setHasInteracted(true);

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopWebAudio();
      setIsPlaying(false);
    } else {
      let playedAudio = false;

      if (audioRef.current) {
        try {
          await audioRef.current.play();
          playedAudio = true;
          setIsPlaying(true);
        } catch {
          // Fall back to Web Audio synthesis if audio file play fails
          playedAudio = false;
        }
      }

      if (!playedAudio) {
        startWebAudioMelody();
        setIsPlaying(true);
      }
    }
  };

  // Triggered when user opens envelope
  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && !isPlaying) {
      toggleMusic();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      stopWebAudio();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      {/* Hidden audio element pointing to generated audio asset */}
      <audio
        ref={audioRef}
        src="/audio/wedding-melody.wav"
        loop
        preload="auto"
        onError={() => {
          // If file load error occurs, it will cleanly fall back to Web Audio
        }}
      />

      {/* Floating elegant control pill */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleMusic}
          type="button"
          aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
          className="group relative flex items-center space-x-2.5 px-3.5 py-2.5 rounded-full bg-[#4A0718]/90 hover:bg-[#30030E] border border-[#C5A46D]/60 text-[#F8F3E9] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
        >
          {/* Animated sound wave bars when playing */}
          {isPlaying ? (
            <div className="flex items-end space-x-1 h-3.5 w-3.5 mr-0.5" aria-hidden="true">
              <span className="w-0.5 bg-[#ECCF9A] h-full animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-[#C5A46D] h-2/3 animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="w-0.5 bg-[#ECCF9A] h-4/5 animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-[#C5A46D] transition-transform group-hover:scale-110" />
          )}

          <span className="font-sans text-xs tracking-widest uppercase font-medium text-[#ECCF9A]">
            {isPlaying ? 'Music On' : 'Music'}
          </span>

          <span className="relative flex h-2 w-2">
            {isPlaying && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ECCF9A] opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isPlaying ? 'bg-[#ECCF9A]' : 'bg-stone-500'
              }`}
            />
          </span>
        </button>
      </div>
    </>
  );
};
