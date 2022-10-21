import { React, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = ({ heading, message }) => {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      id="hero"
    >
      <div className="flex flex-wrap items-center justify-center min-h-screen md:h-screen lg:h-screen sm:h-screen bg-fixed bg-cover bg-center custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 min-h-screen right-0 bottom-0 bg-black/40 z-[1]" />
        <motion.div className="p-5 text text-white z-[2] ml-5 mt-10rem">
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
            <motion.button
              className="px-5 py-2 rounded  bg-white text-black font-bold hover:bg-emerald-400  hover:text-black cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
