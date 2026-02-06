import { motion } from "framer-motion";
import ScrollSection from "./ScrollSection";
import { CameraOff, Users } from "lucide-react";
import bismillahImg from "@/assets/bismillah-calligraphy.png";
const ScrollInvitation = () => {
  return <div className="relative">
      {/* Section 1: Bismillah */}
      <ScrollSection>
        <motion.div className="text-center max-w-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 1
      }}>
          <img src={bismillahImg} alt="Bismillah - In the name of Allah" className="w-full max-w-md mx-auto h-auto" />
          <p className="mt-6 text-muted-foreground font-body text-sm md:text-base tracking-wide">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </motion.div>
      </ScrollSection>

      {/* Section 2: Hadith */}
      <ScrollSection className="bg-ivory/30">
        <div className="text-center max-w-xl">
          <motion.p className="text-lg md:text-xl text-rose/80 font-heading mb-4" style={{
          fontFamily: "'Scheherazade New', serif"
        }} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            أَنَّ النَّبِيَّ ﷺ كَانَ إِذَا رَفَأَ قَالَ
          </motion.p>
          <motion.p className="text-muted-foreground text-sm md:text-base font-body italic mb-3" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Prophet ﷺ used to say, when offering<br />
            congratulations on the occasion of marriage:
          </motion.p>
          <motion.p className="text-xl md:text-2xl text-gold font-heading" style={{
          fontFamily: "'Scheherazade New', serif",
          fontWeight: 600
        }} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            بَارَكَ اللهُ لَكُم وَبَارَكَ عَلَيْكُم وَجَمَعَ بَيْنَكُمَا فِي خَيْر
          </motion.p>
        </div>
      </ScrollSection>

      {/* Section 3: Names */}
      <ScrollSection>
        <div className="relative text-center px-8">

          {/* Groom */}
          <motion.div className="mb-6" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <p className="text-5xl md:text-6xl text-rose font-heading mb-2" style={{
            fontFamily: "'Reem Kufi', sans-serif",
            fontWeight: 600
          }}>
              احمد عادل
            </p>
            <p className="text-xl md:text-2xl text-foreground tracking-[0.25em]" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400
          }}>
              AHMED ADHIL
            </p>
          </motion.div>

          {/* Ampersand */}
          <motion.p className="text-4xl font-display text-gold my-4" initial={{
          opacity: 0,
          scale: 0.5
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            &
          </motion.p>

          {/* Bride */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <p className="text-5xl md:text-6xl text-rose font-heading mb-2" style={{
            fontFamily: "'Reem Kufi', sans-serif",
            fontWeight: 600
          }}>
              فيداء كبير
            </p>
            <p className="text-xl md:text-2xl text-foreground tracking-[0.25em]" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400
          }}>
              FIDA KABEER
            </p>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Section 4: Date & Time */}
      <ScrollSection className="bg-ivory/30">
        <div className="text-center">
          <motion.div className="mb-8" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <p className="text-muted-foreground font-heading text-sm tracking-widest mb-4">
              SAVE THE DATE
            </p>
            <p className="text-5xl md:text-7xl font-display text-rose">
              May 28
            </p>
            <p className="text-xl md:text-2xl font-heading tracking-widest text-foreground mt-2">
              2026
            </p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div className="flex items-center justify-center gap-4 my-8" initial={{
          opacity: 0,
          scaleX: 0
        }} whileInView={{
          opacity: 1,
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="h-px w-16 bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/50" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <p className="text-3xl md:text-4xl font-heading text-foreground">
              8:30 PM
            </p>
            <p className="text-muted-foreground font-heading text-sm tracking-wide mt-2">
              DHUL HIJJAH 11, 1447 AH
            </p>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Section 5: Venue */}
      <ScrollSection>
        <div className="text-center max-w-md">
          <motion.p className="text-muted-foreground font-heading text-sm tracking-widest mb-6" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            VENUE
          </motion.p>
          <motion.h3 className="text-3xl md:text-4xl font-display text-rose mb-4" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Radisson Blu Hotel
          </motion.h3>
          <motion.p className="text-lg md:text-xl font-heading text-foreground tracking-wide" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            Doha, Qatar
          </motion.p>
        </div>
      </ScrollSection>

      {/* Section 6: Important Notices */}
      <ScrollSection className="bg-ivory/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
          {/* No Photography */}
          <motion.div className="text-center p-8 bg-white/50 rounded-lg border border-blush-dark/20" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose/10 flex items-center justify-center">
              <CameraOff className="w-8 h-8 text-rose" />
            </div>
            <h4 className="text-lg font-heading tracking-widest text-foreground mb-2">
              NO PHOTOGRAPHY
            </h4>
            <p className="text-sm text-muted-foreground font-body">
              Please refrain from taking photos during the ceremony
            </p>
          </motion.div>

          {/* Segregated */}
          <motion.div className="text-center p-8 bg-white/50 rounded-lg border border-blush-dark/20" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-rose" />
            </div>
            <h4 className="text-lg font-heading tracking-widest text-foreground mb-2">
              SEGREGATED EVENT
            </h4>
            <p className="text-sm text-muted-foreground font-body">
              Separate seating arrangements for men and women
            </p>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Section 7: Closing */}
      <ScrollSection>
        
      </ScrollSection>
    </div>;
};
export default ScrollInvitation;