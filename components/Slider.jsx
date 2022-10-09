import { React, useState } from "react";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

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
              <div className="relative flex flex-col text-center justify-center">
                <BsArrowLeftCircle
                  onClick={prevSlide}
                  size={40}
                  className="absolute top-[50%] left-[30px] text-white cursor-pointer select-none z-[2]"
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt={slide.caption}
                    objectFit="cover"
                    height="600"
                    width="1440"
                  />
                )}
                <BsArrowRightCircle
                  onClick={nextSlide}
                  size={40}
                  className="absolute top-[50%] right-[30px] text-white cursor-pointer select-none z-[2]"
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
