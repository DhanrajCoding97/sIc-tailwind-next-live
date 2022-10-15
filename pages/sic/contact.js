import { React, useEffect } from "react";
import ContactForm from "../../components/Contact";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
    <motion.section ref={ref} id="contact" className="mx-[5%] m-auto my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center pb-5">
        Contact Us
      </h1>
      <motion.div animate={animateSection}>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
