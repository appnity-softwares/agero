// src/components/stackscroll.jsx
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
        // initialize Lenis smooth scroll (optional)
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP animation setup
        const images = imageRefs.current;
        const total = images.length;

        if (!images[0]) return;

        // Set initial states
        gsap.set(images[0], { y: "0%", scale: 1, rotation: 0 });
        for (let i = 1; i < total; i++) {
            gsap.set(images[i], { y: "100%", scale: 1, rotation: 0 });
        }

        // Build scroll timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${window.innerHeight * (total - 1)}`,
                pin: true,
                scrub: 0.5,
            },
        });

        for (let i = 0; i < total - 1; i++) {
            tl.to(images[i], { scale: 0.7, rotation: 5, duration: 1, ease: "none" }, i);
            tl.to(images[i + 1], { y: "0%", duration: 1, ease: "none" }, i);
        }

        // Cleanup
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
        <div ref={containerRef} className="relative h-screen w-full bg-gray-900">
            <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden">
                <div className="relative h-[80%] w-full max-w-lg overflow-hidden rounded-2xl shadow-xl">
                    {cards.map((card, i) => (
                        <img
                            key={card.id}
                            src={card.image}
                            alt={card.alt}
                            className="absolute h-full w-full object-cover rounded-2xl"
                            style={{ zIndex: cards.length - i }}
                            ref={(el) => (imageRefs.current[i] = el)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackScroll;
