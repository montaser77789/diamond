"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { galleryImages } from "@/data/gallery";

export default function LargeImageSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const initNavigation = () => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const params = swiperRef.current.params;
      if (params.navigation && typeof params.navigation === "object") {
        params.navigation.prevEl = prevRef.current;
        params.navigation.nextEl = nextRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  };

  return (
    <section className="overflow-hidden py-10 lg:py-20" aria-label="معرض المشاريع">
      <div className="mx-auto max-w-[1900px] px-3 lg:px-5">
        <div className="mb-8 lg:mb-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-primary text-[16px] lg:text-[18px] tracking-wide uppercase">
                من أعمالنا
              </span>
              <h2 className="mt-2 text-[32px] leading-[1.1] text-text-primary lg:mt-4 lg:text-[72px] font-semibold">
                من منظور <span className="text-primary">الضوء الماسي</span>
              </h2>
            </div>
            <div className="hidden lg:flex items-center gap-3 text-white/60">
              <span className="text-[14px]">مشاريع مختارة</span>
              <span className="font-mono text-[22px] font-medium">
                {String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <span className="text-primary text-[14px] tracking-wide uppercase">من أعمالنا</span>
            <div className="flex-1 h-[1px] bg-border" />
            <span className="font-mono text-[16px] font-medium text-text-secondary">
              {String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={false}
          grabCursor={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet relative w-[10px] h-[10px] transition-all duration-500",
            bulletActiveClass: "swiper-pagination-bullet-active bg-primary scale-150",
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          breakpoints={{
            480: { slidesPerView: 1.15, spaceBetween: 20 },
            768: { slidesPerView: 1.4, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 28 },
            1400: { slidesPerView: 2.3, spaceBetween: 32 },
            1600: { slidesPerView: 2.6, spaceBetween: 32 },
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            initNavigation();
          }}
          className="h-[520px] lg:h-[620px] xl:h-[720px]"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <article className="group relative h-full">
                <div className="relative h-full overflow-hidden rounded-[24px] lg:rounded-[32px] xl:rounded-[40px] bg-dark-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 xl:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center justify-between">
                      <div>
                        {image.category && (
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[11px] lg:text-[12px] font-medium tracking-wider uppercase mb-3">
                            {image.category}
                          </span>
                        )}
                        <h3 className="text-white text-[18px] lg:text-[22px] xl:text-[26px] font-semibold leading-tight max-w-[300px]">
                          {image.alt}
                        </h3>
                      </div>
                      <button
                        className="flex h-[52px] w-[52px] lg:h-[60px] lg:w-[60px] items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:border-white group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                        aria-label={`عرض تفاصيل ${image.alt}`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-mono text-white/80 text-[14px] lg:text-[16px] font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-4 mt-10 lg:mt-16">
          <button
            ref={prevRef}
            className="flex h-[56px] w-[56px] lg:h-[64px] lg:w-[64px] items-center justify-center rounded-full bg-dark-surface text-white border border-white/10 hover:bg-primary hover:border-primary transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-dark-surface disabled:hover:border-white/10"
            aria-label="السابق"
            disabled={activeIndex === 0}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="flex h-[56px] w-[56px] lg:h-[64px] lg:w-[64px] items-center justify-center rounded-full bg-primary text-white border border-primary hover:bg-white hover:text-primary hover:border-white transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white disabled:hover:border-primary"
            aria-label="التالي"
            disabled={activeIndex >= galleryImages.length - 1}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}