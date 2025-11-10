import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { color } from "framer-motion";

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      id: 0,
      title: "Web Design",
      bgText: "Web Design",
      image:
        "https://framerusercontent.com/images/EBtg3SqsQjHY12Y56g88GlQL89c.png",
      description:
        "We create modern, responsive websites that engage users and drive results.",
      tags: ["UX/UI Design", "Responsive Layouts", "Web Development"],
    },
    {
      id: 1,
      title: "Brand Design",
      bgText: "Brand Design",
      image:
        "https://framerusercontent.com/images/L3jNOIvjVNNJ9KYGN7ZewlhM4.png?scale-down-to=1024",
      description:
        "We build bold, cohesive brand identities that leave a lasting impression.",
      tags: ["Visual Identity", "Style Guides", "Brand Strategy"],
    },
    {
      id: 2,
      title: "Logo Design",
      bgText: "Logo Design",
      image:
        "https://framerusercontent.com/images/eKy5vm5RJn0lbHSDCifL8K7vfg.png?scale-down-to=1024",
      description:
        "We design clean, memorable logos that capture your brand's essence.",
      tags: ["Logo Marks", "Wordmarks", "Icon Design"],
    },
  ];

  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <div className="min-h-screen bg-[#e6e6e6] flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2 text-start mx-5">(Services)</p>
          <h1 className="text-4xl md:text-7xl mb-12 mx-5 font-bold text-black text-justify">
            What we do
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-between items-center border-t border-gray-400 pt-6    md:text-sm">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleDotClick(index)}
              className={`transition-colors duration-300 font-bold flex items-center gap-2 ${activeIndex === index
                ? "text-[#ff4d00]"
                : "text-gray-600 hover:text-black"
                }`}
            >
              {/* Show dot only when active */}
              {activeIndex === index && <span>•</span>}
              {service.title}
            </button>
          ))}
        </div>



        {/* Main Content Area */}
        <div className="relative overflow-hidden mt-8 md:mt-2">
          {/* Background Scrolling Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="relative w-full mb-56 overflow-hidden">
              {/* 🔸 Marquee Scrolling Text */}
              <div className="flex gap-10 items-center whitespace-nowrap animate-marquee font-bold">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <React.Fragment key={i}>
                      <span className="text-[#ff4d00] text-9xl font-bold">
                        {services[activeIndex].bgText}
                      </span>
                      <span className="text-gray-300 text-6xl font-light opacity-10">
                        ×
                      </span>
                    </React.Fragment>
                  ))}
              </div>

              {/* 🔹 Left Fade Overlay */}
              <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-gray-200 via-gray-200/60 to-transparent pointer-events-none" />

              {/* 🔹 Right Fade Overlay */}
              <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-gray-200 via-gray-200/60 to-transparent pointer-events-none" />
            </div>
          </div>


          {/* Carousel Container */}
          <div className="relative z-10 flex items-center justify-center py-12 md:py-16">
            {/* Service Card */}
            <div className="w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <div className="rounded-3xl overflow-hidden">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="w-full h-auto object-cover rounded-3xl transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                    {services[activeIndex].description}
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {services[activeIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2  mt-4 text-white text-xs rounded-full"
                        style={{backgroundColor:'#5c5c5c', }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<style>
  {`
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 12s linear infinite;
}
`}
</style>

