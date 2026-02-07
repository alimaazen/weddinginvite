import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-05-28T20:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Daysss", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="flex justify-center gap-4 md:gap-8 mt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-soft px-5 py-4 md:px-8 md:py-6 border border-white/10 min-w-[70px] md:min-w-[100px]">
            <motion.span
              key={block.value}
              className="text-3xl md:text-5xl text-rose"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(block.value).padStart(2, "0")}
            </motion.span>
          </div>
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground font-semibold mt-3" style={{ fontFamily: "'Cinzel', serif" }}>
            {block.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
