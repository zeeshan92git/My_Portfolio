import React from 'react';

export default function Projects() {

  const projects = [
    {
      img: './doccure.jpg',
      title: 'DocCure',
      link: 'https://doccure-ecru.vercel.app'
    },
    {
      img: './admin.jpg',
      title: 'DocCure Admin Panel',
      link: 'https://doccure-admin.vercel.app'
    },
    {
      img: './Brand.PNG',
      title: 'Brand',
      link: 'https://brand-azure.vercel.app'
    },
    {
      img: './Bnexus.PNG',
      title: 'Business Nexus',
      link: 'https://business-nexus-one.vercel.app'
    },
    {
      img: './rps.jpg',
      title: 'RPS Game',
      link: 'https://zeeshan92git.github.io/RPS-GAME'
    },
    {
      img: './wdb.PNG',
      title: 'Weather DashBoard',
      link: 'https://zeeshan92git.github.io/Weather_DashBoard'
    },
    {
      img: './quiz.jpg',
      title: 'Flag Quiz App',
      link: 'https://quiz-app-kappa-ecru.vercel.app'
    }
  ];

  return (
    <section id="projects" className="w-full p-6 sm:p-10 md:p-14 overflow-x-hidden">
      <div className="pt-2 mb-5 md:mb-10">
        <p className="text-lg text-blue-500 font-extralight">
          <span className="underline decoration-0 underline-offset-4">PR</span>OJECTS
        </p>
        <p className="sm:text-5xl text-3xl font-bold text-white mt-2">Here is some of my work.</p>
        <p className="mt-3 sm:text-2xl text-neutral-100 leading-relaxed">
          Believes in progress through learning <br /> and mastery through practice.
        </p>
        <p className="mt-6 sm:mt-8 underline decoration-2 underline-offset-8 text-slate-200 ">
          <a href="https://github.com/zeeshan92git" target="_blank" rel="noopener noreferrer" className='hover:text-indigo-500 transition'>VISIT MY GITHUB</a>
        </p>
      </div>

      <div className="mt-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={index%2 == 0 ? `zoom-in-right` : `zoom-in-left`}
              className="w-full max-w-sm bg-gray-700 rounded-xl shadow-inner  shadow-neutral-300 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 sm:h-60 md:h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fa fa-circle text-blue-500 text-xs" aria-hidden="true"></i>
                  <h3 className="text-lg md:text-xl font-semibold italic text-white">{project.title}</h3>
                </div>

                <div className="mt-auto flex items-center gap-2 text-white hover:text-blue-500 cursor-pointer font-medium transition">
                  <p className="text-base md:text-lg">Visit Here</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg pt-1"
                  >
                    <i className="fa fa-external-link" aria-hidden="true"></i>
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
