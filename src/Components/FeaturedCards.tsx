"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";

interface Product {
  src: string;
  text: string;
  description: string;
  label: string;
}

const cardData: Product[] = [
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    label: "Unisex",
  },
  {
    src: "/mensskinnys.jpeg",
    text: "Men's Skinny Jeans",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    label: "Mens",
  },
  {
    src: "/womensdenim.jpg",
    text: "Women's Denim Jacket",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    label: "Womens",
  },
];

const Cards: React.FC = () => {
  const [selectedProduct, setselectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Preload all images
    const preloadImages = (images: Product[]) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image.src;
      });
    };

    preloadImages(cardData);
  }, []);

  function showPreview(product: Product) {
    setselectedProduct(product);
  }

  function hidePreview() {
    setselectedProduct(null);
  }

  return (
    <div className="relative mx-auto my-0 p-16">
      <div className="w-full mx-auto my-0 ">
        <div className="relative mt-6 max-lg:mt-0 mb-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <Carditems
              key={index}
              product={card}
              src={card.src}
              text={card.text}
              label={card.label}
              description={card.description}
              onClick={() => showPreview(card)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
};

export default Cards;
