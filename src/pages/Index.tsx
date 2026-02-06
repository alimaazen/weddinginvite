import { useState } from "react";
import FallingPetals from "@/components/FallingPetals";
import ScrollInvitation from "@/components/ScrollInvitation";
import CountdownTimer from "@/components/CountdownTimer";
import Envelope from "@/components/Envelope";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-romantic overflow-x-hidden relative">
      {/* Envelope overlay */}
      <Envelope isOpen={isEnvelopeOpen} onOpen={() => setIsEnvelopeOpen(true)} />

      {/* Falling flower petals animation */}
      <FallingPetals />

      {/* Main content */}
      <div className="relative z-20">
        {/* Scroll-based invitation sections */}
        <ScrollInvitation />

        {/* Countdown timer */}
        <div className="py-16 flex justify-center">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Index;
