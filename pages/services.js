import { React, useEffect } from "react";
import ServicesCard from "../components/ServicesCard";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      id="services"
      className="mx-[5%] flex flex-col items-center justify-center mt-20"
    >
      <motion.div>
        <h1 className="text-2xl md:text-4xl text-center pb-5">Our Services</h1>
        <ServicesCard />
      </motion.div>
    </motion.section>
  );
};

export default Services;
