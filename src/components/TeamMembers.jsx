import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Linkedin, Mail, Github, Compass, Terminal, Shield, ArrowRight } from "lucide-react";

// Direct Image Imports
import team1 from "../assets/founder.jpeg";
import team2 from "../assets/p-main.avif";
import team3 from "../assets/team3.avif";
import team5 from "../assets/contact.avif";

const teamData = [
    { id: "01", name: "Pushpa Raj", title: "Founder / Managing Director", image: team1, icon: <Compass className="text-orange-500" /> },
    { id: "02", name: "Saurabh Jain", title: "Chief Technical Architect", image: team3, icon: <Shield className="text-orange-500" /> },
    { id: "03", name: "Kunal Dhariwal", title: "Lead Experience Designer", image: team2, icon: <Terminal className="text-orange-500" /> },
    { id: "04", name: "Jatin Kurrey", title: "Full Stack Lead", image: team3, icon: <Compass className="text-orange-500" /> },
    { id: "05", name: "Neha Mourya", title: "Head of Systems", image: team5, icon: <Shield className="text-orange-500" /> },
];

export default function TeamMembers() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const cursorRef = useRef(null);

    // Subtle Mouse Tracking for Depth
    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 1.2,
                ease: "power2.out"
            });
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <section ref={containerRef} className="bg-[#080808] h-screen relative overflow-hidden font-inter">

            {/* 🪐 ATMOSPHERIC BACKDROP (Professional Subtle Blur) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={teamData[activeIndex].image}
                            alt="background"
                            className="w-full h-full object-cover blur-[80px] brightness-50"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 🎥 THE AMBIENT LIGHT (Subtle Fall-off) */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-10 hidden lg:block"
                style={{
                    background: "radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, transparent 60%)",
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* LEFT: THE ROSTER (Formal High-Contrast List) */}
                <div className="lg:col-span-6 flex flex-col pt-10">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.4em]">Our Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-6">
                            The Collective.<br />
                            <span className="text-white/40 italic font-medium">Architecture.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col border-t border-white/10">
                        {teamData.map((member, index) => (
                            <div
                                key={member.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                className="group relative"
                            >
                                <div className={`flex items-baseline justify-between py-6 md:py-8 border-b border-white/5 transition-all duration-500 overflow-hidden px-2`}>
                                    <div className="flex items-baseline gap-8">
                                        <span className={`font-mono text-[10px] transition-colors duration-500 ${activeIndex === index ? 'text-orange-500' : 'text-white/20'}`}>
                                            0{index + 1}
                                        </span>
                                        <h3 className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-700 ease-[0.2,1,0.3,1] ${activeIndex === index ? 'pl-4 text-white' : 'text-white/10'}`}>
                                            {member.name}
                                        </h3>
                                    </div>
                                    <ArrowRight size={24} className={`transition-all duration-500 ${activeIndex === index ? 'text-orange-500 translate-x-0 opacity-100' : 'text-white/0 -translate-x-10 opacity-0'}`} />
                                </div>

                                {/* Mobile Portal Reveal */}
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="lg:hidden p-6 bg-white/[0.02] rounded-3xl mt-4 border border-white/5"
                                        >
                                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-orange-500 font-bold text-xs uppercase tracking-widest">{member.title}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: THE FORMAL PORTAL (Sleek Glass Geometry) */}
                <div className="lg:col-span-6 hidden lg:flex justify-end pr-10">
                    <div className="relative w-full max-w-md aspect-[4/5]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                className="w-full h-full relative"
                            >
                                {/* The Frame - Formal Beveled Look */}
                                <div className="absolute inset-0 bg-[#121212] border border-white/10 rounded-[2rem] p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                                    <div className="w-full h-full rounded-[1.6rem] overflow-hidden grayscale contrast-125 brightness-110">
                                        <motion.img
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.5 }}
                                            src={teamData[activeIndex].image}
                                            alt={teamData[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Identity Details - Formal Bottom Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 p-8 rounded-[1.5rem] bg-black/40 backdrop-blur-xl border border-white/10 text-white">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.4em] mb-2">Primary Expertise</p>
                                                <h4 className="text-2xl font-bold tracking-tight">{teamData[activeIndex].title}</h4>
                                            </div>
                                            <div className="flex gap-3">
                                                <Linkedin size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
                                                <Mail size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Architectural Elements (Restrained) */}
                                <div className="absolute -top-6 -left-6 bg-white text-black px-5 py-2 rounded-full font-mono text-[10px] font-bold tracking-widest shadow-2xl">
                                    LVL. ARCHITECT
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* 🌉 DASHBOARD STATUS (Formal Tech Footer) */}
            <div className="mt-40 px-6 md:px-12 relative z-30">
                <div className="max-w-[1400px] mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-20">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">Studio Identification</span>
                            <span className="text-white/80 font-medium text-xs mt-2">Appnity Design Collective — IN</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">Network Status</span>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="w-1 h-1 rounded-full bg-orange-500 animate-ping" />
                                <span className="text-white/80 font-medium text-xs tracking-widest">CENTRALIZED_ACTIVE</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Connect with our Lead</span>
                        <div className="w-8 h-[1px] bg-white/10 hidden md:block"></div>
                        <div className="flex gap-4">
                            <Linkedin size={16} className="text-white/30 hover:text-white transition-colors" />
                            <Github size={16} className="text-white/30 hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}