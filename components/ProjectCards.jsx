import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectCards = ({ cards }) => {
  // card slider code
  const [width, setWidth] = useState(0);
  const card = useRef();

  useEffect(() => {
    setWidth(card.current.scrollWidth - card.current.offsetWidth);
  }, []);

  return (
    <motion.div
      id="cards"
      ref={card}
      whileTap={{ cursor: "grabbing" }}
      className="overflow-hidden sm:mx-[5%] mb-8 cursor-grab my-10 rounded-3xl"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        id="inner-card"
        className="flex"
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={index}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              className="max-h-[35rem] min-w-[30rem] p-10"
            >
              <motion.img
                src={card.image}
                alt={card.alt}
                layout="fill"
                className="w-full h-full rounded-3xl pointer-events-none"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCards;
