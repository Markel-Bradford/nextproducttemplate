"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  src: string;
  text: string;
  description: string;
}

interface Item {
  src: string;
  text: string;
  description: string;
  additionalDetails?: string;
}

interface ProductPageProps {
  product: Product | Item | null;
  onClose: () => void;
}

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (props.product) {
      const img = new window.Image();
      img.src = props.product.src;
      img.onload = () => setImageLoaded(true);
    }
  }, [props.product]);

  if (!props.product) return null;

  return (
    <div className="overflow-y-scroll max-lg:top-[80px] fixed max-w-[1800px] h-full mx-auto inset-0 bg-white z-[999] flex flex-col items-center justify-center p-5">
      <button className="absolute bg-black max-lg:top-6 top-24 right-5 text-white text-lg max-lg:py-1.5 max-lg:px-3 py-3 px-6 border-black border-solid border-2 hover:bg-gray-700 duration-100" onClick={props.onClose}>
        Back
      </button>
      {imageLoaded ? (
        <Image
          className="mt-12 mb-6 max-md:w-full"
          src={props.product.src}
          alt={props.product.text}
          width={750}
          height={500}
        />
      ) : (
        <div>Loading...</div>
      )}
      <h1 className="text-3xl font-bold">{props.product.text}</h1>
      <p className="text-lg text-black my-5 max-w-4xl mx-auto">{props.product.description}</p>
      {'additionalDetails' in props.product && (
        <p className="text-md">{props.product.additionalDetails}</p>
      )}
    </div>
  );
};

export default ProductPage;
