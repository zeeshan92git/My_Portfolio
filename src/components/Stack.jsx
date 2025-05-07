import React from 'react';

function TechStack() {
  return (
    <>
      <section id='stack' className='w-full  p-6 sm:p-10 md:p-14 overflow-x-hidden overflow-visible '>
        
        <div className='pt-2 mb-7 md:mb-10  '>
          <p className="text-lg text-neutral-200 font-extralight">
            <span className="underline decoration-0 underline-offset-4">TECH</span>NOLOGY
          </p>
          <p className="sm:text-5xl text-3xl font-bold text-white mt-2">My Current Stacks</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 justify-items-center">
          {/* COLUMN 1 */}
          <div data-aos="zoom-in" className="flex flex-col gap-6 items-center w-full max-w-[300px]">
            {["html.png", "css.png", "js.png"].map((src, i) => (
              <div key={i} className="bg-white rounded-lg  sm:w-full w-3/4  md:p-10 p-6  flex justify-center items-center  shadow-md shadow-slate-300">
                <a href="#" target='_blank' rel='noopener noreferrer'>
                  <img src={`./${src}`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain " alt={src} />
                </a>
              </div>
            ))}
          </div>

          {/* COLUMN 2 */}
          <div data-aos="zoom-in" className="flex flex-col gap-6 items-center w-full max-w-[300px]">
            {["react.png", "t-css.png", "bs-css.jpeg"].map((src, i) => (
              <div key={i} className="bg-white rounded-lg  sm:w-full w-3/4  md:p-10 p-6 flex justify-center items-center  shadow-md shadow-slate-300">
                <a href="#" target='_blank' rel='noopener noreferrer'>
                  <img src={`./${src}`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" alt={src} />
                </a>
              </div>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div data-aos="zoom-in" className="flex flex-col gap-6 items-center w-full max-w-[300px]">
            {["next.png", "node.png", "mongodb.png"].map((src, i) => (
              <div key={i} className="bg-white rounded-lg  sm:w-full w-3/4  md:p-10 p-6  flex justify-center items-center  shadow-md shadow-slate-300">
                <a href="#" target='_blank' rel='noopener noreferrer'>
                  <img src={`./${src}`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain " alt={src} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  )
}
export default TechStack;
