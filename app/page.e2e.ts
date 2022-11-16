import { test, expect } from "@playwright/test";

import meta from "@app/meta";

test("if homepage is being rendered correctly", async ({ page }) => {
  await page.goto("/");

  const text = page.getByText("Page");

  await Promise.all([
    expect(page).toHaveTitle(meta.title),
    expect(text).toBeVisible(),
  ]);
});
