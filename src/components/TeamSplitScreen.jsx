import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

// Data sources
import team1 from "../assets/founder.jpeg";
import team2 from "../assets/p-main.avif";
import team3 from "../assets/team3.avif";
import team5 from "../assets/contact.avif";

const teamData = [
    {
        id: "01",
        name: "Pushpa Raj",
        title: "Chief Technical Architect",
        role: "Studio Principal",
        image: team1,
        bio: "Setting the technical vision for Appnity, leading the design and implementation of high-performance digital ecosystems. Focuses on bridging architectural precision with creative expression.",
        details: [
            { label: "Focus", value: "Systems & Strategy" },
            { label: "Experience", value: "12+ Years" },
            { label: "Location", value: "India" }
        ],
        expertise: ["Cloud Systems", "Product Strategy", "Design Systems"]
    },
    {
        id: "02",
        name: "Saurabh Jain",
        title: "Senior Technical Architect",
        role: "Engineering Lead",
        image: team3,
        bio: "Mastering complex backend infrastructures and ensuring robust system scalability. Specializes in performance optimization and distributed computing architectures.",
        details: [
            { label: "Focus", value: "Core Systems" },
            { label: "Experience", value: "8+ Years" },
            { label: "Location", value: "India" }
        ],
        expertise: ["Node.js", "Kubernetes", "Architecture"]
    },
    {
        id: "03",
        name: "Kunal Dhariwal",
        title: "Lead Experience Designer",
        role: "Creative Narrative",
        image: team2,
        bio: "Crafting digital journeys that resonate emotionally and function flawlessly. Dedicated to the pursuit of minimalist beauty and intuitive interaction design.",
        details: [
            { label: "Focus", value: "Visual UX" },
            { label: "Experience", value: "6+ Years" },
            { label: "Location", value: "India" }
        ],
        expertise: ["UX Research", "Framer", "Visual Narratives"]
    },
    {
        id: "04",
        name: "Jatin Kurrey",
        title: "Full Stack Lead",
        role: "Implementation Master",
        image: team3,
        bio: "Orchestrating the synergy between technical depth and frontend elegance. Expert in turning ambitious design visions into production-ready full-stack applications.",
        details: [
            { label: "Focus", value: "Advanced Dev" },
            { label: "Experience", value: "5+ Years" },
            { label: "Location", value: "India" }
        ],
        expertise: ["Next.js", "System Logic", "Typescript"]
    },
    {
        id: "05",
        name: "Neha Mourya",
        title: "Head of Systems",
        role: "Operations Lead",
        image: team5,
        bio: "Ensuring operational excellence and high availability across all studio deployments. Overseeing the seamless integration of systems and process automation.",
        details: [
            { label: "Focus", value: "Performance" },
            { label: "Experience", value: "7+ Years" },
            { label: "Location", value: "India" }
        ],
        expertise: ["DevOps", "CI/CD", "AWS"]
    },
];

const MemberSection = ({ member, index, setActiveIndex }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div ref={ref} className="min-h-[90vh] flex flex-col justify-center py-20 md:py-32 mb-20 last:mb-96">
            <div className="max-w-md">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block"
                >
                    Member {member.id} // Portfolio
                </motion.span>

                {/* Mobile Image Fallback */}
                <div className="lg:hidden w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-200 mb-10 shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <div className="overflow-hidden mb-4">
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tighter leading-none"
                    >
                        {member.name.split(" ")[0]} <br />
                        <span className="text-gray-300">{member.name.split(" ")[1]}</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 font-medium italic text-xl mb-10"
                >
                    {member.title}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 leading-relaxed text-lg mb-12"
                >
                    {member.bio}
                </motion.p>

                {/* Data Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 gap-6 mb-12 border-t border-gray-200 pt-8"
                >
                    {member.details.map((detail, i) => (
                        <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest">{detail.label}</span>
                            <span className="text-sm font-bold text-gray-950 uppercase">{detail.value}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Expertise Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {member.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 border border-gray-200 text-[10px] uppercase font-bold text-gray-500 tracking-tighter">
                            {skill}
                        </span>
                    ))}
                </motion.div>

                {/* Links */}
                <div className="flex gap-6">
                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-950 border-b border-gray-950 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                        LinkedIn <ArrowUpRight size={14} />
                    </a>
                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-950 border-b border-gray-950 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                        Contact <Mail size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function TeamSplitScreen() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#f3f3f3] relative pb-20">
            <div className="flex flex-col lg:flex-row">

                {/* LEFT SIDE: STICKY PORTRAIT */}
                <div className="hidden lg:block lg:w-1/2 h-screen sticky top-0 overflow-hidden px-10">
                    <div className="w-full h-full relative border-[1px] border-gray-200 shadow-2xl rounded-sm overflow-hidden bg-gray-100">
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.div
                                key={activeIndex}
                                initial={{ y: "100%", filter: "grayscale(100%)" }}
                                animate={{ y: 0, filter: "grayscale(0%)" }}
                                exit={{ y: "-100%", filter: "grayscale(100%)" }}
                                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                className="w-full h-full absolute inset-0"
                            >
                                <motion.img
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    src={teamData[activeIndex].image}
                                    alt={teamData[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                                {/* Floating Meta Label */}
                                <div className="absolute bottom-12 left-12 overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="h-[1px] w-8 bg-orange-600"></div>
                                            <span className="text-white text-[10px] font-mono uppercase tracking-[0.5em] opacity-70">Staff Archive / Domain</span>
                                        </div>
                                        <h3 className="text-white text-5xl font-black uppercase tracking-tight leading-none">{teamData[activeIndex].role}</h3>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Minimal Inner Frame */}
                        <div className="absolute inset-4 border border-white/10 pointer-events-none z-40" />
                    </div>
                </div>

                {/* RIGHT SIDE: SCROLLABLE CONTENT */}
                <div className="flex-1 px-8 md:px-20 lg:pl-32">
                    {/* Section Intro */}
                    <div className="min-h-[70vh] flex flex-col justify-center">
                        <div className="max-w-2xl">
                            <div className="w-12 h-1 h-1 bg-orange-600 mb-8"></div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                                The <br /> Collective <br /> <span className="text-gray-300">Portraits</span>
                            </h1>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                                A curated narrative of the architects and engineers behind Appnity's digital vision.
                            </p>
                        </div>
                    </div>

                    {/* Team Members List */}
                    {teamData.map((member, index) => (
                        <MemberSection
                            key={member.id}
                            member={member}
                            index={index}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>

            </div>

            {/* Global Progress Line */}
            <div className="fixed bottom-0 left-0 h-1 bg-orange-600 z-[100] transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / teamData.length) * 100}%`, height: '2px' }} />
        </section>
    );
}
