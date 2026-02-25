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
        <p className="mt-6 text-foreground font-body text-sm md:text-base font-semibold tracking-wide">
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>
      </motion.div>
    </ScrollSection>

    {/* Section 2: Hadith */}
    <ScrollSection>
      <div className="text-center max-w-xl">

        <motion.p className="text-lg md:text-xl text-rose/80 font-heading mb-4" style={{
          fontFamily: "'Amiri', serif"
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
        <motion.p className="text-foreground text-sm md:text-base font-body italic font-semibold mb-3" initial={{
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
        <motion.p className="text-2xl md:text-3xl text-rose font-heading" style={{
          fontFamily: "'Lateef', serif",
          fontWeight: 400
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
          بارك اللهُ لَكُما و بارك عَلَيْكُمَا وَ جَمَعَ بَيْنَكُما في خَير
        </motion.p>
      </div>
    </ScrollSection>

    {/* Section 3: Names */}
    <ScrollSection>
      <div className="relative text-center px-8">

        {/* Bride */}
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
            فداء كبير
          </p>
          <p className="text-xl md:text-2xl text-foreground tracking-[0.25em] font-semibold" style={{
            fontFamily: "'Cormorant Garamond', serif"
          }}>
            FIDA KABEER
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

        {/* Groom */}
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
            احمد عادل
          </p>
          <p className="text-xl md:text-2xl text-foreground tracking-[0.25em] font-semibold" style={{
            fontFamily: "'Cormorant Garamond', serif"
          }}>
            AHMED ADHIL
          </p>
        </motion.div>
      </div>
    </ScrollSection>

    {/* Section 4: Date & Time */}
    <ScrollSection>
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
          <p className="text-foreground font-heading text-sm font-semibold tracking-widest mb-4">
            SAVE THE DATE
          </p>
          <p className="text-5xl md:text-7xl font-display text-rose">
            May 29
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
          <p className="text-foreground font-heading text-sm font-semibold tracking-wide mt-2">
            DHUL HIJJAH 12, 1447 AH
          </p>
        </motion.div>
      </div>
    </ScrollSection>

    {/* Section 5: Venue */}
    <ScrollSection>
      <div className="text-center max-w-lg w-full">
        <motion.p className="text-foreground font-heading text-sm font-semibold tracking-widest mb-6" initial={{
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
        <motion.h3 className="text-3xl md:text-4xl font-display text-rose font-bold mb-2" initial={{
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
        <motion.p className="text-lg md:text-xl font-heading text-foreground font-semibold tracking-wide mb-8" initial={{
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

        {/* Map */}
        <motion.a
          href="https://maps.google.com/?q=Radisson+Blu+Hotel+Doha+Qatar"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-blush-dark/20 shadow-lg bg-white/50">
            <div className="aspect-[16/10] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9612685376!2d51.5295!3d25.2867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db5e08b1d981%3A0x6e6dc7a9f9f1c0f0!2sRadisson%20Blu%20Hotel%2C%20Doha!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              />
            </div>
            {/* Overlay for tap effect */}
            <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/5 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-heading text-rose tracking-wide">Open in Google Maps</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground font-body flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Tap to get directions
          </p>
        </motion.a>
      </div>
    </ScrollSection >

    {/* Section 6: Important Notices */}
    < ScrollSection >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
        {/* No Photography */}
        <motion.div className="text-center p-8 bg-black/20 rounded-lg border border-white/10" initial={{
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
          <h4 className="text-lg font-heading font-semibold tracking-widest text-foreground mb-2">
            NO PHOTOGRAPHY
          </h4>
          <p className="text-sm text-foreground/70 font-body">
            Please refrain from taking photos during the ceremony
          </p>
        </motion.div>

        {/* Segregated */}
        <motion.div className="text-center p-8 bg-black/20 rounded-lg border border-white/10" initial={{
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
          <h4 className="text-lg font-heading font-semibold tracking-widest text-foreground mb-2">
            SEGREGATED EVENT
          </h4>
          <p className="text-sm text-foreground/70 font-body">
            Separate seating arrangements for men and women
          </p>
        </motion.div>
      </div>
    </ScrollSection >

  </div >;
};
export default ScrollInvitation;
