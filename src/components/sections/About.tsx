import { siteConfig } from "@/data/site";

import { Section } from "../ui/Section";

const strengths = [
  {
    title: "Frontend architecture",
    details: "React · Next.js · TypeScript · reusable UI",
  },
  {
    title: "Quality and accessibility",
    details: "Testing · WCAG · performance · Core Web Vitals",
  },
  {
    title: "Product engineering",
    details: "Authentication · APIs · data persistence · server-side flows",
  },
  {
    title: "Delivery and collaboration",
    details: "CI/CD · GitHub Actions · cloud deployment",
  },
];

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-5xl">
        <p className="max-w-4xl text-base leading-8 text-neutral-700">
          {siteConfig.summary}
        </p>

        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950"
              />

              <div>
                <p className="text-sm font-medium text-neutral-900">{strength.title}</p>

                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  {strength.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
