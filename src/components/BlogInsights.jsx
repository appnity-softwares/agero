import React from 'react';

export default function BlogInsights() {
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      title: 'Bridging Design & Development',
      description: 'Clean UI into seamless code',
      readTime: '2 Min Read'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1627454820516-0466ba97b5c7?w=1200&q=80',
      title: 'High-Performance Website',
      description: 'Principles dev should build with',
      readTime: '3 Min Read'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1592286927505-c82d063a6229?w=1200&q=80',
      title: 'Design That Converts',
      description: 'Strategic visuals drive results',
      readTime: '2 Min Read'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-6 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-0 left-0 right-0 text-center pointer-events-none overflow-hidden">
        <h1 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold text-gray-300 opacity-25 leading-none tracking-tight">
          Blog Insights
        </h1>
      </div>

      {/* Blog Cards Grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto pt-24 md:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Image Container - Takes most of the card */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section at Bottom */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Title & Description */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black mb-1.5 leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {blog.description}
                      </p>
                    </div>

                    {/* Right: Read Time Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-gray-700 text-white text-xs font-medium rounded-full whitespace-nowrap">
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Blog Cards Grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto pt-24 md:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Image Container - Takes most of the card */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section at Bottom */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Title & Description */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black mb-1.5 leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {blog.description}
                      </p>
                    </div>

                    {/* Right: Read Time Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-gray-700 text-white text-xs font-medium rounded-full whitespace-nowrap">
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}