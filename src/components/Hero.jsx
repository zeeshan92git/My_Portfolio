import React from 'react';

function Hero() {
  return (
    <section className="relative py-14 px-5 sm:px-8 md:px-16 lg:px-20  text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* Image First Always */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group">

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 via-yellow-300 to-orange-400 opacity-90
          skew-y-12  group-hover:-skew-y-12 transition-all duration-500 z-0 shadow-2xl shadow-orange-500/30
          flex items-center justify-center overflow-hidden">

              <img
                src="./profile-img.png"
                alt="Profile"
                className="w-[90%] h-[90%] object-contain rounded-full"
              />
            </div>

          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5">

          <p className="text-orange-400 font-semibold text-base sm:text-lg">Hey there 👋</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-purple-400">
              Muhammad Zeeshan Ameer
            </span>
          </h1>

          <div className="flex justify-center lg:justify-start items-center gap-2">
            <p className="animate-text-shadow text-lg sm:text-xl md:text-2xl font-medium">
              Full Stack MERN Developer
            </p>
            <i className="fa fa-laptop text-2xl sm:text-3xl text-orange-400 mt-1"></i>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
            I specialize in building fast, responsive, and modern web applications that deliver value to users and clients alike.
          </p>

          <div className="flex justify-center lg:justify-start pt-2">
            <a
              href="mailto:zeeshanameer576@gmail.com?subject=Let's%20Work%20Together"
              className="px-8 sm:px-14 py-2 sm:py-3 bg-orange-500 text-white text-base sm:text-lg rounded-full font-semibold shadow-lg hover:bg-orange-400 transition animate-scale-shadow"
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
