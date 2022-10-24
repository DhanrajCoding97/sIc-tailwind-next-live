import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { MdLocationOn, MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
            <div className="mb-5 flex flex-col items-center">
              <Link href="/about">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  About Us
                </a>
              </Link>
              <ul className="flex flex-col justify-center items-center">
                <li className="py-2">
                  <Link href="/about">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Our expertise
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Our clients
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5 flex flex-col items-center">
              <Link href="/services">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  Services
                </a>
              </Link>
              <ul className="flex flex-col justify-center items-center">
                <li className="py-2">
                  <Link href="/services">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Product Supply Group (PSG)
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/services">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Process Automation Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Sensors & Safety Products
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5  flex flex-col items-center">
              <Link href="/products">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  Products
                </a>
              </Link>
              <ul className="flex flex-col justify-center items-center">
                <li className="py-2">
                  <Link href="/products">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Sugar Mills
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/products">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Pulp & Paper Industries
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/products">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Distilleries & Breweries
                    </a>
                  </Link>
                </li>
                <li className="pb-2">
                  <Link href="/products">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Pharmaceuticals
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                      Food Industries
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5 flex flex-col items-center">
              <Link href="/contact">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  Reach Us Out
                </a>
              </Link>
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
          <div className="flex items-center justify-center">
            <Link href="/" title="Star Instruments & Control Logo">
              <a>
                <Image
                  src="/icon.png"
                  height="35"
                  width="35"
                  objectFit="cover"
                />
              </a>
            </Link>
            <h1 className="pl-1 text-md">
              Copyright &copy; {new Date().getFullYear()}
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
