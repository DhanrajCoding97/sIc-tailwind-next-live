import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <motion.div ref={ref}>
      <motion.section
        id="services"
        animate={animation}
        className="py-[90px] px-[5vw] services-bg min-h-screen"
      >
        <h1 className="text-3xl md:text-4xl text-center font-bold pb-5">
          Our Services
        </h1>
        <ServicesCard />
      </motion.section>
    </motion.div>
  );
};

export default Services;
