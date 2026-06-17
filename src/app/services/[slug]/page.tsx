import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRight, BsCheckLg } from "react-icons/bs";
import { getServiceBySlug, SERVICES } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "الخدمة غير موجودة" };
  }

  return {
    title: `${service.title} | شركة الضوء الماسي`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="relative mx-3 overflow-hidden rounded-[30px] lg:mx-5 lg:rounded-[40px]">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex items-end p-6 lg:p-14">
            <div>
              <span className="text-primary text-[16px] lg:text-[20px]">خدماتنا</span>
              <h1 className="mt-3 max-w-[900px] text-[32px] leading-[1.3] text-white lg:text-[68px]">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-[28px] text-text-primary lg:text-[44px]">نبذة عن الخدمة</h2>
            <p className="mt-6 text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
              {service.description}
            </p>

            <div className="mt-12 space-y-6">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                    <BsCheckLg size={14} />
                  </span>
                  <span className="text-[17px] leading-[1.8] text-text-primary lg:text-[20px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-12 inline-flex items-center gap-0"
            >
              <span className="flex h-[58px] items-center rounded-full bg-primary px-8 text-white lg:h-[64px] lg:px-10">
                اطلب الخدمة الآن
              </span>
              <span className="-mr-2 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-primary bg-white lg:h-[64px] lg:w-[64px]">
                <BsArrowUpRight className="text-primary transition duration-500 group-hover:rotate-90" />
              </span>
            </Link>
          </div>

          <aside className="h-fit rounded-[30px] bg-dark-surface p-8 text-white lg:rounded-[40px]">
            <h3 className="text-[24px] lg:text-[30px]">لماذا الضوء الماسي؟</h3>
            <p className="mt-4 text-[16px] leading-[2] text-white/80 lg:text-[18px]">
              خبرة منذ 2007 في تنفيذ مشاريع الإنارة بأعلى معايير الجودة والالتزام بالمواعيد.
            </p>
            <ul className="mt-8 space-y-4 text-[15px] text-white/85 lg:text-[17px]">
              <li>• فرق فنية متخصصة</li>
              <li>• منتجات معتمدة</li>
              <li>• دعم ما بعد التسليم</li>
              <li>• حلول مخصصة لكل مشروع</li>
            </ul>
          </aside>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-surface px-5 py-14 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="text-center text-[28px] text-text-primary lg:text-[44px]">
              خدمات أخرى
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group overflow-hidden rounded-[24px] bg-white shadow-main lg:rounded-[30px]"
                >
                  <div className="relative h-[220px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[20px] leading-[1.5] text-text-primary lg:text-[24px]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
