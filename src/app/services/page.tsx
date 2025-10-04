import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance services by Pankaj Gupta: backend, frontend, and automation",
};

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Services
        </h1>
        <p className="mt-2 text-foreground/80">
          I partner with startups and product teams to ship reliable software
          end-to-end.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>

      <div className="rounded-lg border border-black/10 dark:border-white/10 p-5">
        <h2 className="font-semibold tracking-tight">Let’s work together</h2>
        <p className="mt-1 text-sm text-foreground/80">
          Have a project in mind? I’m available for short-term and ongoing
          engagements.
        </p>
        <div className="mt-3 flex gap-3">
          <a
            href="mailto:pankajgupta221b@gmail.com"
            className="rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/pankajgupta079/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
