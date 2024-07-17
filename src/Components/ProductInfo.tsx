import React from "react";
import FeaturedCards from "./FeaturedCards";
import Image from "next/image";

const ProductInfo = () => {
  return (
    <div
      className="
      py-12
      bg-zinc-950
      text-white
      [&>*:nth-child(even)]:bg-white 
      [&>*:nth-child(even)]:text-black
    ">
      <div
        className="
      flex 
      w-full 
      justify-center 
      items-center 
      max-lg:flex-col-reverse
      px-24
      max-lg:px-0">
        <div className="w-full px-6">
          <Image
        width={500}
        height={750}
            src="/tshirtmodel.jpeg"
            alt=""
            className="
            flex 
            w-[40vw] 
            py-12
            max-lg:w-full"
          />
        </div>
        <div className="px-6 w-full">
          <h2
            className="
          text-[2.2vw]
          font-semibold 
          pb-6 
          max-lg:text-center 
          max-lg:text-2xl
          ">
            Platinum styles for Platinum people
          </h2>
          <p className="text-[1.5vw] max-lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div
        className="flex 
      w-full 
      justify-center 
      items-center 
      max-lg:flex-col
      pt-12
      pb-4
      px-24
      max-lg:px-0">
        <div className="w-full pt-12 px-6">
          <h2
            className="
            text-[2.2vw]
            font-semibold  
          pb-6 
          max-lg:text-center 
          max-lg:text-2xl">
            Platinum standard materials
          </h2>
          <p className="text-[1.5vw] max-lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="px-6 w-full">
          <Image
        width={500}
        height={750}
            src="/shirttag.jpeg"
            alt=""
            className="
            flex 
            w-[40vw] 
            py-6
            max-lg:w-full"
          />
        </div>
      </div>
      <div
        className="
      flex-col
      w-full 
      justify-center 
      items-center 
      max-lg:flex-col
      pt-12
      ">
        <h2 className="text-4xl max-lg:text-2xl text-center">
          Featured Products
        </h2>
        <FeaturedCards />
      </div>
    </div>
  );
};

export default ProductInfo;
