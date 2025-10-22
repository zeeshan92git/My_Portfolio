import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full px-5 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-24 bg-gray-900 text-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded mb-3"></div>

          <p className="text-lg leading-relaxed text-gray-300">
            I'm <strong className="text-white">Muhammad Zeeshan Ameer</strong>, a
            passionate <span className="text-indigo-400 font-semibold">Full Stack Developer</span> 
            dedicated to building creative and efficient web applications.
            I focus on transforming ideas into high-quality, responsive, and user-friendly digital experiences.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I am currently pursuing my BS Software Engineering from 
            <span className="text-indigo-400 font-medium"> Punjab University College of Information and Technology (New Campus)</span>, 
            and have completed a MERN Stack Development course from Nexus Berry Training & Solutions Centre.
          </p>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Tech Stack I Work With
            </h3>
            <div className="flex flex-wrap gap-3 text-sm sm:text-base">
              {[
                "C#",
                "ASP.NET Core",
                "JavaScript (ES6+)",
                "React.js",
                "Node.js",
                "MongoDB",
                "SQL Server",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div className="pt-6">
            <a
              href="./Zeeshan_Ameer.pdf"
              download
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
