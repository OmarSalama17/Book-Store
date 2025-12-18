import { Book } from '@/types/book';
import React from 'react';
import SuggestedItems from '../SuggestedItems/SuggestedItems';

type Props = {
  featuredBooks:Book[];
}
export default function Main({featuredBooks}:Props) {
  const categories = [
    { name: "الروايات", icon: "menu_book" },
    { name: "العلوم", icon: "science" },
    { name: "التاريخ", icon: "history_edu" },
    { name: "تطوير الذات", icon: "psychology" },
    { name: "أطفال", icon: "child_care" },
    { name: "الفنون", icon: "palette" },
  ];



  const bestSellers = [
    {
      title: "فن اللامبالاة",
      author: "مارك مانسون",
      price: "40 ج.م",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-2nkKR2R6g6AiWSkr-f6xyhOJTNZwS5nrE53g_0CzMlzJvM3ik4TSnhVH-gnC0HV1SJ7t7jhgZu86eaTkCKiT_BFRzaEEftrfm74EtDT5KVFASpaNv-tIDSSrjLKt2dqkN_0msEVdhLkBtkN4fonc6npIUycc3oX4Hfr6CJ1GBIjJM-QobVBnwW6vKkuqFc_OK_nYqfYePbkdNEPy_rL21ZL8NSFcZO9zGQwuneP6QXGWWrNSHgcuFtSUw5JzFDCx9I1tghTEi2M",
    },
    {
      title: "الأب الغني والأب الفقير",
      author: "روبرت كيوساكي",
      price: "50 ج.م",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQPDIaLW_W_viKNvX687Aodzm2bnR-nQo2JPc3R2c6sCoo0Zv9RMHw2BcAcc245tj0b6Mc2sNgp3SAWCQbT6NUsjRoysSoMF0Mv1ann3gdvA_Qbw2nWmFBLpH3Adnn1-Cvyg1OhrvaLivWgb5H2r6bRfcfMkWy_2m9svexCK9-7hc_axgIQQ4I7KYWl_yd9DC3vGU6Emk1FjQfNDmP42yKkApgM5OlpD8pMxypo4-Q-flv6Bsyy7dve5fkryqMJdaMq6lIMXHMXec",
    },
    {
      title: "العادات الذرية",
      author: "جيمس كلير",
      price: "55 ج.م",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDfP8IzGWG0fd-lWya_kGGnNKtm0eZL4oz1fsw_8T1xXz_z4Mz-G5N10pxe9qaYF_uDEpGMKfzxkNUrKa1ONegm4ggcJu1imfW2JJc8MAytNWigI2PAxbB1P_GfNV5pc32VFT8-y7p6zT5Z8Qv5IyYJJ3AF_m7i5A6JbQloAAXQd6HvRe754XZaGYADluukkf8p4bw8hVKegsrTg5NJ8q1fUmQoXzrUmnCSvdnzsIiF1lFJI81PP5Xqw_Lpzpjx_hI8FkABZkoxw8",
    },
  ];

  return (
    <main className="container mx-auto flex flex-col items-center w-full font-sans">
      <div className="w-full px-4 md:px-10 py-5 ">
        <div className="@container">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden"
            data-alt="Dark abstract library background with soft green lighting"
            style={{
              backgroundImage:
                'linear-gradient(rgba(20, 34, 16, 0.85), rgba(20, 34, 16, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp5UBFRbtmu2gMIDer1leoFj90jyylqEHkPSgPJliqmUF_pfli0DDpHf6huQebpTHAWFTSoTn_9uYtKTguQCOWgXPCR_Q3RUYr2L04bYKL4kBbLVNt2uujcuOJjrbQaWyYNyzCFBR341GUXF6GBzIKyOCQO_v2EtQkI-rMVzJxpq9P0Pk-cyHOuvGHTidFGCzxxnGMtFOZ7dkuPa9CgnLLp9CUxAbaUwauxtm2qTPSpRek0oV3bY2comzziwumkBUmzk-Q9xM9VVc")',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#142210] to-transparent opacity-80 pointer-events-none"></div>
            <div className="flex flex-col gap-4 text-center z-10 max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                مرحباً بك في عالم المعرفة
              </h1>
              <h2 className="text-gray-300 text-base md:text-lg font-normal leading-relaxed">
                استكشف آلاف الكتب المميزة في جميع المجالات، من الأدب العالمي إلى
                العلوم الحديثة، واطلبها بضغطة زر.
              </h2>
            </div>
            <div className="w-full max-w-[600px] z-10 mt-4">
              <label className="flex w-full items-center rounded-full bg-[#1e271c] border border-[#41543b] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all h-16 pl-2 pr-6 shadow-lg">
                <span className="material-symbols-outlined text-[#a3b99d]">
                  search
                </span>
                <input
                  className="flex-1 bg-transparent border-none text-white placeholder-[#a3b99d] focus:ring-0 px-4 text-base h-full outline-none"
                  placeholder="ابحث عن كتابك المفضل..."
                  type="text"
                />
                <button className="flex items-center justify-center h-12 px-8 rounded-full bg-primary text-[#131811] hover:bg-opacity-90 transition-opacity text-base font-bold bg-[#a3b99d]">
                  بحث
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-8 ">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#131811] dark:text-white">
              تصفح حسب التصنيف
            </h2>
            <a className="text-primary text-sm font-bold hover:underline" href="#">
              عرض الكل
            </a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
            {categories.map((cat, index) => (
              <a
                key={index}
                className="snap-start flex flex-col items-center gap-3 min-w-[120px] group cursor-pointer"
                href="#"
              >
                <div className="size-24 rounded-full bg-[#e5e8e5] dark:bg-[#1e271c] flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-transparent dark:border-[#2c3928] group-hover:border-primary">
                  <span className="material-symbols-outlined text-4xl text-[#131811] dark:text-white group-hover:text-[#131811]">
                    {cat.icon}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#131811] dark:text-white group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-8 ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#131811] dark:text-white">
            الكتب المميزة
          </h2>
          <div className="flex gap-2">
            <button className="size-10 rounded-full border border-[#e5e8e5] dark:border-[#2c3928] flex items-center justify-center hover:bg-[#e5e8e5] dark:hover:bg-[#2c3928] text-[#131811] dark:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">
                arrow_forward_ios
              </span>
            </button>
            <button className="size-10 rounded-full border border-[#e5e8e5] dark:border-[#2c3928] flex items-center justify-center hover:bg-[#e5e8e5] dark:hover:bg-[#2c3928] text-[#131811] dark:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">
                arrow_back_ios
              </span>
            </button>
          </div>
        </div>
              <SuggestedItems books={featuredBooks}/>
      </div>

      <div className="w-full px-4 md:px-10 py-8 ">
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#131811] dark:text-white mb-6">
          الأكثر مبيعاً هذا الأسبوع
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((book, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#1e271c] hover:bg-[#f5f5f5] dark:hover:bg-[#253023] transition-colors cursor-pointer border border-[#e5e8e5] dark:border-transparent"
            >
              <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                <img
                  alt="Book cover"
                  className="w-full h-full object-cover"
                  src={book.image}
                />
              </div>
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <h3 className="text-base font-bold text-[#131811] dark:text-white line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-[#a3b99d]">
                    {book.author}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{book.price}</span>
                  <button className="p-2 rounded-full hover:bg-white/10 text-[#a3b99d] hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-12 ">
        <div className="rounded-[2rem] bg-[#1e271c] border border-[#2c3928] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 size-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="flex flex-col gap-4 z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="text-[#a3b99d] text-sm md:text-base">
              كن أول من يعرف عن الكتب الجديدة، العروض الحصرية، والفعاليات الثقافية.
            </p>
          </div>
          <div className="w-full max-w-md z-10">
            <label className="flex w-full items-center rounded-full bg-[#131811] border border-[#41543b] focus-within:border-primary transition-all h-14 pl-2 pr-2">
              <input
                className="flex-1 bg-transparent border-none text-white placeholder-[#a3b99d] focus:ring-0 px-4 text-sm outline-none"
                placeholder="أدخل بريدك الإلكتروني"
                type="email"
              />
              <button className="flex items-center justify-center h-10 px-6 rounded-full bg-primary text-[#131811] hover:bg-opacity-90 transition-opacity text-sm font-bold bg-[#a3b99d]">
                اشتراك
              </button>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}