import React from "react";

export default function AgeroFooter() {
  return (
    <div className="min-h-screen p-8 bg-[#dbdbdb]">
      <footer className="relative h-screen overflow-hidden rounded-3xl">


        {/* ✅ Background Layer 2 (texture overlay) */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl "
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/PdDBhDZBbpUwCIAstL4W9sLO5M.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(1.3)",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#ff4500]/70 rounded-3xl"></div>

        {/* Glow & blur overlay for depth */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px] rounded-3xl"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="max-w-7xl mx-auto w-full px-8 py-16">
            <div className="grid grid-cols-3 gap-16">

              {/* Navigation Section */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-4 tracking-wider">Navigation</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-white text-base hover:text-orange-400 transition-colors">About</a></li>
                  <li><a href="#works" className="text-white text-base hover:text-orange-400 transition-colors">Works</a></li>
                  <li><a href="#services" className="text-white text-base hover:text-orange-400 transition-colors">Services</a></li>
                  <li><a href="#blog" className="text-white text-base hover:text-orange-400 transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Social Section */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-4 tracking-wider">Social</h3>
                <ul className="space-y-3">
                  <li><a href="#twitter" className="text-white text-base hover:text-orange-400 transition-colors">Twitter(X)</a></li>
                  <li><a href="#linkedin" className="text-white text-base hover:text-orange-400 transition-colors">LinkedIn</a></li>
                  <li><a href="#dribbble" className="text-white text-base hover:text-orange-400 transition-colors">Dribbble</a></li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-4 tracking-wider">Legals</h3>
                <ul className="space-y-3">
                  <li><a href="#privacy" className="text-white text-base hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-white text-base hover:text-orange-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* ✅ Footer Bottom Section */}
          <div className="relative flex flex-col items-center   pb-80">
            <div className="w-full mb-6 rounded-full  mx-auto">
              {/* ✅ Bottom Bar */}
              <div className="relative bottom-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-300 text-sm px-4 py-4 text-center">
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
            </div>
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/sjs3fZE4r5WdP6GdjWJGvK4dPgw.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.9) contrast(1.05)",
            }}
          ></div>

          </div>

        </div>
      </footer>
    </div>
  );
}
