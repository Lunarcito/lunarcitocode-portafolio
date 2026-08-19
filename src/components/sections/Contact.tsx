import { siteConfig } from "@/data/site";
import { Section } from "../ui/Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-3 text-neutral-700">
        <a
          href={`mailto:${siteConfig.email}`}
          className="block w-fit rounded-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
        >
          {siteConfig.email}
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Carolina Calle's GitHub profile in a new tab"
          className="block w-fit rounded-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
        >
          GitHub
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Carolina Calle's LinkedIn profile in a new tab"
          className="block w-fit rounded-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
