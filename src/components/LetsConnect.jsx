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
      <div className="relative h-80      flex items-center justify-center overflow-hidden">
<h1 className="text-[10rem] md:text-[13rem] lg:text-[12rem] font-bold text-center leading-none tracking-tight bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.05)_100%)] bg-clip-text text-transparent opacity-40">
  Let's Connect
</h1>

      </div>

      {/* Contact Form Section with background image */}
      <div className="relative mt-[-8rem] z-10 px-6  w-full   h-auto rounded-3xl    ">
<div
  className="bg-cover bg-center object-cover rounded-3xl relative overflow-hidden flex items-baseline justify-stretch px-28 md:px-16 py-32"
 style={{
            backgroundImage: 'url("https://framerusercontent.com/images/1sREGvYWbdhqXmijCOMUIsD7A.png?scale-down-to=2048")'
          }}
        >

        

          {/* Content */}
          <div className="relative z-10   px-2  mx-auto w-full ">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left side - Heading */}
              <div className="text-white mx-11">
                <h2 className="text-6xl font-bold   mb-11 left-0 ">
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
            
            {<div className="mt-64 flex justify-center"> 
             
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
            }
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