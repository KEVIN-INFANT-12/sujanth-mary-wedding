import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';
import { FloralDivider } from '../common/FloralDivider';
import { MapPin, ExternalLink, Clock, Calendar, Sparkles, UtensilsCrossed } from 'lucide-react';

export const ReceptionSection: React.FC = () => {
  const { reception } = weddingData;

  return (
    <section
      id="reception"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#F8F3E9] via-[#FAF4E8] to-[#F3ECE0] overflow-hidden"
    >
      {/* Decorative gold hairline divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A46D]/50 to-transparent" />

      {/* Subtle warm rose background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C58F91]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#A15E61] font-semibold block mb-1">
            Celebration of Joy &amp; Feasting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A0718] font-normal tracking-wide">
            {reception.title}
          </h2>
          <FloralDivider variant="gold" styleType="diamond" className="w-52 mx-auto mt-2" />
        </motion.div>

        {/* Reception Layout: Banquet Motif + Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          
          {/* Decorative Reception Artwork Card (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* Double decorative border frame */}
            <div className="absolute -inset-2 sm:-inset-3 border border-[#C5A46D]/50 rounded-2xl pointer-events-none" />
            <div className="absolute -inset-1 border border-[#C58F91]/35 rounded-xl pointer-events-none" />

            {/* Artwork Container */}
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-[#30030E] via-[#4A0718] to-[#200208] p-6 sm:p-10 aspect-[16/10] sm:aspect-[16/11] flex flex-col items-center justify-center text-center">
              <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF4E8]/10 border border-[#C5A46D]/60 flex items-center justify-center text-[#ECCF9A] shadow-inner mb-3">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>

                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#ECCF9A] font-semibold">
                  Grand Wedding Feast
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FFFDF9] font-normal tracking-wide mt-1.5">
                  {reception.venueName}
                </h3>

                <div className="flex items-center justify-center space-x-2 my-2 sm:my-2.5">
                  <span className="w-6 h-[1px] bg-[#C5A46D]/70" />
                  <Sparkles className="w-3 h-3 text-[#ECCF9A]" />
                  <span className="w-6 h-[1px] bg-[#C5A46D]/70" />
                </div>

                <p className="font-serif italic text-xs sm:text-sm text-[#F8F3E9]/85 max-w-xs leading-relaxed">
                  Join our families for an auspicious afternoon of traditional feast, warm fellowship, and sweet memories.
                </p>

                <div className="mt-3 px-3.5 py-1 rounded-full bg-[#FAF4E8]/10 border border-[#C5A46D]/40 backdrop-blur-sm">
                  <span className="font-sans text-[11px] sm:text-xs text-[#ECCF9A] uppercase tracking-widest font-semibold">
                    12:30 PM Onwards
                  </span>
                </div>
              </div>

              {/* Background ornamental lattice */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#ECCF9A 1.5px, transparent 1.5px)`,
                  backgroundSize: '24px 24px',
                }}
              />
            </div>
          </motion.div>

          {/* Reception Details Card (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-5 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#C5A46D]/40 shadow-card"
          >
            {/* Header info */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-[0.2em] bg-[#C58F91]/25 text-[#4A0718] mb-2.5 border border-[#C58F91]/40">
                WEDDING RECEPTION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#4A0718] font-medium leading-snug">
                {reception.venueName}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#8E6D38] font-semibold tracking-wider uppercase mt-1">
                {reception.venueCity}, {reception.venueState}
              </p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-[#C5A46D]/60 via-[#C5A46D]/20 to-transparent" />

            {/* Time & Date Blocks */}
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4E8] border border-[#C5A46D]/50 flex items-center justify-center shrink-0 text-[#8E6D38]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8E6D38] font-semibold block">
                    Date
                  </span>
                  <span className="font-serif text-base sm:text-lg text-[#30030E] font-medium block">
                    SUNDAY, 15 NOVEMBER 2026
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4E8] border border-[#C5A46D]/50 flex items-center justify-center shrink-0 text-[#8E6D38]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8E6D38] font-semibold block">
                    Reception Time
                  </span>
                  <span className="font-sans text-sm sm:text-base text-[#30030E] font-semibold block">
                    {reception.time}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4E8] border border-[#C5A46D]/50 flex items-center justify-center shrink-0 text-[#8E6D38]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8E6D38] font-semibold block">
                    Destination
                  </span>
                  <span className="font-serif text-sm sm:text-base text-[#30030E] block">
                    Brindavan Mahal, Kilachery
                  </span>
                </div>
              </div>
            </div>

            {/* Exact Google Maps Destination Button */}
            <div className="pt-2">
              <a
                href={reception.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[48px] inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                style={{
                  background: 'linear-gradient(135deg, #4A0718 0%, #30030E 100%)',
                  border: '1px solid rgba(197, 164, 109, 0.6)',
                }}
              >
                <MapPin className="w-4 h-4 text-[#ECCF9A] mr-2" />
                <span>{reception.mapButtonText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ECCF9A]/80 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
