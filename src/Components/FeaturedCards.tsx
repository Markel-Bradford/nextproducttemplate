"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import ProductPage from "./ProductPage";
import { featuredCards } from "@/app/data/ProductData";

interface Product {
  id: number;
  src: string;
  text: string;
  description: string;
  label: string;
  quantity: number;
  price: number;
}

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

    preloadImages(featuredCards);
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
          {featuredCards.map((card, index) => (
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
