export type Experience = {
  company: string;
  role: string;
  employmentType?: string;
  location?: string;
  start: string; // YYYY-MM
  end?: string | null; // YYYY-MM or null for present
  bullets?: string[];
};

export const experiences: Experience[] = [
  {
    company: "FinBox",
    role: "Senior Software Engineer",
    employmentType: "Full-time",
    location: "Bengaluru, Karnataka, India · On-site",
    start: "2025-07",
    end: null,
  },
  {
    company: "Builder.ai",
    role: "Senior Software Engineer",
    employmentType: "Full-time",
    location: "Gurugram, Haryana, India · Hybrid",
    start: "2023-07",
    end: "2025-05",
  },
  {
    company: "Tata 1mg",
    role: "SDE II",
    employmentType: "Full-time",
    location: "Gurugram, Haryana, India",
    start: "2021-07",
    end: "2023-07",
  },
  {
    company: "Tata 1mg",
    role: "Software Engineer",
    employmentType: "Full-time",
    location: "Gurgaon, India",
    start: "2019-12",
    end: "2021-06",
  },
  {
    company: "Zykrr — The CX Monetization Company",
    role: "Full Stack Engineer",
    employmentType: "Full-time",
    location: "Gurgaon, Haryana, India",
    start: "2018-11",
    end: "2019-12",
    bullets: [
      "Managed internal and client-facing applications including databases and servers.",
      "Worked on AngularJS, MongoDB, PostgreSQL, Node.js, SailsJS, Redis, and developer tooling (Git, VS Code, Vim).",
    ],
  },
  {
    company: "ProductRx Consulting Pvt Ltd",
    role: "Software Engineer",
    employmentType: "Full-time",
    location: "Gurgaon, India",
    start: "2017-06",
    end: "2018-10",
    bullets: [
      "Designed a highly customisable analytics dashboard.",
      "Built and deployed the frontend application.",
      "Implemented the complete UI of the application.",
    ],
  },
];
