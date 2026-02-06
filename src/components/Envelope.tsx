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
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Envelope body */}
            <div className="relative w-80 h-56 md:w-96 md:h-64">
              {/* Back of envelope */}
              <div className="absolute inset-0 bg-ivory rounded-lg shadow-elegant border border-blush-dark/20" />
              
              {/* Envelope flap (triangle) */}
              <motion.div
                className="absolute -top-0 left-0 right-0 h-28 md:h-32 origin-top"
                initial={{ rotateX: 0 }}
                whileHover={{ rotateX: 10 }}
                style={{ perspective: 1000 }}
              >
                <svg
                  viewBox="0 0 384 128"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L192,120 L384,0 L384,0 L0,0 Z"
                    className="fill-ivory stroke-blush-dark/20"
                    strokeWidth="1"
                  />
                  <path
                    d="M0,0 L192,120 L384,0"
                    className="fill-none stroke-blush-dark/30"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-rose to-rose-dark shadow-lg flex items-center justify-center border-2 border-rose-light/30">
                  <div className="text-ivory text-2xl md:text-3xl font-display">
                    ❤
                  </div>
                </div>
                {/* Seal drips */}
                <div className="absolute -bottom-1 left-2 w-3 h-4 bg-rose rounded-full" />
                <div className="absolute -bottom-2 right-3 w-2 h-3 bg-rose-dark rounded-full" />
              </motion.div>

              {/* Front of envelope (lower part) */}
              <div className="absolute bottom-0 left-0 right-0 h-36 md:h-40 bg-gradient-to-b from-blush/50 to-ivory rounded-b-lg border-t border-blush-dark/10">
                {/* Decorative pattern */}
                <div className="absolute inset-4 border border-gold/20 rounded" />
                <div className="absolute inset-6 border border-gold/10 rounded" />
              </div>

              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" />
            </div>

            {/* Text prompt */}
            <motion.p
              className="text-center mt-8 font-heading text-muted-foreground tracking-widest text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              TAP TO OPEN
            </motion.p>

            {/* Decorative text */}
            <motion.p
              className="text-center mt-2 font-display text-rose text-xl md:text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              You're Invited
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
