import { React, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s5cyj7q",
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
  };
  return (
    <div className="flex items-center justify-center text-black">
      <div id="container" className="bg-black rounded-xl w-[300px]">
        <form
          ref={form}
          id="contact-form"
          className="p-5 max-w-[300px]"
          onSubmit={sendEmail}
        >
          <div id="form-control" className="mb-3 pb-5 relative">
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="user_name"
              className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl bg-cyan-400"
            />
          </div>
          <div id="form-control" className="mb-3 pb-5 relative">
            <input
              id="email"
              type="email"
              placeholder="emailid@gmail.com"
              name="user_email"
              className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl bg-cyan-400"
            />
          </div>
          <div id="form-control" className="mb-3 pb-5 relative">
            <input
              id="subject"
              type="text"
              placeholder="subject"
              name="subject"
              className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl bg-cyan-400"
            />
          </div>
          <div id="form-control" className="mb-4 relative">
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="resize-none border-2 border-stone-900 p-3 placeholder:text-black placeholder:font-bold rounded-xl w-full bg-cyan-400"
            />
          </div>
          <div className="flex items-center justify-center pb-4 ">
            <motion.button
              className="px-5 py-2 bg-cyan-400 font-bold text- hover:text-black cursor-pointer rounded-full"
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
