import { React, useState } from "react";
// import { item } from "./AccordianData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordianData = [
  {
    title: "Sugar Mills",
    details: [
      "Electronic weigh bridge.",
      "Conductivity measurement & control systems for batch & continuous pan.",
      "pH measurement & control at process, feed water etc.",
      "Imbibition water flow metering systems.",
      "Juice flow rate control systems before evaporators.",
      "Centrifuge control systems.",
    ],
  },
  {
    title: "Pulp & Paper Industries:",
    details: [
      "Pulp flow rate control system",
      "Consistency control system.",
      "Temperature control systems at drying cylinders.",
      "Steam pressure reducing & controlling systems.",
      "Steam flow rate indicating & totalizing systems.",
      "Moisture & basis weight control systems.",
    ],
  },
  {
    title: "Distilleries & Breweries",
    details: [
      "Digital temperature control & recording system for distillation column.",
      "Steam flow rate indicating & controlling systems.",
      "Molasses dilution control systems.",
      "Wash flow rate indicating & controlling systems.",
      "Boiler instrumentation & automation.",
    ],
  },
  {
    title: "Pharmaceuticals",
    details: [
      "Hydrogenator pressure control system with N2 purging.",
      "Hydrogenator sampling system with key operated ball valve.",
      "Weighing System.",
    ],
  },
  {
    title: "Food Industries",
    details: [
      "Consistency/ Density control systems.",
      "Pasteurisation Loops.",
      "Temperature control systems for food pulp.",
      "Food pulp flow control systems.",
      "pH measurement & control systems.",
    ],
  },
];

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
        <div id="container" className="border-white">
          {AccordianData.map((product, i) => {
            return (
              <div
                className="flex flex-col justify-center items-start sm:w-[500px] border-x"
                key={i}
                onClick={() => {
                  toggle(i);
                }}
              >
                <div className="w-[100%] font bold text-black flex justify-between cursor-pointer text-xl md:text-3xl bg-white p-4 border-b-2 ">
                  {product.title}
                  <span>{selected === i ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <ul className="marker:text-green list-outside list-disc ml-6">
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
