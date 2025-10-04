import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-5 hover:border-black/20 dark:hover:border-white/20 transition-colors">
      <h3 className="font-semibold tracking-tight text-lg">{service.title}</h3>
      <p className="mt-1 text-sm text-foreground/80">{service.summary}</p>
      <ul className="mt-3 list-disc ps-5 text-sm text-foreground/80 space-y-1">
        {service.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
