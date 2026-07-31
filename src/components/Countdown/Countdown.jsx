import { useEffect, useState } from "react";
import TimeCard from "./TimeCard";

function Countdown() {

  // Change this later
  const startDate = new Date("2025-01-01T00:00:00");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();

      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

      const minutes = Math.floor(diff / (1000 * 60)) % 60;

      const seconds = Math.floor(diff / 1000) % 60;

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="bg-pink-50 px-6 py-20">

      <h2 className="heading-font text-center text-5xl text-pink-500">
        Days Together ❤️
      </h2>

      <p className="mt-4 text-center text-gray-600">
        Every second with you is my favorite memory.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4">

        <TimeCard value={time.days} label="Days" />
        <TimeCard value={time.hours} label="Hours" />
        <TimeCard value={time.minutes} label="Minutes" />
        <TimeCard value={time.seconds} label="Seconds" />

      </div>

    </section>
  );
}

export default Countdown;