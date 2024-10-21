import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.boardsource.xyz/");
  await page.getByRole("navigation").getByText("Premium Boards").click();
  await page.getByRole("link", { name: "Unicorne LP Our First V2" }).click();

  // wait 5 seconds for the page to load
  await page.waitForTimeout(3000);

  // log a message to the console
  console.log("Page loaded.");

  // take a screenshot
  await page.screenshot({ path: "screenshots/screenshot.png", fullPage: true });
});
