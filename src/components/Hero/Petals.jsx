import { motion } from "framer-motion";

const petals = [
  { left: "10%", delay: 0 },
  { left: "30%", delay: 1 },
  { left: "50%", delay: 2 },
  { left: "70%", delay: 3 },
  { left: "90%", delay: 4 },
];

function Petals() {
  return (
    <>
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute top-0 text-xl"
          style={{ left: petal.left }}
          animate={{
            y: ["-10%", "110vh"],
            rotate: [0, 180, 360],
            x: [0, -20, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}

export default Petals;