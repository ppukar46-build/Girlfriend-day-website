import Player from "./Player";

function Song() {
  return (
    <section className="bg-[#2b0f34] py-20 px-6">

      <h2 className="heading-font text-center text-5xl text-pink-300">
        Our Song 🎵
      </h2>

      <p className="mt-3 text-center text-white/70">
        Every time I hear this, I think of you.
      </p>

      <div className="mt-12">
        <Player />
      </div>

    </section>
  );
}

export default Song;