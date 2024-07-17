"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const imageUrl = "/shadesmodel.png";

  return (
    <div className="max-w-[1800px] flex justify-center items-center bg-white mx-auto px-24 max-lg:px-0 mt-12 h-1/3 max-lg:flex-col max-md:w-full">
      <div className="leading-8 w-full text-black animate-fade">
        <h1 className="text-4xl font-bold md:text-7xl max-lg:text-center">
          Platinum Threads
        </h1>
        <p className="text-2xl  md:text-5xl max-lg:text-center">
          Let your style shine
        </p>
      </div>
      <div className="flex justify-end w-[50%] lg:w-full max-lg:mt-12">
        <Image
        width={500}
        height={750}
        priority
          src={imageUrl}
          alt="Model with shades"
          className="w-[75%] flex animate-slideandfade max-lg:w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
