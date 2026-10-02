"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { showcaseImages, t } from "../data/showcaseImages";

const SIZES = "(max-width: 640px) 86vw, (max-width: 1024px) 58vw, 42vw";

export default function ImageShowcase() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section className="rawasi-showcase overflow-hidden bg-dark-surface py-14 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5">
        <div className="mb-10 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-primary text-[18px] lg:text-[22px]">
              {t({ ar: "منذ العام 2007", en: "Since 2007" })}
            </span>

            <h2 className="mt-3 text-[32px] leading-[1.15] text-white lg:text-[84px]">
              {t({ ar: "مشاريعنا", en: "Our Projects" })}
            </h2>
          </div>

          <p className="max-w-[520px] text-[15px] leading-[2] text-white/70 lg:text-[19px]">
            {t({
              ar: "مجموعة مختارة من صور الأعمال التنفيذية، تُوثّق مراحل الإنجاز في مواقع المشاريع الهندسية.",
              en: "A curated selection of execution photography documenting progress on engineering project sites.",
            })}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Keyboard, Navigation, Pagination]}
          centeredSlides
          loop
          grabCursor
          speed={reducedMotion ? 0 : 900}
          spaceBetween={14}
          slidesPerView={1.14}
          keyboard={{ enabled: true }}
          autoplay={
            reducedMotion
              ? false
              : { delay: 6500, disableOnInteraction: true, pauseOnMouseEnter: true }
          }
          pagination={{ el: paginationEl, clickable: true }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          onInit={(swiper) => {
            // @ts-expect-error navigation params are loosely typed in swiper 12
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error navigation params are loosely typed in swiper 12
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          a11y={{
            prevSlideMessage: t({ ar: "الصورة السابقة", en: "Previous image" }),
            nextSlideMessage: t({ ar: "الصورة التالية", en: "Next image" }),
            paginationBulletMessage: t({ ar: "انتقل إلى الصورة", en: "Go to image" }),
          }}
          breakpoints={{
            480: { slidesPerView: 1.28, spaceBetween: 18 },
            768: { slidesPerView: 1.75, spaceBetween: 24 },
            1024: { slidesPerView: 2.2, spaceBetween: 30 },
            1280: { slidesPerView: 2.45, spaceBetween: 34 },
            1536: { slidesPerView: 2.6, spaceBetween: 38 },
          }}
        >
          {showcaseImages.map((item) => (
            <SwiperSlide key={item.id}>
              <figure className="group pb-1">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] sm:aspect-[16/11] lg:aspect-[4/3] lg:rounded-[28px]">
                  <Image
                    src={item.src}
                    alt={t(item.alt)}
                    fill
                    loading="lazy"
                    sizes={SIZES}
                    style={{ objectPosition: item.objectPosition ?? "center" }}
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>

                <figcaption className="mt-4 flex items-center gap-3 lg:mt-5">
                  <span className="h-px w-8 shrink-0 bg-white/25" aria-hidden="true" />

                  <span className="text-[15px] text-white/85 lg:text-[19px]">
                    {t(item.caption)}
                  </span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-6 lg:mt-12 lg:flex-nowrap lg:gap-8">
          <span
            dir="ltr"
            aria-live="polite"
            className="order-1 shrink-0 text-[15px] tabular-nums text-white/70 lg:text-[18px]"
          >
            <span className="text-primary">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="mx-1.5 text-white/30">/</span>
            {String(showcaseImages.length).padStart(2, "0")}
          </span>

          <div className="flex shrink-0 items-center gap-3 lg:order-2 lg:gap-4 lg:ms-auto">
            <button
              ref={prevRef}
              type="button"
              className="rawasi-showcase-arrow flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:outline-none lg:h-[64px] lg:w-[64px]"
              aria-label={t({ ar: "الصورة السابقة", en: "Previous image" })}
            >
              <BsArrowLeft size={20} />
            </button>

            <button
              ref={nextRef}
              type="button"
              className="rawasi-showcase-arrow flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:outline-none lg:h-[64px] lg:w-[64px]"
              aria-label={t({ ar: "الصورة التالية", en: "Next image" })}
            >
              <BsArrowRight size={20} />
            </button>
          </div>

          <div
            ref={setPaginationEl}
            className="rawasi-showcase-pagination swiper-pagination order-3 w-full lg:order-1 lg:w-auto lg:flex-1"
          />
        </div>
      </div>
    </section>
  );
}
