import React, { useState } from "react";

const awards = [

  {
    name: "Awwwards",
    title: "SOTY 2023 - 1st Winner",
    company: "Archin",
    images: [
   "https://framerusercontent.com/images/37rQg0jsNt3doVASSt8Gtsts.svg",


    ],
  },
  {
    name: "CSS Awards",
    title: "Top 5 Best of eCommerce Websites 2023",
    company: "VNTNR",
    images: [
      "https://framerusercontent.com/images/71Dh7U3QdOb9yYiFfJnt78pe30A.svg",
      ,
    ],
  },
  {
    name: "CSS Awards",
    title: "Winner - US Behance Portfolio Review 2024",
    company: "Aeorim",

    images: [
       "https://framerusercontent.com/images/9Th1qGLYST6YJYL0sXOf5Clc9r0.svg",
      ,
    ],
  },
  {
    name: "Dribble",
    title: "Top 10 Best of Mobile App Design 2024",
    company: "Swat Co.",
    images: [
      "https://framerusercontent.com/images/rw5cnTgSCNnxr9gI5TfShYvFJ9M.svg",

    ],
  },
  {
    name: "FWA Awards",
    title: "Winner - Best of Architecture Website 2025",
    company: "Unerio",
    images: [
      "https://framerusercontent.com/images/37rQg0jsNt3doVASSt8Gtsts.svg",

    ],
  },
];

const AwardsWinning = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#dbdbdb] py-28 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-6">
        {/* Small label */}
        <p className="text-center text-[13px] text-gray-500 mb-2 tracking-wide">
          (Awards)
        </p>

        {/* Title */}
        <h2 className="text-center text-[42px] md:text-[60px] font-extrabold text-black mb-20 leading-tight">
          Awards Winning
        </h2>

        {/* Awards List */}
        <div className="border-t border-gray-700">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-3 items-center py-6 md:py-8 border-b transition-all duration-300 ${hoveredIndex === index ? "border-orange-500" : "border-gray-400"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left */}
              <span
                className={`text-left text-[15px] font-light transition-colors duration-300 ${hoveredIndex === index ? "text-orange-500" : "text-gray-600"
                  }`}
              >
                {award.name}
              </span>

              {/* Middle */}
              <div className="relative flex justify-center items-center">
                <span
                  className={`font-medium text-[17px] transition-colors duration-300 ${hoveredIndex === index ? "text-orange-500" : "text-gray-800"
                    }`}
                >
                  {award.title}
                </span>

                {/* Hover Image Container */}
                {hoveredIndex === index && (
                  <div className="absolute right-[-90px] bottom-[12px] bg-orange-600 rounded-full p-2  flex gap-4 items-center justify-center shadow-lg transition-all duration-300">
                    {award.images.map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={`${award.name}-${i}`}
                        className="w-16 h-16 rounded-full p-2 object-contain  "
                      />
                    ))}
                  </div>

                )}
              </div>

              {/* Right */}
              <span
                className={`text-right text-[15px] font-light transition-colors duration-300 ${hoveredIndex === index ? "text-orange-500" : "text-gray-600"
                  }`}
              >
                {award.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsWinning;
