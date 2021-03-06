import React from 'react';
import SocialLinks from '../constants/socialLinks';
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons"></SocialLinks>
      </div>
    </footer>
  );
};

export default Footer;
