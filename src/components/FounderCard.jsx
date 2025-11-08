import { div } from 'framer-motion/client';
import React from 'react';

const FounderCard = () => {
  return (
    // Is outer div mein aap koi margin/padding de sakte hain agar aapko is card ko
    // apne page par position karna hai. Abhi yeh card khud apni styling sambhalega.
    <div >
       <div className="flex justify-center items-center min-h-[22vh] relative top-48">
          <h1 className="text-[10vw] font-bold text-center leading-none text-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.05)_100%)] bg-clip-text text-transparent opacity-40">
            Meet Finton
          </h1>
        </div>

      <div className="bg-gray-50 shad py-12 flex justify-center "> {/* Added background color and padding for the entire section */}

      

        <div className="flex justify-center py-16 px-4 relative "> {/* Added a wrapper div for centering just this card */}

          <div className="relative w-full max-w-sm lg:max-w-md left bg-white rounded-3xl shadow-xl overflow-hidden p-4 font-inter"> {/* Added font-inter here */}
            {/* New div to apply blur effect to the image */}



            <div className="relative rounded-2xl overflow-hidden image-with-half-blur-scoped"> {/* Renamed custom class */}
              <img
                src="https://framerusercontent.com/images/cdiudTEW8MSbl2008vSYXSq9ndI.png?scale-down-to=1024"
                alt="Franklin Clinton"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2.5 shadow-lg border border-gray-200 z-10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-transparent flex flex-col items-center justify-center text-gray-600 text-center text-[0.6rem] leading-tight font-semibold uppercase tracking-wider space-y-1">
                <span>Designer</span>
                <span>- Since 2020 -</span>
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-xs">
                  <span className="text-gray-500">◎</span>
                </div>
                <span>Winning Award</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-8 left-8 flex space-x-3 text-gray-500 z-10">
              <a href="#" className="bg-white p-2 rounded-full shadow-md flex items-center justify-center w-8 h-8 text-sm">X</a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md flex items-center justify-center w-8 h-8 text-sm">🌐</a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md flex items-center justify-center w-8 h-8 text-sm">📸</a>
            </div>
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:px-8 font-inter flex justify-center"> {/* Added font-inter and centering */}
          <div className="max-w-xl text-gray-800 text-center lg:text-left"> {/* Max width for content, text alignment */}
            {/* Bio Header */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Founder</h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Franklin Clinton is a visual designer focused on crafting bold, functional design systems. He works
                with creative teams and startups to build standout brands and seamless digital experiences. Based in
                London, he balances clarity with character — and enjoys experimenting with motion design and
                interactive visuals in his spare time.
              </p>
            </div>

            {/* Divider Line */}
            <hr className="border-t border-gray-300 my-8 mx-auto lg:mx-0 max-w-lg" /> {/* mx-auto for centering on small screens */}

            {/* Experience List */}
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">Founder at Agero</span>
                <span className="text-gray-600">2024-Now</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">Brand Designer at Google</span>
                <span className="text-gray-600">2023-2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">Web Designer at Shopify</span>
                <span className="text-gray-600">2018-2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">Junior Designer at Meta</span>
                <span className="text-gray-600">2015-2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;