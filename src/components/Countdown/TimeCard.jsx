function TimeCard({ value, label }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-lg">
      <h3 className="text-center text-4xl font-bold text-pink-500">
        {String(value).padStart(2, "0")}
      </h3>

      <p className="mt-2 text-center text-gray-500">
        {label}
      </p>
    </div>
  );
}

export default TimeCard;