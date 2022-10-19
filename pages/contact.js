import { React } from "react";
import ContactForm from "../components/Contact";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section id="contact" className="mx-[5%] mt-20 mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
        Contact Us
      </h1>
      <motion.div>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
