import { React } from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <motion.section id="contact" className="sm:pt-[90px] px-[5vw]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
        Contact Us
      </h1>
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
              <BsWhatsapp color="green" size={25} />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
