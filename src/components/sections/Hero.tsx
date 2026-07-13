import { siteConfig } from "@/data/site";
import { Container } from "../ui/Container";
import { ContentWidth } from "../ui/ContentWidth";

export function Hero() {
  return (
    <section id="top" className="py-20 md:py-24">
      <Container>
        <ContentWidth>
          <p className="mb-3 text-sm text-neutral-500">{siteConfig.location}</p>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-lg text-neutral-700">{siteConfig.role}</p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
            {siteConfig.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              LinkedIn
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              GitHub
            </a>
          </div>
        </ContentWidth>
      </Container>
    </section>
  );
}
