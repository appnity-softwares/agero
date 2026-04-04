import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "../data/portfolioData";
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function PortfolioCarousel() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolio);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const categories = ["All", ...new Set(portfolio.map(item => item.category))];

  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? portfolio
        : portfolio.filter((item) => item.category === activeCategory);

    setFilteredProjects(filtered);
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-scroll
  useEffect(() => {
    if (isHovered || filteredProjects.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [filteredProjects, isHovered]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);

  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );

  const currentProject = filteredProjects[activeIndex];
  if (!currentProject) return null;

  return (
    <div className="relative min-h-screen bg-[#f3f3f3] flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-8 overflow-hidden font-sans">

      {/* ------------------------------------------------------------------ */}
      {/* 🔮 BACKGROUND EFFECTS (Light Mode) */}
      {/* ------------------------------------------------------------------ */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Soft Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* ------------------------------------------------------------------ */}
        {/* 🏷️ HEADER SECTION */}
        {/* ------------------------------------------------------------------ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-mono text-gray-500 tracking-wider uppercase">Project Archive</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Works</span>
          </h2>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 🗂️ CATEGORY TABS */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 🖼️ IMMERSIVE CARD CAROUSEL (Light Mode) */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="w-full relative flex items-center justify-center gap-6 md:gap-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls - Left */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex p-4 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 hover:text-black transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Main Card Container */}
          <div className="w-full max-w-6xl relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50"
              >

                {/* Left: Full-Bleed Image (7 Columns) */}
                <div className="md:col-span-7 relative h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10 md:hidden" />
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />

                  {/* Floating Tech Badge (Mobile Only) */}
                  <div className="absolute bottom-4 left-4 z-20 md:hidden">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur border border-gray-200 text-gray-900 text-xs font-mono rounded-md">
                      {currentProject.category}
                    </span>
                  </div>
                </div>

                {/* Right: Technical Details (5 Columns) */}
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between relative bg-white">
                  {/* Subtle Grid Texture for Text Area */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(45deg,#000000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-mono font-bold uppercase tracking-wider rounded-md">
                        {currentProject.category}
                      </span>
                      <div className="h-px flex-grow bg-gray-200"></div>
                      <span className="text-gray-400 text-xs font-mono">0{activeIndex + 1} / 0{filteredProjects.length}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                      {currentProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-50 border border-gray-200/60 text-gray-600 text-xs font-mono rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <a
                      href={currentProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white hover:bg-orange-600 rounded-xl font-bold transition-all duration-300 group shadow-lg shadow-gray-200"
                    >
                      <span>View Live</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    <button className="px-6 py-4 flex items-center justify-center border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Right */}
          <button
            onClick={nextSlide}
            className="hidden lg:flex p-4 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 hover:text-black transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 📍 PROGRESS BARS */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex gap-2 mt-10">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 
                ${idx === activeIndex
                  ? "w-12 bg-orange-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
