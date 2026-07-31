import { motion } from "framer-motion";
import heart from "../../assets/images/heart.png";

function FloatingHearts() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.img
          key={i}
          src={heart}
          alt=""
          className="absolute bottom-0 w-5"
          style={{ left: `${10 + i * 10}%` }}
          animate={{
            y: [0, -600],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            delay: i * 0.4,
          }}
        />
      ))}
    </>
  );
}

export default FloatingHearts;