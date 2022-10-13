import React from "react";
import ContactForm from "../../components/Contact";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="my-[10%] mx-[5%] max-w-[1240px] m-auto h-screen mt-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center p-4">
          Contact Us
        </h1>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
