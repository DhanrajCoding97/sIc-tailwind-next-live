import { React } from "react";
import ProductCatalog from "../components/ProductCatalog";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.section className="min-h-screen px-[5vw] flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
        Our Products
      </h1>
      <motion.div>
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
