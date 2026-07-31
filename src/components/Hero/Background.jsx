import background from "../../assets/images/background.png";

function Background() {
  return (
    <>
      <img
        src={background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}

export default Background;