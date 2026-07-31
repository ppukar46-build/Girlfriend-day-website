import Envelope from "./Envelope";

function Letter() {
  return (
    <section
      id="letter"
      className="min-h-screen bg-[#fff7fb] flex items-center justify-center px-6 py-20"
    >
      <Envelope />
    </section>
  );
}

export default Letter;