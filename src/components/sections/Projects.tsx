import { projects } from "@/data/projects";
import { Section } from "../ui/Section";

export function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm text-neutral-500">{project.status}</p>

                <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
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

              <div className="flex gap-4 text-sm">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-900 underline underline-offset-4"
                  >
                    Live
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-900 underline underline-offset-4"
                  >
                    GitHub
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
