import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
 
  return (
    <div id="content"
    >

      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
