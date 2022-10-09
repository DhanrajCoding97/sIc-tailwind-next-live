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
        className="flex justify-start items-start my-10"
      >
        <div id="container" className="border-white">
          {AccordianData.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-start sm:w-[500px]"
                key={index}
                onClick={() => {
                  toggle(index);
                }}
              >
                <div className="w-[100%] font bold text-black flex justify-between cursor-pointer text-xl md:text-3xl bg-white p-4">
                  {item.title}
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <span className="w-[98%] border-white my-[1px] p-4">
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
