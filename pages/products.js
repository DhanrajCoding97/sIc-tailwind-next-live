import { React } from "react";
import ProductCatalog from "../components/ProductCatalog";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.section className="mx-[5%] mt-20">
      <div className="mx-[5%]font-bold mx-[5%]">
        <h1 className="text-2xl md:text-4xl text-center pb-5">Our Products</h1>
        <motion.div>
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
