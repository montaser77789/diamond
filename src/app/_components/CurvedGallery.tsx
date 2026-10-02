import Image from "next/image";
import { galleryImages, t } from "../data/showcaseImages";

/**
 * Three images, three deliberately different crops, three different
 * asymmetric radius treatments. Not a three-column card grid.
 */
export default function CurvedGallery() {
  const [large, medium, vertical] = galleryImages;

  return (
    <section className="bg-surface py-16 lg:py-28">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5">
        <div className="mb-10 max-w-[720px] lg:mb-20">
          <span className="text-primary text-[18px] lg:text-[22px]">
            {t({ ar: "معرض الأعمال", en: "Works Gallery" })}
          </span>

          <h2 className="mt-3 text-[32px] leading-[1.15] text-text-primary lg:text-[64px]">
            {t({ ar: "من أعمالنا", en: "From Our Work" })}
          </h2>

          <p className="mt-5 text-[15px] leading-[2] text-text-secondary lg:text-[19px]">
            {t({
              ar: "ثلاثة أعمال نختصر بها ضوابط الجودة والدقة في التنفيذ قبل التسليم.",
              en: "Three works that summarise our quality and precision controls through to handover.",
            })}
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Large landscape — rounded top-left + sweeping bottom-right */}
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[28px] rounded-br-[150px] lg:rounded-tl-[36px] lg:rounded-br-[190px]">
              <Image
                src={large.src}
                alt={t(large.alt)}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 56vw"
                style={{ objectPosition: large.objectPosition }}
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </div>

            <figcaption className="mt-5 flex items-center gap-3 text-[15px] text-text-secondary lg:text-[18px]">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              {t(large.caption)}
            </figcaption>
          </figure>

          {/* Medium square — rounded top-right + bottom-left, dropped lower */}
          <figure className="lg:col-span-5 lg:mt-24">
            <div className="relative aspect-square w-full overflow-hidden rounded-tr-[28px] rounded-bl-[120px] lg:rounded-tr-[36px] lg:rounded-bl-[150px]">
              <Image
                src={medium.src}
                alt={t(medium.alt)}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 38vw"
                style={{ objectPosition: medium.objectPosition }}
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </div>

            <figcaption className="mt-5 flex items-center gap-3 text-[15px] text-text-secondary lg:text-[18px]">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              {t(medium.caption)}
            </figcaption>
          </figure>

          {/* Vertical — third radius combination, offset horizontally */}
          <figure className="lg:col-span-5 lg:col-start-4 lg:mt-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-tl-[120px] rounded-br-[28px] lg:rounded-tl-[150px] lg:rounded-br-[36px]">
              <Image
                src={vertical.src}
                alt={t(vertical.alt)}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 38vw"
                style={{ objectPosition: vertical.objectPosition }}
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </div>

            <figcaption className="mt-5 flex items-center gap-3 text-[15px] text-text-secondary lg:text-[18px]">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              {t(vertical.caption)}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
