import { React, useEffect } from "react";
import ServicesCard from "../../components/ServicesCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animateSection = useAnimation();

  useEffect(() => {
    if (inView) {
      animateSection.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animateSection.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <motion.section ref={ref} id="services" className="mx-[5%] m-auto my-10">
      <motion.div animate={animateSection}>
        <h1 className="text-2xl md:text-4xl text-center pb-5">Our Services</h1>
        <ServicesCard />
      </motion.div>
    </motion.section>
  );
};

export default Services;
