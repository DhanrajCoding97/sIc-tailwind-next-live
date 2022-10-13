import React from "react";
import Accordian from "../../components/Accordian";
import Clients from "../../components/clients";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="flex flex-col pt-10 my-[10%] mx-[5%]">
      <div id="about-description">
        <h1 className="text-2xl md:text-4xl text-center border-double border-b-white font-bold border-emerald-40 underline">
          About Us
        </h1>
        <h2 className="md:text-xl font-bold">
          Star Instruments & Control is a company backed by a team of qualified
          & experienced engineers specialized in Process and Industrial
          Automation
        </h2>
      </div>
      <div id="project-list" className=" mt-4">
        <h3 className="md:text-xl font-bold">
          We take up turnkey projects in Control & Automation Projects for
          Process Industries like -
        </h3>
        <ol class="m space-y-1 max-w-md list-decimal list-inside font-bold">
          <li>Sugar Industries</li>
          <li>Paper Board Industries</li>
          <li>Distilleries & Breweries</li>
          <li>Cement & Petrochemicals</li>
          <li>Pharmaceuticals & Fertilizers</li>
          <li>Milk</li>
          <li>Food Industries</li>
          <li>Machine Tool Industries</li>
        </ol>
      </div>
    </section>
  );
};

export default About;
