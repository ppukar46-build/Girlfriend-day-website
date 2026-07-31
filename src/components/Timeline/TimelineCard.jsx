import { motion } from "framer-motion";

function TimelineCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative pl-12 pb-10"
    >
      {/* Pink Dot */}
      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-xl shadow-lg">
        {item.icon}
      </div>

      <p className="text-sm text-pink-500">{item.date}</p>

      <h3 className="mt-1 text-xl font-semibold text-pink-600">
        {item.title}
      </h3>

      <p className="mt-2 text-gray-600">
        {item.text}
      </p>
    </motion.div>
  );
}

export default TimelineCard;