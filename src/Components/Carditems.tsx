"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames"; // Import classnames library
import Link from "next/link";
import "../Styles/Cards.css";

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
  path: string;
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
      className={classNames("cardsItem", { "fadeIn": inView, "hidden": !inView })}
      onClick={() => props.onClick(props.product)}
    >
      <Link className="cardsItemLink" href={props.path}>
        <figure className="cardItemPicWrap" data-category={props.label}>
          <img src={props.src} alt="Menu photos" className="cardItemImg" />
        </figure>
        <div className="cardsItemInfo">
          <h5 className="cardsItemText">{props.text}</h5>
        </div>
      </Link>
    </li>
  );
};

export default Carditems;
