import { Book } from "@/types/book";
import Link from "next/link";
import React from "react";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?slug=${slug}`
  );
  const data: Book[] = await res.json();
  const book = data[0];

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}`
  );
  const relatedBooks: Book[] = await response.json();

  const bookSpecs = [
    { label: "عدد الصفحات", value: book.pages },
    { label: "اللغة", value: book.language },
    { label: "دار النشر", value: book.publisher },
    { label: "سنة النشر", value: book.publicationYear },
  ];

  const features = [
    {
      icon: "local_shipping",
      text: "شحن سريع ومجاني للطلبات فوق 200 ج.م",
    },
    {
      icon: "verified_user",
      text: "ضمان جودة الكتاب الأصلية 100%",
    },
    {
      icon: "replay",
      text: "إرجاع مجاني خلال 14 يوماً",
    },
  ];

  const breadcrumbs = [
    { label: "الرئيسية", href: "/" },
    { label: "الكتب", href: "/books" },
    { label: book.title, href: "#", active: true },
  ];

  return (
    <main className="container mx-auto flex flex-col items-center w-full font-sans">
      <div className="w-full px-4 md:px-10 py-8 ">
        <nav className="flex flex-wrap items-center text-sm text-gray-500 dark:text-[#a3b99d] mb-8 gap-2">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="material-symbols-outlined text-xs">
                  chevron_left
                </span>
              )}
              {item.active ? (
                <span className="text-[#131811] dark:text-white font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  className="hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-white dark:bg-[#1e271c] border border-[#e5e8e5] dark:border-transparent relative shadow-xl">
              <img
                alt={`Cover of the book '${book.title}'`}
                className="w-full h-full object-cover"
                src={book.image}
              />
              {book?.badge?.type && (
                <div className="absolute top-4 right-4 bg-primary text-[#131811] text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  الأكثر مبيعاً
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#e5e8e5] dark:bg-[#2c3928] text-xs font-bold text-[#131811] dark:text-white">
                  {book.category}
                </span>
                <div className="flex items-center gap-1 text-yellow-400 text-sm bg-yellow-400/10 px-2 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[18px] filled">
                    star
                  </span>
                  <span className="text-[#131811] dark:text-white font-bold">
                    {book.rating}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs px-1 border-r border-gray-300 dark:border-gray-600">
                    ({book?.ratingCount?.toLocaleString()} تقييم)
                  </span>
                </div>
                <span
                  className={` ${
                    book.stock > 0 ? "text-green-600 " : "text-red-600"
                  }text-xs font-bold flex items-center gap-1`}
                >
                  {book.stock > 0 ? (
                    <span className="material-symbols-outlined text-sm filled">
                      check_circle
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-[16px]">
                      close
                    </span>
                  )}
                  {book.stock > 0 ? "متوفر في المخزون" : "غير متوفر"}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#131811] dark:text-white leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-500 dark:text-[#a3b99d] font-medium">
                تأليف:{" "}
                <Link
                  className="text-primary cursor-pointer hover:underline"
                  href="#"
                >
                  {book?.authors?.[0]}
                </Link>
              </p>
            </div>

            <div className="flex items-end gap-4 border-b border-[#e5e8e5] dark:border-[#2c3928] pb-6">
              <span className="text-4xl font-black text-primary">
                {book.price}  {book.currency}
              </span>
              {book.oldPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through mb-1">
                    {book.oldPrice}
                  </span>
                  <span className="text-sm font-bold text-red-500 bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded mb-1 border border-red-200 dark:border-red-900/50">
                    خصم {book.price}
                  </span>
                </>
              )}
            </div>

            <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              <p>{book.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              {bookSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 p-3 rounded-xl bg-white dark:bg-[#1e271c] border border-[#e5e8e5] dark:border-[#2c3928]"
                >
                  <span className="text-xs text-gray-500 dark:text-[#a3b99d]">
                    {spec.label}
                  </span>
                  <span className="font-bold text-[#131811] dark:text-white">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <AddToCartButton book={book} />

            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-[#e5e8e5] dark:border-[#2c3928]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-[#a3b99d]"
                >
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">
                      {feature.icon}
                    </span>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-12  border-t border-[#e5e8e5] dark:border-[#2c3928] mt-8 bg-white dark:bg-[#142210] rounded-t-3xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-[#131811] dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              auto_awesome
            </span>
            قد يعجبك أيضاً
          </h2>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
          {relatedBooks.slice(0, 5).map((item, index) => (
            <Link
              href={`/books/${item.slug}`}
              key={index}
              className="flex-none snap-start w-[240px] flex flex-col gap-4 rounded-2xl bg-white dark:bg-[#1e271c] p-4 shadow-sm border border-[#e5e8e5] dark:border-transparent hover:border-primary dark:hover:border-primary transition-all duration-300 group relative"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
                <img
                  alt={`Cover of the book '${item.title}'`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
                {item.badge && (
                  <div
                    className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${item.badge.color}`}
                  >
                    {item.badge.text}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-base font-bold text-[#131811] dark:text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-[#a3b99d]">
                  {item.authors?.[0]}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div
                    className={item.oldPrice ? "flex gap-2 items-center" : ""}
                  >
                    <span className="text-lg font-bold text-primary">
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    <span className="material-symbols-outlined text-[16px] filled">
                      star
                    </span>
                    <span className="text-[#131811] dark:text-white font-medium">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>
              <AddToCartButton book={item} compact />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;