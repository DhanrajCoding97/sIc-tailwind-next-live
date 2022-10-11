import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#34d399");

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#292524");
      } else {
        setColor("transparent");
        setTextColor("#34d399");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4">
        <div className="flex" onClick={toggleHome}>
          <div id="logo-container" className="flex md:hidden cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  alt="Star Instruments & Control"
                  src="/logo.png"
                  width="50"
                  height="50"
                  className="rounded"
                  onClick={toggleHome}
                />
              </a>
            </Link>
          </div>
          <Link href="/">
            <a
              style={{ color: `${textColor}` }}
              className="hidden md:block font-bold text-3xl cursor-pointer sm:hover:text-sky-600 ease-in duration-300"
            >
              <h1>Star Instruments & Control</h1>
            </a>
          </Link>
        </div>
        <ul className="hidden sm:flex">
          <li className="p-4 text-emerald-400 font-bold hover:text-sky-600 ease-in duration-300 cursor-pointer">
            <Link href="/">
              <a style={{ color: `${textColor}` }}>Home</a>
            </Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-sky-600 ease-in duration-300 cursor-pointer">
            <Link href="/sic/about">
              <a style={{ color: `${textColor}` }}>About Us</a>
            </Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-sky-600 ease-in duration-300 cursor-pointer">
            <Link href="/sic/services">
              <a style={{ color: `${textColor}` }}>Services</a>
            </Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-sky-600 ease-in duration-300 cursor-pointer">
            <Link href="/sic/products">
              <a style={{ color: `${textColor}` }}>Products</a>
            </Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-sky-600 ease-in duration-300 cursor-pointer">
            <Link href="/sic/contact">
              <a style={{ color: `${textColor}` }}>Contact Us</a>
            </Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose
              size={20}
              color="#34d399"
              style={{ color: `${textColor}` }}
            />
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
              <Link href="/sic/about">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sic/about">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sic/products">
                <a
                  onClick={handleNav}
                  className="text-4xl text-emerald-400 font-bold hover:text-white ease-in duration-300 cursor-pointer"
                >
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sic/contact">
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
