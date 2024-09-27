"use client"

import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from "./CartItems"
import { FormatCurrency } from "@/utilities/FormatCurrency"
import { cardData } from "@/app/data/ProductData"


type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  const total = cartItems.reduce((total, cartItems) => {
    const product = cardData.find(item => item.id === cartItems.id)
    return total + (product?.price || 0) * cartItems.quantity
  }, 0)


  return (
    <div className={`${isOpen ? "fixed top-[80px] right-[52px] w-[300px] h-full bg-slate-100 transition-all z-[999] overflow-y-scroll shadow-[0_10px_10px_rgba(0,0,0,0.6)] max-[1800px]:right-0": "fixed top-0 -right-full w-[300px] h-full bg-slate-100 transition-all z-[999]"}`}>
        <h1 className="text-[28px] text-center mt-12">Cart</h1>
        <div className="flex flex-col p-5">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(total)}
          </div>
          </div>
    </div>
  )
}