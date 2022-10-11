import { React, useState } from "react";
import { motion } from "framer-motion";
const Clients = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="clients" className="bg-white p-4 font-bold w-80">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h1 layout="position" className="text-2xl text-black font-bold">
          Emerson
        </motion.h1>
        {isOpen && (
          <motion.div className="pt-4">
            <p className="leading-relaxed text-black">
              Emerson Electric Co. is an American multinational corporation
              headquartered in Ferguson, Missouri. The Fortune 500 company
              manufactures products and provides engineering services for
              industrial, commercial, and consumer markets. Emerson has
              approximately 86,700 employees and 170 manufacturing locations
            </p>
            <motion.a>Read More</motion.a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Clients;
