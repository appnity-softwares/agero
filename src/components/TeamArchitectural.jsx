import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

// Team data (reusing similar structure)
import team1 from "../assets/founder.jpeg";
import team2 from "../assets/p-main.avif";
import team3 from "../assets/team3.avif";
import team5 from "../assets/contact.avif";

const teamData = [
    { id: "01", name: "Pushpa Raj", title: "Managing Director", role: "Architecture / Strategy", image: team1 },
    { id: "02", name: "Saurabh Jain", title: "Technical Architect", role: "Systems / Engineering", image: team3 },
    { id: "03", name: "Kunal Dhariwal", title: "Experience Designer", role: "UX / Visual Narrative", image: team2 },
    { id: "04", name: "Jatin Kurrey", title: "Full Stack Lead", role: "Core Development", image: team3 },
    { id: "05", name: "Neha Mourya", title: "Head of Systems", role: "Operations / Performance", image: team5 },
];

export default function TeamArchitectural() {
    return (
        <section className="bg-[#f3f3f3] py-24 md:py-40 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-orange-600"></div>
                            <span className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em]">The Collective</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tighter leading-[0.9]">
                            Creative Minds.<br />
                            <span className="text-gray-400">Technical Soul.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-sm text-sm leading-relaxed pb-2">
                        A multidisciplinary collective of architects, designers, and engineers dedicated to building premium digital ecosystems.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group"
                        >
                            {/* Image Portrait */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-8 rounded-sm">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-orange-600 hover:text-white transition-colors cursor-pointer">
                                        <Linkedin size={18} />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-orange-600 hover:text-white transition-colors cursor-pointer">
                                        <Mail size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Meta Info */}
                            <div className="relative border-l border-gray-200 pl-6 group-hover:border-orange-600 transition-colors duration-500">
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 block">
                                    {member.role}
                                </span>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-gray-950 tracking-tight">
                                        {member.name}
                                    </h3>
                                    <ArrowUpRight size={20} className="text-gray-300 group-hover:text-orange-600 transition-colors" />
                                </div>
                                <p className="text-sm text-gray-500 mt-1 font-medium">
                                    {member.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
