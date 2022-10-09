import React from "react";
import ContactForm from "../../components/Contact";

const Contact = () => {
  return (
    <>
      <section id="contact" className="max-w-[1240px] m-auto h-screen mt-10">
        <h1 className="text-2xl font-bold text-center p-4">Contact Us</h1>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
