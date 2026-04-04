import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShieldCheck, Zap, Handshake, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    id: "01",
    icon: <Zap size={24} />,
    title: "Technological Innovation",
    description: "We constantly push the boundaries of modern digital architectures to deliver cutting-edge solutions that drive progress and create long-term value.",
  },
  {
    id: "02",
    icon: <ShieldCheck size={24} />,
    title: "Structural Integrity",
    description: "Honesty and technical transparency are at the core of our engineering process. We build trust through our commitment to ethical software practices.",
  },
  {
    id: "03",
    icon: <Handshake size={24} />,
    title: "Strategic Collaboration",
    description: "We believe in the power of deep technical partnerships. By working as an extension of your team, we achieve exceptional, synchronized results.",
  },
  {
    id: "04",
    icon: <Lightbulb size={24} />,
    title: "Architectural Excellence",
    description: "We strive for the highest quality in every deployment, ensuring our solutions are not only functional but also superior in performance and design.",
  },
];

const OurValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-24 md:py-40 px-6">
      <div className="max-w-[1400px] mx-auto overflow-hidden">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gray-300"></span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">Our Core Values</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-gray-950 tracking-tighter leading-none" data-aos="fade-up">
              The Appnity <br />
              <span className="text-gray-300">Architecture.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs border-l border-gray-100 pl-8 italic">
            "Our values are the foundation on which we build digital legacies."
          </p>
        </div>

        {/* 📋 THE VERTICAL INDEX (High-End Editorial Style) */}
        <div className="flex flex-col divide-y divide-gray-100 border-t border-gray-100">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group py-12 md:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10 hover:bg-gray-50/50 transition-colors px-4 md:px-10 rounded-2xl md:rounded-none"
            >
              <div className="flex items-center gap-10 lg:w-[40%]">
                <span className="text-xl md:text-2xl font-mono text-gray-200 group-hover:text-orange-600 transition-colors duration-500">{value.id}</span>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-gray-950 group-hover:pl-4 transition-all duration-500">
                    {value.title}
                  </h3>
                </div>
              </div>

              <div className="lg:w-[45%]">
                <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="lg:w-[10%] flex justify-end">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-200 group-hover:text-orange-600 group-hover:border-orange-600 transition-all transform group-hover:rotate-45">
                  <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
