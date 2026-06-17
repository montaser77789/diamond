import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* RIGHT */}

          <div className="relative min-h-[750px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[760px] h-[560px] rounded-[40px] overflow-hidden">
              <Image
                src="/about/about-main.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[40px] right-[20px] w-[520px] h-[520px] rounded-[40px] overflow-hidden shadow-main">
              <Image
                src="/about/about-small.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* LEFT */}

          <div className="relative">
            <span className="text-primary text-[26px]">منذ عام</span>

            <div className="absolute top-[-50px] left-0 text-[80px] font-bold leading-none text-primary opacity-90 sm:top-[-78px] sm:text-[120px] lg:text-[160px]">
              2007
            </div>

            <h2 className="relative z-10 text-[32px] font-semibold leading-[1.2] text-text-primary sm:text-[44px] lg:text-[76px]">
              خبراء الإنارة الطريقية
            </h2>

            <p className="mt-6 text-[16px] leading-[2] text-text-secondary sm:mt-10 sm:text-[20px] sm:leading-[2.2]">
              أهلاً بك في عالمنا حيث تتحول الطرق إلى مساحات أكثر أمناً وإشراقاً.
              نحن خبراء الإنارة الطريقية، نبتكر حلولاً تجمع بين الجودة العالية
              والكفاءة التقنية والتصميم المتقن لنصنع المستقبل بثقة ونضع معايير
              جديدة للإنارة المستدامة والموثوقة.
            </p>

            <div className="mt-12 border-b border-border pb-6 text-text-secondary sm:mt-20 sm:pb-8">
              <div className="flex items-start gap-4 text-[16px] font-semibold sm:items-center sm:gap-5 sm:text-[22px]">
                <span>01.</span>
                <span>تنفيذ مشاريع إنارة في أكثر من 25 منطقة</span>
              </div>
            </div>

            <div className="py-6 text-text-secondary sm:py-8">
              <div className="flex items-start gap-4 text-[16px] font-semibold sm:items-center sm:gap-5 sm:text-[22px]">
                <span>02.</span>
                <span>أكثر من 2900 مشروع تم تنفيذه بنجاح</span>
              </div>
            </div>

            <Link
              href="/about"
              className=" group  mt-10  flex items-center gap-0"
            >
              <button className=" group  mt-10  flex items-center gap-0 ">
                <span className="bg-primary px-8 lg:px-10 h-[64px] rounded-full text-white flex items-center">
                  اعرف المزيد
                </span>

                <span className=" w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center  -mr-2 transition-all duration-500 group-hover:translate-y-1 border border-primary">
                  <BsArrowUpRight className="text-primary transition duration-500 group-hover:rotate-90" />
                </span>
              </button>
            </Link>
          </div>

          {/* MOBILE */}

          <div className="lg:hidden">
            <div className="relative h-[450px] rounded-[30px] overflow-hidden">
              <Image
                src="/about/about-main.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
