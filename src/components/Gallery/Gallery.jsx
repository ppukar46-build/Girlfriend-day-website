import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

function Gallery() {
  const photos = [
    {
      id: 1,
      src: "/gallery/photo1.jpeg",
      caption: "Your beautiful smile that lights up my whole world ✨",
    },
    {
      id: 2,
      src: "/gallery/photo2.jpeg",
      caption: "My favorite adventure buddy ❤️",
    },
    {
      id: 3,
      src: "/gallery/photo3.jpeg",
      caption: "Every moment with you is unforgettable 🌸",
    },
    {
      id: 4,
      src: "/gallery/photo4.jpeg",
      caption: "You look stunning effortlessly every single day 💕",
    },
    {
      id: 5,
      src: "/gallery/photo5.jpeg",
      caption: "The happiest memories of my life start with you 💖",
    },
    {
      id: 6,
      src: "/gallery/photo6.jpg",
      caption: "My forever favorite person 👑",
    },
  ];

  return (
    <section className="relative bg-[#14091f] px-6 py-20 text-white overflow-hidden">
      
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-sm">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="heading-font text-5xl text-pink-500">
            My Favorite View ❤️
          </h2>
          <p className="mt-2 text-sm font-light text-white/80">
            Swipe left or right through our favorite memories
          </p>
        </div>

        {/* Swiper Cards Deck */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          className="w-72 sm:w-80"
        >
          {photos.map((photo) => (
            <SwiperSlide
              key={photo.id}
              className="overflow-hidden rounded-3xl border border-pink-500/30 bg-[#1e0d2e] p-4 shadow-2xl backdrop-blur-xl"
            >
              {/* Photo */}
              <div className="overflow-hidden rounded-2xl aspect-square bg-black/40">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="h-full w-full object-cover select-none"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              {/* Caption Card Footer */}
              <div className="mt-4 pb-2 text-center">
                <p className="text-sm font-medium leading-relaxed text-pink-200">
                  "{photo.caption}"
                </p>
                <div className="mt-2 flex justify-center">
                  <FaHeart className="text-xs text-pink-500 animate-pulse" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Style overrides for Swiper pink pagination dots */}
      <style>{`
        .swiper-pagination-bullet {
          background: #f472b6 !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          opacity: 1;
        }
      `}</style>

    </section>
  );
}

export default Gallery;