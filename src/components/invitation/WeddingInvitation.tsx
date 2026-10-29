import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, CornerFlourish } from '../common/FloralDivider';
import { weddingData } from '../../config/weddingData';

export const WeddingInvitation: React.FC = () => {
  const { couple, bibleVerse, invitationNote, date, ceremony, reception } = weddingData;

  return (
    <section
      id="invitation"
      className="relative w-full py-8 sm:py-16 px-3 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Background dark burgundy ambient tone */}
      <div className="absolute inset-0 bg-[#30030E]/95 pointer-events-none" />

      {/* Atmospheric warm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN LUXURY INVITATION CARD (WORLD TWO: WARM IVORY STATIONERY) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#FFFDF9] via-[#F8F3E9] to-[#F1E7D5] rounded-xl shadow-2xl p-5 sm:p-10 md:p-14 border border-[#C5A46D]/80 select-text"
        style={{
          boxShadow: '0 20px 50px -10px rgba(20, 2, 6, 0.6), 0 0 1px 1px rgba(197, 164, 109, 0.4)',
        }}
      >
        {/* Four Corner Flourishes */}
        <CornerFlourish position="top-left" className="top-2.5 left-2.5 sm:top-3 sm:left-3 text-[#C5A46D]" />
        <CornerFlourish position="top-right" className="top-2.5 right-2.5 sm:top-3 sm:right-3 text-[#C5A46D]" />
        <CornerFlourish position="bottom-left" className="bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[#C5A46D]" />
        <CornerFlourish position="bottom-right" className="bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-[#C5A46D]" />

        {/* Double Gold Framing Line */}
        <div className="absolute inset-2 sm:inset-4 border border-[#C5A46D]/50 rounded-lg pointer-events-none" />
        <div className="absolute inset-3 sm:inset-5 border border-dashed border-[#C5A46D]/30 rounded-md pointer-events-none" />

        {/* Subtle pale sage botanical background watermark */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none rounded-xl"
          style={{
            backgroundImage: `radial-gradient(#7F9371 1.5px, transparent 1.5px)`,
            backgroundSize: '22px 22px',
          }}
        />

        {/* CARD CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Catholic Cross Symbol */}
          <div className="flex flex-col items-center mb-3">
            <div className="w-9 h-9 rounded-full bg-[#C5A46D]/15 flex items-center justify-center border border-[#C5A46D]/40 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2V22M7 7.5H17"
                  stroke="#8E6D38"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7.5" r="1.5" fill="#C5A46D" />
              </svg>
            </div>
            <div className="w-8 h-[1px] bg-[#C5A46D]/40 mt-1.5" />
          </div>

          {/* BIBLE VERSE */}
          <div className="max-w-md mx-auto mb-4 px-2">
            <blockquote className="font-serif italic text-xs sm:text-base md:text-lg text-[#4A352C] leading-relaxed">
              &ldquo;{bibleVerse.text}&rdquo;
            </blockquote>
            <cite className="block font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8E6D38] mt-1 font-semibold not-italic">
              — {bibleVerse.reference}
            </cite>
          </div>

          <FloralDivider variant="gold" styleType="cross" className="w-full max-w-xs my-0.5" />

          {/* HEADING */}
          <div className="my-2.5">
            <h2 className="font-serif text-base sm:text-xl md:text-2xl font-semibold tracking-[0.28em] uppercase text-[#4A0718]">
              {invitationNote.heading}
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-1">
              <span className="w-5 h-[1px] bg-[#C5A46D]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A46D]" />
              <span className="w-5 h-[1px] bg-[#C5A46D]" />
            </div>
          </div>

          {/* GROOM'S PARENTS */}
          <div className="my-2.5 px-1">
            <p className="font-serif text-sm sm:text-lg md:text-xl text-[#30030E] font-medium tracking-wide">
              {couple.groom.parents}
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-[#4A352C]/85 tracking-wider mt-0.5 font-medium">
              {couple.groom.nativePlace}
            </p>
          </div>

          {/* INVITATION TEXT */}
          <div className="my-3 max-w-sm px-2">
            <p className="font-serif italic text-xs sm:text-base text-[#5F4E46] leading-relaxed">
              {invitationNote.body}
            </p>
          </div>

          {/* GROOM'S NAME - PRIMARY FOCUS */}
          <div className="my-1.5 w-full">
            <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8E6D38] font-semibold block mb-0.5">
              N.D.
            </span>
            <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-[#4A0718] font-normal leading-tight tracking-wide py-0.5">
              Sujanth Roy
            </h1>
          </div>

          {/* CONNECTOR "with" */}
          <div className="my-1 flex items-center justify-center space-x-3 w-full max-w-[200px]">
            <span className="flex-1 h-[1px] bg-[#C5A46D]/60" />
            <span className="font-serif italic text-sm sm:text-base text-[#8E6D38] px-2 select-none">
              with
            </span>
            <span className="flex-1 h-[1px] bg-[#C5A46D]/60" />
          </div>

          {/* BRIDE'S NAME - PRIMARY FOCUS */}
          <div className="my-1.5 w-full">
            <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8E6D38] font-semibold block mb-0.5">
              I.
            </span>
            <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-[#4A0718] font-normal leading-tight tracking-wide py-0.5">
              Mary Princy
            </h1>
          </div>

          {/* BRIDE'S PARENTS */}
          <div className="my-2.5 max-w-md px-1">
            <p className="font-serif text-xs sm:text-base md:text-lg text-[#30030E] font-medium leading-relaxed">
              <span className="italic font-normal text-[#5F4E46]">{couple.bride.prefixParents}</span>
              {couple.bride.parents}
            </p>
          </div>

          <FloralDivider variant="gold" styleType="diamond" className="w-full max-w-xs my-2" />

          {/* PROMINENT WEDDING DATE PRESENTATION */}
          <div className="my-3 w-full max-w-sm rounded-xl p-4 bg-[#FAF4E8] border border-[#C5A46D]/45 shadow-sm">
            <div className="flex flex-col items-center justify-center">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8E6D38] font-semibold">
                {date.dayOfWeek}
              </span>

              {/* Dominant 15 */}
              <div className="my-1 flex items-center justify-center space-x-3">
                <span className="w-6 h-[1px] bg-[#C5A46D]/60" />
                <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#4A0718] leading-none">
                  {date.day}
                </span>
                <span className="w-6 h-[1px] bg-[#C5A46D]/60" />
              </div>

              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#4A352C] font-semibold">
                {date.month} {date.year}
              </span>
            </div>

            {/* Quick Venue Timings */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#C5A46D]/25 text-center text-[10px] sm:text-xs">
              <div className="p-1.5 rounded bg-white/70 border border-[#C5A46D]/20">
                <span className="font-sans font-semibold text-[#4A0718] block uppercase tracking-wider">
                  Ceremony
                </span>
                <span className="font-sans text-[#8E6D38] font-medium block mt-0.5">
                  {ceremony.time}
                </span>
              </div>

              <div className="p-1.5 rounded bg-white/70 border border-[#C5A46D]/20">
                <span className="font-sans font-semibold text-[#4A0718] block uppercase tracking-wider">
                  Reception
                </span>
                <span className="font-sans text-[#8E6D38] font-medium block mt-0.5">
                  {reception.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
