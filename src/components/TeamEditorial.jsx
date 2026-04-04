import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight, Plus, Minus } from "lucide-react";

// Team data
import team1 from "../assets/founder.jpeg";
import team2 from "../assets/p-main.avif";
import team3 from "../assets/team3.avif";
import team5 from "../assets/contact.avif";

const teamData = [
    {
        id: "01",
        name: "Pushpa Raj",
        title: "Chief Technical Architect",
        dept: "Architecture & Strategy",
        exp: "12+ Yrs",
        image: team1,
        skills: ["Cloud Architecture", "System Design", "Strategic Planning", "Scalability"],
        bio: "Visionary leader focused on building high-performance digital ecosystems and scalable technical foundations."
    },
    {
        id: "02",
        name: "Saurabh Jain",
        title: "Senior Technical Architect",
        dept: "Systems Engineering",
        exp: "8+ Yrs",
        image: team3,
        skills: ["Backend Infrastructure", "Node.js", "Kubernetes", "Database Optimization"],
        bio: "Expert in distributed systems and performance-critical infrastructure development."
    },
    {
        id: "03",
        name: "Kunal Dhariwal",
        title: "Lead Experience Designer",
        dept: "Product Design",
        exp: "6+ Yrs",
        image: team2,
        skills: ["UX Research", "Visual Systems", "Interaction Design", "Figma"],
        bio: "Passionate about creating intuitive user journeys and emotionally resonant digital experiences."
    },
    {
        id: "04",
        name: "Jatin Kurrey",
        title: "Full Stack Lead",
        dept: "Core Development",
        exp: "5+ Yrs",
        image: team3,
        skills: ["React/Next.js", "Prisma", "Typescript", "API Design"],
        bio: "Focused on bridging the gap between sophisticated design and robust code."
    },
    {
        id: "05",
        name: "Neha Mourya",
        title: "Head of Systems",
        dept: "Operations",
        exp: "7+ Yrs",
        image: team5,
        skills: ["DevOps", "CI/CD", "Performance Monitoring", "AWS"],
        bio: "Ensures operational excellence and high availability across all studio deployments."
    },
];

export default function TeamEditorial() {
    const [hoveredMember, setHoveredMember] = useState(null);
    const [expandedMember, setExpandedMember] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="bg-[#f3f3f3] py-24 md:py-40 px-6 font-inter min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-24 border-b border-gray-200 pb-12 overflow-hidden">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">The Directory / Collective</span>
                        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6">
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-gray-950">
                                Staffing <span className="text-gray-300">Index</span>
                            </h2>
                            <p className="text-gray-500 font-mono text-xs uppercase">Total Records: {teamData.length} / Global Presence</p>
                        </div>
                    </motion.div>
                </div>

                {/* Directory Table */}
                <div className="flex flex-col relative">

                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 py-4 px-6 border-b border-gray-950/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-4">Full Name / Profile</div>
                        <div className="col-span-3">Department</div>
                        <div className="col-span-3">Title / Seniority</div>
                        <div className="col-span-1 text-right">Records</div>
                    </div>

                    {/* Table Rows */}
                    {teamData.map((member) => (
                        <div key={member.id} className="relative">
                            <div
                                onMouseEnter={() => setHoveredMember(member)}
                                onMouseLeave={() => setHoveredMember(null)}
                                onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                                className={`
                  grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-10 px-6 cursor-pointer border-b border-gray-200 transition-all duration-300 group
                  ${hoveredMember?.id === member.id ? 'bg-white shadow-sm scale-[1.01] z-10' : 'bg-transparent'}
                  ${expandedMember === member.id ? 'bg-white border-orange-600/20' : ''}
                `}
                            >
                                {/* ID */}
                                <div className="col-span-1 flex items-center">
                                    <span className={`font-mono text-xs ${hoveredMember?.id === member.id ? 'text-orange-600' : 'text-gray-400'}`}>
                                        [{member.id}]
                                    </span>
                                </div>

                                {/* Name */}
                                <div className="col-span-4 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-950 tracking-tight group-hover:pl-2 transition-all duration-300">
                                        {member.name}
                                    </h3>
                                </div>

                                {/* Department */}
                                <div className="col-span-3 flex items-center md:items-baseline flex-col md:flex-row gap-2">
                                    <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wide">
                                        {member.dept}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="col-span-3 flex flex-col justify-center">
                                    <p className="text-sm text-gray-600 font-medium">{member.title}</p>
                                    <span className="text-[10px] text-gray-400 uppercase mt-1">{member.exp}</span>
                                </div>

                                {/* Status/Icon */}
                                <div className="col-span-1 flex items-center justify-end">
                                    {expandedMember === member.id ? (
                                        <Minus size={20} className="text-orange-600" />
                                    ) : (
                                        <Plus size={20} className="text-gray-300 group-hover:text-orange-600 transition-colors" />
                                    )}
                                </div>

                                {/* Row Left Border Highlight */}
                                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-orange-600 transition-transform duration-500 origin-top
                  ${hoveredMember?.id === member.id ? 'scale-y-100' : 'scale-y-0'}
                `} />
                            </div>

                            {/* Expansion Profile Section */}
                            <AnimatePresence>
                                {expandedMember === member.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                        className="overflow-hidden bg-white px-6 md:px-20 border-b border-gray-200"
                                    >
                                        <div className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                                            {/* Detailed Bio */}
                                            <div>
                                                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-6">Staff Profile / Bio</span>
                                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic">
                                                    "{member.bio}"
                                                </p>

                                                <div className="mt-10 flex gap-4">
                                                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-950 border-b border-gray-950 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                                                        LinkedIn <Linkedin size={14} />
                                                    </a>
                                                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-950 border-b border-gray-950 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                                                        Connect <Mail size={14} />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Technical Stack */}
                                            <div className="space-y-8">
                                                <div>
                                                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-4">Core Competencies</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {member.skills.map((skill, i) => (
                                                            <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-[10px] uppercase font-mono tracking-tighter">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-8 border-t border-gray-100">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Global Status</span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                            <span className="text-[10px] font-bold text-gray-950 uppercase tracking-widest">Active_Operational</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    {/* Floating Portrait Portal */}
                    <AnimatePresence>
                        {hoveredMember && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: mousePos.x + 20,
                                    y: mousePos.y - 150
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
                                className="fixed pointer-events-none z-[100] w-[280px] h-[350px] rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                            >
                                <img
                                    src={hoveredMember.image}
                                    alt={hoveredMember.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.3em] mb-1">{hoveredMember.dept}</p>
                                    <h4 className="text-xl font-bold tracking-tight">{hoveredMember.name}</h4>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Global Footer Stats Line */}
                <div className="mt-32 border-t-2 border-gray-950 flex flex-col md:flex-row justify-between items-center py-8 gap-4">
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Index Version 4.0.1 // Appnity Collective</p>
                    <div className="flex gap-10">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-bold text-orange-600 uppercase">Latency</span>
                            <span className="text-xs font-mono font-bold">0.02ms</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-bold text-orange-600 uppercase">Network</span>
                            <span className="text-xs font-mono font-bold">10Gbps</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
