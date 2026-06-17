"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";


import "swiper/css";
import { clients } from "../data/heroData";

export default function Clients() {
  return (
    <section className="py-10 overflow-hidden">

      <div className="max-w-[1800px] mx-auto">

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4500}
          allowTouchMove={true}
          spaceBetween={70}
          slidesPerView={2}
          dir="rtl"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 5,
            },

            1440: {
              slidesPerView: 6,
            },
          }}
        >
          {clients.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="group h-[170px] flex items-center justify-center">

                <Image
                  src={item.image}
                  alt={item.alt}
                  width={230}
                  height={120}
                  className="object-contain opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}