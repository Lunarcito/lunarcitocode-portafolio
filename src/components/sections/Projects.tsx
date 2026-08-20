import Image from "next/image";
import { projects } from "@/data/projects";

import { Section } from "../ui/Section";

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
      />
    </svg>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Project">
      <div className="max-w-6xl">
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <div className="grid gap-8 md:grid-cols-5 md:items-center">
                <div className="md:col-span-3">
                  <p className="text-sm text-neutral-500">
                    {project.category} · {project.status}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-neutral-600">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-900"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:col-span-2 md:pl-2">
                  <div className="flex flex-wrap gap-3">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo: ${project.title} (opens in a new tab)`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                      >
                        Live demo
                        <ExternalLinkIcon />
                      </a>
                    ) : null}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code: ${project.title} on GitHub (opens in a new tab)`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                      >
                        Source code
                        <ExternalLinkIcon />
                      </a>
                    ) : null}
                  </div>

                  {project.image ? (
                    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 768px) 100vw, 400px"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
