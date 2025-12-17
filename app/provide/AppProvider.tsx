"use client";
import { useState } from "react";
import { AppContext } from "../components/Context/AppContext";
import { Cart } from "@/types/cart"
type Props = {
  children: React.ReactNode;
};
const AppProvider = ({ children }: Props) => {
  const [cart , setCart] = useState<Cart[]>([])

  return (
    <AppContext.Provider value={{cart , setCart}}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
