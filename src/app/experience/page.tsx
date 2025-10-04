import type { Metadata } from "next";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Pankaj Gupta",
};

function formatRange(start: string, end?: string | null): string {
  const startDate = new Date(start + "-01");
  const endDate = end ? new Date(end + "-01") : null;
  const startFmt = startDate.toLocaleString(undefined, {
    month: "short",
    year: "numeric",
  });
  const endFmt = endDate
    ? endDate.toLocaleString(undefined, { month: "short", year: "numeric" })
    : "Present";
  return `${startFmt} – ${endFmt}`;
}

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Experience
        </h1>
        <p className="mt-2 text-foreground/80">
          A snapshot of my professional journey.
        </p>
      </header>

      <ol className="relative border-s border-black/10 dark:border-white/10 ps-4">
        {experiences.map((exp, idx) => (
          <li key={`${exp.company}-${exp.role}-${idx}`} className="mb-8 ms-4">
            <div className="absolute w-2 h-2 bg-foreground rounded-full -start-1 translate-x-[-3px] mt-2" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold tracking-tight">
                {exp.role} · {exp.company}
              </h3>
              <div className="text-sm text-foreground/70">
                {formatRange(exp.start, exp.end)}
              </div>
            </div>
            <div className="mt-1 text-sm text-foreground/80">
              {[exp.employmentType, exp.location].filter(Boolean).join(" · ")}
            </div>
            {exp.bullets && exp.bullets.length > 0 ? (
              <ul className="mt-2 list-disc ps-5 text-sm text-foreground/80 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
