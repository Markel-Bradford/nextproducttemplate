"use client"

import React, { useState } from "react";
import "../Styles/Navbar.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

  const [click, setClick] =
    useState(false); /*creates opposite state to open and close menu on click*/

  const handleClick = () => setClick(!click); /*reverses false click state set*/
  const closeMobileMenu = () => setClick(false);
  
  return (
      <nav className={'navbar'} >
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            <img className="logo" src="/pthreads.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
            {/*? is equal to true. : creates toggle from one item to another.  */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                href="/mens"
                className="nav-links"
                onClick={closeMobileMenu}>
                Mens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/womens"
                className="nav-links"
                onClick={closeMobileMenu}>
                Womens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="nav-links"
                onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
