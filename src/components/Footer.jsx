import React from 'react';

export default function AgeroFooter() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#dbdbdb' }}>
      <footer className="relative h-screen overflow-hidden rounded-3xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-orange-600 rounded-3xl"></div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Top Links Section */}
          <div className="max-w-7xl mx-auto w-full px-8 py-12 flex-grow">
            <div className="grid grid-cols-3 gap-16">
              {/* Navigation */}
              <div>
                <h3 className="text-gray-500 text-xs uppercase mb-4 tracking-wider">Navigation</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-white text-base hover:text-orange-400 transition-colors">About</a></li>
                  <li><a href="#works" className="text-white text-base hover:text-orange-400 transition-colors">Works</a></li>
                  <li><a href="#services" className="text-white text-base hover:text-orange-400 transition-colors">Services</a></li>
                  <li><a href="#blog" className="text-white text-base hover:text-orange-400 transition-colors">Blog</a></li>
                </ul>
              </div>
              
              {/* Social */}
              <div>
                <h3 className="text-gray-500 text-xs uppercase mb-4 tracking-wider">Social</h3>
                <ul className="space-y-3">
                  <li><a href="#twitter" className="text-white text-base hover:text-orange-400 transition-colors">Twitter(X)</a></li>
                  <li><a href="#linkedin" className="text-white text-base hover:text-orange-400 transition-colors">LinkedIn</a></li>
                  <li><a href="#dribbble" className="text-white text-base hover:text-orange-400 transition-colors">Dribbble</a></li>
                </ul>
              </div>
              
              {/* Legals */}
              <div>
                <h3 className="text-gray-500 text-xs uppercase mb-4 tracking-wider">Legals</h3>
                <ul className="space-y-3">
                  <li><a href="#privacy" className="text-white text-base hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-white text-base hover:text-orange-400 transition-colors">Term of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Large Agero Text */}
          <div className="absolute bottom-24 left-0 right-0 flex items-center justify-center">
            <h1 className="text-9xl font-bold text-white/70 tracking-tight leading-none" 
               style={{ 
                 fontSize: 'clamp(12rem, 30vw, 35rem)',
                 textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
               }}>
              Agero
            </h1>
          </div>
          
          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/10 backdrop-blur-sm border-t border-orange-500/30">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400 text-sm px-8 py-4">
              <p>© 2025 Agero. All rights reserved.</p>
              <p>London → 11:27:15</p>
              <a href="#top" className="text-orange-500 hover:text-orange-400 transition-colors">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}