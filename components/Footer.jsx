import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer" className="p-8 bg-white text-black font-bold">
      <div id="wrapper">
        <div
          id="row"
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center"
        >
          <div id="column" className="flex flex-col text-left">
            <Link href="/sic/about">
              <a className="text-3xl pb-2 cursor-pointer">About Us</a>
            </Link>
            <Link href="#accordian">
              <a className="text-xl">What we do</a>
            </Link>
            <Link href="#clients">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                Our clients
              </a>
            </Link>
          </div>
          <div id="column" className="flex flex-col text-left">
            <Link href="/sic/services">
              <a className="text-3xl pb-2">Services</a>
            </Link>
            <Link href="#psg">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                Product Supply Group (PSG)
              </a>
            </Link>
            <Link href="#pap">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                Process Automation Products
              </a>
            </Link>
            <Link href="#ssp" className="ciu">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                Sensors & Safety Products
              </a>
            </Link>
          </div>
          <div id="column" className="flex flex-col text-left">
            <Link href="/sic/productsw">
              <a className="sm:text-3xl pb-2">Products</a>
            </Link>
            <Link href="#about">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                What we do
              </a>
            </Link>
            <Link href="#clients">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                Our clients
              </a>
            </Link>
          </div>
          <div id="column" className="flex flex-col text-left">
            <Link href="/sic/contact">
              <a className="text-3xl pb-2">Contact Us</a>
            </Link>
            <div>
              <p>#2914/A 13th Main 2nd Cross 2nd Stage D-Block , Rajajinagar</p>
              <span>Bangalore</span>
            </div>
            <div>
              <span className="flex flex-col">
                <a
                  href="tel:+919448383066"
                  className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer"
                >
                  +91-9448383066
                </a>
                <a
                  href="tel:+918197894618"
                  className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer"
                >
                  +91-8197894618
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
