"use client"

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";

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
    src: "/womensdenim.jpg",
    text:"Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label:"T-Shirt",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Trendy skinny jeans for a modern look.",
    label:"T-Shirt",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
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
}

export default WomensCards;
