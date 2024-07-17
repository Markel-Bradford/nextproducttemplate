"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

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
        "relative flex flex-col shadow-xl overflow-hidden no-underline bg-slate-100 transition-opacity duration-700",
        { "opacity-100": inView, "opacity-0": !inView }
      )}
      onClick={() => props.onClick(props.product)}
    >
      <div className="flex flex-col w-full no-underline justify-center items-center p-5 cursor-pointer">
        <figure className="relative w-full pt-[67%] overflow-hidden" data-category={props.label}>
          <img src={props.src} alt="Featured photos" className="absolute top-0 right-0 bottom-0 left-0 block w-full h-full object-cover object-center transition-all" />
        </figure>
        <div className="pt-5 pb-10">
          <h5 className="text-black text-2xl font-bold overflow-hidden text-center">{props.text}</h5>
        </div>
      </div>
    </li>
  );
};

export default Carditems;
