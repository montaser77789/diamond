import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRight, BsCheckLg } from "react-icons/bs";
import { getProjectBySlug, PROJECTS } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "المشروع غير موجود" };
  }

  return {
    title: `${project.title} | شركة الضوء الماسي`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="relative mx-3 overflow-hidden rounded-[30px] lg:mx-5 lg:rounded-[40px]">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex items-end p-6 lg:p-14">
            <div>
              <span className="text-primary text-[16px] lg:text-[20px]">{project.year}</span>
              <h1 className="mt-3 max-w-[900px] text-[32px] leading-[1.3] text-white lg:text-[68px]">
                {project.title}
              </h1>
              <p className="mt-4 text-[16px] text-white/85 lg:text-[20px]">{project.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-[28px] text-text-primary lg:text-[44px]">تفاصيل المشروع</h2>
            <p className="mt-6 text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
              {project.description}
            </p>

            <h3 className="mt-12 text-[22px] text-text-primary lg:text-[30px]">نطاق العمل</h3>
            <div className="mt-6 space-y-5">
              {project.scope.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                    <BsCheckLg size={14} />
                  </span>
                  <span className="text-[17px] leading-[1.8] text-text-primary lg:text-[20px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="group mt-12 inline-flex items-center gap-0">
              <span className="flex h-[58px] items-center rounded-full bg-primary px-8 text-white lg:h-[64px] lg:px-10">
                ابدأ مشروعك معنا
              </span>
              <span className="-mr-2 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-primary bg-white lg:h-[64px] lg:w-[64px]">
                <BsArrowUpRight className="text-primary transition duration-500 group-hover:rotate-90" />
              </span>
            </Link>
          </div>

          <aside className="h-fit rounded-[30px] bg-dark-surface p-8 text-white lg:rounded-[40px]">
            <h3 className="text-[24px] lg:text-[30px]">معلومات المشروع</h3>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-white/60">سنة التنفيذ</dt>
                <dd className="mt-1 text-[22px]">{project.year}</dd>
              </div>
              <div>
                <dt className="text-white/60">الموقع</dt>
                <dd className="mt-1 text-[18px] leading-[1.8]">{project.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-surface px-5 py-14 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="text-center text-[28px] text-text-primary lg:text-[44px]">
              مشاريع أخرى
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
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
                    <span className="text-primary text-[16px]">{item.year}</span>
                    <h3 className="mt-2 text-[20px] leading-[1.5] text-text-primary lg:text-[24px]">
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
