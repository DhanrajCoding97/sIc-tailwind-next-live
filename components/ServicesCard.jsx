import { React, useRef, useEffect, useState } from "react";
import ServiceCardData from "./ServiceCardData";
import { motion } from "framer-motion";

const ServicesCard = () => {
  // card slider
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
      className="overflow-hidden sm:mx-[20%] rounded-3xl cursor-grab"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        id="inner-card"
        className="flex"
      >
        {ServiceCardData.map((card, index) => {
          return (
            <motion.div
              key={index}
              className="mr-14 min-w-[15rem] sm:min-w-[20rem] sm:max-h-[40rem] rounded-3xl"
            >
              <img
                src={card.imagePath}
                alt={card.alt}
                layout="fill"
                className="h-96 w-full rounded-t-3xl pointer-events-none"
              />
              <div
                id="card-content"
                className="flex flex-col items-center justify-center bg-black p-4 rounded-b-3xl"
              >
                <span className="items-center font-bold text-white">
                  {card.alt}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ServicesCard;
