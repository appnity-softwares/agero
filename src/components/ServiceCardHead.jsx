import React from 'react';
import { motion } from 'framer-motion';

const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const letterAnimation = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
};

const ServiceCardHead = () => {
  const text = "What we do";

  return (
    <div className="bg-[#dbdbdb] py-20 px-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="mb-10 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-black overflow-hidden flex flex-wrap justify-center md:justify-start gap-2"
            variants={letterContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterAnimation}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="mt-4 h-1 w-24 bg-black rounded-full mx-auto md:mx-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCardHead;
