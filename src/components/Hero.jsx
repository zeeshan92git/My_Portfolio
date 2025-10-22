import React from 'react';

function Hero() {
  return (
    <section className="relative py-14 px-5 sm:px-8 md:px-16 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
        
        {/* Image */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
            <img
              src="./profile-img.png"
              alt="Profile"
              className="w-full h-full object-contain rounded-full border-4 border-indigo-500/50 hover:border-indigo-500 transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5">
          <p className="text-indigo-400 font-semibold text-base sm:text-lg">Hey there 👋</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500">Muhammad Zeeshan Ameer</span>
          </h1>
          <div className="flex justify-center lg:justify-start items-center gap-2">
            <p className="animate-text-glow text-lg sm:text-xl md:text-2xl font-medium text-white">
              FULL STACK MERN DEVELOPER
            </p>
            <i className="fa fa-laptop text-2xl sm:text-3xl text-indigo-400 mt-1"></i>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
            I specialize in building fast, responsive, and modern web applications that deliver value to users and clients alike.
          </p>
          <div className="flex justify-center lg:justify-start pt-2">
            <a
              href="mailto:zeeshanameer576@gmail.com?subject=Let%27s%20Work%20Together"
              className="px-8 sm:px-14 py-3 bg-indigo-600 text-white text-base sm:text-lg rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
