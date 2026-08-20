import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Header } from "./Header";

describe("Header", () => {
  it("opens and closes the mobile navigation", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    const mobileNavigation = screen.getByLabelText("Mobile navigation");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation).toHaveClass("hidden");

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(mobileNavigation).toHaveClass("block");
    expect(mobileNavigation).not.toHaveClass("hidden");

    await user.keyboard("{Escape}");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation).toHaveClass("hidden");
    expect(menuButton).toHaveFocus();
  });

  it("closes the mobile navigation after selecting a link", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    const mobileNavigation = screen.getByLabelText("Mobile navigation");

    await user.click(menuButton);

    const projectsLink = within(mobileNavigation).getByRole("link", {
      name: "Projects",
    });

    await user.click(projectsLink);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation).toHaveClass("hidden");
  });
});
