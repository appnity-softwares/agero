import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./button";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#e6e6e6] text-center px-5 mb-10">
      {/* Small orange hello text */}
      <p
        className="text-orange-500 text-2xl font-medium mb-8 font-cursive"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        (hello)
      </p>

      {/* Main heading */}
      <h1
        className="text-4xl md:text-5xl font-bold leading-tight text-black max-w-4xl font-sans"

      >
        We help fast moving digital startups <br />
        launch sharper brands and websites — <br />
        <span className="font-normal text-gray-800">
          with clarity, <span className="font-semibold text-black">speed,</span>{" "}
          <span className="text-gray-500 font-normal">and no drama.</span>
        </span>
      </h1>
      <div className="container" data-aos="fade-right"
        data-aos-delay="300" >
        {/* First row: 3 buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mt-10"

        >
          <Button name="branding01" icon="fas fa-globe" />
          <Button icon="fas fa-globe" name="Logo" />
          <Button icon="fas fa-desktop " name="Website" />

        </div>

        {/* Second row: 3 buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mt-6"

        >

          <Button name="Illustration" icon="fas fa-paint-brush" />
          <Button name="Interface" icon="fas fa-bullseye" />
          <Button name="Strategy" icon="fas fa-lightbulb" />


        </div>
      </div>
    </section>
  );
};

export default About;
