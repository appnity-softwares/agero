import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      id: 0,
      title: 'Web Design',
      bgText: 'Brand Design',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80',
      description: 'We create modern, responsive websites that engage users and drive results.',
      tags: ['UX/UI Design', 'Responsive Layouts', 'Web Development']
    },
    {
      id: 1,
      title: 'Brand Design',
      bgText: 'Brand Design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      description: 'We build bold, cohesive brand identities that leave a lasting impression.',
      tags: ['Visual Identity', 'Style Guides', 'Brand Strategy']
    },
    {
      id: 2,
      title: 'Logo Design',
      bgText: 'Brand Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      description: "We design clean, memorable logos that capture your brand's essence.",
      tags: ['Logo Marks', 'Wordmarks', 'Icon Design']
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2">(Services)</p>
          <h1 className="text-6xl md:text-7xl font-bold text-black">What we do</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-between items-center mb-12 border-t border-gray-400 pt-8">
          <button
            onClick={() => handleDotClick(0)}
            className={`text-base md:text-lg transition-colors ${activeIndex === 0 ? 'text-orange-500 font-medium' : 'text-gray-600'
              }`}
          >
            • Web Design
          </button>
          <button
            onClick={() => handleDotClick(1)}
            className={`text-base md:text-lg transition-colors ${activeIndex === 1 ? 'text-orange-500 font-medium' : 'text-gray-600'
              }`}
          >
            • Brand Design
          </button>
          <button
            onClick={() => handleDotClick(2)}
            className={`text-base md:text-lg transition-colors ${activeIndex === 2 ? 'text-orange-500 font-medium' : 'text-gray-600'
              }`}
          >
            • Logo Design
          </button>
        </div>

        {/* Main Content Area */}
        <div className="relative overflow-hidden">
          {/* Background Scrolling Text */}
          <div className="absolute inset-0 flex mb-32 items-center justify-center pointer-events-none overflow-hidden">
            <div className="mt-10 overflow-hidden">
              <div className="flex gap-8 items-center whitespace-nowrap animate-marquee">
                <span className="text-white text-6xl">franklin<span className="text-orange-500">@</span>agero.com</span>
                <span className="text-white/30 text-xl">×</span>
                <span className="text-white text-6xl">franklin<span className="text-orange-500">@</span>agero.com</span>
                <span className="text-white/30 text-xl">×</span>
                <span className="text-white text-6xl">franklin<span className="text-orange-500">@</span>agero.com</span>
                <span className="text-white/30 text-xl">×</span>
                <span className="text-white text-6xl">franklin<span className="text-orange-500">@</span>agero.com</span>
                <span className="text-white/30 text-xl">×</span>
                <span className="text-white text-6xl">franklin<span className="text-orange-500">@</span>agero.com</span>
                <span className="text-white/30 text-xl">×</span>
                <span className="text-white text-6xl">franklin<span className="text-orange-500">@</span>agero.com</span>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative z-10 flex items-center justify-center py-12">
            {/* Navigation Arrows */}
            {/* <button
              onClick={handlePrev}
              className="absolute left-0 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button> */}

            {/* Service Card */}
            <div className="w-full max-w-lg  mx-16">
              <div className=" rounded-3xl overflow-hidden">
                <div className="aspect-video rounded-3xl mt-24 overflow-hidden">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center ">
                  <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    {services[activeIndex].description}
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {services[activeIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-400 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}