"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const update = (clientX: number, rect: DOMRect) => {
    const value = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, value)));
  };

  const move = (clientX: number) => {
    if (!dragging.current || !containerRef.current) return;
    update(clientX, containerRef.current.getBoundingClientRect());
  };

  return (
    <section className="px-3 py-10 lg:px-5 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[24px] bg-dark-surface px-6 py-12 text-center lg:rounded-[40px] lg:px-20 lg:py-28">
          <span className="text-primary text-[16px] lg:text-[18px]">منذ العام 2007</span>

          <h2 className="mt-4 text-[32px] leading-[1.2] text-white lg:mt-6 lg:text-[76px]">
            إلتزام في التنفيذ وثقة تدوم
          </h2>

          <p className="mt-6 text-[16px] leading-[2] text-white/85 lg:mt-10 lg:text-[22px]">
            نلتزم بتنفيذ المشاريع وفق أعلى معايير الجودة والدقة مع الحرص على الالتزام
            بالجداول الزمنية المعتمدة وبناء شراكات طويلة الأمد.
          </p>

          <div className="mt-12 flex justify-center gap-8 lg:mt-20 lg:gap-20">
            <div className="text-center">
              <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border border-primary lg:h-[170px] lg:w-[170px]">
                <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-primary text-[32px] font-bold text-white lg:h-[130px] lg:w-[130px] lg:text-[46px]">
                  90%
                </div>
              </div>
              <h4 className="mt-5 text-[22px] text-white lg:mt-8 lg:text-[30px]">رضا العملاء</h4>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border border-primary lg:h-[170px] lg:w-[170px]">
                <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-primary text-[32px] font-bold text-white lg:h-[130px] lg:w-[130px] lg:text-[46px]">
                  95%
                </div>
              </div>
              <h4 className="mt-5 text-[22px] text-white lg:mt-8 lg:text-[30px]">الخبرات العملية</h4>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative h-[380px] select-none overflow-hidden rounded-[24px] sm:h-[480px] lg:h-auto lg:min-h-[650px] lg:rounded-[40px]"
          onMouseMove={(e) => move(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
        >
          <Image src="/compare/after.jpg" alt="after" fill className="object-cover" />

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div className="relative h-full w-full">
              <Image src="/compare/before.jpg" alt="before" fill className="object-cover" />
            </div>
          </div>

          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white"
            style={{ left: `${position}%` }}
          />

          <button
            type="button"
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}
            style={{ left: `${position}%` }}
            className="absolute top-1/2 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white lg:h-[72px] lg:w-[72px]"
            aria-label="اسحب للمقارنة"
          >
            <BsChevronRight className="text-primary" />
            <BsChevronLeft className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
