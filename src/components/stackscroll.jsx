import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import img1 from "../assets/stack1.png";
import img2 from "../assets/stack2.png";

gsap.registerPlugin(ScrollTrigger);

const StickyCardsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP animations
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 text-gray-900 bg-transparent  w-full">
      <div className="container-full mx-auto px-6">
         <div className="relative">
      {/* Main Let's Connect div */}
      <div className="h-52 bg-gray-200 flex items-center justify-center overflow-hidden relative">
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-300">
            Recent Works
          </h1>
        </div>
      </div>
      
      {/* Bottom blank div with blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-md z-10"></div>
    </div>

        <div className="flex flex-col relative -mt-20 z-10 px-6  gap-20 items-center">
          {/* Card 01 */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="sticky top-32 bg-white rounded-3xl overflow-hidden w-full  shadow-lg border border-gray-200"
          >
            <div className="relative h-[60vh]">
              <img
                src={img1}
                alt="Project 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
                <p className="text-5xl font-extrabold text-[#f8a420]">01</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#16498a]">
                  Creative Campaign
                </h3>
                <p className="text-sm mt-2 text-gray-700">
                  Showcasing modern motion design with bold visual identity.
                </p>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="sticky top-32 bg-white rounded-3xl overflow-hidden w-full  shadow-lg border border-gray-200"
          >
            <div className="relative h-[60vh]">
              <img
                src={img2}
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
                <p className="text-5xl font-extrabold text-[#f8a420]">02</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#16498a]">
                  Visual Storytelling
                </h3>
                <p className="text-sm mt-2 text-gray-700">
                  Motion and narrative crafted to inspire emotion and engagement.
                </p>
              </div>
            </div>
          </div>
            {/* Card 02 */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="sticky top-32 bg-white rounded-3xl overflow-hidden w-full  shadow-lg border border-gray-200"
          >
            <div className="relative h-[60vh]">
              <img
                src={img2}
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
                <p className="text-5xl font-extrabold text-[#f8a420]">02</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#16498a]">
                  Visual Storytelling
                </h3>
                <p className="text-sm mt-2 text-gray-700">
                  Motion and narrative crafted to inspire emotion and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCardsSection;
