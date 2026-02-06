import { motion } from "framer-motion";
import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 8,
      size: 15 + Math.random() * 25,
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: -50,
          }}
          initial={{ y: -100, rotate: 0, opacity: 0 }}
          animate={{
            y: "100vh",
            rotate: petal.rotate + 360,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-rose-light"
          >
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
