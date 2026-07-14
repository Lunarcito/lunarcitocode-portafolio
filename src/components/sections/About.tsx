import { siteConfig } from "@/data/site";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="text-base leading-8 text-neutral-700">{siteConfig.summary}</p>
    </Section>
  );
}
