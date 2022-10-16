import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-black font-bold">
      <div className="content-center md:px-10 xl:px-40">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div id="column">
            <Link href="/sic/about">
              <a className="text-3xl pb-2 cursor-pointer hover:">About Us</a>
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
          <div id="column">
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
            <Link href="#ssp">
              <a className="text-xl hover:text-cyan-600 ease-in duration-300 cursor-pointer">
                Sensors & Safety Products
              </a>
            </Link>
          </div>
          <div id="column">
            <Link href="/sic/productsw">
              <a className="text-3xl pb-2">Products</a>
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
          <div id="column">
            <Link href="/sic/contact">
              <a className="text-3xl pb-2">Contact Us</a>
            </Link>
            <p>#2914/A 13th Main 2nd Cross 2nd Stage D-Block , Rajajinagar</p>
            <span>Bangalore</span>
            <div>
              <span>
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
