import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 py-12 px-4 sm:px-6 md:px-12 lg:px-16 transition-colors duration-500">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-orange-600 dark:text-orange-400 font-semibold text-base sm:text-lg mb-2">Hey there 👋</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-800 dark:text-white mb-4">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-purple-500">Muhammad Zeeshan Ameer</span>
          </h1>

          <h2 className="mb-6 flex gap-3 justify-center lg:justify-start items-center">
            <p className="animate-scale-shadow text-lg sm:text-xl md:text-2xl font-medium dark:text-gray-100">
              Full Stack MERN Developer
            </p>
            <i className="fa fa-laptop text-2xl sm:text-3xl text-gray-700 dark:text-white mt-2" aria-hidden="true"></i>
          </h2>

          <p className=" dark:text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-xl font-semibold mx-auto lg:mx-0">
            I build modern, responsive, and user-focused websites that help businesses stand out. Let's work together to bring your ideas to life!
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="mailto:zeeshanameer576@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Zeeshan,%0AI'm%20interested%20in%20your%20portfolio%20project.%0ALet's%20connect!"
              className="px-6 sm:px-14 py-2 sm:py-3 bg-orange-500 text-white text-base sm:text-lg rounded-full font-semibold shadow-xl hover:bg-orange-400 transition animate-scale-shadow"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Glowing Gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-500 to-neutral-500 dark:from-orange-400 dark:to-gray-700 blur-3xl opacity-70 z-0"></div>

          {/* Profile Image */}
          <img
            src="./profile-img.png"
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-full border  dark:border-gray-700 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
