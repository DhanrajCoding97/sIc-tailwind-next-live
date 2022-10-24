import { React, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = ({ heading, message }) => {
  const [rotate, setRotate] = useState(false);

  return (
    <section id="hero" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 3,
        }}
        className="flex flex-wrap items-center justify-center min-h-screen md:h-screen lg:h-screen sm:h-screen bg-fixed bg-cover bg-center custom-img"
      >
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
            duration={200}
          >
            <motion.button
              className="px-5 py-2 rounded  bg-white text-black font-bold cursor-pointer"
              animate={{ rotate: rotate ? 180 : 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={() => setRotate(!rotate)}
            >
              Get started
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
