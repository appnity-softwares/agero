import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import stack1 from "../assets/stack1.png";
import stack2 from "../assets/stack2.png";
import stack3 from "../assets/stack3.png";

gsap.registerPlugin(ScrollTrigger);

const StackScroll = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Smooth scroll with Lenis
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP + ScrollTrigger setup
    const images = imageRefs.current;
    const total = images.length;

    if (!images[0]) return;

    // Set initial state for all images
    images.forEach((img, i) => {
      gsap.set(img, {
        yPercent: i === 0 ? 0 : 120,
        rotationX: i === 0 ? 0 : -45,
        scale: i === 0 ? 1 : 0.9,
        opacity: 1,
      });
    });

    // Scroll animation with tilt and spacing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * total * 1.2}`,
        pin: true,
        scrub: 1.2,
      },
    });

    for (let i = 0; i < total - 1; i++) {
      // Move current card up and tilt away
      tl.to(images[i], {
        yPercent: -80,
        rotationX: 45,
        scale: 0.85,
        ease: "power3.inOut",
        duration: 1.2,
      });

      // Add a small distance/pause between transitions
      tl.to({}, { duration: 0.3 });

      // Bring next image up with a smooth entry
      tl.to(
        images[i + 1],
        {
          yPercent: 0,
          rotationX: 0,
          scale: 1,
          ease: "power3.out",
          duration: 1.2,
        },
        "<"
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  const cards = [
    { id: 1, image: stack1, alt: "Stack 1" },
    { id: 2, image: stack2, alt: "Stack 2" },
    { id: 3, image: stack3, alt: "Stack 3" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (imageRefs.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              zIndex: cards.length - i,
              perspective: "1500px",
            }}
          >
            {/* 🔹 Blurred full background */}
           <div
  className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl opacity-70 transition-all duration-500"
  style={{
    backgroundImage: `url(${card.image})`,
    transform: "scale(1)", // remove scaling
    borderRadius: "0px",   // ensure sharp edges
    clipPath: "inset(0)",  // force clean edges (no blur bleed)
  }}
></div>


            {/* 🔹 Focused Foreground Card */}
            <div className="relative w-[298px] h-[398px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-white/10 bg-black/20 backdrop-blur-sm">
              <img
                src={card.image}
                alt={card.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackScroll;
