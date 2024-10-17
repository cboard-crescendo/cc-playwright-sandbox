import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.getByPlaceholder("Search Amazon").click();
  await page.getByPlaceholder("Search Amazon").fill("nike shoes");
  await page.getByRole("button", { name: "Go", exact: true }).click();

  // wait 5 seconds for the page to load
  await page.waitForTimeout(5000);

  // log a message to the console
  console.log("Page loaded.");

  // take a screenshot
  await page.screenshot({ path: "screenshots/screenshot.png", fullPage: true });
});
