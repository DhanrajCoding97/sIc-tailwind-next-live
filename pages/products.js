import { React, useEffect } from "react";
import ProductCatalog from "../components/ProductCatalog";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Products = () => {
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
    <motion.section ref={ref} className="mx-[5%] mt-20">
      <div className="mx-[5%]font-bold mx-[5%]">
        <h1 className="text-2xl md:text-4xl text-center pb-5">Our Products</h1>
        <motion.div animate={animateSection}>
          <p className="md:text-2xl leading-relaxed">
            We integrate the systems by using Quality products like Emerson,
            Schmersal, Sensotech,Gestra, Siemens, Jumo, Yokogawa, Dembla, C&S,
            Honeywell, Yamatake, P&F, Valmet, Fouress, Forbes Marshall, Omron,
            etc.
          </p>
          <ProductCatalog />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
