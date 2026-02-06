import { motion, AnimatePresence } from "framer-motion";
interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}
const Envelope = ({
  isOpen,
  onOpen
}: EnvelopeProps) => {
  return <AnimatePresence>
      {!isOpen && <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-white cursor-pointer" onClick={onOpen} exit={{
      opacity: 0
    }} transition={{
      duration: 0.8
    }}>
          <div className="flex flex-col items-center">
            {/* Envelope container */}
            <motion.div className="relative" initial={{
          scale: 0.9,
          opacity: 0,
          y: 20
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 1.1,
          opacity: 0,
          y: -50
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }}>
              {/* Main envelope body */}
              <div className="relative w-72 h-44 md:w-96 md:h-56">
                
                {/* Soft drop shadow */}
                <div className="absolute inset-0 bg-blush-dark/25 rounded-2xl blur-2xl translate-y-6 scale-90" />
                
                {/* Envelope back - fully closed */}
                <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-blush/30 rounded-2xl shadow-xl border border-blush/30" />
                
                {/* Subtle paper texture */}
                <div className="absolute inset-0 rounded-2xl opacity-[0.08] pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
                
                {/* Inner decorative border */}
                <div className="absolute inset-3 border border-gold/25 rounded-xl" />
                
                {/* Top flap - fully closed covering the envelope */}
                <div className="absolute -top-1 left-0 right-0 overflow-visible" style={{
              height: '55%'
            }}>
                  {/* Flap shadow on envelope body */}
                  <div className="absolute bottom-0 left-4 right-4 h-6 bg-gradient-to-t from-blush-dark/15 to-transparent blur-sm" />
                  
                  {/* Main flap */}
                  <div className="absolute w-full h-full" style={{
                background: 'linear-gradient(175deg, hsl(var(--ivory)) 0%, hsl(var(--blush) / 0.2) 70%, hsl(var(--blush) / 0.35) 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                filter: 'drop-shadow(0 4px 6px hsl(var(--blush-dark) / 0.15))'
              }} />
                  
                  {/* Flap edge highlight */}
                  <div className="absolute w-full h-full opacity-50" style={{
                background: 'linear-gradient(45deg, hsl(var(--ivory)) 0%, transparent 40%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
              }} />
                  
                  {/* Flap border line */}
                  <div className="absolute w-full h-full" style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                border: '1px solid hsl(var(--blush) / 0.3)'
              }} />
                </div>

                {/* Cute wax seal - centered on flap point */}
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div className="relative" whileHover={{
                scale: 1.1,
                rotate: 5
              }} animate={{
                boxShadow: ['0 0 0 0 hsl(var(--rose) / 0.5)', '0 0 25px 10px hsl(var(--rose) / 0)', '0 0 0 0 hsl(var(--rose) / 0.5)']
              }} transition={{
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}>
                    {/* Seal glow */}
                    <div className="absolute -inset-3 bg-rose/25 rounded-full blur-xl" />
                    
                    {/* Seal shadow */}
                    <div className="absolute inset-0 bg-rose-dark/40 rounded-full blur-md translate-y-1.5 scale-90" />
                    
                    {/* Main seal */}
                    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-rose-light via-rose to-rose-dark shadow-lg flex items-center justify-center">
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-full" style={{
                    boxShadow: 'inset 0 2px 6px hsl(var(--rose-dark) / 0.3), inset 0 -2px 4px hsl(var(--ivory) / 0.2)'
                  }} />
                      
                      {/* Decorative rings */}
                      <div className="absolute inset-1.5 rounded-full border border-ivory/30" />
                      <div className="absolute inset-3 rounded-full border border-ivory/20" />
                      
                      {/* Heart icon */}
                      
                    </div>
                    
                    {/* Tiny wax drips */}
                    
                    
                  </motion.div>
                </div>
                
                {/* Bottom decorative line */}
                <div className="absolute bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              </div>
            </motion.div>

            {/* Text below envelope */}
            <motion.div className="mt-10 text-center" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }}>
              
              
            </motion.div>
          </div>
        </motion.div>}
    </AnimatePresence>;
};
export default Envelope;