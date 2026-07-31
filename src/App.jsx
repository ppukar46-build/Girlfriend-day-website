import Hero from "./components/Hero/Hero";
import Letter from "./components/Letter/Letter";
import Timeline from "./components/Timeline/Timeline";
import Reasons from "./components/Reasons/Reasons";
import Gallery from "./components/Gallery/Gallery";
import Song from "./components/Song/Player";
import Countdown from "./components/Countdown/Countdown";
import Finale from "./components/Finale/Finale";

function App() {
  return (
    <main className="min-h-screen bg-[#14091f] text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <Hero />
      <Letter />
      <Timeline />
      <Reasons />
      
      {/* Our Memories & Her Photos */}
      <Gallery />

      <div className="py-12">
        <Song />
      </div>

      <Countdown />
      <Finale />
    </main>
  );
}

export default App;