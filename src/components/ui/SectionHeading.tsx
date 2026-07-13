type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-950">
      {title}
    </h2>
  );
}
