import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { founder } from "../data/founderData.js";

const FounderArchitectural = () => {
    return (
        <section className="relative bg-[#f3f3f3] pt-32 md:pt-48 pb-24 overflow-hidden">
            {/* Background Subtle Label */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
                <h2 className="text-[15vw] font-black text-gray-200/50 uppercase tracking-tighter leading-none select-none">
                    Founder
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Portrait Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 shadow-2xl">
                            <img
                                src={founder.imageUrl}
                                alt={founder.name}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                            />

                            {/* Rotating Badge - Reimagined as a minimal indicator */}
                            <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden animate-[spin_10s_linear_infinite]">
                                <img src={founder.badgeUrl} alt="Badge" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Social Bar */}
                        <div className="absolute -bottom-6 right-12 bg-white px-6 py-4 shadow-xl flex gap-6 rounded-sm">
                            <Linkedin size={20} className="text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
                            <Twitter size={20} className="text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
                            <Mail size={20} className="text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <div className="mb-10">
                            <span className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Leadership</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tighter mb-4 leading-none">
                                {founder.name}
                            </h2>
                            <h3 className="text-xl md:text-2xl text-gray-400 font-medium italic">
                                {founder.title}
                            </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-lg">
                            {founder.bio}
                        </p>

                        {/* Vertical Experience Index */}
                        <div className="space-y-8 border-t border-gray-200 pt-10">
                            {founder.experience.map((exp, idx) => (
                                <div key={idx} className="flex justify-between items-start group">
                                    <div>
                                        <h4 className="font-bold text-gray-950 uppercase tracking-wider text-sm group-hover:text-orange-600 transition-colors">
                                            {exp.role}
                                        </h4>
                                    </div>
                                    <span className="text-xs font-mono text-gray-400">{exp.years}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderArchitectural;
