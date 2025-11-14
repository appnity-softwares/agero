// Hero.jsx
import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.avif";
import london from "../assets/london.png";
import starup from "../assets/startup.png";
// import designIcon from "../assets/design-icon.jpg"; // ✅ FIXED

const Hero = () => {
  return (
    <section className="bg-[#f3f3f3] text-center py-24 px-6 md:px-12 relative overflow-hidden">

      {/* Top Section - Trusted by Founders */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <div className="flex -space-x-3">
          <img
            src={p1}
            alt="Founder 1"
            className="w-8 h-8 rounded-full border border-white shadow-sm object-cover"
          />
          <img
            src={p2}
            alt="Founder 2"
            className="w-8 h-8 rounded-full border border-white shadow-sm object-cover"
          />
          <img
            src={p3}
            alt="Founder 3"
            className="w-8 h-8 rounded-full border border-white shadow-sm object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 font-medium">Trusted by founders.</p>
      </div>

      {/* Heading */}
<h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6 flex flex-col items-center gap-2">

  {/* LINE 1 */}
  <div className="flex items-center gap-3">
    <span>Effortless</span>
    <img src={p2} className="w-20 h-16 rounded-full object-cover" />
    <span className="text-orange-600">Design</span>
  </div>

  {/* LINE 2 */}
  <div className="flex items-center gap-3">
    <span className="text-gray-700">for</span>
    <img src={starup} className="w-20 h-16 rounded-full object-cover" />
    <span>Design Startups</span>
  </div>

  {/* LINE 3 */}
  <div className="flex items-center gap-3">
    <span>based in</span>
    <span className="text-gray-900 font-bold">London,</span>
    <img src={london} className="w-20 h-16 rounded-full object-cover" />
    <span>UK</span>
  </div>
</h1>


      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        We make it easy for startups to launch, grow, and scale with clean,
        conversion-focused designs — no delays, no drama.
      </p>

      {/* Button */}
      <button className="bg-[#333] text-white px-8 py-3 rounded-full shadow-md hover:bg-black transition-transform transform hover:scale-105 duration-200 flex items-center justify-center mx-auto gap-2">
        View Plans
        <span className="text-lg">→</span>
      </button>

    </section>
  );
};

export default Hero;
