import React from 'react'

const ServiceCardTemplate = () => {
  return (
    <div>
       <div className="min-h-screen bg-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Divider */}
        <div className="border-t border-gray-400 mb-12"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-medium text-black">
              Web Design
            </h2>
          </div>

          {/* Center Column - Device Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* MacBook Frame */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl p-2">
                {/* Screen */}
                <div className="bg-black rounded-lg overflow-hidden aspect-video">
                  {/* Website Content */}
                  <div className="relative w-full h-full">
                    {/* Left Panel - Desktop View */}
                    <div className="absolute left-0 top-0 bottom-0 w-3/5 bg-black p-8">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-white font-bold text-lg">Rouge</span>
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

                      {/* Hero Text */}
                      <div className="mb-8">
                        <h1 className="text-white text-3xl font-bold leading-tight mb-6">
                          We help ambitious teams design<br/>
                          impactful products and<br/>
                          memorable brands
                        </h1>
                        <button className="bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-lime-300 transition-colors">
                          Get started →
                        </button>
                      </div>

                      {/* Image Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 rounded-lg aspect-square overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80" 
                            alt="Work 1" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="bg-gray-900 rounded-lg aspect-square flex items-center justify-center">
                          <div className="grid grid-cols-8 gap-1">
                            {[...Array(64)].map((_, i) => (
                              <div key={i} className="w-1 h-1 bg-white rounded-full opacity-30"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - Mobile View */}
                    <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-br from-gray-900 to-black p-6">
                      {/* Mobile Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-white font-bold text-sm">Rouge</span>
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
                          We help<br/>
                          ambitious teams<br/>
                          design impactful<br/>
                          products and<br/>
                          memorable<br/>
                          brands
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
                            alt="Mobile 1" 
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

          {/* Right Column - Description */}
          <div className="lg:col-span-3">
            <p className="text-gray-600 text-base leading-relaxed">
              We design visually compelling, user-centric website that blend creativity with functional brand from scratch.
            </p>
          </div>
        </div>
        

        {/* Tags */}
        <div className="flex justify-center gap-3 mt-12 flex-wrap">
          <span className="px-5 py-2.5 bg-gray-700 text-white text-sm rounded-full font-medium">
            UX/UI Design
          </span>
          <span className="px-5 py-2.5 bg-gray-700 text-white text-sm rounded-full font-medium">
            Responsive Layouts
          </span>
          <span className="px-5 py-2.5 bg-gray-700 text-white text-sm rounded-full font-medium">
            Web Development
          </span>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default ServiceCardTemplate
