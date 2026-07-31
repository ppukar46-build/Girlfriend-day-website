import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

function HeartExplosion() {
  const [hearts, setHearts] = useState([]);

  const triggerExplosion = () => {
    // Generate 25 randomized heart particles per tap
    const newHearts = Array.from({ length: 25 }, (_, index) => {
      const colors = [
        "text-pink-500",
        "text-rose-400",
        "text-pink-300",
        "text-red-500",
        "text-fuchsia-400",
      ];

      return {
        id: Date.now() + index,
        left: Math.floor(Math.random() * 80) + 10, // Horizontal start (10% to 90%)
        size: Math.floor(Math.random() * 24) + 16, // Icon size (16px to 40px)
        duration: (Math.random() * 1.5 + 1.5).toFixed(2) + "s", // 1.5s to 3s
        delay: (Math.random() * 0.2).toFixed(2) + "s", // Slight staggering
        color: colors[Math.floor(Math.random() * colors.length)],
        tx: Math.floor(Math.random() * 260 - 130) + "px", // X spread (-130px to 130px)
        ty: -(Math.floor(Math.random() * 350) + 200) + "px", // Y rise (-200px to -550px)
      };
    });

    setHearts((prev) => [...prev, ...newHearts]);
  };

  // Automatically remove particles from DOM after animation completes
  useEffect(() => {
    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts((prev) => prev.slice(25));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [hearts]);

  return (
    <section className="relative bg-[#14091f] px-6 py-20 text-center text-white overflow-hidden">
      
      {/* Soft Pink Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Theme-Matched Glassmorphism Card */}
      <div className="relative mx-auto max-w-md rounded-3xl border border-pink-500/20 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
        
        <h2 className="heading-font text-5xl text-pink-500">
          Shower With Love ❤️
        </h2>

        <p className="mt-3 text-sm text-white/80 font-light">
          Tap the button below as many times as you want!
        </p>

        {/* Vibrant Pink Pill Celebration Button */}
        <button
          onClick={triggerExplosion}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/40 transition-all hover:bg-pink-600 hover:scale-105 active:scale-95 select-none"
        >
          <FaHeart className="animate-bounce text-white" />
          <span>Send My Love</span>
          <FaHeart className="animate-bounce text-white" />
        </button>

      </div>

      {/* Floating Animated Heart Particles */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            style={{
              left: `${heart.left}%`,
              bottom: "15%",
              "--tx": heart.tx,
              "--ty": heart.ty,
              "--duration": heart.duration,
              "--delay": heart.delay,
            }}
            className={`absolute animate-heart-burst ${heart.color}`}
          >
            <FaHeart style={{ fontSize: `${heart.size}px` }} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default HeartExplosion;