import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WeddingEnvelope } from './components/envelope/WeddingEnvelope';
import { WeddingInvitation } from './components/invitation/WeddingInvitation';
import { CountdownTimer } from './components/countdown/CountdownTimer';
import { ChurchSection } from './components/church/ChurchSection';
import { ReceptionSection } from './components/reception/ReceptionSection';
import { WeddingTimeline } from './components/timeline/WeddingTimeline';
import { VenueLocations } from './components/venue/VenueLocations';
import { WeddingFooter } from './components/footer/WeddingFooter';
import { MusicToggle } from './components/common/MusicToggle';

export const App: React.FC = () => {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState<boolean>(false);
  const [audioTriggered, setAudioTriggered] = useState<boolean>(false);

  const handleEnvelopeComplete = () => {
    setIsEnvelopeOpened(true);
    setAudioTriggered(true);

    // Scroll smoothly to invitation card after envelope transitions
    setTimeout(() => {
      const invitationElem = document.getElementById('invitation');
      if (invitationElem) {
        invitationElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#30030E] text-stone-800 selection:bg-[#C5A46D] selection:text-white">
      {/* Background ambient music toggle - available everywhere */}
      <MusicToggle autoPlayTrigger={audioTriggered} />

      <AnimatePresence mode="wait">
        {!isEnvelopeOpened ? (
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full min-h-[100dvh]"
          >
            <WeddingEnvelope
              onOpenComplete={handleEnvelopeComplete}
              onAudioStart={() => setAudioTriggered(true)}
            />
          </motion.div>
        ) : (
          <motion.main
            key="invitation-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full flex flex-col overflow-x-hidden"
          >
            {/* Sequence 1: Main Wedding Invitation Card */}
            <WeddingInvitation />

            {/* Sequence 2: Live Wedding Countdown */}
            <CountdownTimer />

            {/* Sequence 3: Authentic Church Photograph & Ceremony Details */}
            <ChurchSection />

            {/* Sequence 4: Order of the Day / Timeline */}
            <WeddingTimeline />

            {/* Sequence 5: Reception Venue Details */}
            <ReceptionSection />

            {/* Sequence 6: Church and Reception Directions & Locations */}
            <VenueLocations />

            {/* Sequence 7: Minimal Luxury Closing & Blessings */}
            <WeddingFooter onReopenEnvelope={handleReopenEnvelope} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
