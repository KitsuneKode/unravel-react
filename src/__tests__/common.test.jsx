import Common from "@/components/common";
import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";

test("system theme", async () => {
  const screen = render(<Common />);

  const theme = screen.getByRole("combobox");

  console.log(theme.value);

  expect(theme.value).toBe("system");
});
