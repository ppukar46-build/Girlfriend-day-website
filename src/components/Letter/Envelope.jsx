import { useState } from "react";
import { motion } from "framer-motion";
import envelope from "../../assets/images/envelope.png";

function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">

      {!open && (
        <>
          <motion.img
            src={envelope}
            alt="Envelope"
            className="w-72 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
          />

          <p className="mt-4 text-pink-600 font-medium">
            💌 Tap to Open
          </p>
        </>
      )}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md"
        >
          <h2 className="heading-font text-4xl text-pink-500 text-center">
            To My Love ❤️
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Dear Love,
            <br /><br />
            Thank you for making every day brighter just by being in it.
            Every smile, every memory, and every moment with you means more
            to me than words can express.
            <br /><br />
            Happy Girlfriend Day ❤️
            <br /><br />
            Forever Yours 💖
          </p>
        </motion.div>
      )}

    </div>
  );
}

export default Envelope;