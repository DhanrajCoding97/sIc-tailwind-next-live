import { React } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import SocialLink from "../components/SocialLink";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen py-[90px] px-[5vw] contact-bg"
    >
      <div
        id="contact-header"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Contact Us
        </h1>
        <p className="text-xl p-5">
          For all enquires, please email using the form below
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <ContactForm />
        <SocialLink />
      </div>
    </motion.section>
  );
};

export default Contact;
