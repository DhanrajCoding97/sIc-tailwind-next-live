import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SliderData } from "../components/SliderData";
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
      className="overflow-hidden sm:mx-[20%] mb-8 cursor-grab my-10"
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
              className="mr-14 min-w-[15rem] sm:min-w-[20rem] sm:max-h-[40rem]"
            >
              <motion.img
                src={card.image}
                alt={card.alt}
                layout="fill"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-96 w-full rounded-3xl"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCards;
