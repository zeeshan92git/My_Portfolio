import React from 'react';

export default function Projects() {
  const projects = [
    {
      img: './doccure.jpg',
      title: 'DocCure',
      link: 'https://doccure-ecru.vercel.app',
    },
    {
      img: './admin.jpg',
      title: 'DocCure Admin Panel',
      link: 'https://doccure-admin.vercel.app',
    },
    {
      img: './Brand.PNG',
      title: 'Brand',
      link: 'https://brand-azure.vercel.app',
    },
    {
      img: './Bnexus.PNG',
      title: 'Business Nexus',
      link: 'https://business-nexus-one.vercel.app',
    },
    {
      img: './rps.jpg',
      title: 'RPS Game',
      link: 'https://zeeshan92git.github.io/RPS-GAME',
    },
    {
      img: './wdb.PNG',
      title: 'Weather DashBoard',
      link: 'https://zeeshan92git.github.io/Weather_DashBoard',
    },
    {
      img: './quiz.jpg',
      title: 'Flag Quiz App',
      link: 'https://quiz-app-kappa-ecru.vercel.app',
    },
  ];

  return (
    <section id="projects" className="w-full py-16 px-6 sm:px-10 md:px-14 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-lg text-blue-500 font-light tracking-wide uppercase">
          <span className="underline underline-offset-4 decoration-blue-500/60">Projects</span>
        </p>
        <h2 className="sm:text-5xl text-3xl font-bold text-white mt-2">
          My Latest Work
        </h2>
        <p className="mt-3 sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          I enjoy turning ideas into reality. Each project taught me something new about design, logic, and user experience.
        </p>
        <p className="mt-6 underline decoration-2 underline-offset-8 text-slate-200">
          <a
            href="https://github.com/zeeshan92git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            VISIT MY GITHUB
          </a>
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'}
            className="group relative w-full max-w-sm bg-gray-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="w-full h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col justify-between  text-center bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent ">
              <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-3 text-blue-400 hover:text-white transition-colors"
              >
                <span className="font-medium">Visit Project</span>
                <i className="fa fa-external-link text-lg"></i>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
