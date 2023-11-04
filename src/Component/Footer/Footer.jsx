import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer>
       <div className="footer-logo">
            <img src="/src/img/my-logo.jpg" alt="Logo" />
            <span>LionHome</span>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
    </footer>
  );
}

export default Footer;
