"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";
import "../Styles/Cards.css";
import classNames from "classnames";

interface Product {
  src: string;
  text: string;
  description: string;
  label: string;
  path: string;
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
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Trendy skinny jeans for a modern look.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
    path: ""
  },
  {
    src: "/abstractshirt.jpeg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
    path: ""
  },
  // Add the rest of your products here...
];

const MensCards: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredCards, setFilteredCards] = useState<Product[]>(cardData);
  const [filters, setFilters] = useState<Filters>({ label: [] });

  useEffect(() => {
    console.log('cardData', cardData);
    const preloadImages = (images: Product[]) => {
      images.forEach(image => {
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
      filtered = filtered.filter(card => filters.label.includes(card.label));
    }

    setFilteredCards(filtered);
    console.log('filteredCards', filtered);
  };

  return (
    <div className="cards">
      <SideMenu setFilters={setFilters} filters={filters} />
      <div className='cardsContainer'>
        <div className={classNames("cardsWrapper")}>
          <ul className="cardsItems">
            {filteredCards.map((card, index) => (
              <Carditems
                key={index}
                product={card}
                src={card.src}
                text={card.text}
                label={card.label}
                description={card.description}
                path={card.path}
                onClick={() => showPreview(card)}
              />
            ))}
          </ul>
        </div>
      </div>
      {selectedProduct && (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
};

export default MensCards;
