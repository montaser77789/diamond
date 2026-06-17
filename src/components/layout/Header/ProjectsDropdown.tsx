import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export default function ProjectsDropdown() {
  return (
    <div
      className="
      absolute
      invisible
      top-[80px]
      right-0
      w-[450px]
      translate-y-5
      rounded-[20px]
      bg-white
      p-10
      opacity-0
      shadow-xl
      transition-all
      duration-300
      group-hover:visible
      group-hover:translate-y-0
      group-hover:opacity-100
    "
    >
      <div className="flex flex-col gap-6">
        {PROJECTS.map((item) => (
          <Link
            key={item.slug}
            href={`/projects/${item.slug}`}
            className="text-right transition hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
