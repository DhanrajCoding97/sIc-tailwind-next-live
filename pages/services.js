import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const serviceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      bounce: 0.3,
      duration: 2,
    },
  };

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <motion.section id="services" ref={ref}>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={serviceVariants}
        className="py-[90px] px-[5vw] services-bg min-h-screen"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
          }}
        >
          <h1 className="text-3xl md:text-4xl text-center font-bold pb-5">
            Our Services
          </h1>
          <ServicesCard />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
