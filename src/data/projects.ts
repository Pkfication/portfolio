export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  imageSrc?: string;
};

export const projects: Project[] = [
  {
    slug: "pricing-engine",
    title: "Real-time Pricing",
    description:
      "High-throughput service delivering real-time pricing for ecommerce products.",
    tech: [
      "Python",
      "FastAPI",
      "Redis",
      "MongoDB",
      "Monitoring",
      "Observability",
      "CI/CD",
    ],
    href: "#",
    imageSrc: "/window.svg",
  },
  {
    slug: "Lending Middleware",
    title: "Journey Management",
    description:
      "Create custom journeys for loans and payments for clients with varying risk profiles.",
    tech: [
      "Golang",
      "PostgreSQL",
      "Redis",
      "Monitoring",
      "Observability",
      "CI/CD",
    ],
    href: "#",
    imageSrc: "/file.svg",
  },
];
