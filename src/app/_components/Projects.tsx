"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "../data/heroData";

export default function Projects() {
  return (
    <section className="overflow-hidden py-14 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5">
        <div className="mb-10 text-center lg:mb-20">
          <h2 className="text-[32px] text-text-primary lg:text-[84px]">أحدث المشاريع</h2>
          <span className="text-primary text-[18px] lg:text-[22px]">منذ العام 2007</span>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.05}
          breakpoints={{
            640: { slidesPerView: 1.15, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 25 },
            1400: { slidesPerView: 3, spaceBetween: 25 },
          }}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={`/projects/${item.slug}`} className="group block">
                <div className="relative h-[380px] overflow-hidden rounded-[24px] sm:h-[480px] lg:h-[720px] lg:rounded-[40px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 lg:p-8">
                    <span className="text-primary text-[18px] lg:text-[22px]">{item.year}</span>
                    <h3 className="mt-2 text-[24px] text-white lg:mt-3 lg:text-[40px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
