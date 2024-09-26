"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";
import classNames from "classnames";
import ProductPage from "@/Components/ProductPage";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { cardData } from "@/app/data/ProductData";

interface Product {
  id: number;
  src: string;
  text: string;
  description: string;
  label: string;
  quantity: number;
  price: number;
}

interface Filters {
  label: string[];
}

const MensCards: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductPage, setIsProductPage] = useState(false)
  const [filteredCards, setFilteredCards] = useState<Product[]>(cardData);
  const [filters, setFilters] = useState<Filters>({ label: [] });
  
  useEffect(() => {
    console.log("cardData", cardData);
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

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = cardData;

    if (filters.label.length > 0) {
      filtered = filtered.filter((card) => filters.label.includes(card.label));
    }

    setFilteredCards(filtered);
    console.log("filteredCards", filtered);
  };

  return (
    <div className="relative mx-auto my-0 p-16">
      <SideMenu setFilters={setFilters} filters={filters} />
      <div className="w-full mx-auto my-0 p-2.5">
        <div className="relative mt-12 mb-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredCards.map((card, index) => (
            <Carditems
              key={index}
              id={card.id}
              item={card}
              product={card}
              src={card.src}
              quantity={card.quantity}
              price={card.price}
              text={card.text}
              label={card.label}
              description={card.description}
              onClick={showPreview}
              onViewProduct={showProductPage}
            />
          ))}
        </div>
      </div>
      {selectedProduct  && !isProductPage && (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
      {selectedProduct && isProductPage && (
        <ProductPage product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
};

export default MensCards;
