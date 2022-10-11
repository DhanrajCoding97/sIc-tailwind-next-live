import { React, useState } from "react";
import { motion } from "framer-motion";
const Clients = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="clients" className="bg-white font-bold w-80">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{
          scale: 1.2,
          backgroundColor: "#34d399",
          transition: { duration: 2 },
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <motion.h1 layout="position" className="text-black text-4xl font-bold">
          Emerson
        </motion.h1>
        <motion.a className="text-black font-bold">Read More</motion.a>
        {isOpen && (
          <motion.div className="pt-4">
            <p className="leading-relaxed text-black">
              Emerson Electric Co. is an American multinational corporation
              headquartered in Ferguson, Missouri. The Fortune 500 company
              manufactures products and provides engineering services for
              industrial, commercial, and consumer markets. Emerson has
              approximately 86,700 employees and 170 manufacturing locations
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Clients;
