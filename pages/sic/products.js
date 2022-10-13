import React from "react";
import ProductCatalog from "../../components/ProductCatalog";

const Products = () => {
  return (
    <div
      id="products"
      className="my-[10%] mx-[5%]font-bold pt-10 mt-[5%] mx-[5%]"
    >
      <h1 className="text-2xl md:text-4xl text-center">Our Products</h1>
      <p className="md:text-2xl leading-relaxed">
        We integrate the systems by using Quality products like Emerson,
        Schmersal, Sensotech,Gestra, Siemens, Jumo, Yokogawa, Dembla, C&S,
        Honeywell, Yamatake, P&F, Valmet, Fouress, Forbes Marshall, Omron, etc.
      </p>
      <ProductCatalog />
    </div>
  );
};

export default Products;
