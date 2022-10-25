import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SliderData } from "../components/SliderData";
import ImageSlider from "../components/ImageSlider";
import CustomerList from "../components/CustomerList";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <motion.div ref={ref}>
      <motion.section
        animate={animation}
        id="about"
        className="py-[90px] px-[5vw] about-bg"
      >
        <motion.div>
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
          <div id="project-list">
            <h3 className="md:text-xl font-bold">
              We take up turnkey projects in Control & Automation Projects for
              Process Industries like -
            </h3>
            <ImageSlider slides={SliderData} />
          </div>
          <CustomerList />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default About;
