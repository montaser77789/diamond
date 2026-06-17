"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { useRef } from "react";
import "swiper/css";
import { services } from "../data/heroData";

const featuredServices = services.slice(0, 4);

export default function Services() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="px-3 py-8 lg:px-5 lg:py-14">
      <div className="overflow-hidden rounded-[24px] bg-dark-surface px-4 py-10 sm:px-5 lg:rounded-[40px] lg:px-16 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[500px_1fr] lg:gap-10">
          <div>
            <span className="text-primary text-[18px] lg:text-[22px]">منذ العام 2007</span>

            <h2 className="mt-4 text-[34px] leading-[1.15] text-white lg:text-[82px]">
              حلول ذكية لإنارة المستقبل بكل احتراف
            </h2>

            <p className="mt-6 text-[16px] leading-[2] text-white/80 lg:mt-10 lg:text-[20px]">
              من الفكرة إلى التنفيذ نمضي مع مشاريعك بثقة ونوفر خدمات احترافية تجمع بين
              الجودة والابتكار والتنفيذ الدقيق.
            </p>

            <div className="mt-8 flex gap-3 lg:mt-14 lg:gap-4">
              <button
                ref={prevRef}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary text-white hover:bg-white hover:text-primary lg:h-[78px] lg:w-[78px]"
                aria-label="السابق"
              >
                <BsArrowRight size={22} />
              </button>

              <button
                ref={nextRef}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary text-white hover:bg-white hover:text-secondary lg:h-[78px] lg:w-[78px]"
                aria-label="التالي"
              >
                <BsArrowLeft size={22} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.05}
              onInit={(swiper) => {
                // @ts-expect-error swiper navigation refs
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error swiper navigation refs
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1200: { slidesPerView: 2.6, spaceBetween: 24 },
              }}
            >
              {featuredServices.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="relative h-[420px] overflow-hidden rounded-[24px] sm:h-[520px] lg:h-[620px] lg:rounded-[40px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      <div className="absolute top-8 left-8 text-[48px] text-white/60 lg:top-12 lg:left-12 lg:text-[72px]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                        <h3 className="max-w-[350px] text-[22px] leading-[1.4] text-white lg:text-[30px]">
                          {service.title}
                        </h3>

                        <div className="mt-6 flex justify-end lg:mt-8">
                          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition duration-500 group-hover:translate-y-2 lg:h-[78px] lg:w-[78px]">
                            <BsArrowUpRight className="text-[22px] text-primary transition duration-500 group-hover:rotate-90 lg:text-[28px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
