import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { aboutContent } from "@/data/about";
import { clients } from "@/app/data/heroData";

export const metadata = {
  title: "من نحن | شركة الضوء الماسي",
  description:
    "تعرف على رؤية ومهمة شركة الضوء الماسي في تصنيع وتوريد أعمدة الإنارة الديكورية في المملكة العربية السعودية",
};

type ContentBlockProps = {
  title: string;
  text: string;
  image: string;
  reversed?: boolean;
  dark?: boolean;
};

function ContentBlock({ title, text, image, reversed, dark }: ContentBlockProps) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[360px] lg:h-[480px] lg:rounded-[40px]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className={dark ? "lg:px-6" : ""}>
        <span className="text-primary text-[16px] lg:text-[20px]">الضوء الماسي</span>
        <h2
          className={`mt-3 text-[30px] leading-[1.25] lg:text-[52px] ${
            dark ? "text-white" : "text-text-primary"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-5 text-[16px] leading-[2.1] lg:mt-6 lg:text-[18px] ${
            dark ? "text-white/85" : "text-text-secondary"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { hero, intro, stats, vision, mission, partners, excellence, gallery } =
    aboutContent;

  return (
    <>
      <section className="relative mx-3 overflow-hidden rounded-[28px] lg:mx-5 lg:rounded-[40px]">
        <div className="relative min-h-[340px] lg:min-h-[520px]">
          <Image src={hero.image} alt={hero.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

          <div className="absolute inset-0 flex items-end p-6 lg:p-14">
            <div>
              <span className="text-primary text-[16px] lg:text-[22px]">{hero.subtitle}</span>
              <h1 className="mt-3 text-[36px] text-white lg:text-[76px]">{hero.title}</h1>
              <p className="mt-4 max-w-[680px] text-[16px] leading-[2] text-white/90 lg:text-[20px]">
                {intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12 lg:py-16">
        <div className="grid grid-cols-3 gap-4 rounded-[24px] bg-dark-surface px-4 py-8 lg:gap-8 lg:rounded-[36px] lg:px-12 lg:py-12">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[28px] font-bold text-primary sm:text-[36px] lg:text-[52px]">
                {item.value}
              </div>
              <p className="mt-2 text-[13px] text-white/80 sm:text-[15px] lg:text-[18px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 lg:pb-20">
        <ContentBlock title={vision.title} text={vision.text} image={vision.image} />
      </section>

      <section className="mx-3 mb-14 lg:mx-5 lg:mb-20">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {gallery.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-[20px] lg:rounded-[28px] ${
                index === 0 ? "col-span-2 row-span-2 h-[260px] sm:h-[320px] lg:h-[420px]" : "h-[140px] sm:h-[180px] lg:h-[200px]"
              }`}
            >
              <Image src={src} alt={`معرض ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 lg:pb-20">
        <ContentBlock
          title={mission.title}
          text={mission.text}
          image={mission.image}
          reversed
        />
      </section>

      <section className="mx-3 overflow-hidden rounded-[28px] bg-dark-surface px-5 py-14 lg:mx-5 lg:rounded-[40px] lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[380px] lg:rounded-[36px]">
              <Image
                src={partners.image}
                alt={partners.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-primary text-[16px] lg:text-[20px]">معًا ننجح</span>
              <h2 className="mt-3 text-[30px] text-white lg:text-[52px]">{partners.title}</h2>
              <p className="mt-5 text-[16px] leading-[2.1] text-white/85 lg:text-[18px]">
                {partners.text}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:mt-16 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex h-[90px] items-center justify-center rounded-[18px] bg-white/10 p-3 lg:h-[110px] lg:rounded-[22px]"
              >
                <Image
                  src={client.image}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="max-h-[50px] w-auto object-contain opacity-90 lg:max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14 lg:py-20">
        <ContentBlock
          title={excellence.title}
          text={excellence.text}
          image={excellence.image}
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 lg:pb-20">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] bg-surface px-6 py-10 text-center lg:flex-row lg:rounded-[36px] lg:px-12 lg:py-12 lg:text-right">
          <div>
            <h2 className="text-[26px] text-text-primary lg:text-[36px]">
              جاهزون لتحويل رؤيتك إلى واقع
            </h2>
            <p className="mt-3 text-[16px] leading-[2] text-text-secondary lg:text-[18px]">
              تواصل معنا اليوم ودع فريقنا يساعدك في اختيار أفضل حلول الإنارة.
            </p>
          </div>

          <Link href="/contact" className="group inline-flex shrink-0 items-center gap-0">
            <span className="flex h-[58px] items-center rounded-full bg-primary px-8 text-white lg:h-[64px] lg:px-10">
              تواصل معنا
            </span>
            <span className="-mr-2 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-primary bg-white lg:h-[64px] lg:w-[64px]">
              <BsArrowUpRight className="text-primary transition duration-500 group-hover:rotate-90" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
