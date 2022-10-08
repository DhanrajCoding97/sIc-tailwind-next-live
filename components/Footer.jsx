import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full md:flex-row flex-col justify-around items-start"
    >
      <div className="p-5">
        <ul>
          <div className="flex gap-6 pb-5">
            <h3 className="font-bold text-3xl pb-6">SiC</h3>
            {/* Section for icons */}
            <FaInstagram className="text-2xl cursor-pointer hover:text-white-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-white-600" />
            <FaWhatsapp className="text-2xl cursor-pointer hover:text-white-600" />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
