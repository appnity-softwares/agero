// Hero.jsx
import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.avif";



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
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
        Effortless{" "}
        <span className="text-orange-600 relative">
          Design
          <img
            src="/design-icon.jpg"
            alt="Design Icon"
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full object-cover -z-10 opacity-90"
          />
        </span>
        <br />
        for <span className="text-gray-800">Design Startups</span>
        <br />
        based in{" "}
        <span className="text-gray-900 relative">
          London, UK
          <img
            src="/london.jpg"
            alt="London"
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full object-cover -z-10 opacity-90"
          />
        </span>
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
