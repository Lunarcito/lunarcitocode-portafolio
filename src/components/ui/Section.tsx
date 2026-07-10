import { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <Container>
        {title ? (
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
