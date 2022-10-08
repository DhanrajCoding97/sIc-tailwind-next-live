import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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
    <section id="contact" className="max-w-[1240px] m-auto h-screen mt-10">
      <h1 className="text-2xl font-bold text-center p-4">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="max-w-[80%] m-auto">
        <input
          className="font-bold text-black border-emerald-400 rounded-sm p-3 w-full mb-2 bg-emerald-400 placeholder-black"
          type="text"
          name="user_name"
          placeholder="Name"
        />
        <input
          className="font-bold text-black border-emerald-400 rounded-sm p-3 w-full mb-2 bg-emerald-400 placeholder-black"
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <input
          className="font-bold text-black border-emerald-400 rounded-sm p-3 w-full  mb-2 bg-emerald-400 placeholder-black"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="font-bold text-black border-emerald-400 rounded-sm p-3 w-full  mb-2 bg-emerald-400 placeholder-black resize-none"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="border p-3 w-full bg-emerald-400 text-black rounded-sm outline-none border-none font-bold hover:bg-white ease-in duration-500"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
