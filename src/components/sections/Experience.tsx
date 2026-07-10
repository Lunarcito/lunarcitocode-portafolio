import { experience } from "@/data/experience";
import { Section } from "../ui/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`}>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{item.role}</h3>
                <p className="text-sm text-neutral-600">
                  {item.product ? `${item.product} · ${item.company}` : item.company}
                </p>
              </div>
              <p className="text-sm text-neutral-500">{item.period}</p>
            </div>

            <ul className="mt-4 space-y-2 text-neutral-700">
              {item.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
