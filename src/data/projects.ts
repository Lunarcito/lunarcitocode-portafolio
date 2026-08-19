export type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "grounded",
    title: "Grounded",
    category: "Full-stack wellness platform",
    status: "Live · Actively evolving",
    description:
      "A full-stack wellness and habit-tracking application that helps users build consistent routines through calm, accessible, and responsive daily flows.",
    highlights: [
      "Built the product end to end, from responsive UI and authentication to persistent habit data and server-side access.",
      "Implemented Supabase authentication, PostgreSQL persistence, Prisma ORM, and protected application flows.",
      "Created unit, component, and end-to-end test coverage with a 100 Lighthouse score across Performance, Accessibility, Best Practices, and SEO.",
      "Configured CI with GitHub Actions and continuous deployment to AWS Amplify from the main branch.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "AWS Amplify",
    ],
    live: "https://main.d2p9ygb596mf0b.amplifyapp.com/",
    github: "https://github.com/Lunarcito/grounded-wellness-app",
  },
];
