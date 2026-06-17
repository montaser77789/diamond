import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsCheckLg } from "react-icons/bs";
import { SERVICES } from "@/data/services";

export const metadata = {
  title: "خدماتنا | شركة الضوء الماسي",
  description: "تصفح جميع خدمات شركة الضوء الماسي في الإنارة وأعمدة الإنارة والمشروعات الكهربائية",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 lg:py-16">
      <div className="text-center">
        <span className="text-primary text-[18px] lg:text-[22px]">منذ العام 2007</span>
        <h1 className="mt-3 text-[36px] text-text-primary lg:text-[72px]">خدماتنا</h1>
        <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
          حلول متكاملة في الإنارة الطريقية والديكورية، من التصميم والتوريد إلى التركيب والصيانة.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {SERVICES.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group overflow-hidden rounded-[28px] bg-white shadow-main lg:rounded-[36px]"
          >
            <div className="relative h-[260px] lg:h-[320px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute top-6 left-6 text-[48px] text-white/50 lg:text-[64px]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-6 lg:p-8">
              <h2 className="text-[22px] leading-[1.5] text-text-primary lg:text-[28px]">
                {service.title}
              </h2>
              <p className="mt-4 line-clamp-2 text-[15px] leading-[1.9] text-text-secondary lg:text-[17px]">
                {service.description}
              </p>
              <div className="mt-6 flex justify-end">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white">
                  <BsArrowUpRight className="transition duration-500 group-hover:rotate-90" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
