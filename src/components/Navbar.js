import React from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo3.svg';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
const Navbar = ({ toggleSideBar }) => {
  return (
    <nav className="navbar ">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="mdx logo" />
          </Link>
          <button className="toggle-btn" onClick={toggleSideBar}>
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links"></Links>
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  );
};

export default Navbar;
