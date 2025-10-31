import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      once: true,    // run animation only once
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#e6e6e6] text-center px-6">
      {/* Small orange hello text */}
      <p className="text-orange-500 text-xl font-medium mb-2">(hello)</p>

      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black max-w-4xl">
        We help fast moving digital startups <br />
        launch sharper brands and websites — <br />
        <span className="font-normal text-gray-800">
          with clarity, <span className="font-semibold text-black">speed,</span>{" "}
          <span className="text-gray-500 font-normal">and no drama.</span>
        </span>
      </h1>

      {/* Buttons row */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <button
          className="px-5 py-2 bg-gray-500 text-white rounded-full flex items-center gap-2 hover:bg-black transition"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fas fa-plus"></i> Branding
        </button>

        <button
          className="px-5 py-2 bg-gray-600 text-white rounded-full flex items-center gap-2 hover:bg-black transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className="fas fa-globe"></i> Logo
        </button>

        <button
          className="px-5 py-2 bg-gray-500 text-white rounded-full flex items-center gap-2 hover:bg-black transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fas fa-laptop-code"></i> Website
        </button>

        <button
          className="px-5 py-2 bg-gray-500 text-white rounded-full flex items-center gap-2 hover:bg-black transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <i className="fas fa-paint-brush"></i> Illustration
        </button>

        <button
          className="px-5 py-2 bg-gray-500 text-white rounded-full flex items-center gap-2 hover:bg-black transition"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <i className="fas fa-bullseye"></i> Strategy
        </button>
      </div>
    </section>
  );
};

export default About;
