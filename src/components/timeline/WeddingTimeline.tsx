import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';
import { FloralDivider } from '../common/FloralDivider';
import { Church, Sparkles, MapPin, Clock } from 'lucide-react';

export const WeddingTimeline: React.FC = () => {
  const { timeline, date } = weddingData;

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 bg-[#30030E] text-[#F8F3E9] overflow-hidden">
      {/* Subtle gold line pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ECCF9A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C5A46D] font-semibold block mb-1">
            Order of the Day
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F3E9] font-normal tracking-wide">
            Wedding Day Timeline
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-[#ECCF9A]/80 mt-1 font-medium">
            {date.display}
          </p>
          <FloralDivider variant="gold" styleType="cross" className="w-48 mx-auto mt-2" />
        </motion.div>

        {/* Minimal ornamental vertical timeline */}
        <div className="relative">
          {/* Vertical gold connecting line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C5A46D]/20 via-[#C5A46D] to-[#C5A46D]/20 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center"
                >
                  {/* Marker Node on Timeline */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A0718] border-2 border-[#C5A46D] shadow-lg flex items-center justify-center text-[#ECCF9A]">
                      {item.icon === 'church' ? (
                        <Church className="w-4 h-4 sm:w-5 sm:h-5 text-[#ECCF9A]" />
                      ) : (
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#ECCF9A]" />
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left sm:ml-auto'
                    }`}
                  >
                    <div className="bg-[#4A0718]/70 p-4 sm:p-5 rounded-xl border border-[#C5A46D]/40 backdrop-blur-sm shadow-lg">
                      {/* Time in Poppins */}
                      <div
                        className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-sans uppercase tracking-widest font-semibold bg-[#25020A] text-[#ECCF9A] border border-[#C5A46D]/40 mb-2`}
                      >
                        <Clock className="w-3 h-3 text-[#C5A46D]" />
                        <span>{item.time}</span>
                      </div>

                      {/* Heading in Cormorant Garamond */}
                      <h3 className="font-serif text-xl sm:text-2xl text-[#FFFDF9] font-medium tracking-wide">
                        {item.title}
                      </h3>

                      {/* Supporting location in Poppins */}
                      <div
                        className={`flex items-center space-x-1.5 text-xs sm:text-sm text-[#ECCF9A]/90 mt-1.5 font-sans font-medium ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span>
                          {item.venue}, {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
