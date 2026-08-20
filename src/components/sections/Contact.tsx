import { siteConfig } from "@/data/site";

import { Section } from "../ui/Section";

export function Contact() {
  return (
    <Section id="contact" title="Let’s connect">
      <div className="max-w-3xl space-y-4">
        <p className="text-base leading-8 text-neutral-700">
          I’m open to frontend and full-stack product engineering opportunities.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block rounded-sm font-medium text-neutral-900 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
        >
          {siteConfig.email}
        </a>
      </div>
    </Section>
  );
}
