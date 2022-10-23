import { React } from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen py-[90px] px-[5vw] contact-bg"
    >
      <div
        id="contact-header"
        className="mb-10 flex flex-col items-center justify-center"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Contact Us
        </h1>
        <p className="text-xl p-5">
          For all enquires, please email using the form below
        </p>
      </div>
      <ContactForm />
      <motion.div>
        <div className="flex items-center justify-center mt-5">
          <motion.a
            href="https://wa.me/918152889614"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center font-bold text-2xl max-w-sm text-center"
          >
            Connect us on Whatsapp{" "}
            <span className="pl-3">
              <BsWhatsapp size={25} />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
