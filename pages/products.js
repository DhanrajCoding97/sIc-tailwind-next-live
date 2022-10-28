import { React, useEffect } from "react";
import Accordian from "../components/Accordian";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const producVariants = {
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
    <motion.section ref={ref}>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={producVariants}
        className="py-[90px] px-[5vw] products-bg min-h-screen"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
            Our Products
          </h1>
          <p className="md:text-2xl leading-relaxed">
            We integrate the systems by using Quality products like Emerson,
            Schmersal, Sensotech,Gestra, Siemens, Jumo, Yokogawa, Dembla, C&S,
            Honeywell, Yamatake, P&F, Valmet, Fouress, Forbes Marshall, Omron,
            etc.
          </p>
          <Accordian />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Products;
