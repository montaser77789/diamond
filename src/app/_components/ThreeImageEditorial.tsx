"use client";

import Image from "next/image";
import { editorialImages } from "@/data/gallery";

export default function ThreeImageEditorial() {
  return (
    <section className="py-14 lg:py-24" aria-label="مشاريع مختارة">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5">
        <div className="mb-10 lg:mb-16">
          <span className="text-primary text-[16px] lg:text-[18px] tracking-wide uppercase">
            في التركيز
          </span>
          <h2 className="mt-3 text-[32px] leading-[1.1] text-text-primary lg:mt-5 lg:text-[72px] font-semibold">
            ثلاث <span className="text-primary">لحظات</span> من الميدان
          </h2>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-[60px] lg:rounded-[80px] -z-10" />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
              <article className="relative h-[520px] lg:h-[680px] xl:h-[780px]">
                <div className="absolute inset-0 rounded-[60px] lg:rounded-[80px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "80px", borderTopRightRadius: "24px", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}>
                  <Image
                    src={editorialImages[0].src}
                    alt={editorialImages[0].alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-[12px] lg:text-[13px] font-medium tracking-wider uppercase mb-4">
                      {editorialImages[0].category}
                    </span>
                    <h3 className="text-white text-[24px] lg:text-[32px] xl:text-[38px] font-semibold leading-tight max-w-[400px]">
                      {editorialImages[0].alt}
                    </h3>
                    <p className="mt-4 text-white/70 text-[15px] lg:text-[17px] leading-relaxed max-w-[380px]">
                      مشروع يعكس التزامنا بالجودة والدقة في كل تفصيل، من التصميم حتى التسليم.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-mono text-primary text-[18px] lg:text-[24px] font-bold">01</span>
                </div>
              </article>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 space-y-6">
              <article className="relative h-[250px] lg:h-[330px]">
                <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "48px", borderBottomLeftRadius: "48px", borderBottomRightRadius: "8px" }}>
                  <Image
                    src={editorialImages[1].src}
                    alt={editorialImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-2">
                      {editorialImages[1].category}
                    </span>
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                      {editorialImages[1].alt}
                    </h3>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-[56px] h-[56px] lg:w-[70px] lg:h-[70px] rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-mono text-primary text-[16px] lg:text-[20px] font-bold">02</span>
                </div>
              </article>

              <article className="relative h-[250px] lg:h-[330px]">
                <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] overflow-hidden bg-dark-surface"
                     style={{ borderTopLeftRadius: "48px", borderTopRightRadius: "8px", borderBottomLeftRadius: "8px", borderBottomRightRadius: "48px" }}>
                  <Image
                    src={editorialImages[2].src}
                    alt={editorialImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-2">
                      {editorialImages[2].category}
                    </span>
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                      {editorialImages[2].alt}
                    </h3>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-[56px] h-[56px] lg:w-[70px] lg:h-[70px] rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-mono text-primary text-[16px] lg:text-[20px] font-bold">03</span>
                </div>
              </article>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-[-20px] right-[20px] w-[180px] h-[180px] rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
            <div className="w-[140px] h-[140px] rounded-full border border-primary/30 flex items-center justify-center">
              <span className="text-primary text-[12px] font-mono font-medium leading-tight text-center px-4">
                الضوء الماسي<br />مشاريع حقيقية<br />منذ 2007
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}