import { useCallback, useEffect, useMemo, useState } from "react";
import type { ItemCart } from "../../types/ItemCart";

const getCart = () => {
  if (typeof window !== "undefined") {
    const datos = localStorage.getItem("cartShop");
    return datos ? JSON.parse(datos) : [];
  }
  return [];
};
export const useCart = () => {
  const [listItems, setListItems] = useState<ItemCart[]>(getCart());
  useEffect(() => {
    const sync = () => setListItems(getCart());
    window.addEventListener("updatedCart", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("updatedCart", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const updateCart = useCallback((newCart: ItemCart[]) => {
    localStorage.setItem("cartShop", JSON.stringify(newCart));
    setListItems(newCart);
    window.dispatchEvent(new Event("updatedCart"));
  }, []);

  const clearCart = useCallback(() => {
    updateCart([]);
  }, [updateCart]);

  const deleteItem = useCallback(
    (id: number) => {
      updateCart(listItems.filter((item) => item.id !== id));
    },
    [listItems, updateCart],
  );

  const total = useMemo(() => {
    return listItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [listItems]);

  const addQuantity = useCallback(
    (id: number) => {
      updateCart(
        listItems.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      );
    },
    [updateCart, listItems],
  );

  const decreaseQuantity = useCallback(
    (id: number) => {
      updateCart(
        listItems.map((item) => {
          return item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
      );
    },
    [updateCart, listItems],
  );
  const totalItems = useMemo(() => {
    return listItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [listItems]);
  return {
    listItems,
    hasListItems: Array.isArray(listItems) && listItems.length > 0,
    clearCart,
    deleteItem,
    total,
    addQuantity,
    decreaseQuantity,
    totalItems,
  };
};
