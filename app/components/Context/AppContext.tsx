"use client";
import { Cart } from "@/types/cart";
import { createContext } from "react";

type AppContext = {
  cart: Cart[],
  setCart: React.Dispatch<React.SetStateAction<any[]>>,
};

export const AppContext = createContext<AppContext | null>(null);
