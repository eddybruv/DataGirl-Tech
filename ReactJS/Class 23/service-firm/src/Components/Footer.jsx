import React from "react";
import logo from "./logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="" /> <span>Landify</span>
        </div>
        <div className="menu">
          <p>Menu</p>
          <ul>
            <li>Services</li>
            <li>Works</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="connect">
          <p>Connect</p>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="form">
          <p>Subscribe to our newsletter!</p>
          <form action="">
            <input type="text" placeholder="Your email"/>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
