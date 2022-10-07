import { React, useState } from "react";
import { AccordianData } from "./AccordianData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";
const Accordian = () => {
  const [clicked, setClicked] = useState(false);
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
                className="flex flex-col justify-center items-start rounded-sm"
                key={index}
                onClick={() => {
                  toggle(index);
                }}
              >
                <div className="font bold p-4  bg-white text-black flex items-center w-[500px] justify-between text-center cursor-pointer">
                  <h1 className="text-3xl">{item.title}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <div className="ease-in duration-500">
                  {clicked === index ? (
                    <div
                      id="dropdown"
                      className="border-solid w-[500px] mr-6 border-white border-x-2"
                    >
                      <p className="font-bold p-4 text-xl last:border-b-2 border-t-2">
                        {item.description}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordian;
