import { test, expect } from "@playwright/test";

test("boardsource page test", async ({ page }) => {
  // Navigate to the main page
  await page.goto("https://www.boardsource.xyz/");

  // Click on the 'Premium Boards' link in the navigation
  const premiumBoardsLink = page
    .getByRole("navigation")
    .getByText("Premium Boards");
  await expect(premiumBoardsLink).toBeVisible(); // Ensures the link is visible before clicking
  await premiumBoardsLink.click(); // click the link after it has loaded

  // Wait until the image inside the container with class 'hero__image__container' is visible
  const boardLink = page.locator(".hero__image__container img");
  await expect(boardLink).toBeVisible(); // Ensures the image within the container is loaded and visible
  
  // Log the image's 'src' attribute to confirm it has loaded
  console.log(
    "Image loaded successfully:",
    await boardLink.getAttribute("src")
  );
  
  await boardLink.click(); // click the link after it has loaded

  // Locate the image by its alt text (name attribute) and wait until it's visible
  const image = page
    .getByRole("img", {
      name: "Unicorne LP",
    })
    .first(); // we use the 'first' method to get the first element that matches the selector
  await expect(image).toBeVisible(); // Waits for the image to appear

  // Log the image src attribute to the console for confirmation
  console.log("Image loaded successfully:", await image.getAttribute("src"));

  // Take a screenshot of the entire page
  await page.screenshot({ path: "screenshots/screenshot.png", fullPage: true });
});
