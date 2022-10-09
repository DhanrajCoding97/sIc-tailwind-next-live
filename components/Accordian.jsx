import { React, useState } from "react";
import { AccordianData } from "./AccordianData";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";

let AccordianDataArray = AccordianData.map((item) => item.details);
const list = [];
// console.log(AccordianDataArray);

let AccordianDataArrayLength = AccordianDataArray.length;
for (let i = 0; i < AccordianDataArrayLength; i++) {
  let items = AccordianDataArray[i].length;
  for (let n = 0; n < items; n++) {
    list.push(AccordianDataArray[i][n]);
  }
}

// const detailsArr = AccordianDataJson.map((item) => item.details);
// console.log(detailsArr);
// detailsArr.map((item) => console.log(item));
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
                <div className={clicked === index ? "content show" : "content"}>
                  {list}
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
