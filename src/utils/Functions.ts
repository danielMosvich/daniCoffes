import type { ItemCart } from "../types/ItemCart";

export const addCart = (
  id: number,
  name: string,
  price: number,
  quantity: number,
) => {
  const itemCart: ItemCart = {
    id,
    name,
    price,
    quantity,
  };
  const cart: ItemCart[] =
    localStorage.getItem("cartShop") == null
      ? []
      : JSON.parse(localStorage.getItem("cartShop") || "[]");
  const index: number = cart.findIndex((item) => item.id === itemCart.id);
  if (index === -1) {
    cart.push(itemCart);
  } else {
    cart[index].quantity += 1;
  }

  localStorage.setItem("cartShop", JSON.stringify(cart));

  if (typeof window != "undefined") {
    window.dispatchEvent(new Event("updatedCart"));
  }
};
