"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '../components/Context/AppContext';

export default function Page() {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { cart, removeFromCart, updateQuantity } = context;

  const subtotal = cart.reduce((total, item) => {
    const priceValue = parseFloat(String(item.price).replace(/[^\d.]/g, "")) || 0;
    return total + priceValue * (item.quantity || 1);
  }, 0);

  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <main className="flex flex-col items-center w-full min-h-[calc(100vh-300px)] bg-[#f6f8f6] dark:bg-[#142210] text-[#131811] dark:text-white font-sans">
      <div className="w-full px-4 md:px-10 py-8 max-w-[1400px]">
        <div className="flex items-center gap-4 mb-8">
          <Link className="p-2 rounded-full hover:bg-[#e5e8e5] dark:hover:bg-[#2c3928] transition-colors" href="/">
            <span className="material-symbols-outlined text-[#131811] dark:text-white">arrow_forward</span>
          </Link>
          <h1 className="text-3xl font-black text-[#131811] dark:text-white tracking-tight">سلة المشتريات</h1>
          <span className="bg-[#e5e8e5] dark:bg-[#2c3928] text-[#131811] dark:text-white text-sm font-bold px-3 py-1 rounded-full">
            {cart.length} منتجات
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="material-symbols-outlined text-6xl mb-4 text-gray-400">shopping_cart</span>
            <h2 className="text-2xl font-bold mb-4">سلة المشتريات فارغة</h2>
            <Link href="/" className="px-8 py-3 bg-primary text-[#131811] rounded-full font-bold hover:bg-opacity-90 transition-all">
              تصفح المنتجات
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-[1.5rem] bg-white dark:bg-[#1e271c] border border-[#e5e8e5] dark:border-[#2c3928] shadow-sm hover:border-primary dark:hover:border-primary transition-all duration-300">
                  <div className="w-24 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img alt={`Cover of ${item.title}`} className="w-full h-full object-cover" src={item.image} />
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-right gap-1 w-full">
                    <h3 className="text-xl font-bold text-[#131811] dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-[#a3b99d]">
                      {item.authors ? item.authors[0] : ""}
                    </p>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-4 w-full sm:w-auto">
                    <span className="text-xl font-bold text-primary">{item.price} ج.م</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-[#f6f8f6] dark:bg-[#142210] rounded-full border border-[#e5e8e5] dark:border-[#2c3928] h-10 px-1">
                        <button 
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="size-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-[#2c3928] text-[#131811] dark:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <input 
                          className="w-10 bg-transparent border-none text-center text-[#131811] dark:text-white font-bold text-sm focus:ring-0 p-0" 
                          readOnly 
                          type="text" 
                          value={item.quantity || 1} 
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="size-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-[#2c3928] text-[#131811] dark:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="size-10 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" 
                        title="إزالة"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="bg-white dark:bg-[#1e271c] p-8 rounded-[1.5rem] border border-[#e5e8e5] dark:border-[#2c3928] sticky top-28 shadow-sm">
                <h2 className="text-2xl font-bold text-[#131811] dark:text-white mb-6">ملخص الطلب</h2>
                <div className="flex flex-col gap-4 mb-6 border-b border-[#e5e8e5] dark:border-[#2c3928] pb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-[#a3b99d]">المجموع الفرعي</span>
                    <span className="font-bold text-[#131811] dark:text-white">{subtotal.toFixed(2)} ج.م</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-[#a3b99d]">ضريبة القيمة المضافة (15%)</span>
                    <span className="font-bold text-[#131811] dark:text-white">{tax.toFixed(2)} ج.م</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-[#a3b99d]">الشحن</span>
                    <span className="font-bold text-primary">مجاني</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-bold text-[#131811] dark:text-white">الإجمالي</span>
                  <span className="text-2xl font-black text-primary">{total.toFixed(2)} ج.م</span>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="w-full h-14 rounded-full bg-primary text-[#131811] hover:bg-opacity-90 transition-all text-base font-extrabold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    <span>إتمام الشراء</span>
                    <span className="material-symbols-outlined text-lg rtl:rotate-180">arrow_forward</span>
                  </button>
                  <Link href="/" className="w-full h-12 flex items-center justify-center rounded-full border-2 border-transparent hover:border-[#e5e8e5] dark:hover:border-[#2c3928] text-gray-500 dark:text-[#a3b99d] hover:text-[#131811] dark:hover:text-white transition-all text-sm font-bold">
                    العودة للتسوق
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-[#e5e8e5] dark:border-[#2c3928] flex flex-col gap-4">
                  <p className="text-xs text-center text-gray-400">طرق دفع آمنة 100%</p>
                  <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="h-6 w-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-6 w-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-6 w-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}