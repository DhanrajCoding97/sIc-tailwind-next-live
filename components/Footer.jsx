import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-black font-bold">
      <div className="content-center p-4 md:px-10 xl:px-40">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div id="column" className="flex flex-col items-center">
            <Link href="/sic/about">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
              >
                About Us
              </motion.a>
            </Link>
            <Link href="#accordian">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                What we do
              </a>
            </Link>
            <Link href="#clients">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                Our clients
              </a>
            </Link>
          </div>
          <div id="column" className="flex flex-col items-center">
            <Link href="/sic/services">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
              >
                Services
              </motion.a>
            </Link>
            <Link href="#psg">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                Product Supply Group (PSG)
              </a>
            </Link>
            <Link href="#pap">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                Process Automation Products
              </a>
            </Link>
            <Link href="#ssp">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                Sensors & Safety Products
              </a>
            </Link>
          </div>
          <div id="column" className="flex flex-col items-center">
            <Link href="/sic/productsw">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
              >
                Products
              </motion.a>
            </Link>
            <Link href="#about">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                What we do
              </a>
            </Link>
            <Link href="#clients">
              <a className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer">
                Our clients
              </a>
            </Link>
          </div>
          <div id="column" className="flex flex-col">
            <Link href="/sic/contact">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
              >
                Contact Us
              </motion.a>
            </Link>
            <p className="leading-relaxed sm:text-xl">
              #2914/A 13th Main 2nd Cross 2nd Stage D-Block , Rajajinagar,
              Banglore
            </p>
            <div className="flex py-1">
              <motion.a
                href="https://wa.me/918152889614"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center font-bold sm:text-xl text-center"
              >
                Whatsapp{" "}
                <span className="pl-3">
                  <BsWhatsapp size={25} />
                </span>
              </motion.a>
            </div>
            <div className="flex flex-col">
              <a
                href="tel:+919448383066"
                className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer"
              >
                +91-9448383066
              </a>
              <a
                href="tel:+918197894618"
                className="sm:text-xl hover:text-violet-900 ease-in duration-300 cursor-pointer"
              >
                +91-8197894618
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center p-5">
          <a href="/" title="Star Instruments & Control Logo">
            <img src="/icon.png" className="h-[25px] w-[25px]" />
          </a>
          <h1 className="pl-1 text-md">
            Copyright &copy; {new Date().getFullYear()}
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
