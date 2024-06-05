import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const cartItemCount = cartItems.length;

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, cartItemCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
