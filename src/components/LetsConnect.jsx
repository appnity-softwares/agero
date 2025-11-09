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
    <div className="relative min-h-screen overflow-hidden  " style={{ backgroundColor: '#dbdbdb' }}>

      {/* Main Let's Connect header */}
      <div className="relative h-40   flex items-center justify-center overflow-hidden">
   <h1
    className=" relative top-[12%] left-1/2 -translate-x-1/2
    text-[10rem] md:text-[10rem] lg:text-[12rem] font-bold 
    tracking-tight leading-[0.85]
    bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.05)_100%)] 
    bg-clip-text text-transparent
    opacity-35 select-none z-0 pointer-events-none bg-white/30 backdrop-blur-sm"
    
  >
    Let's Connect
  </h1>
      </div>

      {/* Contact Form Section with background image */}
      <div className="relative mt-1 z-10 px-6  rounded-3xl   w-full ">
        <div
          className="w-full h-[100vh] md:h-[85vh] mx-auto bg-cover bg-center rounded-3xl relative overflow-hidden flex items-cente justify-stretch px-28 md:px-16 py-16"
          style={{
            backgroundImage: 'url("https://framerusercontent.com/images/1sREGvYWbdhqXmijCOMUIsD7A.png?scale-down-to=2048")'
          }}
        >

          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>


          {/* Content */}
          <div className="relative z-10 py-16  mx-auto">
            <div className="grid md:grid-cols-2 gap-12  ">
              {/* Left side - Heading */}
              <div className="text-white mx-11">
                <h2 className="text-5xl font-bold   mb-4 left-0">
                  Got a project in<br />mind?
                </h2>
                <p className="text-gray-400 text-base font-light">
                  Let's make something happen together
                </p>
              </div>

              {/* Right side - Form */}
              <div className="flex justify-center ">
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                  <div>
                    <label className="block text-white text-sm font-normal mb-2 ">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 pb-5 text-white placeholder-gray-500 focus:outline-none focus:border-white/60 font-bold transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-normal mb-4">Your Email</label>
                    <input
                      type="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/60 transition-colors font-bold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm text-normal mb-9 mt-8">Project Description</label>
                    <input
                      type="text"
                      placeholder="Type Here..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/60 transition-colors font-bold text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black text-normal text-sm py-3 rounded-full hover:bg-gray-200  font-bold transition-all mt-8"
                  >
                    Send Now!
                  </button>
                </form>
              </div>
            </div>

            {/* Email marquee at bottom */}
{/* Email marquee at bottom */}
<div className="mt-20 flex justify-center">
  {/* Limit marquee width to half screen */}
  <div className="will-auto overflow-hidden relative">
    <div className="flex gap-8 items-center whitespace-nowrap animate-marquee text-bold">
      <span className="text-white text-2xl font-bold hover:text-orange-500">franklin<span className="text-orange-500">@</span>agero.com</span>
      <span className="text-white/30 text-xl font-bold">×</span>
      <span className="text-white text-2xl font-bold hover:text-orange-500">franklin<span className="text-orange-500">@</span>agero.com</span>
      <span className="text-white/30 text-xl">×</span>
      <span className="text-white text-2xl font-bold hover:text-orange-500">franklin<span className="text-orange-500">@</span>agero.com</span>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

<style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`}</style>
    </div>
  );
}