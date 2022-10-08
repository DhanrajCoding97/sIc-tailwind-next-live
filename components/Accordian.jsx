import { React, useState } from "react";
import { AccordianData } from "./AccordianData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";
const Accordian = () => {
  const [clicked, setClicked] = useState(null);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#000", size: "25px" }}>
      <div
        id="AccordianSection"
        className="flex justify-center items-center my-10"
      >
        <div
          id="container"
          className="shadow-[2px 10px 35px 1px rgba(153,153,153,0.3)]"
        >
          {AccordianData.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-start sm:w-[500px] border-x"
                key={index}
                onClick={() => {
                  toggle(index);
                }}
              >
                <div className="w-[100%] font bold bg-white text-black flex justify-between cursor-pointer p-4">
                  <h1 className="font-bold text-xl md:text-3xl">
                    {item.title}
                  </h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <span className="w-[98%] px-4 border-white my-[1px]">
                  <p className={clicked === index ? "content show" : "content"}>
                    {item.description}
                  </p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordian;
