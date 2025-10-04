import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-black/10 dark:border-white/10 p-4 hover:border-black/20 dark:hover:border-white/20 transition-colors">
      <div className="flex items-start gap-4">
        {project.imageSrc ? (
          <div className="relative h-12 w-12 rounded-md overflow-hidden border border-black/10 dark:border-white/10 bg-background">
            {/* Using public svgs for now; can replace with screenshots */}
            <Image
              src={project.imageSrc}
              alt=""
              fill
              className="object-contain p-2"
            />
          </div>
        ) : null}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold tracking-tight">{project.title}</h3>
            {project.href ? (
              <Link
                href={project.href}
                className="text-sm hover:underline underline-offset-4"
              >
                View
              </Link>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-foreground/80">
            {project.description}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2 text-xs text-foreground/70">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded border border-black/10 dark:border-white/10 px-2 py-1"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
