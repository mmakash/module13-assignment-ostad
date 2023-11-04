import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer>
       <div className="footer-logo">
            <img src="/src/img/my-logo.jpg" alt="Logo" />
            <span>LionHome</span>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
    </footer>
  );
}

export default Footer;
