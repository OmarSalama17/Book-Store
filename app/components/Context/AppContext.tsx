"use client";

import { Cart } from "@/types/cart";
import { createContext } from "react";

type AppContextType = {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (product: Cart) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, newQuantity: number) => void;
};

export const AppContext = createContext<AppContextType | null>(null);