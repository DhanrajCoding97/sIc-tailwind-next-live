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
    <div id="cards" className="mb-8 grid">
      <div
        id="inner-card"
        className="flex flex-col lg:flex-row justify-evenly items-center flex-wrap gap-5"
      >
        {ServiceCardData.map((card) => {
          return (
            <div
              key={card.id}
              className="min-w-[15rem] sm:min-w-[20rem] sm:max-h-[40rem] mb-8 sm:mb-none "
            >
              <img
                src={card.imagePath}
                alt={card.alt}
                layout="fill"
                className="h-80 sm:h-96 w-full rounded-t-3xl"
              />
              <div className="flex flex-col items-center justify-center bg-white rounded-b-3xl p-5 text-black">
                <h2 className="text-xl pb-3 font-bold">{card.alt}</h2>
                <motion.button
                  onClick={() => {
                    setOpenedCard(card.id);
                    setOpenModal(!openModal);
                  }}
                  className="px-6 py-3 rounded-3xl bg-black text-white cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Read More
                </motion.button>
              </div>
              {/* card modal on click logic */}
              {openedCard === card.id && openModal ? (
                <motion.div
                  id="modal-bg"
                  className="fixed w-full h-full top-0 left-0 bg-black flex items-center justify-center z-50 rounded-3xl"
                >
                  <motion.div
                    id="modal-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    className="max-w-[300px] max-h-[500px] bg-lime-400 flex flex-col p-6 overflow-y-auto rounded-3xl"
                  >
                    <motion.button
                      onClick={() => {
                        openedCard === null;
                        setOpenModal(!openModal);
                      }}
                      className="ml-auto"
                    >
                      <AiFillCloseCircle
                        color="black"
                        size={35}
                        cursor="pointer"
                      />
                    </motion.button>
                    <motion.div id="modal-body">
                      <motion.div
                        id="modal-content"
                        className="flex flex-col items-center text-black"
                      >
                        <p className="text-md sm:text-2xl font-bold">
                          {card.alt} list
                        </p>
                        <ul className="marker:text-green list-outside list-disc ml-6 p-2 font-bold text-md leading-relaxed scrollbar-hide::-webkit-scrollbar scrollbar-hide">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
