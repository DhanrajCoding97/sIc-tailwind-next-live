import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
              Star Instruments & Control
            </h1>
          </Link>
          <ul className="hidden sm:flex">
            <li className="p-4">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/#about">
                <a>About Us</a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/#products">
                <a>Products</a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/#contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
          {/* Mobile button */}
          <div className="sm:hidden fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-black text-emerald-400 text-center ease-in duration-300">
            <AiOutlineMenu size={20} />
          </div>
          <ul className="sm:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-linear duration-300">
            <li className="p-4 text-center text-emerald-400 hover:text-emerald-400 ">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="p-4 text-center text-emerald-400 hover:text-emerald-400 ">
              <Link href="/#about">
                <a>About Us</a>
              </Link>
            </li>
            <li className="p-4 text-center text-emerald-400 hover:text-emerald-400 ">
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li className="p-4 text-center ">
              <Link href="/#products">
                <a>Products</a>
              </Link>
            </li>
            <li className="p-4 text-center ">
              <Link href="/#contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
