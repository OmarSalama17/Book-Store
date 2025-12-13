import React from "react";

const page = () => {
  const book = {
    title: "قواعد العشق الأربعون",
    author: "إليف شفق",
    price: "45 ر.س",
    oldPrice: "60 ر.س",
    discountPercent: "25%",
    rating: 4.8,
    reviewsCount: 1245,
    description: `رواية "قواعد العشق الأربعون" للكاتبة التركية إليف شفق، تسرد حكايتين متوازيتين؛ إحداهما في الزمن المعاصر والأخرى في القرن الثالث عشر، حيث يلتقي الصوفي شمس التبريزي بجلال الدين الرومي. رواية تأخذك في رحلة روحية عميقة لاستكشاف الحب الإلهي والعلاقات الإنسانية وكيف يمكن للحب أن يغير حياتنا إلى الأبد.`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-_vryg0It3C0G6PxX3VZd2eFqpgZ49IRaZp-4EogNS32EXclu1QD9Rm4L02KKeV9-vTO3LDwfV3I1FQYWGTbj6H4E0BpVe2PtU7l6AE-orOcP_W9v_E_Ol3CEZWoNHDR-KZk96og5INvG1tq7Fe5H2aaQfnTkHDwWV8u6SAinkQPn1yymVARcGue6sEw2Vu1EieguhVtP46zWxDjBhb2lzf53V241GiOB7dlkzasTJ8KE80a8yPqLxGGAvSo0-c49CDlr-oiISE",
    isBestseller: true,
    category: "أدب عالمي",
  };

  const bookSpecs = [
    { label: "عدد الصفحات", value: "500 صفحة" },
    { label: "اللغة", value: "العربية" },
    { label: "دار النشر", value: "مسكيلياني" },
    { label: "سنة النشر", value: "2012" },
  ];

  const features = [
    {
      icon: "local_shipping",
      text: "شحن سريع ومجاني للطلبات فوق 200 ر.س",
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

  const relatedBooks = [
    {
      title: "ثلاثية غرناطة",
      author: "رضوى عاشور",
      price: "60 ر.س",
      rating: "4.9",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL1lTsgLE6baDPwCWWMUEmt5a7fbOGX93V-wX6nRwZBhfJff8915iHJ8MCsJ9uxY4CbgiBrcnHwhiVCul_XqnVY75chY-fy_Z56YmBxPCVor7MkBEOtmoDCvsUIfWYZtVdYPG1JwUk9DA8AlVcuIdkYUEVVKQ4UMLa0ABSb9ILll2YbGjS0rij6uFj3MN1uFKxMLSGbMjthOm3qT6CgCBXB6j9p8hrsFrzapfjETf_NkQ2ZPNQf6rd0Z3w5Z5pk2CnIThtfMFxqW8",
    },
    {
      title: "أولاد حارتنا",
      author: "نجيب محفوظ",
      price: "35 ر.س",
      oldPrice: "44 ر.س",
      rating: "4.7",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKLRxa8NMTGOVroapahnsdmMmLp2lmH2qzm9WAiUX0URoU8Mz_7bn4qhUV6A8hQzMTI39Lvz4dCz6JmnzU4L_RAV2XLB8v222ciQd9BDfWoKuBBen16uKQTUKj12S35cr5PAXgj3PKyfV2mKyr4hFRccv3arbmC7srxhpdZcczoKtox7uKM2P-hmQPLZBQADVF5St24edQRZFODJDpPJEPaSofYnnAihWDkncVd0NohETeqvpQGz1Bk8awhaY9lARMtu2lIVQEXCc",
      badge: { text: "-20%", color: "bg-red-500 text-white" },
    },
    {
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      price: "85 ر.س",
      rating: "5.0",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAq0mYjMi_h6OM78dU1MuPgG3t-mbnGN4nmukCjp-YIrDW3yoSBwJSNOFiJyahvi-H9rrboilv2LMFlJqMyEhpRteKq4KAiStbAJtZ_r-f9HWNpDNiMKRXRFy8tVIDcujiiDlSPDVaMIhT_3jheQPnD26EQCtNvzpo7z46YEASFqj1cGfx3ZWwYhucdVxZWPkW6aKutJ2nAmhDIQ7SbFyZef2elBgktrmZ_NNDVyC9r3ugxRIsoBOb8mW7rZkf4bbG1Qbm0sHpg4hs",
    },
    {
      title: "نظرية كل شيء",
      author: "ستيفن هوكينغ",
      price: "55 ر.س",
      rating: "4.6",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDWCDSlY1w-ACeMbJgfI-xxWwPZIUL6K78YSeYgcstgjEAg1HJjg_VpXGyqwsos9dd3hJ_LOfT7RznYmHXo6t-CWO9rSpaUwb5c65Lhr1O4Htfuv4_RyZlCg5niamWvU2aHZHZ0AoyNt1tv3lAyNu6t1LBBszX5bM03CD1Y9yrNdJP4doHRJ-s8B_rN0QMYNuzNjutY0W-ixanhmrzOcn2PMNlwdBL8PkIi9UWCs3p-kdzzq7oueD6vU6xJMlS0njHebO3-T11cynE",
    },
  ];

  const breadcrumbs = [
    { label: "الرئيسية", href: "#" },
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
                <a
                  className="hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.label}
                </a>
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
              {book.isBestseller && (
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
                    ({book.reviewsCount.toLocaleString()} تقييم)
                  </span>
                </div>
                <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm filled">
                    check_circle
                  </span>
                  متوفر في المخزون
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#131811] dark:text-white leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-500 dark:text-[#a3b99d] font-medium">
                تأليف:{" "}
                <a className="text-primary cursor-pointer hover:underline" href="#">
                  {book.author}
                </a>
              </p>
            </div>

            <div className="flex items-end gap-4 border-b border-[#e5e8e5] dark:border-[#2c3928] pb-6">
              <span className="text-4xl font-black text-primary">
                {book.price}
              </span>
              {book.oldPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through mb-1">
                    {book.oldPrice}
                  </span>
                  <span className="text-sm font-bold text-red-500 bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded mb-1 border border-red-200 dark:border-red-900/50">
                    خصم {book.discountPercent}
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
                  className="flex flex-col gap-1 p-4 rounded-xl bg-white dark:bg-[#1e271c] border border-[#e5e8e5] dark:border-[#2c3928]"
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

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex items-center bg-white dark:bg-[#1e271c] rounded-full border border-[#e5e8e5] dark:border-[#2c3928] w-fit shadow-sm">
                <button className="size-12 flex items-center justify-center text-[#131811] dark:text-white hover:text-primary transition-colors active:scale-90 transform">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <input
                  className="w-12 bg-transparent border-none text-center font-bold text-[#131811] dark:text-white focus:ring-0 text-lg outline-none"
                  readOnly
                  type="number"
                  defaultValue="1"
                />
                <button className="size-12 flex items-center justify-center text-[#131811] dark:text-white hover:text-primary transition-colors active:scale-90 transform">
                  <span className="material-symbols-outlined">remove</span>
                </button>
              </div>
              <button className="flex-1 h-12 rounded-full bg-[#131811] dark:bg-primary text-white dark:text-[#131811] text-base font-bold hover:bg-primary dark:hover:bg-white hover:text-[#131811] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1">
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
        <div className="flex overflow-x-auto gap-6 pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
          {relatedBooks.map((item, index) => (
            <div
              key={index}
              className="flex-none snap-start w-[240px] flex flex-col gap-4 rounded-2xl bg-white dark:bg-[#1e271c] p-4 shadow-sm border border-[#e5e8e5] dark:border-transparent hover:border-primary dark:hover:border-primary transition-all duration-300 group"
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
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-[#131811] dark:text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-[#a3b99d]">
                  {item.author}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className={item.oldPrice ? "flex gap-2 items-center" : ""}>
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
              <button className="w-full h-10 rounded-full bg-[#131811] dark:bg-[#2c3928] text-white text-sm font-bold hover:bg-primary hover:text-[#131811] transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>إضافة للسلة</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
