import Image from "next/image";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import { contactInfo } from "@/data/navLinks";
import { clients } from "@/app/data/heroData";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "اتصل بنا | شركة الضوء الماسي",
  description: "تواصل مع شركة الضوء الماسي للاستفسار عن خدمات الإنارة وأعمدة الإنارة",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 py-10 lg:py-16">
        <div className="text-center">
          <span className="text-primary text-[18px] lg:text-[22px]">نحن هنا لمساعدتك</span>
          <h1 className="mt-3 text-[36px] text-text-primary lg:text-[72px]">اتصل بنا</h1>
          <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
            يسعدنا استقبال استفساراتكم وطلباتكم. تواصلوا معنا عبر النموذج أو معلومات
            التواصل أدناه.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[28px] border border-border bg-white p-6 shadow-main lg:rounded-[36px] lg:p-10">
            <h2 className="mb-8 text-[26px] text-text-primary lg:text-[32px]">
              أرسل رسالة
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] bg-dark-surface p-6 text-white lg:rounded-[36px] lg:p-8">
              <h2 className="text-[24px] lg:text-[28px]">معلومات التواصل</h2>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <BsTelephone className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="text-white/70">الجوال</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 block text-[18px] transition hover:text-primary"
                      dir="ltr"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <BsEnvelope className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="text-white/70">البريد الإلكتروني</p>
                    <a
                      href={`mailto:${contactInfo.email1}`}
                      className="mt-1 block text-[16px] transition hover:text-primary lg:text-[17px]"
                    >
                      {contactInfo.email1}
                    </a>
                    <a
                      href={`mailto:${contactInfo.email2}`}
                      className="mt-2 block text-[16px] transition hover:text-primary lg:text-[17px]"
                    >
                      {contactInfo.email2}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <BsGeoAlt className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="text-white/70">الموقع</p>
                    <a
                      href={contactInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[17px] leading-[1.8] transition hover:text-primary"
                    >
                      {contactInfo.location}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-[28px] border border-border lg:rounded-[36px]"
            >
              <div className="relative h-[220px] bg-surface">
                <iframe
                  title="موقع شركة الضوء الماسي"
                  src="https://maps.google.com/maps?q=%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+%D8%A7%D9%84%D8%B3%D9%84%D9%8A+%D9%85%D8%AE%D8%B1%D8%AC+18&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between bg-white px-5 py-4">
                <span className="text-[15px] text-text-secondary">افتح الموقع على خرائط Google</span>
                <BsGeoAlt className="text-primary" size={20} />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <span className="text-primary text-[18px] lg:text-[22px]">شركاء النجاح</span>
            <h2 className="mt-3 text-[30px] text-text-primary lg:text-[52px]">
              عملاؤنا وشركاؤنا
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:mt-14 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex h-[120px] items-center justify-center rounded-[20px] bg-white p-4 shadow-main lg:h-[140px] lg:rounded-[24px]"
              >
                <Image
                  src={client.image}
                  alt={client.alt}
                  width={160}
                  height={80}
                  className="max-h-[70px] w-auto object-contain opacity-80 grayscale transition hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
