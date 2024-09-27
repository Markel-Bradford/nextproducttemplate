"use client";

// WomensCards.tsx
import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import ProductPreviewPopup from "./ProductPreview";
import SideMenu from "./SideMenu";
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

interface Filters {
  label: string[];
}

const cardData: Product[] = [
  {
    id: 17,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    id: 18,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Trendy skinny jeans for a modern look.",
    label: "T-Shirt",
  },
  {
    id: 19,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    id: 20,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    id: 21,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    id: 22,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum White T",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "T-Shirt",
  },
  {
    id: 23,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    id: 24,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    id: 25,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Joggers",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Joggers",
  },
  {
    id: 26,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    id: 27,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    id: 28,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    id: 29,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    id: 30,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Skinny's",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jeans",
  },
  {
    id: 31,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
  },
  {
    id: 32,
    price: 49.99,
    quantity: 50,
    src: "/womensdenim.jpg",
    text: "Platinum Leather",
    description: "Classic T-shirt for men. Comfortable and stylish.",
    label: "Jackets",
  },
];

const WomensCards: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductPage, setIsProductPage] = useState(false)
  const [filteredCards, setFilteredCards] = useState<Product[]>(cardData);
  const [filters, setFilters] = useState<Filters>({
    label: [],
  });

  useEffect(() => {
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
              id={card.id}
              price={card.price}
              quantity={card.quantity}
              item={card}
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
      {selectedProduct  && !isProductPage && (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
      {selectedProduct && isProductPage && (
        <ProductPage product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
};

export default WomensCards;
