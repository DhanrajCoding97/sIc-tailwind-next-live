import { React, useEffect } from "react";
import ServicesCard from "../components/ServicesCard";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      id="services"
      className="sm:pt-[90px] px-[5vw] flex flex-col items-center justify-center"
    >
      <motion.div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
          Our Services
        </h1>
        <ServicesCard />
      </motion.div>
    </motion.section>
  );
};

export default Services;
