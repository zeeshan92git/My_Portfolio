import React from 'react';

function Hero() {
  return (
    <section className="relative py-14 px-5 sm:px-8 md:px-16 lg:px-20  text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* Image First Always */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80  rounded-full">

            <img
              src="./profile-img.png"
              alt="Profile"
              className="w-full h-full object-contain rounded-full border border-blue-500/30 hover:border-blue-500/50 shadow-lg"
            />

          </div>
        </div>



        {/* Text Content */}
        <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5">

          <p className="text-blue-400 font-semibold text-base sm:text-lg">Hey there 👋</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500">
              Muhammad Zeeshan Ameer
            </span>
          </h1>

          <div className="flex justify-center lg:justify-start items-center gap-2">
            <p className="animate-text-shadow text-lg sm:text-xl md:text-2xl font-medium text-white">
              FULL STACK MERN DEVELOPER
            </p>
            <i className="fa fa-laptop text-2xl sm:text-3xl text-indigo-400 mt-1"></i>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
            I specialize in building fast, responsive, and modern web applications that deliver value to users and clients alike.
          </p>

          <div className="flex justify-center lg:justify-start pt-2">
            <a
              href="mailto:zeeshanameer576@gmail.com?subject=Let's%20Work%20Together"
              className="px-8 sm:px-14 py-2 sm:py-3 bg-indigo-600 text-white text-base sm:text-lg rounded-full font-semibold  hover:bg-white hover:text-indigo-600 transition animate-scale-shadow"
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
