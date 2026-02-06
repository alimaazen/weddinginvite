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
      {!isOpen && <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-romantic cursor-pointer" onClick={onOpen} exit={{
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
              <div className="relative w-72 h-48 md:w-[420px] md:h-72">
                
                {/* Deep shadow behind envelope */}
                <div className="absolute inset-0 bg-blush-dark/20 rounded-md blur-xl translate-y-4 scale-95" />
                <div className="absolute inset-0 bg-blush-dark/15 rounded-md blur-2xl translate-y-6 scale-90" />
                
                {/* Envelope back panel with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory to-blush/40 rounded-lg shadow-2xl border border-blush/40" />
                
                {/* Paper texture overlay */}
                <div className="absolute inset-0 rounded-lg opacity-[0.12] pointer-events-none mix-blend-multiply" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
                
                {/* Inner decorative border with glow */}
                <div className="absolute inset-3 border border-gold/40 rounded-sm shadow-inner" />
                <div className="absolute inset-4 border border-gold/20 rounded-sm" />
                
                {/* Bottom flap (front of envelope) with rich shading */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] rounded-b-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blush/30 via-ivory to-ivory" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blush-dark/10 via-transparent to-blush-dark/10" />
                  {/* Decorative lines */}
                  <div className="absolute bottom-12 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  <div className="absolute bottom-4 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
                </div>

                {/* Top flap triangle with enhanced shading */}
                <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{
              height: '50%'
            }}>
                  {/* Main flap */}
                  <div className="absolute w-full h-full" style={{
                background: 'linear-gradient(180deg, hsl(var(--ivory)) 0%, hsl(var(--blush) / 0.25) 60%, hsl(var(--blush) / 0.4) 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
              }} />
                  {/* Flap shadow overlay */}
                  <div className="absolute w-full h-full" style={{
                background: 'linear-gradient(135deg, transparent 30%, hsl(var(--blush-dark) / 0.15) 70%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
              }} />
                  {/* Flap edge highlight */}
                  <div className="absolute w-full h-full opacity-60" style={{
                background: 'linear-gradient(45deg, hsl(var(--ivory)) 0%, transparent 30%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
              }} />
                </div>

                {/* Side shadows for 3D effect */}
                <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-blush-dark/10 to-transparent rounded-l-lg" />
                <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-blush-dark/10 to-transparent rounded-r-lg" />

                {/* Wax seal - centered on flap */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div className="relative" whileHover={{
                scale: 1.08
              }} animate={{
                boxShadow: ['0 0 0 0 hsl(var(--rose) / 0.4)', '0 0 20px 8px hsl(var(--rose) / 0)', '0 0 0 0 hsl(var(--rose) / 0.4)']
              }} transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 300
                }
              }}>
                    {/* Seal glow */}
                    <div className="absolute -inset-2 bg-rose/30 rounded-full blur-xl" />
                    {/* Seal shadow */}
                    <div className="absolute inset-0 bg-rose-dark/50 rounded-full blur-lg translate-y-2 scale-95" />
                    
                    {/* Main seal with rich gradient */}
                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-light via-rose to-rose-dark shadow-2xl flex items-center justify-center">
                      {/* Seal inner shadow */}
                      <div className="absolute inset-0 rounded-full shadow-inner" style={{
                    boxShadow: 'inset 0 2px 8px hsl(var(--rose-dark) / 0.4)'
                  }} />
                      {/* Seal texture rings */}
                      <div className="absolute inset-1.5 rounded-full border-2 border-rose-light/40" />
                      <div className="absolute inset-3 rounded-full border border-ivory/30" />
                      <div className="absolute inset-4 rounded-full border border-ivory/20" />
                      
                      {/* Heart icon */}
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-ivory/90 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    
                    {/* Wax drips with shading */}
                    
                    <div className="absolute -bottom-0.5 right-2 w-1.5 h-2.5 md:w-2 md:h-3.5 bg-gradient-to-b from-rose to-rose-dark rounded-full" />
                    
                  </motion.div>
                </div>
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