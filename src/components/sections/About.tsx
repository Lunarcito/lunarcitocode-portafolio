import { siteConfig } from "@/data/site";
import { Section } from "../ui/Section";
import { ContentWidth } from "../ui/ContentWidth";

export function About() {
  return (
    <Section id="about" title="About">
      <ContentWidth>
        <p className="text-base leading-7 text-neutral-700">{siteConfig.summary}</p>
      </ContentWidth>
    </Section>
  );
}
