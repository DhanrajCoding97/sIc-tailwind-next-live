import { React, useEffect } from "react";
import Slider from "../../components/Slider";
import { SliderData } from "../../components/SliderData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <motion.section ref={ref} id="about" className="mx-[5%] mt-24">
      <div id="about-description">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
          About Us
        </h1>
        <h2 className="md:text-xl font-bold">
          Star Instruments & Control is a company backed by a team of qualified
          & experienced engineers specialized in Process and Industrial
          Automation
        </h2>
      </div>
      <motion.div animate={animateSection}>
        <div id="project-list" className=" mt-4">
          <h3 className="md:text-xl font-bold">
            We take up turnkey projects in Control & Automation Projects for
            Process Industries like -
          </h3>
          <Slider slides={SliderData} />
        </div>
        <div id="customer list">
          <h3 className="md:text-xl font-">Our customer list</h3>
          <ol className="space-y-1 max-w-md list-decimal list-inside font-bold">
            <li>Ranna Sugars , Mudhol</li>
            <li>Hira Sugars , Sankeshwar , Belgaum</li>
            <li>Siddapur Disttileries , Jamkhandi</li>
            <li>Prabhulingeshwar Sugars , Siddapur , Jamkhandi</li>
            <li>Hermes Distilleries</li>
            <li>Millenium Starch , Athani, Belgaum</li>
            <li>Shivshakti Sugars , Yadrav ,Belgaum</li>
            <li>Solara Pharma ( Formerly Sequent Scientific)</li>
            <li>Campco Chocolate Factory Puttur</li>
            <li>Mangalore Refineries & Petrochemicals Ltd., Mangalore</li>
            <li>Ruchi Soya Industries , Mangalore</li>
            <li>Adani Wilmar , Mangalore</li>
            <li>Solaris Chemtech (BILT Group) Binaga Karwar</li>
            <li>Sequent Scientific Mangalore</li>
            <li>Metal Closures Pvt Ltd., , Bangalore</li>
            <li>Group Pharmaceuticals., Malur Kolar District</li>
            <li>Kudremukh Iron & Steel Co. Ltd., Mangalore</li>
            <li>Organica & Aromatics Pvt Ltd.,, Peenya , Bangalore</li>
            <li>Networth Controls, Bangalore</li>
            <li>Kewaunee Scientific India Ltd., Bangalore</li>
            <li>Actavis Pharmaceutical, Bangalore</li>
          </ol>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
