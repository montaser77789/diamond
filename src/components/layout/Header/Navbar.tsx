"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/navLinks";
import ServicesDropdown from "./ServicesDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import MobileMenu from "./MobileMenu";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-[80px] bg-white text-black lg:h-[110px]">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-8">
          <Link href="/">
            <img src="/logo.png" alt="الضوء الماسي" className="h-[48px] lg:h-[65px]" />
          </Link>

          <ul className="relative hidden gap-16 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.title} className="group relative">
                <Link href={item.href}>{item.title}</Link>
                {item.submenu === "services" && <ServicesDropdown />}
                {item.submenu === "projects" && <ProjectsDropdown />}
              </li>
            ))}
          </ul>

          <div className="hidden gap-5 lg:flex">
            <Link
              href="/contact"
              className="group flex h-16 items-center gap-5 rounded-full border px-8"
            >
              اطلب خدماتنا
              <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-primary text-white">
                <BsArrowUpRight className="transition duration-500 group-hover:translate-y-1 group-hover:rotate-90" />
              </div>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-full border border-border lg:hidden"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
