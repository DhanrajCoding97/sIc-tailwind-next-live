import { React, useRef, useEffect, useState } from "react";
import ServiceCardData from "./ServiceCardData";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const ServicesCard = () => {
  // card slider code
  const [width, setWidth] = useState(0);
  const card = useRef();

  useEffect(() => {
    setWidth(card.current.scrollWidth - card.current.offsetWidth);
  }, []);

  //card modal code
  const [openModal, setOpenModal] = useState(false);

  //card open code
  const [openedCard, setOpenedCard] = useState(null);

  const handleCard = () => {
    setOpenedCard(card.id);
    setOpenModal(!openModal);
    console.log(openModal);
    console.log(openedCard);
  };
  return (
    <motion.div
      id="cards"
      ref={card}
      className="overflow-hidden sm:mx-[20%] mb-8"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        id="inner-card"
        className="flex"
      >
        {ServiceCardData.map((card) => {
          return (
            <motion.div
              key={card.id}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              className="mr-14 min-w-[15rem] sm:min-w-[20rem] sm:max-h-[40rem]"
              onClick={() => {
                setOpenedCard(card.id);
                setOpenModal(!openModal);
              }}
            >
              <motion.img
                src={card.imagePath}
                alt={card.alt}
                layout="fill"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-96 w-full rounded-3xl"
              />
              {/* card modal on click logic */}
              {openedCard === card.id && openModal ? (
                <motion.div
                  id="modal-bg"
                  className="fixed top-0 right-0 left-0 bottom-0 w-[90vw] h-[80vh] bg-lime-500 flex justify-center items-center rounded-2xl"
                >
                  <motion.div
                    id="modal-container"
                    className="rounded-2xl bg-black p-6 flex flex-col "
                  >
                    <motion.button
                      onClick={() => {
                        openedCard === null;
                        setOpenModal(!openModal);
                      }}
                      className="ml-auto"
                    >
                      <AiFillCloseCircle
                        color="white"
                        size={35}
                        cursor="pointer"
                      />
                    </motion.button>
                    <motion.div id="modal-body">
                      <motion.div
                        id="modal-content"
                        className="flex flex-col items-center"
                      >
                        <p className="text-3xl font-bold text-white">
                          {card.alt} list
                        </p>
                        <ul className="marker:text-green list-outside list-disc ml-6 p-2 font-bold text-md leading-relaxed text-white">
                          {card.description.map((item, index) => {
                            return <motion.li key={index}>{item}</motion.li>;
                          })}
                        </ul>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ServicesCard;
