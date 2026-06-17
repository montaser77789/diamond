"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroData } from "../data/heroData";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full px-3 lg:px-5">
      <div className="relative overflow-hidden rounded-[40px] min-h-[75vh] lg:min-h-[92vh]">
        {/* IMAGE */}

        <div
          className={`absolute inset-0 transition-all duration-[1800ms] ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.18]"
          }`}
        >
          <Image
            src={heroData.image}
            alt={heroData.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CURTAIN */}

        <div
          className={`absolute inset-0 bg-white origin-top transition-transform duration-[1400ms] delay-[300ms] ${
            loaded ? "scale-y-0" : "scale-y-100"
          }`}
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/10 to-transparent" />

        {/* CONTENT */}

        <div className="relative z-20 flex items-center justify-start min-h-[75vh] lg:min-h-[92vh]">
          <div
            className={`mx-4 lg:mx-16 max-w-[680px] w-full rounded-[40px] bg-dark-surface/82 backdrop-blur-md px-8 py-4 lg:px-8 lg:py-12
            transition-all duration-[1200ms] delay-[1200ms]
            ${
              loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-[180px] opacity-0"
            }
          `}
          >
            <h1 className="text-white text-[42px] leading-[1.3] lg:text-[82px] font-semibold">
              {heroData.title}
            </h1>

            <p className="text-white/90 mt-8 text-[17px] leading-[2] lg:text-[22px]">
              {heroData.description}
            </p>

            <button className=" group  mt-10  flex items-center gap-0 ">
              <span className="bg-primary px-8 lg:px-10 h-[64px] rounded-full text-white flex items-center">
                {heroData.button}
              </span>

              <span className=" w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center  -mr-2 transition-all duration-500 group-hover:translate-y-1">
                <ArrowUpRight className="text-primary transition duration-500 group-hover:rotate-90" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
