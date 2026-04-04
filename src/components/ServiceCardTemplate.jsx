import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const imageVariant = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const tagsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const tagVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function ServiceCardTemplate() {
  return (
    <div className="min-h-screen bg-[#dbdbdb] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* -------------------- CARD 1 -------------------- */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariant} className="border-t border-gray-400 mb-6"></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 mb-28">
              <motion.h2 variants={cardVariant} className="text-2xl md:text-xl font-medium text-gray-700">
                Brand Design
              </motion.h2>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh] w-full"
                variants={imageVariant}
              >
                <img
                  src="https://framerusercontent.com/images/EBtg3SqsQjHY12Y56g88GlQL89c.png"
                  className="w-full h-full object-cover"
                  alt="Brand Design"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.p variants={cardVariant} className="text-gray-600 leading-relaxed mb-48 text-lg">
                From logo to language, we shape your best identity. Strategic
                brand systems that tell your story and stand strong.
              </motion.p>
            </div>
          </div>

          {/* Tags */}
          <motion.div
            className="flex justify-center gap-3 mt-8 flex-wrap lg:-ml-60"
            variants={tagsContainer}
          >
            {["UX/UI Design", "Responsive Layouts", "Web Development"].map((tag, i) => (
              <motion.span
                key={i}
                variants={tagVariant}
                className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* -------------------- CARD 2 -------------------- */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariant} className="border-t border-gray-400 mb-6"></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 mb-28">
              <motion.h2 variants={cardVariant} className="text-2xl md:text-xl font-medium text-gray-700">
                Product Design
              </motion.h2>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh] w-full"
                variants={imageVariant}
              >
                <img
                  src="https://framerusercontent.com/images/L3jNOIvjVNNJ9KYGN7ZewlhM4.png?scale-down-to=1024"
                  className="w-full h-full object-cover"
                  alt="Product Design"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.p variants={cardVariant} className="text-gray-600 leading-relaxed mb-48 text-lg">
                We design digital products that solve real problems.
                Intuitive interfaces that users love to use.
              </motion.p>
            </div>
          </div>

          {/* Tags */}
          <motion.div
            className="flex justify-center gap-3 mt-8 flex-wrap lg:-ml-60"
            variants={tagsContainer}
          >
            {["UX/UI Design", "Prototyping", "User Research"].map((tag, i) => (
              <motion.span
                key={i}
                variants={tagVariant}
                className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* -------------------- CARD 3 -------------------- */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariant} className="border-t border-gray-400 mb-6"></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 mb-28">
              <motion.h2 variants={cardVariant} className="text-2xl md:text-xl font-medium text-gray-700">
                Logo Design
              </motion.h2>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh] w-full"
                variants={imageVariant}
              >
                <img
                  src="https://framerusercontent.com/images/eKy5vm5RJn0lbHSDCifL8K7vfg.png?scale-down-to=1024"
                  className="w-full h-full object-cover"
                  alt="Logo Design"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.p variants={cardVariant} className="text-gray-600 leading-relaxed mb-48 text-lg">
                Every brand deserves a signature mark. We craft logos that are
                bold and clear. Let your brand speak without saying a word.
              </motion.p>
            </div>
          </div>

          {/* Tags */}
          <motion.div
            className="flex justify-center gap-3 mt-8 flex-wrap lg:-ml-60"
            variants={tagsContainer}
          >
            {["Vector Art", "Typography", "Branding"].map((tag, i) => (
              <motion.span
                key={i}
                variants={tagVariant}
                className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
