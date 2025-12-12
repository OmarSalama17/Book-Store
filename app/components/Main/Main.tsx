export default function Main() {
  const categories = [
    { id: 1, icon: "menu_book", title: "الروايات" },
    { id: 2, icon: "science", title: "العلوم" },
    { id: 3, icon: "history_edu", title: "التاريخ" },
    { id: 4, icon: "psychology", title: "تطوير الذات" },
    { id: 5, icon: "child_care", title: "أطفال" },
    { id: 6, icon: "palette", title: "الفنون" },
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "قواعد العشق الأربعون",
      author: "إليف شفق",
      price: "45 ر.س",
      rating: "4.8",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-_vryg0It3C0G6PxX3VZd2eFqpgZ49IRaZp-4EogNS32EXclu1QD9Rm4L02KKeV9-vTO3LDwfV3I1FQYWGTbj6H4E0BpVe2PtU7l6AE-orOcP_W9v_E_Ol3CEZWoNHDR-KZk96og5INvG1tq7Fe5H2aaQfnTkHDwWV8u6SAinkQPn1yymVARcGue6sEw2Vu1EieguhVtP46zWxDjBhb2lzf53V241GiOB7dlkzasTJ8KE80a8yPqLxGGAvSo0-c49CDlr-oiISE",
    },
    {
      id: 2,
      title: "ثلاثية غرناطة",
      author: "رضوى عاشور",
      price: "60 ر.س",
      rating: "4.9",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL1lTsgLE6baDPwCWWMUEmt5a7fbOGX93V-wX6nRwZBhfJff8915iHJ8MCsJ9uxY4CbgiBrcnHwhiVCul_XqnVY75chY-fy_Z56YmBxPCVor7MkBEOtmoDCvsUIfWYZtVdYPG1JwUk9DA8AlVcuIdkYUEVVKQ4UMLa0ABSb9ILll2YbGjS0rij6uFj3MN1uFKxMLSGbMjthOm3qT6CgCBXB6j9p8hrsFrzapfjETf_NkQ2ZPNQf6rd0Z3w5Z5pk2CnIThtfMFxqW8",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full px-4 md:px-10 py-5 max-w-[1400px]">
        <div
          className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl p-8 relative bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,34,16,.85),rgba(20,34,16,.95)),url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp5UBFRbtmu2gMIDer1leoFj90jyylqEHkPSgPJliqmUF_pfli0DDpHf6huQebpTHAWFTSoTn_9uYtKTguQCOWgXPCR_Q3RUYr2L04bYKL4kBbLVNt2uujcuOJjrbQaWyYNyzCFBR341GUXF6GBzIKyOCQO_v2EtQkI-rMVzJxpq9P0Pk-cyHOuvGHTidFGCzxxnGMtFOZ7dkuPa9CgnLLp9CUxAbaUwauxtm2qTPSpRek0oV3bY2comzziwumkBUmzk-Q9xM9VVc")',
          }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-black text-center">
            مرحباً بك في عالم المعرفة
          </h1>
          <p className="text-gray-300 text-center max-w-xl">
            استكشف آلاف الكتب المميزة واطلبها بسهولة
          </p>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-8 max-w-[1400px]">
        <h2 className="text-[22px] font-bold mb-6">تصفح حسب التصنيف</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="min-w-[120px] flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="size-24 rounded-full bg-[#e5e8e5] dark:bg-[#1e271c] flex items-center justify-center group-hover:bg-primary transition">
                <span className="material-symbols-outlined text-4xl">
                  {cat.icon}
                </span>
              </div>
              <span className="text-sm font-medium group-hover:text-primary">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-8 max-w-[1400px]">
        <h2 className="text-[22px] font-bold mb-6">الكتب المميزة</h2>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="w-[240px] flex-shrink-0 bg-white dark:bg-[#1e271c] rounded-2xl p-4 border hover:border-primary transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full aspect-[2/3] object-cover rounded-xl mb-3"
              />

              <h3 className="font-bold line-clamp-1">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>

              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-primary">{book.price}</span>
                <span className="text-sm flex items-center gap-1">
                  ⭐ {book.rating}
                </span>
              </div>

              <button className="mt-3 w-full h-10 rounded-full bg-[#131811] text-white font-bold hover:bg-primary hover:text-[#131811] transition">
                إضافة للسلة
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
