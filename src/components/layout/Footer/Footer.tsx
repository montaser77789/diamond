"use client";

import Image from "next/image";

import Link from "next/link";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { RiTwitterXLine } from "react-icons/ri";

import { BsArrowUp } from "react-icons/bs";
import { contactInfo, footerLinks, footerServices } from "@/data/navLinks";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-dark-surface rounded-t-[50px] overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-5 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14">
            {/* logo */}

            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={260}
                height={120}
                className="object-contain"
              />

              <p className="text-white/75 text-[18px] leading-[2] mt-8">
                شركة الضوء الماسي للحلول المتكاملة في تصنيع وتركيب أعمدة الإنارة
                والمشروعات الكهربائية.
              </p>

              <div className="flex gap-4 mt-10">
                <button className="w-[54px] h-[54px] rounded-full bg-white/10 text-white hover:bg-primary transition">
                  <FaFacebookF className="m-auto " />
                </button>

                <button className="w-[54px] h-[54px] rounded-full bg-white/10 text-white hover:bg-primary transition">
                  <RiTwitterXLine className="m-auto " />
                </button>

                <button className="w-[54px] h-[54px] rounded-full bg-white/10 text-white hover:bg-primary transition">
                  <FaInstagram className="m-auto " />
                </button>

                <button className="w-[54px] h-[54px] rounded-full bg-white/10 text-white hover:bg-primary transition">
                  <FaWhatsapp className="m-auto " />
                </button>
              </div>
            </div>

            {/* links */}

            <div>
              <h3 className="text-white text-[28px] mb-8">روابط سريعة</h3>

              <div className="space-y-5">
                {footerLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-white/70 hover:text-primary transition"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* services */}

            <div>
              <h3 className="text-white text-[28px] mb-8">خدماتنا</h3>

              <div className="space-y-5">
                {footerServices.map((item) => (
                  <div key={item} className="text-white/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* contact */}

            <div>
              <h3 className="text-white text-[28px] mb-8">تواصل معنا</h3>

              <div className="space-y-8">
                <a
                  href={`mailto:${contactInfo.email1}`}
                  className="block text-white/80"
                >
                  {contactInfo.email1}
                </a>

                <a
                  href={`mailto:${contactInfo.email2}`}
                  className="block text-white/80"
                >
                  {contactInfo.email2}
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="block text-white/80"
                >
                  {contactInfo.phone}
                </a>

                <p className="text-white/80">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-10 flex flex-col lg:flex-row gap-6 justify-between items-center">
            <span className="text-white/60">
              © 2026 شركة الضوء الماسي — جميع الحقوق محفوظة
            </span>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-[70px] h-[70px] rounded-full bg-primary text-white flex items-center justify-center hover:-translate-y-2 transition"
            >
              <BsArrowUp size={26} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
