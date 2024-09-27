"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import ProductPage from "./ProductPage";

interface Product {
  id: number;
  src: string;
  text: string;
  description: string;
  label: string;
  quantity: number;
  price: number;
}

const cardData: Product[] = [
  {
    id: 1,
      src: "/abstractshirt.jpeg",
      text: "Platinum White T",
      description: "Classic T-shirt for men. Comfortable and stylish.",
      label: "T-Shirt",
      quantity: 50,
      price: 49.99
  },
  {
    id: 10,
      src: "/mensskinnys.jpeg",
      text: "Platinum Grey Skinnys",
      description: "Stylish denim skinny jeans made to fit you.",
      label: "Jeans",
      quantity: 50,
      price: 49.99
  },
  {
    id: 17,
    src: "/womensdenim.jpg",
    text: "Women's Denim Jacket",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    label: "Womens",
    quantity: 50,
    price: 49.99
  },
];

const Cards: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductPage, setIsProductPage] = useState(false)

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

  const showPreview = (product: Product) => {
    setSelectedProduct(product);
    setIsProductPage(false)
  };

  const showProductPage = (product: Product) => {
    setSelectedProduct(product);
    setIsProductPage(true);
  };

  const hidePreview = () => {
    setSelectedProduct(null);
    setIsProductPage(false)
  };

  return (
    <div className="relative mx-auto my-0 p-16">
      <div className="w-full mx-auto my-0">
        <div className="relative mt-6 max-lg:mt-0 mb-11 grid grid-cols-cards gap-12">
          {cardData.map((card, index) => (
            <Carditems
              key={index}
              item={card}
              id={card.id}
              product={card}
              price={card.price}
              quantity={card.quantity}
              src={card.src}
              text={card.text}
              label={card.label}
              description={card.description}
              onClick={showPreview}
              onViewProduct={showProductPage}
            />
          ))}
        </div>
      </div>
      {selectedProduct && !isProductPage &&  (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
      {selectedProduct && isProductPage && (
        <ProductPage product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
};

export default Cards;
