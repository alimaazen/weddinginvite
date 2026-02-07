import { motion, type Variants } from "framer-motion";
import flowersImg from "@/assets/flowers.png";

const InvitationCard = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative flowers - top left */}
      <motion.img
        src={flowersImg}
        alt=""
        className="absolute -top-20 -left-20 w-48 h-48 object-contain opacity-80 pointer-events-none"
        initial={{ opacity: 0, x: -50, rotate: -20 }}
        animate={{ opacity: 0.8, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Decorative flowers - top right */}
      <motion.img
        src={flowersImg}
        alt=""
        className="absolute -top-16 -right-16 w-40 h-40 object-contain opacity-80 pointer-events-none scale-x-[-1]"
        initial={{ opacity: 0, x: 50, rotate: 20 }}
        animate={{ opacity: 0.8, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Decorative flowers - bottom left */}
      <motion.img
        src={flowersImg}
        alt=""
        className="absolute -bottom-16 -left-16 w-40 h-40 object-contain opacity-80 pointer-events-none rotate-180"
        initial={{ opacity: 0, x: -50, rotate: 160 }}
        animate={{ opacity: 0.8, x: 0, rotate: 180 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      {/* Decorative flowers - bottom right */}
      <motion.img
        src={flowersImg}
        alt=""
        className="absolute -bottom-20 -right-20 w-48 h-48 object-contain opacity-80 pointer-events-none rotate-180 scale-x-[-1]"
        initial={{ opacity: 0, x: 50, rotate: 200 }}
        animate={{ opacity: 0.8, x: 0, rotate: 180 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />

      {/* Main card */}
      <motion.div
        className="relative bg-ivory/90 backdrop-blur-sm rounded-lg shadow-elegant p-8 md:p-12 border border-blush-dark/20"
        variants={scaleVariants}
      >
        {/* Ornamental border */}
        <div className="absolute inset-4 border border-gold/30 rounded-lg pointer-events-none" />
        <div className="absolute inset-6 border border-gold/20 rounded-lg pointer-events-none" />

        {/* Bismillah */}
        <motion.div
          className="text-center mb-6"
          variants={itemVariants}
        >
          <p className="text-3xl md:text-4xl font-heading text-rose" style={{ fontFamily: 'serif' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </motion.div>

        {/* Arabic preamble */}
        <motion.div
          className="text-center mb-4"
          variants={itemVariants}
        >
          <p className="text-lg text-rose/80 font-heading" style={{ fontFamily: "'Amiri', serif" }}>
            أَنَّ النَّبِيَّ ﷺ كَانَ إِذَا رَفَأَ قَالَ
          </p>
        </motion.div>

        {/* English translation */}
        <motion.p
          className="text-center text-foreground font-body italic text-sm md:text-base mb-4 font-semibold"
          variants={itemVariants}
        >
          Prophet ﷺ used to say, when offering<br />
          congratulations on the occasion of marriage:
        </motion.p>



        {/* Arabic blessing */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <p className="text-xl md:text-3xl text-rose font-heading" style={{ fontFamily: "'Lateef', serif", fontWeight: 400 }}>
            بارك اللهُ لَكُما و بارك عَلَيْكُمَا وَ جَمَعَ بَيْنَكُما في خَير
          </p>
        </motion.div>

        {/* Arabic names */}
        <motion.div
          className="text-center mb-4"
          variants={itemVariants}
        >
          <p className="text-4xl md:text-5xl text-rose font-heading" style={{ fontFamily: 'serif' }}>
            فيداء كبير
          </p>
          <p className="text-4xl md:text-5xl text-rose font-heading mt-2" style={{ fontFamily: 'serif' }}>
            احمد عادل
          </p>
        </motion.div>

        {/* English names */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-lg md:text-xl font-heading tracking-widest text-foreground">
              FIDA KABEER
            </span>
            <span className="text-2xl font-display text-gold">&</span>
            <span className="text-lg md:text-xl font-heading tracking-widest text-foreground">
              AHMED ADHIL
            </span>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <div className="h-px w-16 bg-gold/50" />
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
          <div className="h-px w-16 bg-gold/50" />
        </motion.div>

        {/* Event details */}
        <motion.div
          className="text-center space-y-2"
          variants={itemVariants}
        >
          <p className="text-sm md:text-base font-heading tracking-wider text-foreground">
            MAY 28TH | 8:30PM
          </p>
          <p className="text-sm text-muted-foreground font-heading tracking-wide">
            DHUL HIJJAH 11 1447 AH
          </p>
          <p className="text-sm md:text-base font-heading tracking-wider text-foreground pt-2">
            VENUE : RADISSON BLU HOTEL DOHA
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InvitationCard;
