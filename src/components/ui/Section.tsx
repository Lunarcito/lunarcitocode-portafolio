import { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <Container>
        {title ? <SectionHeading title={title} /> : null}
        {children}
      </Container>
    </section>
  );
}
