import reasons from "../../data/reasons";
import ReasonCard from "./ReasonCard";

function Reasons() {
  return (
    <section className="bg-pink-50 py-20 px-6">

      <h2 className="heading-font text-center text-5xl text-pink-500">
        Reasons Why I Love You ❤️
      </h2>

      <p className="mt-3 text-center text-gray-600">
        Every little thing about you is special.
      </p>

      <div className="mt-14 grid gap-6">

        {reasons.map((reason, index) => (
          <ReasonCard
            key={index}
            reason={reason}
          />
        ))}

      </div>

    </section>
  );
}

export default Reasons;