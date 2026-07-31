import timeline from "../../data/timeline";
import TimelineCard from "./TimelineCard";

function Timeline() {
  return (
    <section className="bg-pink-50 py-20 px-6">

      <h2 className="heading-font text-center text-5xl text-pink-500">
        Our Journey ❤️
      </h2>

      <div className="relative mx-auto mt-16 max-w-md">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-pink-300"></div>

        {timeline.map((item, index) => (
          <TimelineCard key={index} item={item} />
        ))}

      </div>

    </section>
  );
}

export default Timeline;