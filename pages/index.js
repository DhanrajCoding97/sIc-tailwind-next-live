import React from "react";
import Hero from "../components/Hero";
import About from "./about";
import Services from "./services";
import Products from "./products";
import Contact from "./contact";

export default function Home() {
  return (
    <div id="main">
      <Hero
        heading="If you want to buy Electrical or Instrumentation Products."
        message="You came to the Right place."
      />
      <About />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}
