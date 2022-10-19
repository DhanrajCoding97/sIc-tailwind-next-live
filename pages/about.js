import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SliderData } from "../components/SliderData";
import { ProjectCards } from "../components/ProjectCards";

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
    <motion.section ref={ref} id="about" className="mx-[5%] mt-20">
      <motion.div animate={animateSection}>
        <div id="about-description">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
            About Us
          </h1>
          <h2 className="md:text-xl font-bold">
            Star Instruments & Control is a company backed by a team of
            qualified & experienced engineers specialized in Process and
            Industrial Automation
          </h2>
        </div>
        <motion.div>
          <div id="project-list" className="mt-4">
            <h3 className="md:text-xl font-bold">
              We take up turnkey projects in Control & Automation Projects for
              Process Industries like -
            </h3>
          </div>
          <ProjectCards slides={SliderData} />
          <div id="clients">
            <h3 className="sm:text-xl md:text-3xl font-bold text-center">
              Our Customers
            </h3>
            <div
              id="customer-list-flex"
              className="grid sm:grid-cols-2 items-center justify-items-center mt-5"
            >
              <ul className="list-disc sm:text-lg">
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
              </ul>
              <ul className="list-disc  sm:text-lg">
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
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
