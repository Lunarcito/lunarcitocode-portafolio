import { siteConfig } from "@/data/site";

import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section id="top" className="py-10 md:py-14">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-3 text-sm text-neutral-500">{siteConfig.location}</p>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-lg text-neutral-700">{siteConfig.role}</p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            {siteConfig.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Carolina Calle's LinkedIn profile in a new tab"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
            >
              LinkedIn
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Carolina Calle's GitHub profile in a new tab"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
