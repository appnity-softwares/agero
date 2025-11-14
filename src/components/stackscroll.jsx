import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// import img1 from "../assets/stack1.png";
import img2 from "../assets/stack2.png";
import img3 from "../assets/stack3.png";
// import img4 from "../assets/stack4.png";
import img5 from "../assets/stack5.png";
// import img6 from "../assets/stack6.png";

gsap.registerPlugin(ScrollTrigger);

const StickyCardsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // 🌀 Smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical-right",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 💫 GSAP scroll + fade + scale pin animation
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        if (index === cardRefs.current.length - 1) {
          gsap.set(card, { opacity: 1, scale: 1 });
        } else {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false,
              },
            })
            // .set(card, { opacity: 1, scale: 1 })
            // .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.05);
            .set(card, { opacity: 1, scale: 1 }) // initial

            // 40% scroll par rotation start
            // .to(card, { rotation: 0 }, 0)

            // 70% par rotation end (yaha rotate 180 deg example)
            .to(card, { rotation: 60, opacity: 0, scale: 0.6 }, 0.4);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#dbdbdb] overflow-hidden h-auto py-20 "
    >
      {/* ✅ Title */}
      <div className="flex justify-center items-center min-h-[22vh] relative">
        <h1
          className="absolute top-[10%] left-1/2 -translate-x-1/2 
        text-[18vw] md:text-[13vw] font-semibold leading-none 
        bg-gradient-to-b from-[rgba(22,22,22,0.83)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0)]
        bg-clip-text text-transparent opacity-40 z-10 whitespace-nowrap select-none"
        >
          Recent Works
        </h1>
      </div>

      {/* ✅ Main cards */}
      <div className="flex flex-col gap-40 py-1 ">
        {[img3, img2, img5].map((img, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="relative w-auto h-screen flex items-center justify-center"
          >
            {/* 🖼️ Blurred background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden     bg-black/60">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover scale-110 blur-[25px] opacity-80 "
              />

              {/* 🌒 LEFT SIDE DARK OVERLAY (like Agero) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

              {/* ✨ Subtle vignette depth */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,black_100%)] opacity-20"></div>
            </div>

            {/* 🌆 Centered main image card */}
            <div className="relative z-10 w-[80%] md:w-[40%] lg:w-[30%] h-[70vh] md:h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* 💬 Left text section */}
            <div className="absolute left-[12%] top-1/2 -translate-y-1/2 z-20 text-gray-200 max-w-52 hidden md:flex flex-col justify-between h-[60vh]">
              {/* ✨ Top description */}
              <p className="text-sm md:text-sm leading-relaxed opacity-80">
                We’ve collaborated with companies from diverse sectors to turn
                their visions into reality. Here’s a look at some of our
                featured work.
              </p>

              {/* ✅ Bottom section */}
              <div className="mt-auto">
                <p className="text-sm tracking-wider opacity-60 mb-2">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(3).padStart(2, "0")}
                </p>

                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                  {i % 2 === 0 ? "Aeorim" : "Montaic"}
                </h3>
              </div>
            </div>

            {/* 📋 Right side info */}
            <div className="absolute right-[20%] top-1/2 -translate-y-1/2 z-20 text-gray-200 hidden md:flex flex-col justify-between h-[60vh] text-left">
              {/* ✨ Year Section */}
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest">
                  Year
                </p>
                <p className="text-2xl font-bold text-white mt-1">2023</p>
              </div>

              {/* ✨ Role Section */}
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest">
                  Role
                </p>
                <p className="text-lg md:text-sm font-semibold text-white ">
                  Website Designer
                </p>
              </div>

              {/* ✨ Services Section */}
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest mb-2">
                  Services
                </p>
                <ul className="text-sm md:text-base leading-relaxed text-white/90 space-y-1">
                  <li>Branding</li>
                  <li>Revamp</li>
                  <li>Development</li>
                  <li>Designing</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyCardsSection;
