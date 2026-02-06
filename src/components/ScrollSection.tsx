import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollSection = ({ children, className = "", delay = 0 }: ScrollSectionProps) => {
  return (
    <motion.section
      className={`min-h-screen flex items-center justify-center px-6 py-16 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
