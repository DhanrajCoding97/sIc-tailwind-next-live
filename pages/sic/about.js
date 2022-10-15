import { React, useEffect } from "react";
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
    <motion.section ref={ref} id="about" className="mx-[5%] m-auto my-10">
      <div id="about-description">
        <h1 className="text-2xl md:text-4xl text-center border-double border-b-white font-bold border-emerald-40 underline pb-5">
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
          <h3 className="md:text-xl font-bold py-4">
            We take up turnkey projects in Control & Automation Projects for
            Process Industries like -
          </h3>
          <ol className="space-y-1 max-w-md list-decimal list-inside font-bold">
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
        <div id="customer list" className="py-5">
          <h3 className="md:text-xl font-bold py-3">Our customer list</h3>
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
