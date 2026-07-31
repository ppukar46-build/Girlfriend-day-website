import { motion } from "framer-motion";

function HeroContent() {
  const scrollToLetter = () => {
    const letterSection = document.getElementById("letter");
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heading-font text-4xl text-white"
      >
        Happy
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="heading-font text-6xl leading-none text-pink-300"
      >
        Girlfriend Day ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 max-w-xs text-white/90"
      >
        Every moment with you is my favorite part of life.
      </motion.p>

      <motion.button
        onClick={scrollToLetter}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(236,72,153,0.5)]"
      >
        ❤️ Open My Heart
      </motion.button>

    </div>
  );
}

export default HeroContent;