import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.avif";
import london from "../assets/london.png";
import starup from "../assets/startup.png";
import BlurText from "./effect/BlurText.jsx";  // ya correct path


const Hero = () => {
  return (
    <section className="bg-[#f3f3f3] text-center py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      {/* Top Section */}
      <div className="flex justify-center items-center gap-3 mb-6 sm:mb-8">
        <div className="flex -space-x-2 sm:-space-x-3">
          <img src={p1} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" />
          <img src={p2} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" />
          <img src={p3} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 font-medium">Trusted by founders.</p>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6 flex flex-col items-center gap-3">
{/* LINE 1 */}
<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
  {/* <span>Effortless</span> */}
  <BlurText
  text="Effortless "
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
  animateBy="words"
  direction="top"
/>

  {/* Image only on big screens */}
  <img
    src={p2}
    className="hidden sm:block w-20 h-16 rounded-full object-cover"
  />

  <span className="text-orange-600"><BlurText
  text="Design "
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
  animateBy="words"
  direction="top"
/></span>
</div>

{/* LINE 2 */}
<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
  <span className="text-gray-700">for</span>

  {/* Image only on big screens */}
  <img
    src={starup}
    className="hidden sm:block w-20 h-16 rounded-full object-cover"
  />

  <span><BlurText
  text="Design Startups"
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
  animateBy="words"
  direction="top"
/></span>
</div>

{/* LINE 3 */}
<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
  <span><BlurText
  text="based in"
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
  animateBy="words"
  direction="top"
/>
</span>
  <span className="text-gray-900 font-bold"><BlurText
  text="London,"
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
  animateBy="words"
  direction="top"
/>
</span>

  {/* Image only on big screens */}
  <img
    src={london}
    className="hidden sm:block w-20 h-16 rounded-full object-cover"
  />

  <span><BlurText
  text="UK"
  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
  animateBy="words"
  direction="top"
/>
</span>
</div>

      </h1>

      {/* Description */}
      <p className="max-w-xl sm:max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 px-2">
        We make it easy for startups to launch, grow, and scale with clean,
        conversion-focused designs — no delays, no drama.
      </p>

      {/* Button */}
      <button className="bg-[#333] text-white px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-black transition-all hover:scale-105 duration-200 flex items-center justify-center mx-auto gap-2">
        View Plans <span className="text-lg">→</span>
      </button>

    </section>
  );
};

export default Hero;
