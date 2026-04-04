import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter, Globe, ArrowDown } from "lucide-react";
import { founder } from "../data/founderData.js";

const FounderEditorial = () => {
    return (
        <section className="relative bg-[#f3f3f3] pt-32 pb-12 overflow-hidden font-inter">
            {/* Editorial Marker */}
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center border-b-2 border-gray-950 pb-4">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em]">Leadership Dossier // Ver. 2025</span>
                <div className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Status: In_Office</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Portrait Column - Precise 50% split feel */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                            className="relative aspect-[3/4] overflow-hidden bg-gray-200"
                        >
                            <img
                                src={founder.imageUrl}
                                alt={founder.name}
                                className="w-full h-full object-cover grayscale brightness-110"
                            />

                            {/* Subtle tech overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                        {/* Social Links as Tag-labels */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <div className="px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
                                LinkedIn <Linkedin size={14} />
                            </div>
                            <div className="px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
                                Contact <Mail size={14} />
                            </div>
                            <div className="px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
                                X.COM <Twitter size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Text/Data Column */}
                    <div className="lg:col-span-7 flex flex-col pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-gray-950 leading-[0.8] mb-8">
                                {founder.name.split(" ")[0]} <br />
                                <span className="text-gray-300">{founder.name.split(" ")[1]}</span>
                            </h2>

                            <div className="flex flex-wrap gap-x-12 gap-y-6 mb-12">
                                <div className="flex flex-col border-l-2 border-orange-600 pl-4">
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Office Position</span>
                                    <span className="text-sm font-bold text-gray-950 uppercase mt-1">{founder.title}</span>
                                </div>
                                <div className="flex flex-col border-l-2 border-gray-200 pl-4">
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Core Focus</span>
                                    <span className="text-sm font-bold text-gray-950 uppercase mt-1">Systems Architecture</span>
                                </div>
                                <div className="flex flex-col border-l-2 border-gray-200 pl-4">
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Global HQ</span>
                                    <span className="text-sm font-bold text-gray-950 uppercase mt-1 flex items-center gap-1">India <Globe size={12} /></span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 leading-relaxed text-xl font-light italic border-l-4 border-gray-100 pl-8 py-4">
                                    "{founder.bio}"
                                </p>
                            </div>

                            {/* Technical Experience Table */}
                            <div className="mt-16 bg-white p-8 border border-gray-200">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-8">Archived Professional History</h4>
                                <div className="space-y-6">
                                    {founder.experience.map((exp, idx) => (
                                        <div key={idx} className="flex justify-between items-center group cursor-default">
                                            <span className="text-xs font-mono text-gray-400">0{idx + 1}</span>
                                            <span className="text-sm font-bold text-gray-950 uppercase tracking-wider group-hover:text-orange-600 transition-colors">
                                                {exp.role}
                                            </span>
                                            <div className="flex-grow border-b border-dotted border-gray-200 mx-4" />
                                            <span className="text-xs font-mono text-gray-500 font-bold">{exp.years}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Manual Scroll Bridge */}
            <div className="mt-24 flex justify-center">
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Scroll to Index</span>
                    <ArrowDown size={20} className="text-orange-600" />
                </motion.div>
            </div>
        </section>
    );
};

export default FounderEditorial;
