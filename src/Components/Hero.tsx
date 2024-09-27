"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const imageUrl = "/shadesmodel.png";

  return (
    <div className="max-w-[1800px] flex justify-center items-center bg-white mx-auto px-24 max-lg:px-0 mt-12 h-1/3 max-lg:flex-col max-md:w-full">
      <div className="flex flex-col leading-8 justify-around w-full text-black animate-fade max-lg:my-6">
        <h1 className="text-[10vw] mb-[5%] font-bold lg:mb-[5%] lg:text-[48px] 2xl:text-[80px] max-lg:text-center">
          Platinum Threads
        </h1>
        <p className="text-[6vw] lg:text-[40px] 2xl:text-[60px] max-lg:text-center">
          Let your style shine
        </p>
      </div>
      <div className="flex justify-end w-[100%] max-lg:px-9 lg:w-full max-lg:mt-12 ">
        <Image
          width={500}
          height={750}
          priority
          src={imageUrl}
          alt="Model with shades"
          className="w-[75%] flex animate-slideandfade max-lg:w-[80%] max-lg:mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
