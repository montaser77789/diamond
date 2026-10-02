"use client";

import Image from "next/image";
import { compositionImages } from "@/data/gallery";

export default function SmallImageComposition() {
  return (
    <section className="py-14 lg:py-24 relative overflow-hidden" aria-label="لمحات من المشاريع">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5 relative z-10">
        <div className="mb-10 lg:mb-16 text-center lg:text-left">
          <span className="text-primary text-[16px] lg:text-[18px] tracking-wide uppercase">
            لمحات
          </span>
          <h2 className="mt-3 text-[32px] leading-[1.1] text-text-primary lg:mt-5 lg:text-[72px] font-semibold">
            <span className="text-primary">تفاصيل</span> تصنع الفرق
          </h2>
          <p className="mt-5 text-[16px] leading-[2] text-text-secondary lg:mt-8 lg:text-[20px] max-w-[600px] lg:max-w-[700px]">
            في كل مشروع ننفذه، التفاصيل الصغيرة هي ما يبني الصورة الكبيرة. هنا نماذج من دقة التنفيذ وجودة التشطيب.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] lg:w-[800px] lg:h-[800px] -z-10" />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 relative">
              <article className="relative h-full min-h-[520px] lg:min-h-[620px] xl:min-h-[700px]">
                <div className="absolute inset-0 rounded-[40px] lg:rounded-[48px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "48px", borderTopRightRadius: "16px", borderBottomLeftRadius: "16px", borderBottomRightRadius: "48px" }}>
                  <Image
                    src={compositionImages[0].src}
                    alt={compositionImages[0].alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-[12px] lg:text-[13px] font-medium tracking-wider uppercase mb-4">
                      {compositionImages[0].category}
                    </span>
                    <h3 className="text-white text-[24px] lg:text-[32px] xl:text-[38px] font-semibold leading-tight max-w-[400px]">
                      {compositionImages[0].alt}
                    </h3>
                    <p className="mt-3 text-white/70 text-[15px] lg:text-[17px] leading-relaxed max-w-[380px]">
                      تنفيذ بمعايير عالية يضمن استدامة الأداء وجمالية المظهر لسنوات قادمة.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-[60px] h-[60px] lg:w-[76px] lg:h-[76px] rounded-[20px] bg-primary flex items-center justify-center"
                     style={{ borderTopLeftRadius: "48px", borderTopRightRadius: "8px", borderBottomLeftRadius: "8px", borderBottomRightRadius: "48px" }}>
                  <span className="font-mono text-white text-[18px] lg:text-[24px] font-bold">01</span>
                </div>
              </article>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 space-y-6">
              <article className="relative h-[250px] lg:h-[300px] group">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "40px", borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" }}>
                  <Image
                    src={compositionImages[1].src}
                    alt={compositionImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-2">
                      {compositionImages[1].category}
                    </span>
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                      {compositionImages[1].alt}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="font-mono text-white text-[14px] lg:text-[18px] font-bold">02</span>
                </div>
              </article>

              <article className="relative h-[250px] lg:h-[300px] group">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "8px", borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" }}>
                  <Image
                    src={compositionImages[2].src}
                    alt={compositionImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-2">
                      {compositionImages[2].category}
                    </span>
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                      {compositionImages[2].alt}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="font-mono text-white text-[14px] lg:text-[18px] font-bold">03</span>
                </div>
              </article>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2 space-y-6">
              <article className="relative h-[250px] lg:h-[300px] group">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px", borderBottomLeftRadius: "8px", borderBottomRightRadius: "40px" }}>
                  <Image
                    src={compositionImages[3].src}
                    alt={compositionImages[3].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-2">
                      {compositionImages[3].category}
                    </span>
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                      {compositionImages[3].alt}
                    </h3>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="font-mono text-white text-[14px] lg:text-[18px] font-bold">04</span>
                </div>
              </article>

              <article className="relative h-[250px] lg:h-[300px] group">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px", borderBottomLeftRadius: "40px", borderBottomRightRadius: "8px" }}>
                  <Image
                    src={compositionImages[4].src}
                    alt={compositionImages[4].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-2">
                      {compositionImages[4].category}
                    </span>
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                      {compositionImages[4].alt}
                    </h3>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="font-mono text-white text-[14px] lg:text-[18px] font-bold">05</span>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 pt-10 lg:pt-16 border-t border-border/50">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-[1px] h-[60px] lg:w-[80px] lg:h-[1px] bg-gradient-to-r from-primary to-transparent" />
                <span className="text-text-secondary text-[15px] lg:text-[17px] font-medium">
                  20+ مشروع مكتمل هذا العام
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex h-[56px] w-[56px] lg:h-[64px] lg:w-[64px] items-center justify-center rounded-full bg-dark-surface text-white border border-white/10 hover:bg-primary hover:border-primary transition-all duration-500"
                        aria-label="عرض جميع المشاريع">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <span className="hidden lg:inline text-primary text-[15px] lg:text-[17px] font-medium">
                  استكشف المشاريع
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}