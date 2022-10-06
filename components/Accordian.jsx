import React from "react";
import { AccordianData } from "./AccordianData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";
const Accordian = () => {
  return (
    <IconContext.Provider value={{ color: "#34d399", size: "25px" }}>
      <div id="AccordianSection" className="flex flex-col relative">
        <div
          id="container"
          className="absolute shadow-[2px 10px 35px 1px rgba(153,153,153,0.3)]"
        >
          {AccordianData.map((item, index) => {
            return (
              <>
                <span className="bg-black">
                  <h1>{item.title}</h1>
                </span>
                <p>{item.description}</p>
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordian;
