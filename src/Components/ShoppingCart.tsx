"use client"

import { Offcanvas, Stack } from "react-bootstrap"
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
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(total)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}