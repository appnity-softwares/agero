import React from "react";

export default function AgeroFooter() {
  return (
    <div className="min-h-screen p-4 bg-[#dbdbdb]">
      <footer className="relative h-screen overflow-hidden rounded-3xl">

        {/* ✅ Background Layer (texture) */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/PdDBhDZBbpUwCIAstL4W9sLO5M.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(1.3)",
          }}
        ></div>

        {/* ✅ Main Footer Content */}
        <div className="relative z-10 h-full w-full m-auto flex flex-col justify-between">

          {/* 🔸 Top Section - Navigation Links */}
          <div className="w-full flex justify-start px-40 py-20">
            <div className="grid grid-cols-3 gap-8 md:gap-16 lg:gap-14 text-left">

              {/* Navigation */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-4 tracking-wider">Navigation</h3>
                <ul className="space-y-2 text-xl font-bold py-3">
                  <li><a href="#about" className="text-white hover:text-orange-400 transition-colors">About</a></li>
                  <li><a href="#works" className="text-white hover:text-orange-400 transition-colors">Works</a></li>
                  <li><a href="#services" className="text-white hover:text-orange-400 transition-colors">Services</a></li>
                  <li><a href="#blog" className="text-white hover:text-orange-400 transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-4 tracking-wider">Social</h3>
                <ul className="space-y-2 text-xl font-bold py-3" >
                  <li><a href="#twitter" className="text-white hover:text-orange-400 transition-colors">Twitter(X)</a></li>
                  <li><a href="#linkedin" className="text-white hover:text-orange-400 transition-colors">LinkedIn</a></li>
                  <li><a href="#dribbble" className="text-white hover:text-orange-400 transition-colors">Dribbble</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-4 tracking-wider">Legals</h3>
                <ul className="space-y-2 text-xl font-bold py-3">
                  <li><a href="#privacy" className="text-white hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-white hover:text-orange-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>

            </div>
          </div>


          {/* 🔸 Bottom Section - Agero Image & Info */}
          <div className="relative flex flex-col items-center pb-60   rounded-3xl">

            {/* ✅ Blurry Glow Background behind image */}
            <div className="absolute inset-0 flex justify-center items-end z-0">
              <div className="w-[90%] md:w-[70%] lg:w-[90%] h-72 bg-white/10 blur-3xl rounded-3xl"></div>
            </div>
            <div className="  w-full     ">
              <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-400 text-sm  mb-72 text-center">
                <p className="flex-1 text-left">© 2025 Agero. All rights reserved.</p>
                <p className="flex-1 text-center">London — 00:55:47</p>
                <a
                  href="#top"
                  className="flex-1 text-right text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Back to top
                </a>
              </div>
            </div>
            {/* ✅ Background Agero Image with soft blur/glow */}
            <div className="absolute inset-0 z-10 flex justify-center mb-24 items-end">
              <img
                src="https://framerusercontent.com/images/sjs3fZE4r5WdP6GdjWJGvK4dPgw.png"
                alt="Agero Logo"
                className="w-[90%] md:w-[70%] lg:w-[88%] h-[90%] rounded-3xl object-contain"
              />
              <div className="backdrop-blur-sm absolute bottom-0 left-0 h-20 w-full mb-16"></div>

            </div>

  


 

          </div>


        </div>


      </footer>
    </div>
  );
}
