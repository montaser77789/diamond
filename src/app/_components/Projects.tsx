"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, PROJECT_TYPES, getProjectsByType } from "@/data/projects";

export default function Projects() {
  const [activeType, setActiveType] = useState("all");
  const filteredProjects = getProjectsByType(activeType);

  return (
    <section className="overflow-hidden py-14 lg:py-24" aria-label="مشاريعنا">
      <div className="mx-auto max-w-[1800px] px-3 lg:px-5">
        <div className="mb-10 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <span className="text-primary text-[16px] lg:text-[18px] tracking-wide uppercase">
                مشاريع مختارة
              </span>
              <h2 className="mt-2 text-[32px] leading-[1.1] text-text-primary lg:mt-4 lg:text-[72px] font-semibold">
                محفظة <span className="text-primary">مشاريعنا</span>
              </h2>
            </div>
            <p className="text-text-secondary text-[16px] leading-[1.8] lg:text-[18px] max-w-[500px]">
              محفظة متنوعة من المشاريع المحلية تشمل القطاعات الحكومية، السكنية، التجارية والصناعية.
              كل مشروع يعكس التزامنا بالجودة والهندسة الدقيقة.
            </p>
          </div>

          <div
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
            role="tablist"
            aria-label="تصفية المشاريع حسب النوع"
          >
            {PROJECT_TYPES.map((type) => (
              <button
                key={type.id}
                role="tab"
                aria-selected={activeType === type.id}
                aria-controls={`panel-${type.id}`}
                id={`tab-${type.id}`}
                onClick={() => setActiveType(type.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[14px] lg:text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${
                  activeType === type.id
                    ? "bg-dark-surface text-white shadow-main"
                    : "bg-surface-2 text-text-secondary hover:bg-surface hover:text-text-primary"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div id="projects-panel" role="tabpanel" aria-live="polite">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => {
                const projectType = PROJECT_TYPES.find(t => t.id === project.type);
                const isFirst = index === 0;
                const isSecond = index === 1;

                if (isFirst && filteredProjects.length >= 2) {
                  return (
                    <article
                      key={project.id}
                      className="lg:col-span-7 lg:row-span-2 relative group"
                    >
                      <Link href={`/projects/${project.slug}`} className="block">
                        <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-[32px] lg:rounded-[40px] bg-dark-surface">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          <div className="absolute top-5 left-5 lg:top-6 lg:left-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-[11px] lg:text-[12px] font-medium tracking-wider uppercase bg-${projectType?.color || "primary"}/90 text-white`}>
                              {PROJECT_TYPES.find(t => t.id === project.type)?.label || project.type}
                            </span>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                            <h3 className="text-white text-[22px] lg:text-[30px] xl:text-[36px] font-semibold leading-tight max-w-[400px]">
                              {project.title}
                            </h3>
                            <p className="mt-3 text-white/70 text-[15px] lg:text-[17px] leading-relaxed max-w-[380px]">
                              {project.description.slice(0, 120)}...
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                              <span className="text-primary text-[14px] lg:text-[16px] font-medium">
                                {project.year}
                              </span>
                              <span className="w-[1px] h-6 bg-white/20 hidden lg:block" />
                              <span className="text-white/60 text-[13px] lg:text-[14px] hidden lg:inline">
                                {project.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                }

                if (isSecond && filteredProjects.length >= 2) {
                  return (
                    <article
                      key={project.id}
                      className="lg:col-span-5 relative group"
                    >
                      <Link href={`/projects/${project.slug}`} className="block">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] lg:rounded-[32px] bg-dark-surface">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          <div className="absolute top-4 left-4 lg:top-5 lg:left-5">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] lg:text-[11px] font-medium tracking-wider uppercase bg-${projectType?.color || "primary"}/90 text-white`}>
                              {PROJECT_TYPES.find(t => t.id === project.type)?.label || project.type}
                            </span>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                            <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                              {project.title}
                            </h3>
                            <p className="mt-2 text-white/60 text-[13px] lg:text-[14px] line-clamp-2">
                              {project.description.slice(0, 80)}...
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-white/60 text-[12px] lg:text-[13px]">
                              <span>{project.year}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                }

                return (
                  <article
                    key={project.id}
                    className={`relative group ${filteredProjects.length === 1 ? "lg:col-span-6 lg:col-start-3" : ""}`}
                  >
                    <Link href={`/projects/${project.slug}`} className="block">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] lg:rounded-[32px] bg-dark-surface">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute top-4 left-4 lg:top-5 lg:left-5">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] lg:text-[11px] font-medium tracking-wider uppercase bg-${projectType?.color || "primary"}/90 text-white`}>
                            {PROJECT_TYPES.find(t => t.id === project.type)?.label || project.type}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                          <h3 className="text-white text-[18px] lg:text-[22px] font-semibold leading-tight">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-white/60 text-[13px] lg:text-[14px] line-clamp-2">
                            {project.description.slice(0, 80)}...
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-white/60 text-[12px] lg:text-[13px]">
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-[18px]">
                لا توجد مشاريع في هذا التصنيف حالياً
              </p>
            </div>
          )}

          {activeType === "all" && PROJECTS.length > 0 && (
            <div className="mt-12 lg:mt-20 pt-10 lg:pt-16 border-t border-border/50">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="w-[1px] h-[60px] lg:w-[80px] lg:h-[1px] bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-text-secondary text-[15px] lg:text-[17px] font-medium">
                    {PROJECTS.length} مشروع مكتمل منذ 2007
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex h-[56px] w-[56px] lg:h-[64px] lg:w-[64px] items-center justify-center rounded-full bg-dark-surface text-white border border-white/10 hover:bg-primary hover:border-primary transition-all duration-500"
                          aria-label="عرض جميع المشاريع">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  <span className="hidden lg:inline text-primary text-[15px] lg:text-[17px] font-medium">
                    استكشف جميع المشاريع
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}