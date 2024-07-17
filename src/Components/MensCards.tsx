"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";
import classNames from "classnames";

interface Product {
  src: string;
  text: string;
  description: string;
  label: string;
}

interface Filters {
  label: string[];
}

const cardData: Product[] = [
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Trendy skinny jeans for a modern look.",
    label: "T-Shirt",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
  },
  // Add the rest of your products here...
];

const MensCards: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
  };

  const hidePreview = () => {
    setSelectedProduct(null);
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

export default MensCards;
