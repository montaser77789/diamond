import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { catalogInfo } from "@/data/navLinks";

export const metadata = {
  title: "الكتالوج | شركة الضوء الماسي",
  description: catalogInfo.description,
};

export default function CatalogPage() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-10 lg:py-16">
      <div className="text-center">
        <span className="text-primary text-[18px] lg:text-[22px]">منذ العام 2007</span>
        <h1 className="mt-3 text-[36px] text-text-primary lg:text-[64px]">
          {catalogInfo.title}
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
          {catalogInfo.description}
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-[28px] bg-surface shadow-main lg:mt-16 lg:rounded-[40px]">
        <div className="relative h-[240px] sm:h-[320px]">
          <Image
            src={catalogInfo.coverImage}
            alt={catalogInfo.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-8 text-center lg:p-12">
          <p className="text-[16px] leading-[2] text-text-secondary lg:text-[18px]">
            يتضمن الكتالوج مواصفات المنتجات، الصور، والحلول المتاحة لأعمال الإنارة
            الطريقية والديكورية.
          </p>

          <a
            href={catalogInfo.fileUrl}
            download={catalogInfo.fileName}
            className="group mt-8 inline-flex h-[58px] items-center gap-3 rounded-full bg-primary px-8 text-white transition hover:bg-primary-hover lg:mt-10 lg:h-[64px] lg:px-10"
          >
            <BsDownload size={22} />
            <span className="text-[17px] font-medium lg:text-[18px]">تنزيل الكتالوج PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
