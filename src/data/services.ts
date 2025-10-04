export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "backend-platforms",
    title: "Backend Platforms & APIs",
    summary:
      "Design and build reliable backends with performance, observability, and security in mind.",
    bullets: [
      "Event-driven architectures (Kafka, queues) and robust REST/GraphQL APIs",
      "Data modeling with PostgreSQL, MongoDB; caching with Redis",
      "Observability (metrics, tracing), CI/CD, IaC, and cost-aware scaling",
    ],
  },
  {
    slug: "frontend-applications",
    title: "Frontend Applications",
    summary:
      "Modern, accessible, and fast UIs using Next.js and component-driven development.",
    bullets: [
      "Design systems and UI kits; SSR/ISR; forms and validation",
      "Dashboards, admin tools, and customer-facing apps",
      "Performance optimization and analytics instrumentation",
    ],
  },
  {
    slug: "workflows-automation",
    title: "Workflows & Automation",
    summary:
      "Automate business processes and integrate systems to reduce manual work and errors.",
    bullets: [
      "Integrations with payment providers, CRMs, and data pipelines",
      "Background jobs, schedulers, and reliable retries",
      "Internal tooling to accelerate operations and support",
    ],
  },
];
