import React from "react";
import "../Styles/Footer.css"

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-items">
            <h3 ><a className="footer-links" href="">About</a></h3>
            <h3 ><a className="footer-links" href="">Help</a></h3>
            <h3 ><a className="footer-links" href="">Products</a></h3>
        </div>
      </div>
      <div className="ownership">
        <p>All rights reserved &copy; 2024 Platinum Threads</p>
      </div>
    </div>
  );
};

export default Footer;
