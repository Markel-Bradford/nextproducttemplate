import { useShoppingCart } from "../context/ShoppingCartContext";
import { cardData, featuredCards, womensCardData } from "@/app/data/ProductData";
import { FormatCurrency } from "@/utilities/FormatCurrency";
import Image from "next/image";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item =
    cardData.find((i) => i.id === id) ||
    womensCardData.find((i) => i.id === id) ||
    featuredCards.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={item.src}
        className="w-[200px] h-[125px] object-cover"
        height={300}
        width={500}
        alt=""
      />
      <div className="mx-auto">
        <div className="flex justify-between text-center font-semibold">
          {FormatCurrency(item.price)} {item.text}
        </div>
      </div>
      <div className="flex w-full justify-around font-semibold mb-2">
        {quantity >= 1 && <span className="">qty {quantity}</span>}{" "}
        {FormatCurrency(item.price * quantity)}
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="font-bold hover:text-red-600 transition-all mb-8">
        Remove
      </button>
    </div>
  );
}
