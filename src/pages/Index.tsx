import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FallingPetals from "@/components/FallingPetals";
import ScrollInvitation from "@/components/ScrollInvitation";
import CountdownTimer from "@/components/CountdownTimer";
import Envelope from "@/components/Envelope";
import floralBg from "@/assets/floral.jpeg";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${floralBg})` }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/40 z-[1] pointer-events-none" />
      <div
        className="fixed inset-0 z-[2] opacity-[0.2] pointer-events-none mix-blend-soft-light"
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
        <div className="pt-16 pb-[50vh] flex flex-col items-center">
          <CountdownTimer />
          <motion.p
            className="mt-8 text-2xl md:text-3xl text-foreground font-heading"
            style={{ fontFamily: "'Lateef', serif" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            بِإِذْنِ الله
          </motion.p>
        </div>
      </div>


      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEnvelopeOpen ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-foreground text-[10px] md:text-xs font-heading font-semibold tracking-[0.2em] uppercase">Please Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
