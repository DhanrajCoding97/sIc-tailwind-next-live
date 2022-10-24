import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { MdLocationOn, MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const SocialLink = () => {
  return (
    <motion.div className="w-[400px]">
      <div className="bg-black rounded-xl min-h-full p-5">
        <div className="flex flex-col items-center">
          <div id="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.493738473291!2d77.5562915146124!3d13.004199690834463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d86daec7ed1%3A0x91e936c4a674e8d!2sStar%20Instruments%20%26%20Controls!5e0!3m2!1sen!2sin!4v1666613938568!5m2!1sen!2sin"
              className="w-auto h-[350px] rounded-xl"
              loading="lazy"
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
  );
};

export default SocialLink;
