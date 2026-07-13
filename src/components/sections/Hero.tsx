import { siteConfig } from "@/data/site";
import { Container } from "../ui/Container";
import { ContentWidth } from "../ui/ContentWidth";

export function Hero() {
  return (
    <section className="py-20">
      <Container>
        <ContentWidth>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            {siteConfig.location}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-950">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl text-neutral-700">{siteConfig.role}</p>
          <p className="mt-6 text-base leading-7 text-neutral-600">{siteConfig.intro}</p>
        </ContentWidth>
      </Container>
    </section>
  );
}
