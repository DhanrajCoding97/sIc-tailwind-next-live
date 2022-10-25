import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCatalog from "../components/ProductCatalog";

const Products = () => {
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
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  return (
    <motion.section
      ref={ref}
      className="py-[90px] px-[5vw] products-bg min-h-screen"
    >
      <motion.div animate={animation}>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
          Our Products
        </h1>
        <p className="md:text-2xl leading-relaxed">
          We integrate the systems by using Quality products like Emerson,
          Schmersal, Sensotech,Gestra, Siemens, Jumo, Yokogawa, Dembla, C&S,
          Honeywell, Yamatake, P&F, Valmet, Fouress, Forbes Marshall, Omron,
          etc.
        </p>
        <ProductCatalog />
      </motion.div>
    </motion.section>
  );
};

export default Products;
