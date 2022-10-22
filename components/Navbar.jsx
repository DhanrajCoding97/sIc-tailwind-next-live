import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffffff");

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 w-full z-10 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4">
        <div className="flex" onClick={toggleHome}>
          <div id="logo-container" className="flex :hidden cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  alt="Star Instruments & Control"
                  src="/icon.png"
                  width="50"
                  height="50"
                  onClick={toggleHome}
                />
              </a>
            </Link>
          </div>
        </div>
        <ul className="hidden sm:flex" style={{ color: `${textColor}` }}>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="p-4 "
          >
            <Link href="/">
              <a className="font-bold hover:text-rose-600 cursor-pointer">
                Home
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="p-4 font-bold hover:text-rose-600 cursor-pointer"
          >
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="p-4 font-bold hover:text-rose-600 cursor-pointer"
          >
            <Link href="/services">
              <a>Services</a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="p-4 font-bold hover:text-rose-600 cursor-pointer"
          >
            <Link href="/products">
              <a>Products</a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="p-4 font-bold hover:text-rose-600 cursor-pointer"
          >
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </motion.li>
        </ul>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} color="#34d399" />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 overflow-hidden"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 overflow-hiiden"
          }
        >
          <ul className="flex flex-col justify-center items-center gap-4 overflow-hidden">
            <li>
              <Link href="/">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
