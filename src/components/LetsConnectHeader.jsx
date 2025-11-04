import React from 'react';

export default function LetsConnectHeader() {
  return (
    <div className="relative">
      {/* Main Let's Connect div */}
      <div className="h-52 bg-gray-200 flex items-center justify-center overflow-hidden relative">
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-300">
            Let's Connect
          </h1>
        </div>
      </div>
      
      {/* Bottom blank div with blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-md z-10"></div>
    </div>
  );
}