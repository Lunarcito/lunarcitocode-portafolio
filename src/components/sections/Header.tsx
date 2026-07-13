import { Container } from "../ui/Container";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="text-sm font-medium tracking-tight text-neutral-900">
            Carolina Calle
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
