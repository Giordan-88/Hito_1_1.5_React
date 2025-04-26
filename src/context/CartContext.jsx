import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(!!storedCart);
  }, []);

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
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleIncrease = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[id]) {
        newCart[id].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
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
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleDelete = () => {
    setCart({});
    localStorage.setItem("cart", JSON.stringify({}));
  };

  const processPayment = async (cart, token) => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (data.error) {
        return { success: false, message: "❌ Error al procesar el pago. Por favor, inténtelo de nuevo." };
      }

      handleDelete(); // Vaciar el carrito después del pago exitoso
      return { success: true, message: "✅ Pago procesado con éxito. ¡Gracias por su compra!" };
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      return { success: false, message: "❌ Error al procesar el pago. Por favor, inténtelo de nuevo." };
    }
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
        handleDelete,
        processPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
