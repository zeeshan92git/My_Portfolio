import React from 'react';

function About() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-14 py-10 sm:py-14  " id="about">

      <div className="flex flex-col gap-1 items-start mb-8">
        <p className="text-lg text-neutral-200 font-extralight">
          <span className="underline decoration-0 underline-offset-4">INT</span>RODUCTION
        </p>

        <p className="sm:text-5xl text-3xl font-bold text-white mt-2 ">
          Know more about me
        </p>
      </div>

      <div className="w-full md:w-4/5 lg:w-2/3">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-neutral-300 leading-relaxed ">
          Hello! My name is <span className="font-bold text-neutral-200">ZEESHAN AMEER</span>, and I am currently studying at Punjab University College of Information and Technology(NC), 
          Lahore, as part of the BS Software Engineering Batch (2023-2027).  I completed a MERN Stack Full-Stack Development course from Nexus Berry Training and Solutions Centre.
          I've worked on several small projects and continue to build and improve my skills. I am dedicated, curious, and always excited to grow as a developer in both web and mobile
           application development.

        </p>
        <p className="mt-6 sm:mt-10 underline decoration-2 underline-offset-8 text-slate-200 hover:text-orange-500 transition">
          <a href="./My_Resume.pdf" download>
            DOWNLOAD RESUME
          </a>
        </p>

      </div>
    </section>
  );
}

export default About;
