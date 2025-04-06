import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const capitalize = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleAddToCart = (id, title, image, price) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id]) {
        newCart[id].quantity += 1;
      } else {
        newCart[id] = { title, image, price, quantity: 1 };
      }
      return newCart;
    });
  };

  const handleIncrease = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[id]) {
        newCart[id].quantity += 1;
      }

      return newCart;
    });
  };

  const handleDecrease = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[id]) {
        newCart[id].quantity -= 1;

        if (newCart[id].quantity <= 0) {
          delete newCart[id];
        }
      }

      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        handleIncrease,
        handleDecrease,
        handleAddToCart,
        totalItems,
        capitalize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
