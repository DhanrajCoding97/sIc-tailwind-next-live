import { React, useState } from "react";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Slider = ({ slides }) => {
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
    <div>
      {SliderData.map((slide, index) => {
        return (
          <div key={index}>
            <div
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0 hidden"
              }
            >
              <h1 className="text-2xl font-bold text-emerald-400 bg-black p-4 text-center">
                {slide.caption}
              </h1>
            </div>
            <div
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <div className="relative flex justify-center p-4">
                <GoArrowLeft
                  onClick={prevSlide}
                  size={30}
                  className="absolute top-[50%] left-[30px] text-emerald-400 cursor-pointer select-none z-[2]"
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt={slide.caption}
                    width="1440"
                    height="600"
                    objectFit="cover"
                  />
                )}
                <GoArrowRight
                  onClick={nextSlide}
                  size={30}
                  className="absolute top-[50%] right-[30px] text-emerald-400 cursor-pointer select-none z-[2]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
