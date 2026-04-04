import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import crovaImage from "../assets/crova.avif";

const FeaturedCaseStudy = () => {
    return (
        <section className="py-24 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-12"
                >
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500">
                        Featured Case Study
                    </span>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left Content - The "Formal" Part */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Scaling <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                E-commerce.
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We built Crova, a high-performance e-commerce platform designed for seamless shopping experiences and rapid scalability.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div>
                                <h4 className="text-3xl font-bold text-gray-900">+65%</h4>
                                <p className="text-sm text-gray-500 mt-1">Organic Traffic</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-gray-900">99.9%</h4>
                                <p className="text-sm text-gray-500 mt-1">Uptime</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10">
                            {["Next.js & React Powered", "Optimized Checkouts", "Real-time Inventory Sync"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium transition-all hover:bg-orange-600"
                        >
                            View Case Study
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Right Image - The "Visual" Part */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Abstract UI Mockup Placeholder */}
                            <div className="aspect-[16/10] bg-gray-100 relative group">
                                <img
                                    src={crovaImage}
                                    alt="Crova Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs"
                                >
                                    <p className="text-xs font-bold text-orange-500 mb-1 uppercase tracking-wider">Impact</p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        "Crova transformed our online presence, driving record sales within months."
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Background Elements behind image */}
                        <div className="absolute -z-10 top-10 right-10 w-full h-full bg-orange-100 rounded-3xl transform rotate-3"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;
