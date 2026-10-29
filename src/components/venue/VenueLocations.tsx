import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';
import { FloralDivider } from '../common/FloralDivider';
import { MapPin, Navigation, ExternalLink, Church, UtensilsCrossed } from 'lucide-react';

export const VenueLocations: React.FC = () => {
  const { ceremony, reception } = weddingData;

  const venues = [
    {
      ...ceremony,
      badge: 'Ceremony Venue',
      icon: Church,
      bgGradient: 'from-[#4A0718] to-[#30030E]',
      accentColor: '#ECCF9A',
    },
    {
      ...reception,
      badge: 'Reception Venue',
      icon: UtensilsCrossed,
      bgGradient: 'from-[#3A0412] to-[#25020A]',
      accentColor: '#C58F91',
    },
  ];

  return (
    <section id="locations" className="relative w-full py-16 md:py-24 px-4 sm:px-6 bg-[#25020A] text-[#F8F3E9] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#C5A46D] font-semibold block mb-2">
            Directions &amp; Navigation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F8F3E9] font-normal tracking-wide">
            Venue Destinations
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#ECCF9A]/80 mt-1">
            Both venues are located conveniently within Kilachery, Tamil Nadu
          </p>
          <FloralDivider variant="gold" styleType="cross" className="w-56 mx-auto mt-2" />
        </motion.div>

        {/* Two Venue Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {venues.map((venue, idx) => {
            const Icon = venue.icon;

            return (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative rounded-2xl p-7 sm:p-9 border border-[#C5A46D]/50 bg-gradient-to-b from-[#380412]/90 to-[#220108]/95 shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:border-[#ECCF9A] hover:-translate-y-1"
              >
                {/* Gold corner ornaments */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C5A46D]" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#C5A46D]" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#C5A46D]" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C5A46D]" />

                <div>
                  {/* Top badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-widest bg-[#200208] text-[#ECCF9A] border border-[#C5A46D]/40">
                      <Icon className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>{venue.badge}</span>
                    </span>

                    <span className="font-sans text-xs text-[#ECCF9A]/80 uppercase tracking-wider font-medium">
                      {venue.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF9] font-medium tracking-wide">
                    {venue.venueName}
                  </h3>

                  <div className="flex items-start space-x-2 text-sm text-[#ECCF9A]/90 mt-2 font-serif">
                    <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span>
                      {venue.venueCity}, {venue.venueState}
                    </span>
                  </div>

                  <p className="font-serif italic text-xs sm:text-sm text-[#F8F3E9]/70 mt-4 leading-relaxed">
                    {venue.description}
                  </p>
                </div>

                {/* Map Button */}
                <div className="mt-8 pt-6 border-t border-[#C5A46D]/20">
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-[#25020A] shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                    style={{
                      background: 'linear-gradient(135deg, #E8D3A7 0%, #C5A46D 50%, #9E7B44 100%)',
                    }}
                  >
                    <Navigation className="w-4 h-4 mr-2 text-[#25020A]" />
                    <span>{venue.mapButtonText}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#25020A]/70" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
