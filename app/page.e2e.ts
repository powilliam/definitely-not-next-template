import { test, expect } from "@playwright/test";

test("if homepage is being rendered correctly", async ({ page }) => {
  await page.goto("/");

  const text = page.getByText("Page");

  await Promise.all([
    expect(page).toHaveTitle("Next Auth Tailwindcss"),
    expect(text).toBeVisible(),
  ]);
});
