import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Clear, thoughtful, and fast — Franklin made the whole process effortless.",
      author: "Olivia Tran",
      role: "Creative Director, Bloom Agency",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
    },
    {
      quote: "Working with this team transformed our vision into reality beyond expectations.",
      author: "Marcus Chen",
      role: "CEO, TechVision Inc",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop"
    },
    {
      quote: "Professional, creative, and delivered exactly what we needed on time.",
      author: "Sarah Mitchell",
      role: "Marketing Director, Nexus Corp",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop"
    }
  ];

  const stats = [
    { value: "26+", label: "Finalized Projects" },
    { value: "98%", label: "Client satisfaction rate" },
    { value: "10M", label: "Gross Revenue" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Large watermark text */}
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
            testimonials
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
            <div className="space-y-12">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-6xl font-bold tracking-tight">{stat.value}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ 
                backgroundImage: `url(${testimonials[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            </div>

            <div className="relative h-full flex flex-col justify-between p-10">
              {/* Slide counter */}
              <div className="text-white/80 text-sm font-medium">
                {String(currentSlide + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>

              {/* Quote content */}
              <div className="space-y-6">
                <blockquote className="text-white text-2xl md:text-3xl font-semibold leading-relaxed">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                
                <div className="text-white/90">
                  <div className="font-semibold text-lg">{testimonials[currentSlide].author}</div>
                  <div className="text-white/70 text-sm">{testimonials[currentSlide].role}</div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

