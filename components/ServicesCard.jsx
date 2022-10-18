import { React, useState } from "react";
import ServiceCardData from "./ServiceCardData";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const ServicesCard = () => {
  //card modal code
  const [openModal, setOpenModal] = useState(false);

  //card open code
  const [openedCard, setOpenedCard] = useState(null);

  return (
    <motion.div
      id="cards"
      className="mb-8 w-[100vw] h-[100vh] bg-white relative"
    >
      <motion.div id="inner-card" className="w-[80vw] flex">
        {ServiceCardData.map((card) => {
          return (
            <motion.div
              key={card.id}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              className="min-w-[15rem] sm:min-w-[20rem] sm:max-h-[40rem] mr-48"
              onClick={() => {
                setOpenedCard(card.id);
                setOpenModal(!openModal);
              }}
            >
              <motion.img
                src={card.imagePath}
                alt={card.alt}
                layout="fill"
                className="h-96 w-full"
              />
              <motion.div className="flex items-center justify-center">
                <button>Read More</button>
              </motion.div>
              {/* card modal on click logic */}
              {openedCard === card.id && openModal ? (
                <motion.div
                  id="modal-bg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="absolute left-0 w-[100vw] h-[100vh] bg-slate-500 flex items-center justify-center z-50"
                >
                  <motion.div
                    id="modal-container"
                    className="w-[500px] h-[500px] rounded-sm shadow-[rgba(0,0,0,0.35)] flex flex-col p-6"
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
                        <p className="text-md sm:text-3xl font-bold text-white">
                          {card.alt} list
                        </p>
                        <ul className="marker:text-green list-outside list-disc ml-6 p-2 font-bold text-md leading-relaxed text-white">
                          {card.description.map((item, index) => {
                            return (
                              <motion.li
                                className="text-sm sm:text-md lg:text-xl leading-relaxed"
                                key={index}
                              >
                                {item}
                              </motion.li>
                            );
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
