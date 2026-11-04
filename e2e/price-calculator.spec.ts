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

for (const width of [375, 1280]) {
  test(`keeps the calculator readable without horizontal scrolling at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Price your project" })).toBeVisible();
    await expect(page.getByText("Pick a project type and see your price straight away.")).toBeVisible();
    await expect(page.getByRole("group", { name: "What would you like to build?" })).toBeVisible();
    await expect(page.getByRole("group", { name: "Need it within 1 week?" })).toBeVisible();
    await expect(page.getByTestId("price")).toBeVisible();
    await expect(page.getByRole("link", { name: "Email us this quote" })).toBeVisible();

    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}

test("reflows without horizontal scrolling between the supported viewport widths", async ({ page }) => {
  await page.goto("/");

  for (const width of [375, 600, 900, 1280]) {
    await page.setViewportSize({ width, height: 800 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }
});

test("uses the approved navy, white, and teal colours", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(page.getByRole("heading", { name: "Price your project" })).toHaveCSS(
    "color",
    "rgb(10, 22, 40)",
  );
  await expect(page.getByRole("link", { name: "Email us this quote" })).toHaveCSS(
    "background-color",
    "rgb(20, 184, 166)",
  );
});
