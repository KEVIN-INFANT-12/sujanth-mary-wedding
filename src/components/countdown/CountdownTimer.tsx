import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';
import { FloralDivider } from '../common/FloralDivider';
import { Heart, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownTimer: React.FC = () => {
  const { date } = weddingData;

  const calculateTimeLeft = (): TimeLeft => {
    // 15 November 2026 10:45:00 IST
    const targetTimestamp = new Date(date.targetIso).getTime();
    const now = new Date().getTime();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-14 px-4 bg-gradient-to-b from-[#30030E] via-[#240209] to-[#30030E] overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A46D] block mb-1 font-semibold">
            Counting Down The Moments
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8F3E9] font-normal tracking-wide">
            The Celebration Begins In
          </h2>
          <div className="mt-2 text-center">
            <span className="inline-block font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#ECCF9A] font-medium bg-[#4A0718]/70 px-3.5 py-1 rounded-full border border-[#C5A46D]/40">
              Sunday, 15 November 2026 • 10:45 AM
            </span>
          </div>
          <FloralDivider variant="gold" styleType="diamond" className="w-48 mx-auto mt-2" />
        </motion.div>

        {/* Counter Display */}
        {timeLeft.isPast ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#4A0718]/60 border border-[#C5A46D]/50 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center space-x-2 text-[#ECCF9A] mb-3">
              <Sparkles className="w-5 h-5 text-[#C5A46D] animate-spin" style={{ animationDuration: '4s' }} />
              <Heart className="w-6 h-6 text-[#C58F91] fill-current" />
              <Sparkles className="w-5 h-5 text-[#C5A46D] animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF9] font-medium">
              Today We Celebrate Love!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#ECCF9A]/90 uppercase tracking-widest mt-2">
              Sujanth Roy &amp; Mary Princy are United in Holy Matrimony
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 max-w-2xl mx-auto px-1">
            {timeBlocks.map((block) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group rounded-lg sm:rounded-xl p-2.5 sm:p-5 flex flex-col items-center justify-center border border-[#C5A46D]/40 bg-gradient-to-b from-[#4A0718]/80 to-[#2A030C]/90 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-[#ECCF9A]/70"
              >
                {/* Gold corner rivets */}
                <div className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-[#C5A46D]/60" />
                <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-[#C5A46D]/60" />
                <div className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-[#C5A46D]/60" />
                <div className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-[#C5A46D]/60" />

                {/* Number Display */}
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#ECCF9A] to-[#C5A46D] tracking-tight leading-none">
                  {String(block.value).padStart(2, '0')}
                </span>

                {/* Label */}
                <span className="font-sans text-[8px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A46D]/90 mt-1.5 sm:mt-2 font-medium">
                  {block.label}
                </span>

                {/* Bottom subtle gold accent line */}
                <div className="w-4 sm:w-6 h-[1px] bg-[#C5A46D]/40 mt-1.5 sm:mt-2 group-hover:w-8 sm:group-hover:w-10 group-hover:bg-[#ECCF9A] transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="font-sans text-xs tracking-widest text-[#ECCF9A]/70 uppercase">
            Sunday, 15 November 2026 • 10:45 AM IST • Kilachery
          </p>
        </div>
      </div>
    </section>
  );
};
