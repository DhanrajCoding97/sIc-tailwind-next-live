import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-black font-bold">
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-evenly">
        <div id="column" className="flex flex-col">
          <Link href="/about">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
            >
              About Us
            </motion.a>
          </Link>
          <Link href="/about">
            <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
              Our expertise
            </a>
          </Link>
          <Link href="/about">
            <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
              Our clients
            </a>
          </Link>
        </div>
        <div id="column" className="flex flex-col">
          <Link href="/services">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
            >
              Services
            </motion.a>
          </Link>
          <Link href="/services">
            <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
              Product Supply Group (PSG)
            </a>
          </Link>
          <Link href="/services">
            <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
              Process Automation Products
            </a>
          </Link>
          <Link href="/services">
            <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
              Sensors & Safety Products
            </a>
          </Link>
        </div>
        <div id="column" className="flex flex-col">
          <Link href="/products">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl lg:text-3xl pb-2 cursor-pointer"
            >
              Products
            </motion.a>
          </Link>
          <ul>
            <li>
              <Link href="/products">
                <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                  Sugar Mills
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                  Pulp & Paper Industries
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer">
                  Distilleries & Breweries
                </a>
              </Link>
            </li>
            <li>
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
        <div id="column" className="flex flex-col">
          <Link href="/contact">
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
              className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer"
            >
              +91-9448383066
            </a>
            <a
              href="tel:+918197894618"
              className="sm:text-xl hover:text-emerald-400 ease-in duration-300 cursor-pointer"
            >
              +91-8197894618
            </a>
          </div>
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
    </footer>
  );
};

export default Footer;
