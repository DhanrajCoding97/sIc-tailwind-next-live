import { React } from "react";
import ContactForm from "../components/ContactForm";
import { BsWhatsapp } from "react-icons/bs";
import { MdLocationOn, MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

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
      <div className="flex justify-evenly">
        <ContactForm />
        <motion.div>
          <div className="bg-black rounded-xl min-h-full">
            <div className="flex flex-col items-center rounded-full">
              <div id="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927094.9683659975!2d73.04554530010552!3d16.01072087420947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d86daec7ed1%3A0x91e936c4a674e8d!2sStar%20Instruments%20%26%20Controls!5e0!3m2!1sen!2sin!4v1666609709668!5m2!1sen!2sin"
                  width="400"
                  height="350"
                  style={{ borderRadius: 35, padding: 20 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div id="social-links" className="p-5">
                <ul className="flex gap-2">
                  <li>
                    <motion.a
                      href="https://wa.me/918152889614"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-emerald-400"
                    >
                      <BsWhatsapp size={25} />
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="https://www.google.com/maps/dir/19.0410705,73.0212702/Star+Instruments+%26+Controls,+2914%2FA,+13th+Main+Rd,+D-Block,+2nd+Stage,+Rajajinagar,+Bengaluru,+Karnataka+560010/@14.9507231,73.7387769,6.69z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae3d86daec7ed1:0x91e936c4a674e8d!2m2!1d77.5584802!2d13.0041997"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-emerald-400"
                    >
                      <MdLocationOn size={25} />
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="tel:+8152889614"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-emerald-400"
                    >
                      <MdCall size={25} />
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="mailto:star_ic@rediffmail.com"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-emerald-400"
                    >
                      <HiMail size={25} />
                    </motion.a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
