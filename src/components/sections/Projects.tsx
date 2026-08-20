import { projects } from "@/data/projects";
import { Section } from "../ui/Section";

export function Projects() {
  return (
    <Section id="projects" title="Featured Project">
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
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

              <div className="flex shrink-0 gap-4 text-sm">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo: ${project.title} (opens in a new tab)`}
                    className="rounded-sm font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
                  >
                    Live demo
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code: ${project.title} on GitHub (opens in a new tab)`}
                    className="rounded-sm font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4"
                  >
                    Source code
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
