import React from "react";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      id="services"
      className="flex flex-col pt-10 mx-[5%]"
    >
      <h1>Services</h1>
    </motion.section>
  );
};

export default Services;
