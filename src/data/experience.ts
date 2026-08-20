export type Experience = {
  company: string;
  product?: string;
  role: string;
  period: string;
  points: string[];
};

export const experience = [
  {
    company: "Holasoft",
    product: "HolaERP",
    role: "React Frontend Developer",
    period: "May 2025 – May 2026",
    points: [
      "Led frontend development for an internal ERP platform, building responsive web and mobile features with React, TypeScript, and Capacitor.",
      "Owned critical user journeys across authentication, dashboards, health tracking, agenda management, and worker itinerary monitoring.",
      "Architected and standardized a reusable component library of 50+ documented UI components, improving consistency across product modules.",
      "Established automated testing and CI/CD workflows with Vitest, React Testing Library, Playwright, and GitHub Actions while contributing to code reviews and frontend technical decisions.",
    ],
  },
  {
    company: "Gandolapp S.L.",
    role: "Full-Stack Developer",
    period: "Apr 2023 – May 2025",
    points: [
      "Owned the end-to-end development of an early-stage product, covering frontend, backend, and UI/UX responsibilities.",
      "Built 25+ product features across 8 core pages using React, JavaScript, Node.js, and Firebase.",
      "Designed and developed Fleet Tower, a real-time fleet-management web application used in stakeholder demos to validate the product concept.",
      "Designed Nexus backend services, including REST API endpoints, authentication flows, data models, and frontend-backend integration.",
    ],
  },
];
