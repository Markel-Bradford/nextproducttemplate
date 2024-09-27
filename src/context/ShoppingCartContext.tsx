"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { ShoppingCart } from "@/Components/ShoppingCart";
import { cardData, featuredCards, womensCardData } from "@/app/data/ProductData";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
  src: string;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQty: (id: number) => void;
  decreaseCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  getProductByID: (id: number) => any;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const getProductByID = (id: number) =>
    cardData.find((item) => item.id === id) ||
    womensCardData.find((item) => item.id === id)||
    featuredCards.find((item) => item.id === id);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prevState) => !prevState);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQty(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQty(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        openCart,
        closeCart,
        toggleCart,
        cartItems,
        cartQuantity,
        getProductByID,
      }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
