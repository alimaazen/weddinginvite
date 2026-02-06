import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Envelope = ({ isOpen, onOpen }: EnvelopeProps) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-romantic cursor-pointer"
          onClick={onOpen}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            {/* Envelope container */}
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Main envelope body */}
              <div className="relative w-72 h-48 md:w-[420px] md:h-72">
                
                {/* Envelope back panel */}
                <div className="absolute inset-0 bg-ivory rounded-md shadow-xl border border-blush-dark/30" />
                
                {/* Inner decorative border */}
                <div className="absolute inset-3 border border-gold/30 rounded-sm" />
                
                {/* Bottom flap (front of envelope) */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-ivory via-ivory to-blush/20 rounded-b-md">
                  {/* Decorative lines */}
                  <div className="absolute top-6 left-6 right-6 h-px bg-gold/20" />
                  <div className="absolute top-10 left-8 right-8 h-px bg-gold/15" />
                </div>

                {/* Top flap triangle */}
                <div 
                  className="absolute top-0 left-0 right-0 overflow-hidden"
                  style={{ height: '50%' }}
                >
                  <div 
                    className="absolute w-full h-full"
                    style={{
                      background: 'linear-gradient(to bottom, hsl(var(--ivory)), hsl(var(--blush) / 0.3))',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    }}
                  />
                  {/* Flap edge line */}
                  <div 
                    className="absolute w-full h-full opacity-40"
                    style={{
                      background: 'transparent',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      boxShadow: 'inset 0 -2px 4px hsl(var(--blush-dark) / 0.3)',
                    }}
                  />
                </div>

                {/* Wax seal - centered on flap */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Seal shadow */}
                    <div className="absolute inset-0 bg-rose-dark/40 rounded-full blur-md translate-y-1" />
                    
                    {/* Main seal */}
                    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-rose via-rose to-rose-dark shadow-lg flex items-center justify-center">
                      {/* Seal texture ring */}
                      <div className="absolute inset-1 rounded-full border-2 border-rose-light/30" />
                      <div className="absolute inset-2 rounded-full border border-ivory/20" />
                      
                      {/* Heart icon */}
                      <span className="text-ivory text-xl md:text-3xl drop-shadow-sm">♥</span>
                    </div>
                    
                    {/* Wax drips */}
                    <div className="absolute -bottom-1 left-1 w-2 h-3 md:w-3 md:h-4 bg-rose rounded-full" />
                    <div className="absolute -bottom-0.5 right-2 w-1.5 h-2 md:w-2 md:h-3 bg-rose-dark rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Text below envelope */}
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.p
                className="font-display text-rose text-2xl md:text-3xl mb-3"
              >
                You're Invited
              </motion.p>
              <motion.p
                className="font-heading text-muted-foreground tracking-widest text-xs md:text-sm uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Tap to open
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
