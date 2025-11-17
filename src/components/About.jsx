import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./button";
import ScrollWordReveal from "./effect/ParagraphColorFade";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#dbdbdb] text-center px-5 py-20 md:py-32 mb-20">

      {/* Small orange hello text */}
      <p
        className="text-orange-600 text-2xl md:text-3xl font-normal mb-6 md:mb-8 font-cursive"
        data-aos="fade-right"
      >
        (hello)
      </p>

      {/* Main heading */}

<ScrollWordReveal
  text="Effortless Design for Startups based in London UK"
  className="text-5xl font-bold leading-tight"
/>
      <h1
        data-aos="fade-up"
        className="text-[8vw] md:text-5xl lg:text-6xl font-bold leading-tight text-black max-w-4xl font-sans"
      >
        We help fast moving digital startups <br />
        launch sharper brands and websites — <br />
        <span className="font-normal text-gray-800">
          with clarity, <span className="font-semibold text-black">speed,</span>{" "}
          <span className="text-gray-500 font-normal">and no drama.</span>
        </span>
      </h1>

      {/* Buttons Container */}
      <div
        className="mt-10 md:mt-14 w-full max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* First row */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button name="Branding01" icon="fas fa-globe" />
          <Button name="Logo" icon="fas fa-globe" />
          <Button name="Website" icon="fas fa-desktop" />
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Button name="Illustration" icon="fas fa-paint-brush" />
          <Button name="Interface" icon="fas fa-bullseye" />
          <Button name="Strategy" icon="fas fa-lightbulb" />
        </div>
      </div>
    </section>
  );
};

export default About;
