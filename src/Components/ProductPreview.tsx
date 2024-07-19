"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Product {
  src: string;
  text: string;
  description: string;
}

interface ProductPreviewPopupProps {
  product: Product | null;
  onClose: () => void;
}

const ProductPreviewPopup: React.FC<ProductPreviewPopupProps> = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    if (props.product) {
      const img = new window.Image(); // Rename the local Image object to img
      img.src = props.product.src;
      img.onload = () => setImageLoaded(true);
    }
  }, [props.product]);

  if (!props.product) return null; // If no product is selected, don't render anything

  return (
    <div className="
    top-1/2
    left-1/2
    -translate-y-1/2
    -translate-x-1/2
    bg-white
    text-black
    shadow-2xl
    z-[1000]
    animate-slideup
    transition-[1s]
    fixed
    max-h-[75%]
    overflow-y-scroll
    max-md:top-[55%]
    max-md:w-11/12
    ">
      <div className="
      bg-white
      p-5
      relative
      w-full
      max-w-[650px]
      "
      >
        <span className="sticky top-2.5 left-[90%] text-xl font-extrabold cursor-pointer" onClick={props.onClose}>
          x
        </span>
        {imageLoaded ? (
          <Image
            className="flex my-[25px] w-full mx-auto"
            src={props.product.src}
            alt={props.product.text}
            width={750}
            height={500}
          />
        ) : (
          <div>Loading...</div>
        )}
        <h2 className="text-center text-3xl">{props.product.text}</h2>
        <p className="flex justify-center text-lg p-5">{props.product.description}</p>
        {/* Add other product details as needed */}
      </div>
    </div>
  );
};

export default ProductPreviewPopup;
