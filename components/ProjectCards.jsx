import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowAltClircleRight, FaArrowAltClircleLeft } from "react-icons/fa";
import { SliderData } from "./SliderData";

export const ProjectCards = ({ slides }) => {
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
    <motion.div className=" relative h-[80vh] flex center justify-center">
      <FaArrowAltClircleRight
        className="absolute top-[50%] right-[32px] text-5xl text-white select-none cursor-pointer z-10"
        onClick={nextSlide}
      />
      <FaArrowAltClircleLeft
        className="absolute top-[50%] left-[32px] text-5xl text-white select-none cursor-pointer z-10"
        onClick={prevSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div>
            className={index === current ? "slide active" : "slide"}
            key={index}
            {index === current && (
              <Image
                src={slide.image}
                alt={slide.caption}
                layout="responsive"
                width="1000"
                height="600"
                className="rounded-xl"
              />
            )}
          </div>
        );
      })}
    </motion.div>
  );
};
