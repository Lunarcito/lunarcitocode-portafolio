import { projects } from "@/data/projects";
import { Section } from "../ui/Section";

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <h3 className="text-lg font-semibold text-neutral-900">{project.title}</h3>
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
          </article>
        ))}
      </div>
    </Section>
  );
}
