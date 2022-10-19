import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
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
    <div className="relative my-16 grid justify-center items-center">
      <AiOutlineDoubleLeft
        className="absolute top-[50%] left-0 text-5xl text-white z-10 select-none cursor-pointer"
        onClick={prevSlide}
      />
      <AiOutlineDoubleRight
        className="absolute top-[50%] right-0 text-5xl text-white z-10 select-none cursor-pointer"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="bg-gradient-to-r from-[#1A2980] to-[#26D0CE] h-96 w-full relative">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  className=" w-full h-96 absolute top-[50%] object-cover mix-blend-overlay"
                  layout="fill"
                />
                <span
                  id="caption"
                  className="absolute bottom-[40%] left-[40%] text-xl sm:text-3xl font-bold text-yellow-200"
                >
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
