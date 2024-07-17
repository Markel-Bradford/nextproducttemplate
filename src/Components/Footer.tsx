import React from "react";

const Footer = () => {

  return (
    <div className="bg-white pt-[10px] border-t-2 border-t-solid border-t-black">
      <div className="flex justify-around items-center max-w-[1200px] my-0 mx-auto">
        <div className="flex gap-5">
            <h3 className="text-xl font-bold underline"><a className="text-black no-underline" href="">About</a></h3>
            <h3 className="text-xl font-bold underline"><a className="text-black no-underline" href="">Help</a></h3>
            <h3 className="text-xl font-bold underline"><a className="text-black no-underline" href="">Products</a></h3>
        </div>
      </div>
      <div className="flex justify-center items-center h-[60px] font-bold">
        <p>All rights reserved &copy; 2024 Platinum Threads</p>
      </div>
    </div>
  );
};

export default Footer;
