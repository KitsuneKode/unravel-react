import Common from "@/components/common";
import { cleanup } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, afterEach, beforeEach, expect, it } from "vitest";

describe("Ui testing for Common", () => {
  afterEach(cleanup);
  beforeEach(() => render(<Common />));

  it("Initial Value of theme", () => {
    const theme = screen.getByRole("combobox");

    console.log(theme.value);
    const currentTheme = screen.getByLabelText("selected theme");

    expect(theme.value).toBe("system");
    expect(currentTheme.textContent).toBe("Selected theme: system");
  });

  it("When changed to dark mode", async () => {
    const user = userEvent.setup();

    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "dark");

    const currentTheme = screen.getByLabelText("theme");
    const selectedTheme = screen.getByLabelText("selected theme");
    console.log(select.value);

    expect(select.value).toBe("dark");

    expect(selectedTheme.textContent).toBe("Selected theme: dark");

    expect(currentTheme.textContent).toHaveTextContent("Theme: dark");
  });
});
