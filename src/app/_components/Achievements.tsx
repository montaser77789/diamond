import Image from "next/image";
import { achievements } from "../data/heroData";

export default function Achievements() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-5">
        {/* title */}

        <div className="flex items-center gap-8 mb-24">
          <div className="flex-1 h-[1px] bg-border" />

          <h2 className="text-primary text-[22px] whitespace-nowrap">
            الجوائز والإنجازات
          </h2>

          <div className="flex-1 h-[1px] bg-border" />
        </div>

        {/* desktop */}

        <div className="hidden lg:grid grid-cols-5 gap-10">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group text-center transition duration-500 hover:-translate-y-2"
            >
              <div className="relative w-[170px] h-[170px] mx-auto">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-10 text-[30px] leading-[1.6] text-text-primary">
                {item.title}
              </h3>

              <span className="block mt-3 text-[44px] text-text-primary">
                {item.year}
              </span>
            </div>
          ))}
        </div>

        {/* mobile */}

        <div className="lg:hidden overflow-x-auto">
          <div className="flex gap-14 min-w-max px-4">
            {achievements.map((item) => (
              <div key={item.id} className="w-[300px] text-center shrink-0">
                <div className="relative w-[150px] h-[150px] mx-auto">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-8 text-[26px] leading-[1.7]">{item.title}</h3>

                <span className="block text-[40px] mt-4">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
