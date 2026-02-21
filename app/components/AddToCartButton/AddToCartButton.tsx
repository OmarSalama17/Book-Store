"use client";

import { useContext, useState } from "react";
import { AppContext } from "../../components/Context/AppContext";
import { Book } from "@/types/book";

type Props = {
  book: Book;
  compact?: boolean;
};

export default function AddToCartButton({ book, compact = false }: Props) {
  const context = useContext(AppContext);
  const addToCart = context?.addToCart;
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); 
    if (addToCart) {
      addToCart({ ...book, quantity } as any);
    }
  };

  if (compact) {
    return (
      <button 
        onClick={handleAdd}
        className="w-full h-10 rounded-full bg-[#131811] dark:bg-[#2c3928] text-white text-sm font-bold hover:bg-primary hover:text-[#131811] transition-colors flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">
          add_shopping_cart
        </span>
        <span>إضافة للسلة</span>
      </button>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <div className="flex items-center bg-white dark:bg-[#1e271c] rounded-full border border-[#e5e8e5] dark:border-[#2c3928] w-fit shadow-sm">
        <button 
          onClick={() => setQuantity(q => q + 1)}
          className="size-12 flex items-center justify-center text-[#131811] dark:text-white hover:text-primary transition-colors active:scale-90 transform"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
        <input
          className="w-12 bg-transparent border-none text-center font-bold text-[#131811] dark:text-white focus:ring-0 text-lg outline-none"
          readOnly
          type="number"
          value={quantity}
        />
        <button 
          onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}
          className="size-12 flex items-center justify-center text-[#131811] dark:text-white hover:text-primary transition-colors active:scale-90 transform"
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
      </div>
      <button 
        onClick={handleAdd}
        className="flex-1 h-12 rounded-full bg-[#131811] dark:bg-primary text-white dark:text-[#131811] text-base font-bold hover:bg-primary dark:hover:bg-white hover:text-[#131811] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1"
      >
        <span className="material-symbols-outlined">
          shopping_cart_checkout
        </span>
        <span>إضافة إلى السلة</span>
      </button>
      <button className="size-12 rounded-full border border-[#e5e8e5] dark:border-[#2c3928] bg-white dark:bg-[#1e271c] flex items-center justify-center text-[#131811] dark:text-white hover:bg-red-50 hover:text-red-500 hover:border-red-200 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors shadow-sm group">
        <span className="material-symbols-outlined group-hover:filled">
          favorite
        </span>
      </button>
    </div>
  );
}