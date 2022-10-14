import { React } from "react";
import ContactForm from "../../components/Contact";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="mx-[5%] max-w-[1240px] m-auto mt-10"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center pb-5">
        Contact Us
      </h1>
      <ContactForm />
    </motion.section>
  );
};

export default Contact;
