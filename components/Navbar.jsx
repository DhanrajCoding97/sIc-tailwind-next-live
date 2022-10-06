import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#4ade80");

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
        setTextColor("#4ade80");
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
        <div className="flex">
          <div id="logo-container" className="flex md:hidden cursor-pointer">
            <Link href="/">
              <Image
                src="/logo.png"
                width="50"
                height="50"
                className="rounded"
              />
            </Link>
          </div>
          <Link href="/" className="">
            <h1
              style={{ color: `${textColor}` }}
              className="hidden md:block font-bold text-3xl cursor-pointer text-cyan-500"
            >
              Star Instruments & Control
            </h1>
          </Link>
        </div>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 text-emerald-400 font-bold hover:text-white ease-in duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-white ease-in duration-300">
            <Link href="/#about">About Us</Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-white ease-in duration-300">
            <Link href="/#services">Services</Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-white ease-in duration-300">
            <Link href="/#products">Products</Link>
          </li>
          <li className="p-4 text-emerald-400 font-bold hover:text-white ease-in duration-300">
            <Link href="/#contact">Contact Us</Link>
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
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-white text-emerald-400"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-white text-emerald-400"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-white text-emerald-400"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-white text-emerald-400"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
