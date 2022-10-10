import { React, useState } from "react";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AccordianData } from "./AccordianData";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <IconContext.Provider value={{ color: "#000", size: "25px" }}>
      <div
        id="AccordianSection"
        className="flex justify-start items-start my-10"
      >
        <div id="container" className="border">
          {AccordianData.map((product, i) => {
            return (
              <div
                className="flex flex-col sm:w-[500px] border-x"
                key={i}
                onClick={() => {
                  toggle(i);
                }}
              >
                <div className="w-[100%] font bold text-black border-b-2 border-black last:border-none flex justify-between cursor-pointer text-xl md:text-3xl bg-white p-4">
                  <h2>{product.title}</h2>
                  <span>{selected === i ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <ul className="marker:text-green list-outside list-disc ml-6 p-2">
                    {product.details.map((element, i) => {
                      return <li key={i}>{element}</li>;
                    })}
                  </ul>
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
