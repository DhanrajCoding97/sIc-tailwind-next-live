import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw" });
    }
  }, [inView]);
  return (
    <motion.section
      ref={ref}
      id="services"
      className="py-[90px] px-[5vw] services-bg min-h-screen"
    >
      <motion.div animate={animation}>
        <h1 className="text-3xl md:text-4xl text-center font-bold pb-5">
          Our Services
        </h1>
        <ServicesCard />
      </motion.div>
    </motion.section>
  );
};

export default Services;
