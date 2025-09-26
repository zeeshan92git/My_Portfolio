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
      className="bg-gray-200/90 rounded-lg sm:w-full w-3/4 h-28 sm:h-32 
                 flex justify-center items-center shadow-lg shadow-gray-400/50 
                 hover:scale-105 transition-transform duration-300"
    >
      <a href="#" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
        <img
          src={`./${src}`}
          alt={src}
          className="max-w-[60%] max-h-[60%] object-contain"
        />
      </a>
    </div>
  );

  return (
    <section id="stack" className="w-full p-6 sm:p-10 md:p-14 overflow-x-hidden overflow-y-hidden">
      {/* Heading */}
      <div className="pt-2 mb-7 md:mb-10">
        <p className="text-lg text-blue-600 font-extralight">
          <span className="underline decoration-0 underline-offset-4">TECH</span>NOLOGY
        </p>
        <p className="sm:text-5xl text-3xl font-bold text-white mt-2">My Current Stacks</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
        {techStacks.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-6 place-items-center w-full max-w-[300px]">
            {column.map((src, i) => (
              <Card key={i} src={src} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
