import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Senior Software Engineer for Fintech and Automation
          </h1>
          <p className="mt-3 text-foreground/80">
            I build reliable platforms across payments, ecommerce, customer
            experience, and workflow automation. 8+ years shipping high-impact
            systems end-to-end.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/contact"
              className="rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              Contact
            </a>
            <a
              href="/projects"
              className="rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              View Projects
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2 text-xs text-foreground/70">
            {[
              "TypeScript",
              "Next.js",
              "Node.js",
              "Python",
              "Kafka",
              "PostgreSQL",
              "AWS",
              "Kubernetes",
            ].map((s) => (
              <li
                key={s}
                className="rounded border border-black/10 dark:border-white/10 px-2 py-1"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src="https://avatars.githubusercontent.com/u/000000?v=4"
            alt="Portrait of Praveen K"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 144px, 176px"
            priority
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <a
            href="/projects"
            className="text-sm hover:underline underline-offset-4"
          >
            View all
          </a>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
