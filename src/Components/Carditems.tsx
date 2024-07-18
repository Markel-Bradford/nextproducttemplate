"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import Image from "next/image";

interface Product {
  src: string;
  text: string;
  description: string;
  label: string;
}

interface CardItemsProps {
  product: Product;
  src: string;
  text: string;
  label: string;
  description: string;
  onClick: (product: Product) => void;
}

const Carditems: React.FC<CardItemsProps> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <li
      ref={ref}
      className={classNames(
        "relative flex flex-col shadow-[0_8px_12px_rgba(0,0,0,0.7)] overflow-hidden no-underline bg-slate-100",
        { "animate-fadein": inView, "opacity-0": !inView }
      )}
      onClick={() => props.onClick(props.product)}>
      <div className="flex flex-col w-full no-underline justify-center items-center p-5 cursor-pointer">
        <figure
          className="relative w-full pt-[67%] overflow-hidden
          after:content-picwrap after:absolute after:bottom-0 after:ml-3 after:py-1.5 after:px-2 after:max-w-picWrapLabel after:text-xl after:font-bold after:bg-black after:box-border after:text-white"
          data-category={props.label}>
          <Image
            width={500}
            height={350}
            priority
            src={props.src}
            alt="Featured photos"
            className="absolute top-0 right-0 bottom-0 left-0 block w-full h-full object-cover object-center transition-all"
          />
        </figure>
        <div className="pt-5 pb-10">
          <h5 className="text-black text-2xl font-bold overflow-hidden text-center">
            {props.text}
          </h5>
        </div>
      </div>
    </li>
  );
};

export default Carditems;
