import { siteConfig } from "@/data/site";
import { Section } from "../ui/Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-2 text-neutral-700">
        <p>{siteConfig.email}</p>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="block underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer"
          className="block underline underline-offset-4"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
