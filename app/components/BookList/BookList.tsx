"use client";

import React, { useState, useMemo, useEffect, useContext } from "react";
import { Book } from "@/types/book";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AppContext } from "../Context/AppContext";

type Props = {
  books: Book[];
};

export default function BookList({ books }: Props) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const searchFromUrl = searchParams.get("search");

  const context = useContext(AppContext);
  const addToCart = context?.addToCart;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");
  
  const [appliedMinPrice, setAppliedMinPrice] = useState<number | null>(null);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState<number | null>(null);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [categoryFromUrl, searchFromUrl]);

  const categoriesFilter = useMemo(() => {
    const dynamicCategories = Array.from(
      new Set(books.map((book) => book.category).filter(Boolean))
    );
    
    const allCategories = Array.from(
      new Set([
        "الروايات والأدب",
        "العلوم والتكنولوجيا",
        "التاريخ والسياسة",
        "تطوير الذات",
        "كتب الأطفال",
        ...dynamicCategories,
      ])
    );

    return allCategories.map((categoryName) => {
      const count = books.filter((book) => book.category === categoryName).length;
      return { name: String(categoryName), count };
    });
  }, [books]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleApplyPrice = () => {
    setAppliedMinPrice(minPriceInput ? parseFloat(minPriceInput) : null);
    setAppliedMaxPrice(maxPriceInput ? parseFloat(maxPriceInput) : null);
  };

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (book.authors && book.authors[0]?.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(book.category as any);

      const priceValue = parseFloat(String(book.price).replace(/[^\d.]/g, ""));
      const matchesMinPrice = appliedMinPrice === null || priceValue >= appliedMinPrice;
      const matchesMaxPrice = appliedMaxPrice === null || priceValue <= appliedMaxPrice;

      return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
    });
  }, [books, searchQuery, selectedCategories, appliedMinPrice, appliedMaxPrice]);

  return (
    <main className="container mx-auto flex flex-col items-center w-full flex-1 font-sans">
      <div className="w-full px-4 md:px-10 py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex text-sm text-gray-500 dark:text-[#a3b99d] mb-4"
        >
          <ol className="inline-flex items-center space-x-1 space-x-reverse md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                className="inline-flex items-center hover:text-primary transition-colors"
                href="/"
              >
                <span className="material-symbols-outlined text-lg ml-1">
                  home
                </span>
                الرئيسية
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-lg mx-1">
                  chevron_left
                </span>
                <span className="text-[#131811] dark:text-white font-medium">
                  كل الكتب
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-4xl font-black text-[#131811] dark:text-white tracking-[-0.033em]">
          تصفح الكتب
        </h1>
      </div>

      <div className="w-full px-4 md:px-10 pb-16 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
          <div className="lg:hidden">
            <button className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#1e271c] rounded-xl border border-[#e5e8e5] dark:border-[#2c3928]">
              <span className="font-bold">تصفية النتائج</span>
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>

          <div className="hidden lg:flex flex-col gap-6 sticky top-24">
            <div className="relative">
              <input
                className="w-full h-12 pr-10 pl-4 rounded-xl bg-white dark:bg-[#1e271c] border border-[#e5e8e5] dark:border-[#2c3928] focus:border-primary focus:ring-0 text-sm outline-none"
                placeholder="بحث في النتائج..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute top-3 right-3 text-gray-400">
                search
              </span>
            </div>

            <div className="bg-white dark:bg-[#1e271c] p-6 rounded-2xl border border-[#e5e8e5] dark:border-[#2c3928]">
              <h3 className="font-bold text-lg mb-4 text-[#131811] dark:text-white flex items-center justify-between">
                التصنيفات
                <span className="material-symbols-outlined text-primary text-xl">
                  category
                </span>
              </h3>
              <div className="space-y-3">
                {categoriesFilter.map((cat, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      className="rounded border-gray-300 text-primary focus:ring-primary bg-transparent size-5"
                      type="checkbox"
                      checked={selectedCategories.includes(cat.name)}
                      onChange={() => handleCategoryChange(cat.name)}
                    />
                    <span className="text-sm text-gray-600 dark:text-[#a3b99d] group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                    <span className="mr-auto text-xs text-gray-400">
                      ({cat.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e271c] p-6 rounded-2xl border border-[#e5e8e5] dark:border-[#2c3928]">
              <h3 className="font-bold text-lg mb-4 text-[#131811] dark:text-white flex items-center justify-between">
                السعر
                <span className="material-symbols-outlined text-primary text-xl">
                  payments
                </span>
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative flex-1">
                  <input
                    className="w-full rounded-lg bg-transparent border border-[#e5e8e5] dark:border-[#2c3928] text-sm px-2 py-2 focus:border-primary focus:ring-0 outline-none"
                    placeholder="من"
                    type="number"
                    value={minPriceInput}
                    onChange={(e) => setMinPriceInput(e.target.value)}
                  />
                </div>
                <span className="text-gray-400">-</span>
                <div className="relative flex-1">
                  <input
                    className="w-full rounded-lg bg-transparent border border-[#e5e8e5] dark:border-[#2c3928] text-sm px-2 py-2 focus:border-primary focus:ring-0 outline-none"
                    placeholder="إلى"
                    type="number"
                    value={maxPriceInput}
                    onChange={(e) => setMaxPriceInput(e.target.value)}
                  />
                </div>
              </div>
              <button 
                onClick={handleApplyPrice}
                className="w-full py-2 bg-[#e5e8e5] dark:bg-[#2c3928] text-[#131811] dark:text-white rounded-lg text-sm font-bold hover:bg-primary hover:text-black transition-colors"
              >
                تطبيق
              </button>
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 bg-white dark:bg-[#1e271c] p-4 rounded-xl border border-[#e5e8e5] dark:border-[#2c3928]">
            <p className="text-sm text-gray-500 dark:text-[#a3b99d] font-medium">
              عرض{" "}
              <span className="text-[#131811] dark:text-white font-bold">
                {filteredBooks.length}
              </span>{" "}
              نتيجة من أصل{" "}
              <span className="text-[#131811] dark:text-white font-bold">
                {books.length}
              </span>{" "}
              كتاب
            </p>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-[1400px]:grid-cols-4 gap-6">
              {filteredBooks.map((book, index) => (
                <Link
                  href={`/books/${book.slug}`}
                  key={index}
                  className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-[#1e271c] p-4 shadow-sm border border-[#e5e8e5] dark:border-transparent hover:border-primary dark:hover:border-primary transition-all duration-300 group"
                >
                  <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
                    <img
                      alt={`Cover of the book '${book.title}'`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={book.image}
                    />
                    {book.badge && (
                      <div
                        className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${book.badge.color}`}
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
                      {book.authors?.[0]}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div
                        className={book.oldPrice ? "flex gap-2 items-center" : ""}
                      >
                        <span className="text-lg font-bold text-primary">
                          {book.price}
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
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      if (addToCart) addToCart(book as any);
                    }}
                    className="w-full h-10 rounded-full bg-[#131811] dark:bg-[#2c3928] text-white text-sm font-bold hover:bg-primary hover:text-[#131811] transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_shopping_cart
                    </span>
                    <span>إضافة للسلة</span>
                  </button>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-50">
                search_off
              </span>
              <p className="text-lg font-medium">مفيش كتب مطابقة لبحثك</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategories([]);
                  setAppliedMinPrice(null);
                  setAppliedMaxPrice(null);
                  setMinPriceInput("");
                  setMaxPriceInput("");
                }}
                className="mt-4 text-primary hover:underline font-bold"
              >
                مسح الفلاتر
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}