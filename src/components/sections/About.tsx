import { siteConfig } from "@/data/site";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-base leading-7 text-neutral-700">
        {siteConfig.summary}
      </p>
    </Section>
  );
}
