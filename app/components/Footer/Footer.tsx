export default function Footer() {
  return (
    <footer className=" bg-white dark:bg-[#1e271c] border-t border-[#e5e8e5] dark:border-[#2c3928] py-10">
      <div className="container mx-auto px-4 md:px-10 py-">
        <div className="mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="size-6 text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">مكتبة المعرفة</h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-[#a3b99d]">
              وجهتك الأولى للمعرفة والثقافة.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">روابط سريعة</h3>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                الرئيسية
              </a>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                من نحن
              </a>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                اتصل بنا
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold">التصنيفات</h3>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                روايات
              </a>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                علوم
              </a>
              <a className="text-sm text-gray-500 hover:text-primary" href="#">
                أطفال
              </a>
            </div>
          </div>
        </div>

        <div className=" mx-auto mt-12 pt-6 border-t border-[#e5e8e5] dark:border-[#2c3928] flex items-center justify-between">
          <p className="text-xs text-gray-400">
            © 2023 مكتبة المعرفة. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 text-gray-400">
            <span className="material-symbols-outlined">public</span>
            <span className="material-symbols-outlined">share</span>
            <span className="material-symbols-outlined">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
