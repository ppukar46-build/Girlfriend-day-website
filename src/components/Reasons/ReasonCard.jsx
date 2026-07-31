import { motion } from "framer-motion";

function ReasonCard({ reason }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-3xl bg-white p-6 shadow-lg"
    >
      <div className="text-5xl text-center">
        {reason.icon}
      </div>

      <h3 className="mt-4 text-center text-xl font-semibold text-pink-500">
        {reason.title}
      </h3>

      <p className="mt-3 text-center text-gray-600">
        {reason.text}
      </p>
    </motion.div>
  );
}

export default ReasonCard;