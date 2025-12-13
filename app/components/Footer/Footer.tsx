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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
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
