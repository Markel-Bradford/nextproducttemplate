"use client";

import React from "react";
import PreloadImage from "./PreloadImage";
import Image from "next/image";

const Hero: React.FC = () => {
  const imageUrl = "/shadesmodel.png";

  return (
    <div className="flex justify-center items-center bg-white max-w-screen-2xl mx-auto px-5 mt-12 h-1/3 max-lg:flex-col max-md:w-full">
      {/* Preload the image */}
      <PreloadImage src={imageUrl} />
      <div className="leading-8 w-full text-black animate-fadein">
        <h1 className="text-4xl md:text-7xl max-lg:text-center">Platinum Threads</h1>
        <p className="text-2xl  md:text-5xl max-lg:text-center">Let your style shine</p>
      </div>
      <div className="flex justify-end w-1/2 lg:w-full max-lg:mt-12">
        <img src={imageUrl} 
          alt="Model with shades"  
          className="w-full flex animate-slideandfade max-lg:w-full"/>
      </div>
    </div>
  );
};

export default Hero;
