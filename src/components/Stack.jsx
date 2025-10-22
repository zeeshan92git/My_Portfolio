import React from "react";

function TechStack() {
  const techStacks = [
    ["html.png", "css.png", "js.png"],
    ["reactjs.png", "t-css.png", "bs-css.png"],
    ["next.png", "node.png", "mongodb.png"],
  ];

  const Card = ({ src }) => (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className="bg-gray-800/40 rounded-xl w-full h-28 sm:h-32 
                 flex justify-center items-center border border-gray-700/50 
                 shadow-lg shadow-indigo-900/20 hover:shadow-indigo-600/30
                 hover:scale-105 transition-all duration-300"
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src={`./${src}`}
          alt={src}
          className="max-w-[55%] max-h-[55%] object-contain hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );

  return (
    <section
      id="stack"
      className="relative w-full px-4 sm:px-10 md:px-16 py-16 sm:py-20 bg-gray-900 text-gray-100 overflow-x-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-indigo-400 tracking-widest uppercase text-sm sm:text-base font-medium">
          <span className="underline decoration-0 underline-offset-4">Tech</span>nology
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
          My Current Stacks
        </h2>
        <div className="mx-auto mt-3 w-20 h-1 bg-indigo-500 rounded"></div>
      </div>

      {/* Tech Grid */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 sm:gap-8">
        {techStacks.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-6 items-center w-full sm:flex-1"
          >
            {column.map((src, i) => (
              <Card key={i} src={src} />
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-24 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}

export default TechStack;
