
import React from 'react';

const JoinOurTeam = () => {
  return (
    <section className="bg-gray-800 text-white py-20 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0v40M0 20h40" stroke="%23a0aec0" fill="none" stroke-width="1" stroke-linecap="square"/></svg>')` }}
      ></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          We’re always looking for talented individuals to join our growing team. If you’re passionate about technology and want to make an impact, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg">
            View Openings
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95">
            Contact HR
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
