import { experience } from "@/data/experience";
import { Section } from "../ui/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`}>
            <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_220px] md:items-baseline">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{item.role}</h3>

                <p className="text-sm text-neutral-600">
                  {item.product ? `${item.product} · ${item.company}` : item.company}
                </p>
              </div>

              <p className="text-sm text-neutral-500 md:text-right">{item.period}</p>
            </div>

            <ul className="mt-4 space-y-3 text-neutral-700">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2 leading-8">
                  <span
                    aria-hidden="true"
                    className="mt-3 size-1.5 shrink-0 rounded-full bg-neutral-900"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
