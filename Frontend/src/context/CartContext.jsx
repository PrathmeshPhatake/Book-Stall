import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider ({ children }){
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log("Adding to cart:", item); // Debug log
    setCartItems((prevItems) => [...prevItems, item]);
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
