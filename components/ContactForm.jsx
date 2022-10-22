import { React, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaCheckSquare, FaExclamation } from "react-icons/fa";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4fcvq68",
        "template_750jgac",
        form.current,
        "7ekb104slKI6Df4WM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center text-black">
      <div
        id="container"
        className="w-[400px] max-w-full bg-white rounded-[5px] shadow-[0 2px 5px rgba(0,0,0,0.3) overflow-hidden]"
      >
        <div
          id="header"
          className="flex items-center justify-center border-b-black"
        >
          <h2 className="text-xl sm:text-2xl p-2 font-bold">Contact Form</h2>
        </div>
        <form id="contact-form" onSubmit={sendEmail} className="py-2 px-5">
          <div id="form-control" className="mb-3 pb-5 relative">
            <input
              type="text"
              placeholder="Name"
              id="name"
              className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl"
            />
            <i id="check-icon" className="absolute top-10 right-[10px] hidden">
              <FaCheckSquare />
            </i>
            <i
              id="excalamation-icon"
              className="absolute top-10 right-[10px] hidden"
            >
              <FaCheckSquare />" <FaExclamation />
            </i>
            <small className="hidden absolute bottom-0 left-0">
              Error message
            </small>
          </div>
          <div id="form-control" className="mb-3 pb-5 relative">
            <input
              type="text"
              placeholder="emailid@gmail.com"
              id="email"
              className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl"
            />
            <i id="check-icon" className="absolute top-10 right-[10px] hidden">
              <FaCheckSquare />
            </i>
            <i
              id="excalamation-icon"
              className="absolute top-10 right-[10px] hidden"
            >
              <FaExclamation />
            </i>
            <small className="hidden absolute bottom-0 left-0">
              Error message
            </small>
          </div>
          <div id="form-control" className="mb-3 pb-5 relative">
            <input
              type="text"
              placeholder="subject"
              id="subject"
              className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl"
            />
            <i id="check-icon" className="absolute top-10 right-[10px] hidden">
              <FaCheckSquare className="check-icon" />
            </i>
            <i
              id="excalamation-icon"
              className="absolute top-10 right-[10px] hidden"
            >
              <FaExclamation />
            </i>
            <small className="hidden absolute bottom-0 left-0">
              Error message
            </small>
          </div>
          <div id="form-control" className="mb-3 pb-5 relative">
            <textarea
              placeholder="Message"
              id="message"
              cols="39"
              rows="1"
              className="resize-none border-2 border-stone-900 p-3 placeholder:text-black placeholder:font-bold rounded-xl"
            ></textarea>
            <i id="check-icon" className="absolute top-10 right-[10px] hidden">
              <FaCheckSquare className="check-icon" />
            </i>
            <i
              id="excalamation-icon"
              className="absolute top-10 right-[10px] hidden"
            >
              <FaExclamation className="excalamation-icon" />
            </i>
            <small className="hidden absolute bottom-0 left-0">
              Error message
            </small>
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              className="px-5 py-2 rounded  bg-black text-white font-bold hover:bg-emerald-400  hover:text-black cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
