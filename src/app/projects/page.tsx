import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "المشاريع | شركة الضوء الماسي",
  description: "استعرض أحدث مشاريع شركة الضوء الماسي في الإنارة الطريقية والديكورية",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 lg:py-16">
      <div className="text-center">
        <span className="text-primary text-[18px] lg:text-[22px]">منذ العام 2007</span>
        <h1 className="mt-3 text-[36px] text-text-primary lg:text-[72px]">أحدث المشاريع</h1>
        <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
          نفخر بتنفيذ مئات المشاريع في مختلف مناطق المملكة وخارجها بأعلى معايير الجودة.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block overflow-hidden rounded-[28px] lg:rounded-[40px]"
          >
            <div className="relative h-[320px] lg:h-[480px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <span className="text-primary text-[18px] lg:text-[22px]">{project.year}</span>
                <h2 className="mt-2 text-[24px] text-white lg:text-[36px]">{project.title}</h2>
                <p className="mt-2 text-[15px] text-white/80 lg:text-[17px]">{project.location}</p>
                <div className="mt-6 flex justify-end">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-primary">
                    <BsArrowUpRight className="transition duration-500 group-hover:rotate-90" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
