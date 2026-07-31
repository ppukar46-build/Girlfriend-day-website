import Background from "./Background";
import HeroContent from "./HeroContent";
import FloatingHearts from "./FloatingHearts";
import ScrollIndicator from "./ScrollIndicator";
import Petals from "./Petals";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Background />

      <FloatingHearts />

      <Petals />

      <HeroContent />

      <ScrollIndicator />

    </section>
  );
}

export default Hero;