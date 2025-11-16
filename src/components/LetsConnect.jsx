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
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#dbdbdb' }}
    >

      {/* BIG HEADING */}
      <div className="relative h-60 sm:h-72 md:h-96 lg:h-[28rem] flex items-center justify-center overflow-hidden">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold text-center leading-none tracking-tight bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.05)_100%)] bg-clip-text text-transparent text opacity-40">
          Let's Connect
        </h1>
      </div>

      {/* FORM SECTION */}
<div className="relative mt-[-6rem] sm:mt-[-8rem] w-auto z-10 lg:mx-3 lg:mt-[-12rem] mx-2">

  <div
    className="w-full min-h-[600px] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden 
               flex justify-center px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 md:py-32"
    style={{
      backgroundImage:
        'url("https://framerusercontent.com/images/1sREGvYWbdhqXmijCOMUIsD7A.png?scale-down-to=2048")'
    }}
  >

    {/* Inner content stays centered */}
    <div className="relative z-10 w-full max-w-[1200px] mx-auto ">

            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">

              {/* LEFT TEXT */}
              <div className="text-white px-2 sm:px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10">
                  <b>Got a project in <br />mind?</b>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  Let's make something happen together
                </p>
              </div>

              {/* RIGHT FORM */}
              <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/60 font-semibold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/60 font-semibold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Project Description
                    </label>
                    <input
                      type="text"
                      placeholder="Type Here..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/60 font-semibold text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black text-sm py-3 rounded-full hover:bg-gray-200 font-bold transition-all mt-6"
                  >
                    Send Now!
                  </button>
                </form>
              </div>
            </div>

            {/* MARQUEE */}
            <div className="mt-32 sm:mt-44 md:mt-56 flex justify-center">
              <div className="overflow-hidden relative w-full max-w-full">
                <div className="flex gap-8 items-center whitespace-nowrap animate-marquee">
                  <span className="text-white text-xl sm:text-2xl font-bold hover:text-orange-500">
                    franklin<span className="text-orange-500">@</span>agero.com
                  </span>
                  <span className="text-white/30 text-xl font-bold">×</span>
                  <span className="text-white text-xl sm:text-2xl font-bold hover:text-orange-500">
                    franklin<span className="text-orange-500">@</span>agero.com
                  </span>
                  <span className="text-white/30 text-xl font-bold">×</span>
                  <span className="text-white text-xl sm:text-2xl font-bold hover:text-orange-500">
                    franklin<span className="text-orange-500">@</span>agero.com
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
