// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://app-jsdemo.azurewebsites.net/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

// test('Check for Weather', async ({ page }) => {
//   await page.goto(pageURL);

//   const linkElement = page.getByText(/Weather forecast/i);
  
//   await expect(linkElement).toHaveText('Weather forecast');
// });

// test('Check for Learn React Link', async ({ page }) => {
//   await page.goto(pageURL);

//   // // Click the Learn React link.
//   // await page.getByRole('link', { name: /Learn React/i }).click();

//   const linkElement = page.getByAltText('logo');

//   // // Expects the URL to contain intro.
//   await expect(linkElement).toHaveCSS('height', '40vmin');
// });
