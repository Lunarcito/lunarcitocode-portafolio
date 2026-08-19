import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders the Grounded project details and links", () => {
    const [grounded] = projects;

    render(<Projects />);

    expect(screen.getByRole("heading", { name: grounded.title })).toBeInTheDocument();

    expect(screen.getByText(grounded.description)).toBeInTheDocument();

    grounded.highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });

    grounded.stack.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(
      screen.getByRole("link", {
        name: `Live demo: ${grounded.title} (opens in a new tab)`,
      }),
    ).toHaveAttribute("href", grounded.live);

    expect(
      screen.getByRole("link", {
        name: `Source code: ${grounded.title} on GitHub (opens in a new tab)`,
      }),
    ).toHaveAttribute("href", grounded.github);
  });
});
