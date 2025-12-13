import React from 'react';

const Page = () => {
  const missionVisionData = [
    {
      id: 1,
      bgIcon: "rocket_launch",
      icon: "target",
      title: "رسالتنا",
      description: "توفير محتوى معرفي متميز وشامل، يسهل الوصول إليه لكل قارئ عربي، مع الالتزام بأعلى معايير الجودة في اختيار الكتب وخدمة العملاء، لنساهم في بناء جيل قارئ ومبدع."
    },
    {
      id: 2,
      bgIcon: "lightbulb",
      icon: "visibility",
      title: "رؤيتنا",
      description: "أن نصبح المنصة الرقمية الأولى والرائدة في العالم العربي للكتب الورقية والإلكترونية، وأن نكون الخيار الأول لكل باحث عن المعرفة والإلهام في المنطقة."
    }
  ];

  const featuresData = [
    {
      id: 1,
      icon: "verified",
      title: "جودة وتنوع",
      description: "نختار كتبنا بعناية لتغطي كافة المجالات والاهتمامات بجودة طباعة ممتازة."
    },
    {
      id: 2,
      icon: "local_shipping",
      title: "توصيل سريع",
      description: "خدمة توصيل تغطي كافة المناطق بسرعة فائقة لضمان وصول كتابك في وقته."
    },
    {
      id: 3,
      icon: "support_agent",
      title: "دعم متواصل",
      description: "فريق خدمة عملاء جاهز للإجابة على استفساراتكم ومساعدتكم على مدار الساعة."
    },
    {
      id: 4,
      icon: "lock",
      title: "تسوق آمن",
      description: "وسائل دفع متعددة وآمنة تضمن سرية بياناتكم وتسهل عملية الشراء."
    }
  ];

  return (
    <main className="container mx-auto flex flex-col items-center w-full">
      <div className="w-full px-4 md:px-10 py-5">
        <div className="@container">
          <div
            className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden"
            style={{ backgroundImage: 'linear-gradient(rgba(20, 34, 16, 0.9), rgba(20, 34, 16, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp5UBFRbtmu2gMIDer1leoFj90jyylqEHkPSgPJliqmUF_pfli0DDpHf6huQebpTHAWFTSoTn_9uYtKTguQCOWgXPCR_Q3RUYr2L04bYKL4kBbLVNt2uujcuOJjrbQaWyYNyzCFBR341GUXF6GBzIKyOCQO_v2EtQkI-rMVzJxpq9P0Pk-cyHOuvGHTidFGCzxxnGMtFOZ7dkuPa9CgnLLp9CUxAbaUwauxtm2qTPSpRek0oV3bY2comzziwumkBUmzk-Q9xM9VVc")' }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#142210] to-transparent opacity-60 pointer-events-none"></div>
            <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">من نحن</span>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                قصة شغف بالمعرفة
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-2">
                نسعى لأن نكون الجسر الذي يربط بين القارئ والكتاب، لنصنع مجتمعاً واعياً ومثقفاً ينهض بالأمة.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVisionData.map((item) => (
            <div key={item.id} className="bg-white dark:bg-[#1e271c] p-8 md:p-12 rounded-[2rem] border border-[#e5e8e5] dark:border-[#2c3928] relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-primary">{item.bgIcon}</span>
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#131811] dark:text-white">{item.title}</h2>
                <p className="text-gray-500 dark:text-[#a3b99d] leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-8">
        <div className="bg-[#e5e8e5] dark:bg-[#1e271c] rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center text-center gap-8 relative">
          <div className="absolute inset-0 opacity-5 dark:opacity-5" style={{ backgroundImage: 'radial-gradient(#46ec13 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="relative z-10 max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-bold mb-4">بدايتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#131811] dark:text-white mb-6">من فكرة جامعية إلى واقع ملموس</h2>
            <div className="space-y-4 text-gray-600 dark:text-[#a3b99d] text-lg leading-relaxed">
              <p>
                انطلقت "مكتبة المعرفة" كمشروع تخرج طموح يهدف إلى حل مشكلة صعوبة الوصول إلى الكتب المتنوعة في مكان واحد. ما بدأ كسطور من الكود وتصاميم أولية، تحول بفضل الشغف والإصرار إلى منصة متكاملة تخدم آلاف القراء.
              </p>
              <p>
                نحن نؤمن بأن الكتاب هو خير جليس، وأن التكنولوجيا وسيلة لتقريب المسافات بين القارئ والكتاب. لذلك قمنا بتصميم هذه المكتبة لتكون سهلة الاستخدام، سريعة، وتلبي احتياجات القارئ العربي العصري.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-[#131811] dark:text-white mb-2">التزامنا تجاه القراء</h2>
              <p className="text-gray-500 dark:text-[#a3b99d]">نحن لا نبيع الكتب فقط، بل نقدم تجربة ثقافية متكاملة تقوم على أسس راسخة.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature) => (
              <div key={feature.id} className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-[#1e271c] border border-[#e5e8e5] dark:border-[#2c3928] hover:border-primary transition-colors">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-[#131811]">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#131811] dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-[#a3b99d]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-12">
        <div className="rounded-[2rem] bg-[#1e271c] border border-[#2c3928] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 size-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="flex flex-col gap-4 z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-black text-white">كن جزءاً من مجتمعنا</h2>
            <p className="text-[#a3b99d] text-sm md:text-base">اشترك في نشرتنا البريدية لتصلك أحدث أخبار المكتبة والفعاليات الثقافية.</p>
          </div>
          <div className="w-full max-w-md z-10">
            <label className="flex w-full items-center rounded-full bg-[#131811] border border-[#41543b] focus-within:border-primary transition-all h-14 pl-2 pr-2">
              <input
                className="flex-1 bg-transparent border-none text-white placeholder-[#a3b99d] focus:ring-0 px-4 text-sm"
                placeholder="أدخل بريدك الإلكتروني"
                type="email"
              />
              <button className="flex items-center justify-center h-10 px-6 rounded-full bg-primary text-[#131811] hover:bg-opacity-90 transition-opacity text-sm font-bold">
                اشتراك
              </button>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;