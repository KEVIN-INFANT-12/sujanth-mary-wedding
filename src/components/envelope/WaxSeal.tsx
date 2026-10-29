import React from 'react';
import { motion } from 'framer-motion';

interface WaxSealProps {
  monogram?: string;
  isOpening?: boolean;
  onClick?: () => void;
  className?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  monogram = 'S & M',
  isOpening = false,
  onClick,
  className = '',
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isOpening}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      animate={
        isOpening
          ? {
              scale: [1, 1.25, 0.2],
              opacity: [1, 0.9, 0],
              filter: ['drop-shadow(0 0 0px #C5A46D)', 'drop-shadow(0 0 25px #ECCF9A)', 'drop-shadow(0 0 40px #ECCF9A)'],
            }
          : {
              boxShadow: [
                '0 8px 24px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.4)',
                '0 12px 28px rgba(197,164,109,0.35), inset 0 2px 6px rgba(255,255,255,0.6)',
                '0 8px 24px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.4)',
              ],
            }
      }
      transition={{
        boxShadow: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        scale: isOpening ? { duration: 0.8, ease: 'easeInOut' } : { duration: 0.2 },
        opacity: isOpening ? { duration: 0.8, ease: 'easeIn' } : undefined,
      }}
      className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full flex items-center justify-center cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-[#C5A46D]/60 ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #FFFDF9 0%, #F5EDE0 40%, #E3D2BA 75%, #C2AB89 100%)',
      }}
      aria-label="Wax seal stamped with S and M initials"
    >
      {/* Outer organic irregular rim mimicking melted poured wax */}
      <div
        className="absolute inset-[-4px] rounded-full -z-10 opacity-70"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #E8D3A7 0%, #C5A46D 60%, #8E6D38 100%)',
          clipPath:
            'polygon(50% 0%, 65% 2%, 80% 9%, 92% 22%, 98% 38%, 100% 52%, 96% 68%, 88% 82%, 75% 93%, 55% 99%, 40% 98%, 22% 93%, 9% 82%, 2% 66%, 0% 50%, 3% 32%, 11% 18%, 25% 7%, 38% 1%)',
        }}
      />

      {/* Outer engraved concentric bead border */}
      <div className="absolute inset-1.5 rounded-full border border-[#B39360]/50" />
      <div className="absolute inset-2.5 rounded-full border border-dashed border-[#8E6D38]/40" />

      {/* Inner debossed seal chamber */}
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-inner"
        style={{
          background: 'radial-gradient(circle at 60% 65%, #FFFFFF 0%, #F8F1E4 50%, #D8C3A0 100%)',
          boxShadow: 'inset 0 2px 6px rgba(100, 70, 30, 0.4), inset 0 -1px 3px rgba(255, 255, 255, 0.8)',
        }}
      >
        {/* Monogram S & M with debossed gold metallic styling */}
        <div className="relative text-center flex flex-col items-center justify-center">
          <span
            className="font-script text-2xl md:text-3xl font-bold leading-none tracking-tight select-none"
            style={{
              color: '#805929',
              textShadow:
                '1px 1px 0px rgba(255,255,255,0.7), -1px -1px 1px rgba(74,40,10,0.6)',
            }}
          >
            {monogram}
          </span>
          <span className="w-5 h-[1px] bg-[#805929]/40 mt-0.5" />
        </div>
      </div>

      {/* Realistic wax highlight glint */}
      <div
        className="absolute top-2 left-3 w-6 h-3 rounded-full opacity-60 pointer-events-none transform -rotate-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))',
        }}
      />
    </motion.button>
  );
};
