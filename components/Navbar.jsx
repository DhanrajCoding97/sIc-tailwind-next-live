import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div>
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="">Star Instruments & Control</h1>
          </Link>
          <ul className="flex">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/#products">
                <a>Products</a>
              </Link>
            </li>
            <li>
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
