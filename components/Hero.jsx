import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <section id="hero-section">
      <div className="flex flex-wrap items-center justify-center min-h-screen md:h-screen lg:h-screen sm:h-screen custom-img bg-fixed bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
        <div className="p-5 text text-white z-[2] ml-5 mt-10rem">
          <h1 className="text-2xl  md:text-4xl lg:text-5xl  font-bold text-clip">
            {heading}
          </h1>
          <p className="py-4 text-xl font-bold">{message}</p>
          <button className="px-8 py-2 border bg-white text-black font-bold hover:bg-emerald-400 hover:text-black transition-all ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
