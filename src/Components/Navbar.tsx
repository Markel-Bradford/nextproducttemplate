"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";



const Navbar = () => {

  const [click, setClick] = useState(false); /*creates opposite state to open and close menu on click*/
  const {toggleCart, getItemQuantity, cartQuantity} = useShoppingCart();

  const handleClick = () => setClick(!click); /*reverses false click state set*/
  const closeMobileMenu = () => setClick(false);
  
  return (
      <nav className="bg-white h-20 flex justify-center items-center text-xl sticky top-0 z-[1000] shadow-[0_4px_8px_rgba(0,0,0,0.6)]" >
        <div className="flex justify-center items-center h-20 max-w-[1500px] w-4/5 max-lg:justify-between">
          <Link href="/" className="flex justify-self-start items-center cursor-pointer no-underline ">
            <Image width={100} height={200} className="w-28 h-[88px]" src="/pthreads.png" alt="" />
          </Link>
          <div>
          <button className="lg:hidden max-lg:w-full max-lg:text-center max-lg:p-6  max-lg:hover:bg-black max-lg:hover:text-white text-black flex items-center no-underline px-4 h-full hover:border-b-zinc-600 hover:border-b-solid hover:border-b-[4px] transition-all"
                onClick={toggleCart}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="mb-5 z-50 bg-red-600 text-white text-xs rounded-full px-1 ">{cartQuantity}</span>
              </button>       
          </div>

          <div className="hidden max-lg:contents max-lg:absolute max-lg:right-5 text-3xl cursor-pointer" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
            {/*? is equal to true. : creates toggle from one item to another.  */}
          </div>
          <ul className={`${
            click ? "left-0 bg-white z-105" : "left-[-110%]"
          } inline-block w-screen h-screen absolute top-[80px] opacity-100 transition-all duration-500 ease overflow-hidden lg:flex lg:static lg:w-auto lg:h-auto lg:opacity-100 lg:bg-transparent lg:shadow-none lg:ml-auto`}
        >
            <li className="h-20">
              <Link href="/" 
              className="max-lg:table max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-black flex items-center no-underline px-4 h-full hover:border-b-zinc-600 hover:border-b-solid hover:border-b-[4px] transition-all" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className="h-20">
              <Link
                href="/mens"
                className="max-lg:table max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-black flex items-center no-underline px-4 h-full hover:border-b-zinc-600 hover:border-b-solid hover:border-b-[4px] transition-all"
                onClick={closeMobileMenu}>
                Mens
              </Link>
            </li>
            <li className="h-20">
              <Link
                href="/womens"
                className="max-lg:table max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-black flex items-center no-underline px-4 h-full hover:border-b-zinc-600 hover:border-b-solid hover:border-b-[4px] transition-all"
                onClick={closeMobileMenu}>
                Womens
              </Link>
            </li>
            <li className="h-20">
              <Link
                href="/contact"
                className="max-lg:table max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-black flex items-center no-underline px-4 h-full hover:border-b-zinc-600 hover:border-b-solid hover:border-b-[4px] transition-all"
                onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="h-20">
              <button className="max-lg:hidden max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-black flex items-center no-underline px-4 h-full hover:border-b-zinc-600 hover:border-b-solid hover:border-b-[4px] transition-all"
                onClick={toggleCart}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="mb-5 z-50 bg-red-600 text-white text-xs rounded-full px-1 ">{cartQuantity}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
