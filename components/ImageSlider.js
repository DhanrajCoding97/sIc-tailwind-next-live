import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/fa";
import Image from "next/image";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative bg-black">
      <AiOutlineDoubleLeft
        className="absolute top-[50%] left-[32px] text-5xl text-white z-10 select-none cursor-pointer"
        onClick={prevSlide}
      />
      <AiOutlineDoubleRight
        className="absolute top-[50%] right-[32px] text-5xl text-white z-10 select-none cursor-pointer"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="bg-gradient-to-r from-purple-900 to-green-700 h-96 w-full relative">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  className=" w-full h-96 absolute object-cover mix-blend-overlay"
                  layout="fill"
                />
                <span id="caption" className="text-3xl font-bold text-black">
                  {slide.caption}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
