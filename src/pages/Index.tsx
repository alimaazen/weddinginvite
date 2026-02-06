import { useState } from "react";
import FallingPetals from "@/components/FallingPetals";
import ScrollInvitation from "@/components/ScrollInvitation";
import CountdownTimer from "@/components/CountdownTimer";
import Envelope from "@/components/Envelope";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-romantic overflow-x-hidden relative">
      {/* Paper texture overlay */}
      <div 
        className="fixed inset-0 z-10 opacity-[0.15] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
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
