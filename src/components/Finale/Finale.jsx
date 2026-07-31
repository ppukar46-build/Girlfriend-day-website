import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

function Finale() {
  const [revealed, setRevealed] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Generates 25 floating heart particles
  const triggerExplosion = () => {
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
        duration: (Math.random() * 1.5 + 1.5).toFixed(2) + "s",
        delay: (Math.random() * 0.2).toFixed(2) + "s",
        color: colors[Math.floor(Math.random() * colors.length)],
        tx: Math.floor(Math.random() * 260 - 130) + "px", // X spread
        ty: -(Math.floor(Math.random() * 350) + 200) + "px", // Y rise
      };
    });

    setHearts((prev) => [...prev, ...newHearts]);
  };

  // Trigger both the message reveal and the heart burst
  const handleSurpriseClick = () => {
    setRevealed(true);
    triggerExplosion();
  };

  // Automatically clean up hearts from DOM after animation completes
  useEffect(() => {
    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts((prev) => prev.slice(25));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [hearts]);

  return (
    <section className="relative bg-[#14091f] px-6 py-24 text-center text-white overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Theme-Matched Rounded Card */}
      <div className="relative mx-auto max-w-md rounded-3xl border border-pink-500/20 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
        
        <h2 className="heading-font text-5xl text-pink-500">
          Forever & Always ❤️
        </h2>

        <p className="mt-6 text-base leading-relaxed text-white/80 font-light">
          Thank you for being my peace, my happiness, and my favorite person. 
          No matter where life takes us, my heart will always belong to you.
        </p>

        <p className="mt-4 text-sm font-medium italic text-pink-300/90">
          — Yours Forever
        </p>

        {/* Surprise Button */}
        {!revealed ? (
          <button
            onClick={handleSurpriseClick}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:bg-pink-600 hover:scale-105 active:scale-95 select-none"
          >
            <span>One Last Surprise</span>
            <FaHeart className="animate-pulse" />
          </button>
        ) : (
          <div className="mt-8 rounded-2xl border border-pink-500/40 bg-pink-500/15 p-5 transition-all">
            <p className="text-sm font-medium leading-relaxed text-pink-200">
              💖 I love you more than words could ever explain. Here's to a lifetime of memories together! 💖
            </p>

            {/* Optional mini button so she can trigger the hearts again if she wants to */}
            <button
              onClick={triggerExplosion}
              className="mt-4 inline-flex items-center gap-1 rounded-full bg-pink-500/30 px-4 py-2 text-xs font-semibold text-pink-200 transition hover:bg-pink-500/50 active:scale-95"
            >
              <FaHeart className="text-xs" />
              <span>More Hearts</span>
            </button>
          </div>
        )}

      </div>

      {/* Footer */}
      <p className="mt-12 text-xs text-white/40">
        Made with all my heart for you ✨
      </p>

      {/* Floating Animated Heart Particles Overlay */}
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

export default Finale;