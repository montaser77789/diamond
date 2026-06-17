"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowUpRight, BsCheckLg } from "react-icons/bs";
import { solutions } from "../data/heroData";

export default function LightingSolutions() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-[1700px] px-4 lg:px-5">
        <div className="text-center">
          <span className="text-primary text-[18px] lg:text-[20px]">منذ العام 2007</span>
          <h2 className="mt-3 text-[32px] text-text-primary lg:mt-4 lg:text-[82px]">
            حلول صناعة الإنارة الطريقية
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-20 lg:grid-cols-[430px_560px_1fr] lg:gap-10">
          <div className="space-y-3 lg:space-y-5">
            {solutions.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className={`flex h-[72px] w-full items-center justify-between rounded-full border px-5 transition duration-500 lg:h-[90px] lg:px-10 ${
                  active === index
                    ? "border-primary bg-primary text-white"
                    : "border-border text-primary"
                }`}
              >
                <span className="text-right text-[14px] font-semibold leading-[1.4] lg:text-[18px]">
                  {item.button}
                </span>

                <span
                  className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full lg:h-[64px] lg:w-[64px] ${
                    active === index ? "bg-white text-text-primary" : "bg-surface"
                  }`}
                >
                  <BsArrowUpRight />
                </span>
              </button>
            ))}
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[420px] lg:h-[700px] lg:rounded-[40px]">
            <Image
              key={current.image}
              src={current.image}
              alt={current.title}
              fill
              className="animate-[fade_.6s_ease] object-cover"
            />
          </div>

          <div className="lg:pt-24">
            <h3 className="text-[28px] leading-[1.3] text-text-primary lg:text-[60px]">
              {current.title}
            </h3>

            <p className="mt-5 text-[16px] leading-[2] text-text-secondary lg:mt-8 lg:text-[20px]">
              {current.description}
            </p>

            <div className="mt-10 space-y-5 lg:mt-16 lg:space-y-8">
              {current.features.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                    <BsCheckLg size={14} />
                  </span>
                  <span className="text-[16px] text-text-primary lg:text-[20px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
