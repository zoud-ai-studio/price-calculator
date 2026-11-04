import { expect, test } from "@playwright/test";

test("shows the landing-page price and updates it for urgency", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Price your project" })).toBeVisible();
  await expect(page.getByText("Pick a project type and see your price straight away.")).toBeVisible();
  await expect(page.getByTestId("price")).toHaveText("$1,000");

  await page.getByRole("radio", { name: "Yes" }).check();
  await expect(page.getByTestId("price")).toHaveText("$1,200");

  await page.getByRole("radio", { name: "No" }).check();
  await expect(page.getByTestId("price")).toHaveText("$1,000");
});

test("updates the price for every project type", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("radio", { name: "Business website" }).check();
  await expect(page.getByTestId("price")).toHaveText("$2,000");
  await page.getByRole("radio", { name: "Yes" }).check();
  await expect(page.getByTestId("price")).toHaveText("$2,400");

  await page.getByRole("radio", { name: "AI web app" }).check();
  await expect(page.getByTestId("price")).toHaveText("$3,600");
  await page.getByRole("radio", { name: "No" }).check();
  await expect(page.getByTestId("price")).toHaveText("$3,000");
});

test("uses a mailto CTA containing the active quote", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("radio", { name: "AI web app" }).check();
  await page.getByRole("radio", { name: "Yes" }).check();

  const href = await page.getByRole("link", { name: "Email us this quote" }).getAttribute("href");
  const url = new URL(href ?? "", "https://example.test");

  expect(href).toContain("mailto:fathir.majeed@gmail.com");
  expect(url.searchParams.get("subject")).toBe("Quote request");
  expect(url.searchParams.get("body")).toContain("AI web app");
  expect(url.searchParams.get("body")).toContain("$3,600");
});
