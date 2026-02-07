import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Envelope = ({ isOpen, onOpen }: EnvelopeProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Add a small delay for the seal animation before triggering the parent onOpen which might unmount
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ pointerEvents: "none" }}
        >
          {/* Top Flap / Upper Half */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#2d0101] shadow-lg z-20 flex items-end justify-center origin-top border-b border-foreground/10"
            animate={isAnimating ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            {/* Texture */}
            <div
              className="absolute inset-0 opacity-[0.4] mix-blend-multiply"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

          </motion.div>

          {/* Bottom Flap / Lower Half */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#2d0101] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20 flex items-start justify-center origin-bottom border-t border-foreground/10"
            animate={isAnimating ? { y: "100%", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            {/* Texture */}
            <div
              className="absolute inset-0 opacity-[0.4] mix-blend-multiply"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                transform: "rotate(180deg)"
              }}
            />
          </motion.div>

          {/* Wax Seal - Centered */}
          <motion.div
            className="absolute z-30 cursor-pointer"
            animate={isAnimating ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={handleOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 md:w-32 md:h-32 text-foreground drop-shadow-xl filter">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>

            {/* Tap hint text */}
            <motion.p
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-foreground/60 font-heading text-sm tracking-widest uppercase whitespace-nowrap"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to open
            </motion.p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;