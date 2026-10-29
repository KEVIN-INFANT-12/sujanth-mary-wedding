import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { WaxSeal } from './WaxSeal';
import { GoldenParticles } from '../common/GoldenParticles';
import { Sparkles, ArrowRight } from 'lucide-react';

interface WeddingEnvelopeProps {
  onOpenComplete: () => void;
  onAudioStart?: () => void;
}

export const WeddingEnvelope: React.FC<WeddingEnvelopeProps> = ({
  onOpenComplete,
  onAudioStart,
}) => {
  // 'idle' | 'breaking-seal' | 'opening-flap' | 'card-sliding' | 'transitioning'
  const [stage, setStage] = useState<
    'idle' | 'breaking-seal' | 'opening-flap' | 'card-sliding' | 'transitioning'
  >('idle');

  const handleOpen = () => {
    if (stage !== 'idle') return;

    if (onAudioStart) {
      onAudioStart();
    }

    setStage('breaking-seal');

    // Trigger golden micro-confetti
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#ECCF9A', '#C5A46D', '#FFFDF9', '#C58F91'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }

    // Sequence timing
    setTimeout(() => {
      setStage('opening-flap');
    }, 600);

    setTimeout(() => {
      setStage('card-sliding');
    }, 1300);

    setTimeout(() => {
      setStage('transitioning');
    }, 2400);

    setTimeout(() => {
      onOpenComplete();
    }, 3200);
  };

  const handleSkip = () => {
    if (onAudioStart) {
      onAudioStart();
    }
    onOpenComplete();
  };

  const isFlapOpen = stage === 'opening-flap' || stage === 'card-sliding' || stage === 'transitioning';
  const isCardOut = stage === 'card-sliding' || stage === 'transitioning';

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between overflow-x-hidden bg-gradient-to-b from-[#25020A] via-[#30030E] to-[#170107] px-4 py-6 sm:py-8 select-none">
      {/* Golden dust particles drifting in background (slowing when opening) */}
      <GoldenParticles
        count={stage === 'idle' ? 35 : 15}
        intensity="subtle"
      />

      {/* Skip Button - minimum 44x44px touch target */}
      <div className="w-full max-w-lg flex justify-end z-50 pt-[env(safe-area-inset-top,0.5rem)]">
        <button
          type="button"
          onClick={handleSkip}
          className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-[11px] sm:text-xs font-sans tracking-widest text-[#ECCF9A]/80 hover:text-[#FFFDF9] uppercase px-3 py-1.5 rounded-full border border-[#C5A46D]/30 hover:border-[#C5A46D] bg-[#30030E]/60 backdrop-blur-sm transition-all duration-300"
        >
          Skip to Invitation →
        </button>
      </div>

      {/* Main Center Area: Couple Header + Wedding Date + 3D Envelope */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center flex-1 my-auto space-y-4 sm:space-y-5 z-20">
        
        {/* SCENE D: INVITATION HEADER TEXT */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center w-full px-2"
        >
          <span className="block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C5A46D] font-medium mb-1">
            Together with our families
          </span>
          <h1 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#FFFDF9] font-normal leading-tight tracking-wide drop-shadow-sm py-1">
            Sujanth Roy <span className="text-[#ECCF9A] text-2xl sm:text-3xl">&amp;</span> Mary Princy
          </h1>
          <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECCF9A]/80 font-medium">
            Invite You to Celebrate Their Wedding
          </p>
        </motion.div>

        {/* SCENE C: PROMINENT WEDDING DATE DISPLAY (VISIBLE IMMEDIATELY BEFORE ENVELOPE OPENS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="w-full flex items-center justify-center px-2"
        >
          <div className="relative group inline-flex items-center space-x-3 sm:space-x-4 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#4A0718]/80 border border-[#C5A46D]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            {/* Left label: SUNDAY */}
            <div className="text-right">
              <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C5A46D] font-semibold">
                Sunday
              </span>
              <span className="w-4 h-[1px] bg-[#C5A46D]/50 ml-auto block mt-0.5" />
            </div>

            {/* DOMINANT VISUAL ELEMENT: 15 (Cormorant Garamond) */}
            <div className="relative px-1 flex items-center justify-center">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#ECCF9A] to-[#C5A46D] tracking-tight leading-none">
                15
              </span>
            </div>

            {/* Right labels: NOVEMBER 2026 */}
            <div className="text-left">
              <span className="block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#ECCF9A] font-semibold">
                November
              </span>
              <span className="block font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C5A46D]/80 font-medium">
                2026
              </span>
            </div>

            {/* Subtle light shimmer sweep */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] animate-[shimmer_4s_infinite]" />
            </div>
          </div>
        </motion.div>

        {/* SCENE B: GRAND 3D ENVELOPE */}
        <div
          className="relative w-full max-w-[310px] xs:max-w-[340px] sm:max-w-[380px] aspect-[1.48/1] flex items-center justify-center my-1"
          style={{ perspective: 1200 }}
        >
          {/* Soft directional ground shadow */}
          <div
            className="absolute -bottom-6 w-5/6 h-8 rounded-full opacity-70 blur-xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(197, 164, 109, 0.4) 0%, rgba(74, 7, 24, 0.8) 50%, transparent 80%)',
            }}
          />

          {/* Envelope Main Wrapper */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: stage === 'transitioning' ? 1.06 : 1,
              opacity: 1,
            }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full rounded-lg shadow-envelope overflow-visible"
          >
            {/* Interior Back Wall with Silk Damask Lining */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden border border-[#C5A46D]/50"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #4A0718 0%, #30030E 75%, #1F0208 100%)',
              }}
            >
              {/* Subtle gold grid/damask watermark */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#ECCF9A 1px, transparent 1px), radial-gradient(#C5A46D 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              />
              {/* Embossed inner monogram crest */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25">
                <span className="font-script text-6xl sm:text-7xl text-[#C5A46D]">S&amp;M</span>
              </div>
            </div>

            {/* THE INNER INVITATION CARD (Sliding smoothly out of envelope) */}
            <motion.div
              initial={{ y: 0, scale: 0.96 }}
              animate={
                isCardOut
                  ? {
                      y: -125,
                      scale: stage === 'transitioning' ? 1.12 : 1.02,
                      boxShadow: '0 25px 50px -10px rgba(0,0,0,0.7), 0 0 35px rgba(197,164,109,0.3)',
                      zIndex: 40,
                    }
                  : { y: 0, scale: 0.96, zIndex: 10 }
              }
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-2.5 inset-y-2 rounded-md p-3 sm:p-4 flex flex-col items-center justify-between pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 30%, #FFFDF9 0%, #F8F3E9 70%, #EFE4D2 100%)',
                border: '1px solid #C5A46D',
              }}
            >
              {/* Double border inside card */}
              <div className="absolute inset-1 border border-[#C5A46D]/40 rounded-sm pointer-events-none" />

              <div className="text-center w-full pt-0.5">
                <span className="font-serif italic text-[9px] sm:text-[10px] text-[#8E6D38] tracking-widest block uppercase">
                  Holy Matrimony
                </span>
                <div className="w-10 h-[1px] bg-[#C5A46D]/50 mx-auto my-0.5" />
              </div>

              <div className="text-center my-auto py-0.5">
                <h2 className="font-serif text-sm sm:text-base text-[#4A0718] font-semibold tracking-wide">
                  N.D. Sujanth Roy
                </h2>
                <span className="font-script text-lg sm:text-xl text-[#8E6D38] -my-1 block">
                  with
                </span>
                <h2 className="font-serif text-sm sm:text-base text-[#4A0718] font-semibold tracking-wide">
                  I. Mary Princy
                </h2>
              </div>

              <div className="text-center pb-0.5">
                <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-widest text-[#4A352C] font-semibold bg-[#D9DFD1]/50 px-2.5 py-0.5 rounded-full border border-[#C5A46D]/30">
                  15 November 2026
                </span>
              </div>
            </motion.div>

            {/* FRONT LOWER FLAP & SIDE FLAPS (Pocket) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* Left flap */}
              <div
                className="absolute inset-y-0 left-0 w-1/2"
                style={{
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                  background: 'linear-gradient(135deg, #420615 0%, #30030E 100%)',
                  boxShadow: 'inset 0 0 12px rgba(0,0,0,0.5)',
                }}
              >
                <div className="absolute inset-0 border-l border-b border-[#C5A46D]/40" />
              </div>

              {/* Right flap */}
              <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                  clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                  background: 'linear-gradient(-135deg, #420615 0%, #30030E 100%)',
                  boxShadow: 'inset 0 0 12px rgba(0,0,0,0.5)',
                }}
              >
                <div className="absolute inset-0 border-r border-b border-[#C5A46D]/40" />
              </div>

              {/* Bottom triangle flap */}
              <div
                className="absolute inset-x-0 bottom-0 h-3/5"
                style={{
                  clipPath: 'polygon(0 100%, 50% 15%, 100% 100%)',
                  background: 'linear-gradient(to top, #2B020C 0%, #4A0718 60%, #5E0C22 100%)',
                  boxShadow: '0 -4px 12px rgba(0,0,0,0.3)',
                }}
              >
                {/* Gold border piping along the triangle edges */}
                <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                  <path
                    d="M0 60 L50 9 L100 60"
                    stroke="#C5A46D"
                    strokeWidth="0.8"
                    fill="none"
                    strokeOpacity="0.75"
                  />
                  <path
                    d="M2 60 L50 12 L98 60"
                    stroke="#ECCF9A"
                    strokeWidth="0.3"
                    strokeDasharray="1.5 1.5"
                    fill="none"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>
            </div>

            {/* TOP ENVELOPE FLAP (3D Fold opening) */}
            <motion.div
              className="absolute inset-x-0 top-0 h-3/5 origin-top z-30"
              initial={{ rotateX: 0 }}
              animate={{
                rotateX: isFlapOpen ? -175 : 0,
                zIndex: isFlapOpen ? 5 : 30,
              }}
              transition={{
                duration: 1.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Front of Top Flap */}
              <div
                className="w-full h-full relative"
                style={{
                  clipPath: 'polygon(0 0, 50% 95%, 100% 0)',
                  background: 'linear-gradient(to bottom, #4A0718 0%, #3B0412 70%, #30030E 100%)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.45)',
                }}
              >
                {/* Gold piping along top triangle */}
                <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                  <path
                    d="M0 0 L50 57 L100 0"
                    stroke="#C5A46D"
                    strokeWidth="0.9"
                    fill="none"
                    strokeOpacity="0.85"
                  />
                  <path
                    d="M2 0 L50 54 L98 0"
                    stroke="#ECCF9A"
                    strokeWidth="0.4"
                    strokeDasharray="1.5 1.5"
                    fill="none"
                    strokeOpacity="0.6"
                  />
                </svg>

                {/* Shimmer light bar across flap */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECCF9A]/15 to-transparent animate-shimmer pointer-events-none" />
              </div>
            </motion.div>

            {/* CENTRAL WAX SEAL - SCENE E */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
              <WaxSeal
                monogram="S & M"
                isOpening={stage !== 'idle'}
                onClick={handleOpen}
              />
            </div>
          </motion.div>
        </div>

        {/* SCENE E: CLEAR ACTION BUTTON (ACCESSIBLE, THUMB-FRIENDLY >= 44px) */}
        <AnimatePresence>
          {stage === 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center w-full flex flex-col items-center pt-2"
            >
              <button
                type="button"
                onClick={handleOpen}
                className="group relative min-h-[48px] inline-flex items-center justify-center space-x-2.5 px-7 py-3 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(197,164,109,0.35)] focus:outline-none focus:ring-4 focus:ring-[#C5A46D]/50"
                style={{
                  background: 'linear-gradient(135deg, #E8D3A7 0%, #C5A46D 45%, #9E7B44 100%)',
                }}
              >
                {/* Gleam swipe animation */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />

                <Sparkles className="w-4 h-4 text-[#30030E] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="font-serif text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#25020A]">
                  OPEN YOUR INVITATION
                </span>
                <ArrowRight className="w-4 h-4 text-[#25020A] transition-transform group-hover:translate-x-1" />
              </button>

              <span className="font-sans text-[10px] sm:text-[11px] text-[#ECCF9A]/70 tracking-wider mt-2.5">
                Tap wax seal or button to open
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom safe area spacing */}
      <div className="w-full h-2 pb-[env(safe-area-inset-bottom,0.5rem)]" />
    </div>
  );
};
