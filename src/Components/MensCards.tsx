"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";
import classNames from "classnames";
import ProductPage from "@/Components/ProductPage";
import { useShoppingCart } from "@/context/ShoppingCartContext";

interface Product {
  id: number;
  src: string;
  text: string;
  description: string;
  label: string;
  quantity: number;
}

interface Filters {
  label: string[];
}

const cardData: Product[] = [
  {
    id: 1,
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    quantity: 50,
  },
  {
    id: 2,
    src: "/blackt.jpeg",
    text: "Platinum Black T",
    description: "Trendy skinny jeans for a modern look.",
    label: "T-Shirt",
    quantity: 50,
  },
  {
    id: 3,
    src: "/redt.jpeg",
    text: "Platinum Red T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    quantity: 50,
  },
  {
    id: 4,
    src: "/bluet.jpeg",
    text: "Platinum Blue T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    quantity: 50,
  },
  {
    id: 5,
    src: "/greent.jpeg",
    text: "Platinum Green T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    quantity: 50,
  },
  {
    id: 6,
    src: "/pinkt.jpeg",
    text: "Platinum Pink T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    quantity: 50,
  },
  {
    id: 7,
    src: "/blackjoggers.jpeg",
    text: "Platinum Black Joggers",
    description: "Comfortable and stylish joggers for men.",
    label: "Joggers",
    quantity: 50,
  },
  {
    id: 8,
    src: "/whitejoggers.jpeg",
    text: "Platinum White Joggers",
    description: "Comfortable and stylish joggers for men.",
    label: "Joggers",
    quantity: 50,
  },
  {
    id: 9,
    src: "/brownjoggers.jpeg",
    text: "Platinum Khaki Joggers",
    description: "Comfortable and stylish joggers for men.",
    label: "Joggers",
    quantity: 50,
  },
  {
    id: 10,
    src: "/mensskinnys.jpeg",
    text: "Platinum Grey Skinnys",
    description: "Stylish denim skinny jeans made to fit you.",
    label: "Jeans",
    quantity: 50,
  },
  {
    id: 11,
    src: "/blackskinny.jpeg",
    text: "Platinum Black Skinnys",
    description: "Stylish denim skinny jeans made to fit you.",
    label: "Jeans",
    quantity: 50,
  },
  {
    id: 12,
    src: "/redskinny.jpeg",
    text: "Platinum Red Skinnys",
    description: "Stylish denim skinny jeans made to fit you.",
    label: "Jeans",
    quantity: 50,
  },
  {
    id: 13,
    src: "/blueskinny.jpeg",
    text: "Platinum Blue Skinnys",
    description: "Stylish denim skinny jeans made to fit you.",
    label: "Jeans",
    quantity: 50,
  },
  {
    id: 14,
    src: "/whiteskinny.jpeg",
    text: "Platinum White Skinnys",
    description: "Stylish denim skinny jeans made to fit you.",
    label: "Jeans",
    quantity: 50,
  },
  {
    id: 15,
    src: "/blackleather.jpeg",
    text: "Platinum Black Leather",
    description: "Real and stylish leather. Designed with comfort in mind.",
    label: "Jackets",
    quantity: 50,
  },
  {
    id: 16,
    src: "/greyleather.jpeg",
    text: "Platinum Grey Leather",
    description: "Real and stylish leather. Designed with comfort in mind.",
    label: "Jackets",
    quantity: 50,
  },
  // Add the rest of your products here...
];

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
