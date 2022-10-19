import { React } from "react";
import ContactForm from "../components/Contact";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section ref={ref} id="contact" className="mx-[5%] mt-20">
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
