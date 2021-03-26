/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={open} toggleSideBar={toggleSideBar} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
