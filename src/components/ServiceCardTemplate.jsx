import React from "react";

export default function ServiceCardTemplate() {
  return (
    <div className="min-h-screen bg-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* -------------------- CARD 1 -------------------- */}
        <div>
          <div className="border-t border-gray-400 mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Title */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-medium text-black">
                Web Design
              </h2>
            </div>

            {/* Image + Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-2xl">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl p-2">

                  <div className="bg-black rounded-lg overflow-hidden aspect-video">
                    <div className="relative w-full h-full">

                      {/* LEFT SIDE */}
                      <div className="absolute left-0 top-0 bottom-0 w-3/5 bg-black p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-12">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-white font-bold text-lg">
                              Rouge
                            </span>
                          </div>

                          <div className="flex gap-6 text-white text-xs">
                            <span>About</span>
                            <span>Work</span>
                            <span>Expertise</span>
                            <span>Stories</span>
                            <span>Career</span>
                          </div>

                          <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium">
                            Get in touch
                          </button>
                        </div>

                        {/* Hero */}
                        <div className="mb-8">
                          <h1 className="text-white text-3xl font-bold leading-tight mb-6">
                            We help ambitious teams design <br />
                            impactful products and <br />
                            memorable brands
                          </h1>

                          <button className="bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-medium">
                            Get started →
                          </button>
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-800 rounded-lg aspect-square overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80"
                              className="w-full h-full object-cover"
                              alt=""
                            />
                          </div>

                          <div className="bg-gray-900 rounded-lg aspect-square flex items-center justify-center">
                            <div className="grid grid-cols-8 gap-1">
                              {[...Array(64)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-1 h-1 bg-white rounded-full opacity-30"
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-br from-gray-900 to-black p-6">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-white font-bold text-sm">
                              Rouge
                            </span>
                          </div>

                          <div className="flex gap-1">
                            <div className="w-5 h-0.5 bg-white"></div>
                            <div className="w-5 h-0.5 bg-white"></div>
                            <div className="w-5 h-0.5 bg-white"></div>
                          </div>
                        </div>

                        {/* Mobile Hero */}
                        <div className="mb-6">
                          <h2 className="text-white text-sm font-bold leading-snug mb-3">
                            We help <br />
                            ambitious teams <br />
                            design impactful <br />
                            products and <br />
                            memorable brands
                          </h2>

                          <button className="bg-lime-400 text-black px-3 py-1.5 rounded-full text-xs font-medium">
                            Get started
                          </button>
                        </div>

                        {/* Mobile Images */}
                        <div className="space-y-2">
                          <div className="bg-gray-800 rounded-lg overflow-hidden h-20">
                            <img
                              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80"
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="bg-gray-900 rounded-lg h-20 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-white rounded-full border-r-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="lg:col-span-4">
              <p className="text-gray-600 text-base leading-relaxed">
                We design visually compelling, user-centric websites that blend
                creativity with functional brand from scratch.
              </p>
            </div>
          </div>

          {/* Tags */}
      
          <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-80">
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              UX/UI Design
            </span>
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Responsive Layouts
            </span>
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Web Development
            </span>
          </div>
        </div>

        {/* -------------------- CARD 2 -------------------- */}
        <div className="mt-10">
          <div className="border-t border-gray-400 mb-6"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-xl font-medium text-gray-700">
                Brand Design
              </h2>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              
                
                  <div className=" relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh]">
                    <img
                      src="https://framerusercontent.com/images/L3jNOIvjVNNJ9KYGN7ZewlhM4.png?scale-down-to=1024"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                
               
            </div>

            <div className="lg:col-span-4">
              <p className="text-gray-600 text-base leading-relaxed">
                We design visually compelling, user-centric websites that blend
                creativity with functional brand from scratch.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-80">
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              UX/UI Design
            </span>
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Responsive Layouts
            </span>
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Web Development
            </span>
          </div>
        </div>
       {/* -------------------- CARD 3 -------------------- */}
        <div className="mt-10">
          <div className="border-t border-gray-400 mb-6"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-xl font-medium text-gray-700">
                Brand Design
              </h2>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              
                
                  <div className=" relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh]">
                    <img
                      src="https://framerusercontent.com/images/eKy5vm5RJn0lbHSDCifL8K7vfg.png?scale-down-to=1024"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                
               
            </div>

            <div className="lg:col-span-4">
              <p className="text-gray-600 text-base leading-relaxed">
                We design visually compelling, user-centric websites that blend
                creativity with functional brand from scratch.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-80">
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              UX/UI Design
            </span>
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Responsive Layouts
            </span>
            <span className="px-4 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Web Development
            </span>
          </div>
        </div>
      
      </div>
    </div>
  );
}
