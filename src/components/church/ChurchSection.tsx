import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';
import { FloralDivider } from '../common/FloralDivider';
import { MapPin, ExternalLink, Clock, Calendar, Church } from 'lucide-react';

export const ChurchSection: React.FC = () => {
  const { ceremony } = weddingData;

  return (
    <section
      id="ceremony"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-[#FAF6EF] overflow-hidden"
    >
      {/* Delicate floral ornamental border along top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A46D]/60 to-transparent" />

      {/* Decorative botanical watermark */}
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4A0718 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8E6D38] font-semibold block mb-1">
            Solemnization of Holy Matrimony
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A0718] font-normal tracking-wide">
            {ceremony.title}
          </h2>
          <FloralDivider variant="gold" styleType="cross" className="w-52 mx-auto mt-2" />
        </motion.div>

        {/* Editorial Mobile-First Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          
          {/* Main Church Photograph Showcase (7 cols on desktop, prominent top on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* Outer subtle gold border offset frame */}
            <div className="absolute -inset-2 sm:-inset-3 border border-[#C5A46D]/50 rounded-2xl pointer-events-none" />
            <div className="absolute -inset-1 border border-[#D9DFD1] rounded-xl pointer-events-none" />

            {/* The Real Church Photograph Container - Clean, Unobstructed Architectural View */}
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
              <picture>
                <source
                  srcSet="/images/church-main.webp"
                  type="image/webp"
                  media="(min-width: 640px)"
                />
                <source
                  srcSet="/images/church-mobile.webp"
                  type="image/webp"
                  media="(max-width: 639px)"
                />
                <img
                  src="/images/church-main.jpg"
                  alt="Sacred Heart Church, Kilachery - Authentic Ceremony Venue"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </picture>

              {/* Natural subtle golden sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25020A]/40 via-transparent to-transparent pointer-events-none" />

              {/* Discreet venue caption at bottom edge */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white z-10 pointer-events-none">
                <span className="font-sans text-[10px] sm:text-xs text-[#ECCF9A] uppercase tracking-wider font-medium px-2.5 py-1 rounded bg-[#25020A]/70 backdrop-blur-sm border border-[#C5A46D]/30">
                  Sacred Heart Church • Kilachery
                </span>
                <span className="font-sans text-[10px] text-white/80 uppercase tracking-wider hidden sm:inline-block px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm">
                  Authentic Sanctuary
                </span>
              </div>
            </div>
          </motion.div>

          {/* Ceremony Details Card (5 cols on desktop, following smoothly on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-5 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#C5A46D]/40 shadow-card"
          >
            {/* Header info */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-[0.2em] bg-[#4A0718] text-[#ECCF9A] mb-2.5">
                WEDDING CEREMONY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#4A0718] font-medium leading-snug">
                SACRED HEART CHURCH
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#7F9371] font-semibold tracking-wider uppercase mt-1">
                Kilachery, Tamil Nadu
              </p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-[#C5A46D]/60 via-[#C5A46D]/20 to-transparent" />

            {/* Time & Date Blocks */}
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#F8F3E9] border border-[#C5A46D]/50 flex items-center justify-center shrink-0 text-[#8E6D38]">
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
                <div className="w-8 h-8 rounded-full bg-[#F8F3E9] border border-[#C5A46D]/50 flex items-center justify-center shrink-0 text-[#8E6D38]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8E6D38] font-semibold block">
                    Ceremony Time
                  </span>
                  <span className="font-sans text-sm sm:text-base text-[#30030E] font-semibold block">
                    10:45 AM
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#F8F3E9] border border-[#C5A46D]/50 flex items-center justify-center shrink-0 text-[#8E6D38]">
                  <Church className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8E6D38] font-semibold block">
                    Sanctuary
                  </span>
                  <span className="font-serif text-sm sm:text-base text-[#30030E] block">
                    Sacred Heart Church, Kilachery
                  </span>
                </div>
              </div>
            </div>

            {/* Exact Google Maps Destination Button (Touch Target >= 44px) */}
            <div className="pt-2">
              <a
                href={ceremony.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[48px] inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                style={{
                  background: 'linear-gradient(135deg, #4A0718 0%, #30030E 100%)',
                  border: '1px solid rgba(197, 164, 109, 0.6)',
                }}
              >
                <MapPin className="w-4 h-4 text-[#ECCF9A] mr-2" />
                <span>{ceremony.mapButtonText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ECCF9A]/80 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
