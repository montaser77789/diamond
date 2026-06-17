"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { NAV_ITEMS, type NavSubmenu } from "@/data/navLinks";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const submenuLinks: Record<
  NavSubmenu,
  { href: (slug: string) => string; items: { slug: string; title: string }[] }
> = {
  services: {
    href: (slug) => `/services/${slug}`,
    items: SERVICES.map(({ slug, title }) => ({ slug, title })),
  },
  projects: {
    href: (slug) => `/projects/${slug}`,
    items: PROJECTS.map(({ slug, title }) => ({ slug, title })),
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<NavSubmenu | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenu(null);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[1000] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <div
        className={`fixed top-0 right-0 z-[1001] flex h-full w-[min(100%,420px)] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="القائمة الرئيسية"
      >
        <div className="flex h-[80px] items-center justify-between border-b px-6">
          <img src="/logo.png" alt="الضوء الماسي" className="h-[50px]" />

          <button
            type="button"
            onClick={onClose}
            className="grid h-12 w-12 place-items-center rounded-full border border-border text-black"
            aria-label="إغلاق القائمة"
          >
            <HiX size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.title}>
                {item.submenu ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubmenu((prev) =>
                          prev === item.submenu ? null : (item.submenu ?? null),
                        )
                      }
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-[18px] font-medium text-black transition hover:bg-surface hover:text-primary"
                    >
                      {item.title}
                      <BsChevronDown
                        className={`transition-transform duration-300 ${
                          openSubmenu === item.submenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSubmenu === item.submenu
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="mr-4 space-y-1 border-r border-border py-2 pr-4">
                        {submenuLinks[item.submenu].items.map((entry) => (
                          <li key={entry.slug}>
                            <Link
                              href={submenuLinks[item.submenu!].href(
                                entry.slug,
                              )}
                              onClick={onClose}
                              className="block rounded-xl px-3 py-3 text-[16px] text-text-secondary transition hover:bg-surface hover:text-primary"
                            >
                              {entry.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-2xl px-4 py-4 text-[18px] font-medium text-black transition hover:bg-surface hover:text-primary"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t p-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="group flex h-16 items-center justify-between rounded-full border px-6"
          >
            <span className="font-medium">اطلب خدماتنا</span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
              <BsArrowUpRight className="transition duration-500 group-hover:rotate-90" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
