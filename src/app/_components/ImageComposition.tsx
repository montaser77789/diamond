import Image from "next/image";
import { compositionImages, t } from "../data/showcaseImages";

/**
 * A collage, not a grid: one dominant frame, two smaller frames stacked
 * beside it, and a fourth frame that overlaps upward into the row above.
 */
export default function ImageComposition() {
  const [lead, top, bottom, overlap] = compositionImages;

  return (
    <section className="bg-background py-16 lg:py-28">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5">
        <div className="mb-10 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-primary text-[18px] lg:text-[22px]">
              {t({ ar: "ميدان التنفيذ", en: "On Site" })}
            </span>

            <h2 className="mt-3 text-[32px] leading-[1.15] text-text-primary lg:text-[64px]">
              {t({ ar: "لمحات من التنفيذ", en: "Glimpses From Execution" })}
            </h2>
          </div>

          <p className="max-w-[520px] text-[15px] leading-[2] text-text-secondary lg:text-[19px]">
            {t({
              ar: "وثائق مصورة لمراحل التنفيذ والإشراف الهندسي داخل مواقع المشاريع.",
              en: "Documented stages of execution and engineering supervision on project sites.",
            })}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Dominant frame */}
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[28px] rounded-br-[150px] lg:rounded-tl-[36px] lg:rounded-br-[190px]">
              <Image
                src={lead.src}
                alt={t(lead.alt)}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 56vw"
                style={{ objectPosition: lead.objectPosition }}
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </div>
          </figure>

          {/* Two stacked frames */}
          <div className="grid grid-cols-2 gap-5 lg:col-span-5 lg:gap-6">
            <figure>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-tr-[28px] rounded-bl-[100px] lg:rounded-tr-[32px] lg:rounded-bl-[120px]">
                <Image
                  src={top.src}
                  alt={t(top.alt)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  style={{ objectPosition: top.objectPosition }}
                  className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </div>
            </figure>

            <figure>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-tl-[28px] rounded-br-[100px] lg:rounded-tl-[32px] lg:rounded-br-[120px]">
                <Image
                  src={bottom.src}
                  alt={t(bottom.alt)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  style={{ objectPosition: bottom.objectPosition }}
                  className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </div>
            </figure>
          </div>

          {/* Overlapping frame pulled up into the row above */}
          <figure className="lg:col-span-8 lg:col-start-3 lg:-mt-24 lg:relative lg:z-10">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-[120px] rounded-tr-[28px] rounded-br-[28px] shadow-[0_28px_70px_rgba(11,19,41,0.14)] lg:rounded-tl-[170px] lg:rounded-tr-[32px] lg:rounded-br-[32px]">
              <Image
                src={overlap.src}
                alt={t(overlap.alt)}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 64vw"
                style={{ objectPosition: overlap.objectPosition }}
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </div>

            <figcaption className="mt-5 flex items-center gap-3 text-[15px] text-text-secondary lg:text-[18px]">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              {t(overlap.caption)}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
