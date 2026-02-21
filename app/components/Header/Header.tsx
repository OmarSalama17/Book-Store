import Link from "next/link";

export default function Header() {
  const links = [
    { title: "الرئيسية", href: "/" },
    { title: "التصنيفات", href: "/books" },
    { title: "عن المكتبة", href: "/about" },
  ];
  return (
    <header className=" whitespace-nowrap border-b border-solid border-[#e5e8e5] dark:border-[#2c3928] px-10 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em]">
            مكتبة المعرفة
          </h2>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {links.map((link , index) => (
            <Link
              key={index}
              className="text-sm font-medium hover:text-primary transition-colors"
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          <Link href="/cart" className="flex size-10 items-center justify-center rounded-full bg-[#e5e8e5] dark:bg-[#2c3928] hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <button className="flex size-10 items-center justify-center rounded-full bg-[#e5e8e5] dark:bg-[#2c3928] hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}
