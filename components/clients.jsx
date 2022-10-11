import React from "react";
import { motion } from "framer-motion";
const Clients = () => {
  return (
    <div id="clients" className="bg-white p-[3rem 5rem] font-bold ">
      <motion.div>
        <motion.h1 className="text-2xl text-black font-bold">Emerson</motion.h1>
        <motion.div>
          <p className="leading-relaxed text-black">
            Emerson Electric Co. is an American multinational corporation
            headquartered in Ferguson, Missouri. The Fortune 500 company
            manufactures products and provides engineering services for
            industrial, commercial, and consumer markets. Emerson has
            approximately 86,700 employees and 170 manufacturing locations
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Clients;
