import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolioData";

export default function StickyProjectJourney() {
    const containerRef = useRef(null);

    // We map over our projects to create sections
    // Note: For a "real" implementation, ensure you have enough vertical space
    // or useScroll tracking per section. Here we do a simple stack.

    return (
        <div ref={containerRef} className="bg-[#f3f3f3] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20">

                {/* Section Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="w-12 h-[2px] bg-orange-500"></span>
                        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
                            Our Journey
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        Crafting Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                            Excellence.
                        </span>
                    </motion.h2>
                </div>

                {/* Sticky Cards Container */}
                <div className="flex flex-col gap-32">
                    {portfolio.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
}

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="sticky top-24 min-h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
        >
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                {/* Background Number */}
                <span className="absolute top-6 left-6 text-9xl font-bold text-gray-50 opacity-[0.05] pointer-events-none select-none">
                    0{index + 1}
                </span>

                <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider rounded-full border border-orange-100">
                            {project.category}
                        </span>
                        {project.technologies.slice(0, 2).map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group"
                        >
                            View Case Study
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Side */}
            <div className="lg:w-1/2 bg-gray-100 relative h-[300px] lg:h-auto overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 lg:hidden"></div>
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        </motion.div>
    );
};
