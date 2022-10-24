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
    <div ref={ref}>
      <motion.section
        id="services"
        animate={animation}
        className="min-h-screen py-[90px] px-[5vw] services-bg"
      >
        <motion.div>
          <h1 className="text-3xl md:text-4xl text-center font-bold pb-5">
            Our Services
          </h1>
          <ServicesCard />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Services;
