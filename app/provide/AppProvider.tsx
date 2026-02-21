"use client";

import { useState, useEffect } from "react";
import { AppContext } from "../components/Context/AppContext";
import { Cart } from "@/types/cart";

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        setCart([]);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product: Cart) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      const quantityToAdd = product.quantity || 1;

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + quantityToAdd }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
  };

  const removeFromCart = (id: string | number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string | number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <AppContext.Provider 
      value={{ 
        cart, 
        setCart, 
        addToCart, 
        removeFromCart, 
        updateQuantity 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;