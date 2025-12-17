"use client";
import { urlApi } from "@/app/urlApi";
import { Book } from "@/types/book";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
  books: Book[];
};
const SuggestedItems = ({ books }: Props) => {
  return (
    <div className="flex overflow-x-auto gap-6 pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
      {books.slice(0,5).map((book, index) => (
        <Link
          href={`/books/${book.slug}`}
          key={index}
          className="flex-none snap-start w-[240px] flex flex-col gap-4 rounded-2xl bg-white dark:bg-[#1e271c] p-4 shadow-sm border border-[#e5e8e5] dark:border-transparent hover:border-primary dark:hover:border-primary transition-all duration-300 group"
        >
          <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
            <img
              alt={`Cover of the book '${book.title}'`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={book.image}
            />
            {book.badge && (
              <div
                className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${
                  book.badge.type === "new"
                    ? "bg-primary text-[#131811] bg-[#a3b99d]"
                    : "bg-red-500 text-white"
                }`}
              >
                {book.badge.text}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-[#131811] dark:text-white line-clamp-1">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-[#a3b99d]">
              {book.authors[0]}
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-2 items-center">
                <span className="text-lg font-bold text-primary">
                  {book.price} {book.currency}
                </span>
                {book.oldPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    {book.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-yellow-400 text-xs">
                <span className="material-symbols-outlined text-[16px] filled">
                  star
                </span>
                <span className="text-[#131811] dark:text-white font-medium">
                  {book.rating}
                </span>
              </div>
            </div>
          </div>
          <button className="w-full h-10 rounded-full bg-[#131811] dark:bg-[#2c3928] text-white text-sm font-bold hover:bg-primary hover:text-[#131811] transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              add_shopping_cart
            </span>
            <span>إضافة للسلة</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedItems;
