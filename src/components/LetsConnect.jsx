import React, { useState } from 'react';

export default function LetsConnect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#dbdbdb' }}>

      {/* Main Let's Connect header */}
      <div className="relative h-52 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
        <h1 className="text-9xl font-bold text-gray-400/80">
          Let's Connect
        </h1>
      </div>
      
      {/* Contact Form Section with background image */}
      <div className="relative -mt-20 z-10 px-6  rounded-xl">
        <div 
          className="max-w-7xl mx-auto  py-16 px-16 bg-cover rounded-xl bg-center relative overflow-hidden"
          style={{
            backgroundImage: 'url("https://framerusercontent.com/images/1sREGvYWbdhqXmijCOMUIsD7A.png?scale-down-to=2048")'
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left side - Heading */}
            <div className="text-white">
              <h2 className="text-6xl font-bold leading-tight mb-4">
                Got a project in<br />mind?
              </h2>
              <p className="text-gray-400 text-base font-light">
                Let's make something happen together
              </p>
            </div>
            
            {/* Right side - Form */}
            <div className="flex justify-end">
              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                <div>
                  <label className="block text-white text-sm font-normal mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/60 transition-colors text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-normal mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter the Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/60 transition-colors text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-normal mb-2">Project Description</label>
                  <input
                    type="text"
                    placeholder="Type Here..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/60 transition-colors text-sm"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black font-normal text-sm py-3 rounded-full hover:bg-gray-200 transition-all mt-8"
                >
                  Send Now!
                </button>
              </form>
            </div>
          </div>
          
          {/* Email marquee at bottom */}
          <div className="mt-20 overflow-hidden">
            <div className="flex gap-8 items-center whitespace-nowrap animate-marquee">
              <span className="text-white text-2xl">franklin<span className="text-orange-500">@</span>agero.com</span>
              <span className="text-white/30 text-xl">×</span>
              <span className="text-white text-2xl">franklin<span className="text-orange-500">@</span>agero.com</span>
              <span className="text-white/30 text-xl">×</span>
              <span className="text-white text-2xl">franklin<span className="text-orange-500">@</span>agero.com</span>
              <span className="text-white/30 text-xl">×</span>
              <span className="text-white text-2xl">franklin<span className="text-orange-500">@</span>agero.com</span>
              <span className="text-white/30 text-xl">×</span>
              <span className="text-white text-2xl">franklin<span className="text-orange-500">@</span>agero.com</span>
              <span className="text-white/30 text-xl">×</span>
              <span className="text-white text-2xl">franklin<span className="text-orange-500">@</span>agero.com</span>
            </div>
          </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}