import React from 'react';

function Hero() {
  return (
    <section className="relative  py-12 px-4 sm:px-6 md:px-12 lg:px-16 transition-colors duration-500">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-orange-400 font-semibold text-base sm:text-lg md:text-xl mb-2">Hey there 👋</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-purple-400">
              Muhammad Zeeshan Ameer
            </span>
          </h1>

          <h2 className="mb-6 flex gap-3 justify-center lg:justify-start items-center">
            <p className="animate-text-shadow text-lg sm:text-xl md:text-2xl font-medium text-white max-w-fit">
              Full Stack MERN Developer
            </p>
            <i className="fa fa-laptop text-2xl sm:text-3xl text-orange-400  mt-2" aria-hidden="true"></i>
          </h2>

          <p className=" dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-8 max-w-xl font-semibold mx-auto lg:mx-0">
            I build modern, responsive, and user-focused websites that help businesses stand out. Let's work together to bring your ideas to life!
          </p>

          <div className="flex justify-center  items-center lg:justify-start">
            <a
              href="mailto:zeeshanameer576@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Zeeshan,%0AI'm%20interested%20in%20your%20portfolio%20project.%0ALet's%20connect!"
              className="px-8 sm:px-14 py-2 sm:py-3 bg-orange-500 text-white text-base sm:text-lg rounded-full font-semibold shadow-lg hover:bg-orange-400 transition animate-scale-shadow"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">

          {/* Glowing Gradient Background */}
          <div className="absolute inset-0 rounded-full  bg-gradient-to-tl from-orange-400 via-orange-300 to-orange-400 opacity-80
           group-hover:blur-[4px] group-hover:scale-105 transition-all duration-500 z-0 shadow-xl shadow-orange-300"></div>

          {/* Centered Profile Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="./profile-img.png"
              alt="Profile"
              className="w-full h-full object-contain  rounded-full"
            />
          </div>

        </div>
      </div>


    </section>
  );
}

export default Hero;
