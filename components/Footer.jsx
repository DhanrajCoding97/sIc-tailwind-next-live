import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 text-white">
        <div className="max-w-7xl mx-auto border-t-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-4 items-center">
            <div className="mb-5 flex flex-col sm:items-center sm:justify-center">
              <Link href="/about">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  About Us
                </a>
              </Link>
              <ul>
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
            <div className="mb-5 flex flex-col sm:items-center sm:justify-center">
              <Link href="/services">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  Services
                </a>
              </Link>
              <ul>
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
            <div className="mb-5 flex flex-col sm:items-center sm:justify-center">
              <Link href="/products">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  Products
                </a>
              </Link>
              <ul>
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
            <div className="mb-5 flex flex-col sm:items-center sm:justify-center">
              <Link href="/contact">
                <a className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-emerald-400 ease duration-300">
                  Contact Us
                </a>
              </Link>
              <div className="flex py-1">
                <motion.a
                  href="https://wa.me/918152889614"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center sm:text-xl text-center py-2 hover:text-emerald-400 ease-in duration-300"
                >
                  Whatsapp{" "}
                  <span className="pl-3">
                    <BsWhatsapp size={25} color="green" />
                  </span>
                </motion.a>
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+919448383066"
                  className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer pb-2"
                >
                  +91-9448383066
                </a>
                <a
                  href="tel:+918197894618"
                  className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer pb-2"
                >
                  +91-8197894618
                </a>
              </div>
              <a className="leading-relaxed sm:text-xl">
                #2914/A 13th Main 2nd Cross 2nd Stage D-Block , Rajajinagar,
                Banglore
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/" title="Star Instruments & Control Logo">
              <Image src="/icon.png" height="35" width="35" objectFit="cover" />
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
