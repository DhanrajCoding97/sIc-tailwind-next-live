import React from "react";
import { Link } from "react-scroll";

const Hero = ({ heading, message }) => {
  return (
    <section id="hero">
      <div className="flex flex-wrap items-center justify-center min-h-screen md:h-screen lg:h-screen sm:h-screen custom-img bg-fixed bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
        <div className="p-5 text text-white z-[2] ml-5 mt-10rem">
          <h1 className="text-2xl  md:text-4xl lg:text-5xl  font-bold text-clip">
            {heading}
          </h1>
          <p className="py-4 text-xl font-bold">{message}</p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            exact="true"
            offset={-87}
            duration={500}
          >
            <a className="px-5 py-2 rounded  bg-white text-black font-bold hover:bg-emerald-400  hover:text-black transition ease-in duration-300">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
