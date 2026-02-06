import { useState } from "react";
import { motion } from "framer-motion";
import FallingPetals from "@/components/FallingPetals";
import InvitationCard from "@/components/InvitationCard";
import CountdownTimer from "@/components/CountdownTimer";
import Envelope from "@/components/Envelope";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-romantic overflow-hidden relative">
      {/* Envelope overlay */}
      <Envelope isOpen={isEnvelopeOpen} onOpen={() => setIsEnvelopeOpen(true)} />

      {/* Falling flower petals animation */}
      <FallingPetals />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Header text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-lg md:text-xl font-heading tracking-widest text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            YOU ARE INVITED TO
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-display text-rose"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Wedding Celebration
          </motion.h1>
        </motion.div>

        {/* Invitation card */}
        <InvitationCard />

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Footer message */}
        <motion.p
          className="text-center font-heading text-muted-foreground text-sm md:text-base mt-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          We would be honored by your presence
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
