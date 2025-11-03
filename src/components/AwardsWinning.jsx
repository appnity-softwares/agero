import React, { useState } from "react";

const awards = [
  { name: "Awwwards", title: "SOTY 2023 - 1st Winner", company: "Archin" },
  {
    name: "CSS Awards",
    title: "Top 5 Best of eCommerce Websites 2023",
    company: "VNTNR",
  },
  {
    name: "CSS Awards",
    title: "Winner - US Behance Portfolio Review 2024",
    company: "Aeorim",
  },
  {
    name: "Dribble",
    title: "Top 10 Best of Mobile App Design 2024",
    company: "Swat Co.",
  },
  {
    name: "FWA Awards",
    title: "Winner - Best of Architecture Website 2025",
    company: "Unerio",
  },
];

const AwardsWinning = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#dbdbdb] py-28 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto px-6">
        {/* Small label */}
        <p className="text-center text-[13px] text-gray-500 mb-2 tracking-wide">
          (Awards)
        </p>

        {/* Title */}
        <h2 className="text-center text-[42px] md:text-[48px] font-extrabold text-black mb-20 leading-tight">
          Awards Winning
        </h2>

        {/* Awards List */}
        <div className="border-t border-gray-400">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-3 items-center py-8 md:py-10 border-b transition-all duration-300 ${
                hoveredIndex === index
                  ? "border-orange-500"
                  : "border-gray-400"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left */}
              <span
                className={`text-left text-[16px] font-light transition-colors duration-300 ${
                  hoveredIndex === index ? "text-orange-500" : "text-gray-800"
                }`}
              >
                {award.name}
              </span>

              {/* Middle */}
              <div className="relative flex justify-center items-center">
                <span
                  className={`font-medium text-[17px] transition-colors duration-300 ${
                    hoveredIndex === index
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                >
                  {award.title}
                </span>

                {/* Orange Circle Badge */}
                {hoveredIndex === index && (
                  <div className="absolute right-[-60px] w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-lg transition-all duration-300">
                    FWA
                  </div>
                )}
              </div>

              {/* Right */}
              <span
                className={`text-right text-[15px] font-light transition-colors duration-300 ${
                  hoveredIndex === index ? "text-orange-500" : "text-gray-600"
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
