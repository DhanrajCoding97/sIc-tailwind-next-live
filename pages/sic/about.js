import React from "react";
import Accordian from "../../components/Accordian";
import Clients from "../../components/clients";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="flex flex-col pt-10 mt-[5%] mx-[5%]">
      <div id="about-description" className="flex flex-col justify-center">
        <h1 className="text-5xl text-center border-double border-b-white font-bold border-emerald-40 underline">
          About Us
        </h1>
        <h2 className="text-2xl font-bold py-4">
          Star Instruments & Control is a company backed by a team of qualified
          & experienced engineers specialized in Process and Industrial
          Automation
        </h2>
        <p className="text-xl font-bold">
          We take up turnkey projects in Control & Automation Projects for
          Process Industries like -
        </p>
      </div>
      <Accordian />
    </section>
  );
};

export default About;
