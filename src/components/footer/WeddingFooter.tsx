import React from 'react';
import { weddingData } from '../../config/weddingData';
import { FloralDivider } from '../common/FloralDivider';
import { Heart, ChevronUp, Mail } from 'lucide-react';

interface WeddingFooterProps {
  onReopenEnvelope: () => void;
}

export const WeddingFooter: React.FC<WeddingFooterProps> = ({ onReopenEnvelope }) => {
  const { couple, date } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 px-4 bg-[#1A0107] text-[#F8F3E9] text-center overflow-hidden border-t border-[#C5A46D]/30">
      {/* Background ambient gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-[#C5A46D]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Couple Monogram Crest */}
        <div className="w-16 h-16 rounded-full border border-[#C5A46D]/60 bg-[#30030E] flex items-center justify-center shadow-lg mb-4">
          <span className="font-script text-3xl text-[#ECCF9A] pt-1">
            {couple.monogram}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF9] font-normal tracking-wide">
          Sujanth Roy &amp; Mary Princy
        </h3>

        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#C5A46D] mt-2 font-medium">
          {date.display} • Kilachery
        </p>

        <FloralDivider variant="gold" styleType="botanical" className="w-48 my-3" />

        <p className="font-serif italic text-base sm:text-lg text-[#ECCF9A]/90 max-w-md mx-auto leading-relaxed">
          &ldquo;We look forward to celebrating our special day with your gracious presence, prayers, and blessings.&rdquo;
        </p>

        <div className="flex items-center justify-center space-x-1.5 text-xs text-[#C58F91] mt-4 font-sans tracking-wider">
          <span>With love &amp; prayers</span>
          <Heart className="w-3.5 h-3.5 fill-current text-[#C58F91]" />
        </div>

        {/* Action buttons: Reopen Envelope & Scroll to Top */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={onReopenEnvelope}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#C5A46D]/40 hover:border-[#ECCF9A] bg-[#30030E]/60 text-xs font-sans uppercase tracking-widest text-[#ECCF9A] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>View Envelope Again</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#C5A46D]/40 hover:border-[#ECCF9A] bg-[#30030E]/60 text-xs font-sans uppercase tracking-widest text-[#ECCF9A] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ChevronUp className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C5A46D]/15 w-full text-[11px] font-sans text-stone-400/80 tracking-wider">
          <p>© 2026 N.D. Sujanth Roy &amp; I. Mary Princy Wedding Celebration</p>
        </div>
      </div>
    </footer>
  );
};
