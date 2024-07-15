"use client"

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";
import "../Styles/Cards.css";

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
    src: "/womensdenim.jpg",
    text:"Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label:"T-Shirt",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Trendy skinny jeans for a modern look.",
    label:"T-Shirt",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
    path: ""
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
    path: ""
  },
];


const WomensCards: React.FC = () => {
  const [selectedProduct, setselectedProduct] = useState<Product | null>(null);
  const [filteredCards, setFilteredCards] = useState<Product[]>(cardData);
  const [filters, setFilters] = useState<Filters>({
    label: [],
  });
  
  useEffect(() => {
    // Preload all images
    const preloadImages = (images: Product[]) => {
      images.forEach(image => {
        const img = new Image();
        img.src = image.src;
      });
    };

    preloadImages(cardData);
  }, []);

  function showPreview(product: Product) {
    // Set the state to the selected product
    setselectedProduct(product);
  }

  function hidePreview() {
    // Reset the state to null
    setselectedProduct(null);
  }

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = cardData;

    if (filters.label.length > 0) {
      filtered = filtered.filter(card => filters.label.includes(card.label));
    }

    setFilteredCards(filtered);
  };

  return (
    <div className="cards">
      <SideMenu setFilters={setFilters} filters={filters}/>
      <div className="cardsContainer">
        <div
          className="cardsWrapper">
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
}

export default WomensCards;
