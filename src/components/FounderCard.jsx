import React from "react";

const FounderSection = () => {
  return (
    <div className="relative bg-[#dbdbdb] py-20 font-inter overflow-hidden">
      {/* 🔹 Subtitle */}
      <p className="text-center text-gray-500 text-sm md:text-base tracking-wide mb-20 relative z-10">
        (intro)
      </p>

      {/* 🔹 Background Big Text */}
      <h1
        className="absolute top-[10%] left-1/2 -translate-x-1/2 
        text-[18vw] md:text-[13vw] font-bold leading-none 
        bg-gradient-to-b from-[rgba(22,22,22,0.83)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0)]
        bg-clip-text text-transparent opacity-40 z-10 whitespace-nowrap select-none"
      >
        Meet Finton
      </h1>

      {/* ✅ Custom CSS for rotating badge */}
      <style>
        {`
          @keyframes rotateInfinite {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* 🔸 Main Section */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-44 px-6 md:px-10">
        {/* Left Column - Image Card */}
        <div className="relative w-full max-w-[450px] z-20 mt-16 lg:mt-7">
          <div className="relative rounded-2xl overflow-hidden image-with-half-blur-scoped">
            <img
              src="https://framerusercontent.com/images/cdiudTEW8MSbl2008vSYXSq9ndI.png?scale-down-to=1024"
              alt="Franklin Clinton"
              className="w-[60vh] h-[74vh] md:w-[40vw] object-cover rounded-3xl"
            />
          </div>
{/* 🟢 Rotating Badge */}
<div
  className="absolute bottom-[40px] right-[-60px] w-36 h-36 rounded-full    z-30 flex items-center justify-center overflow-hidden"
  style={{
    animation: "rotateInfinite 6s linear infinite",
  }}
>
  {/* 🖼️ Rotating Badge Image */}
  <img
    src="https://framerusercontent.com/images/JpJ9ryMkQp811zxkS5X8I8Igdo.png"
    alt="Award Badge"
    className="w-full h-full object-cover rounded-full"
  />

  {/* 🔁 Rotation Animation */}
  <style>
    {`
      @keyframes rotateInfinite {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
  </style>
</div>



          {/* 🟣 Social Icons */}
          <div className="absolute bottom-6 left-6 flex space-x-3 text-gray-500 z-30">
            <a
              href="#"
              className="bg-[#302929] text-white p-2 rounded-full shadow-md flex items-center justify-center w-8 h-8"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-[#302929] text-white p-2 rounded-full shadow-md flex items-center justify-center w-8 h-8"
            >
              <i className="fab fa-dribbble"></i>
            </a>
            <a
              href="#"
              className="bg-[#302929] text-white p-2 rounded-full shadow-md flex items-center justify-center w-8 h-8"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="max-w-xl text-center py-5 px-16 lg:text-left z-20 mt-16 lg:mt-7">
          <h2 className="text-4xl font-bold text-gray-900 mb-7">The Founder</h2>
          <p className="text-gray-600 text-xl font-normal font-sans leading-7">
            Franklin Clinton is a visual designer focused on crafting bold, functional
            design systems. He works with creative teams and startups to build standout
            brands and seamless digital experiences. Based in London, he balances clarity
            with character — and enjoys experimenting with motion design and interactive
            visuals in his spare time.
          </p>

          <hr className="border-t border-gray-400 my-14 max-w-lg mx-auto lg:mx-0" />

          {/* Experience List */}
          <div className="space-y-8 text-sm">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-600">Founder at Agero</span>
              <span className="text-gray-500">2024–Now</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-600">Brand Designer at Google</span>
              <span className="text-gray-500">2023–2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-600">Web Designer at Shopify</span>
              <span className="text-gray-500">2018–2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-600">Junior Designer at Meta</span>
              <span className="text-gray-500">2015–2018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
