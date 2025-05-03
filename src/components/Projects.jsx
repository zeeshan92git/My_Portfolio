import React from 'react';

export default function Projects() {
  const projects = [
    {
      img: './quiz.jpg',
      title: 'Quiz App',
      link: 'https://quiz-app-kappa-ecru.vercel.app'
    },
    {
      img: './rps.jpg',
      title: 'RPS Game',
      link: 'https://zeeshan92git.github.io/RPS-GAME'
    },
    {
      img: './doccure.jpg',
      title: 'DocCure Service',
      link: 'https://doccure-frontend.up.railway.app'
    },
    {
      img: './admin.jpg',
      title: 'DocCure Admin Panel',
      link: 'https://doc-admin.up.railway.app'
    }
  ];

  return (
    <section id="projects" className="w-full p-6 sm:p-10 md:p-14 overflow-x-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950">
      <div className="pt-2 mb-5 md:mb-10">
        <p className="text-lg text-neutral-100 font-extralight">
          <span className="underline decoration-0 underline-offset-4">PR</span>OJECTS
        </p>
        <p className="sm:text-5xl text-3xl font-bold text-white mt-2">Here is some of my work.</p>
        <p className="mt-3 sm:text-2xl text-neutral-100 leading-relaxed">
          Believes in progress through learning <br /> and mastery through practice.
        </p>
        <p className="mt-6 sm:mt-8 underline decoration-2 underline-offset-8 text-slate-200 hover:text-orange-500 transition">
          <a href="https://github.com/zeeshan92git" target="_blank" rel="noopener noreferrer">VISIT MY GITHUB</a>
        </p>
      </div>

      <div className="mt-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-out-down"
              className="w-full max-w-md bg-slate-800 rounded-2xl shadow-lg hover:shadow-inner hover:shadow-neutral-200 transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 sm:h-72 object-fill lg:object-cover bg-neutral-100  rounded-md"
              />
              <div className="p-6 flex flex-col justify-between flex-grow min-h-[160px]">
                <div className="flex gap-2 items-center">
                  <i className="fa fa-circle text-orange-500" aria-hidden="true"></i>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-orange-600 font-semibold w-fit hover:text-white mt-auto">
                  <p className="md:text-xl text-lg">Visit Here</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center text-lg"
                  >
                    <i className="fa fa-external-link sm:text-lg text-sm pt-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
