// @ts-check
const { test, expect } = require('@playwright/test');
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");
const pageURL = 'https://app-ado.azurewebsites.net';
const REPO = 'test-repo-1';
// const USER = process.env["GITHUB_USER"];

// test.describe("Azure AD", () => {
//   //Test that goes through the Azure AD authentication login flow using username and password
//   test('Go through Azure AD authentication - Test User', async ({ page }) => {
//     // If you're using MSI, DefaultAzureCredential should "just work".
//     // Otherwise, DefaultAzureCredential expects the following three environment variables:
//     // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
//     // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
//     // - AZURE_CLIENT_SECRET: The client secret for the registered application
//     const credential = new DefaultAzureCredential();

//     const keyVaultName = process.env["KEY_VAULT_NAME"];
//     if(!keyVaultName) throw new Error("KEY_VAULT_NAME is empty");
//     const url = "https://" + keyVaultName + ".vault.azure.net";

//     const client = new SecretClient(url, credential);

//     // Read the secret we created
//     const username = await client.getSecret("scc-username");
//     const password = await client.getSecret("scc-password");
    
//     await page.goto(pageURL);

//     // Expects the URL to contain login.
//     await expect(page).toHaveURL(/.*login/);

//     // @ts-ignore
//     await page.fill('input[name="loginfmt"]', username.value);
//     await page.press('input[name="loginfmt"]', 'Enter');
//     await page.waitForTimeout(1000);
//     // @ts-ignore
//     await page.fill('input[name="passwd"]', password.value);
//     await page.press('input[name="passwd"]', 'Enter');

//     //find button by id and click it
//     await page.waitForSelector('#idBtn_Back');
//     await page.click('#idBtn_Back');

//     await page.waitForURL(pageURL);

//     const linkElement = page.getByAltText('logo');

//     // Expects the logo to have the css property specified.
//     await expect(linkElement).toHaveCSS('animation-duration', '20s');
//   });
// });

// test.describe("GitHub API", () => {

  
//   // Request context is reused by all tests in the file.
//   let apiContext;
//   const randomNumber = Math.ceil(Math.random() * 1000);

//   test.beforeAll(async ({ playwright }) => {
//     apiContext = await playwright.request.newContext({
//       // All requests we send go to this API endpoint.
//       baseURL: 'https://api.github.com',
//       extraHTTPHeaders: {
//         // We set this header per GitHub guidelines.
//         'Accept': 'application/vnd.github.v3+json',
//         // Add authorization token to all requests.
//         // Assuming personal access token available in the environment.
//         'Authorization': `token ${process.env.API_TOKEN}`,
//       },
//     });
//   })
  
//   test.afterAll(async ({ }) => {
//     // Dispose all responses.
//     await apiContext.dispose();
//   });

//   test('Create Issue and check that it exists', async ({ page }) => {
//     const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {
//       data: {
//         // add the specific time formatted as date and time at the end of the title to make it unique
//         title: `[Feature] request ${randomNumber} created from Playwright at ${new Date().toLocaleTimeString()} on ${new Date().toDateString()}`,
//       }
//     });
//     expect(newIssue.ok()).toBeTruthy();
  
//     await page.goto(`https://github.com/${USER}/${REPO}`);
//     await page.waitForTimeout(1000);
//     await page.goto(`https://github.com/${USER}/${REPO}/issues`);
//     await expect(page.getByText(`[Feature] request ${randomNumber}`)).toBeVisible();


//     // const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {
//     //   data: {
//     //     title: `[Feature] request ${randomNumber}`,
//     //   }
//     // });
//     // expect(newIssue.ok()).toBeTruthy();
  
//     // await page.goto(`https://github.com/${USER}/${REPO}/issues`);
//     // const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
//     // await expect(firstIssue).toHaveText(`[Feature] request ${randomNumber}`);
//   });
// });

// test.describe("Failing tests", () => {
//   // test('Fail tests', async ({ page }) => {

//   // });

//   test.describe.configure({ mode: 'parallel' });

//   test.fail(({ browserName }) => browserName === 'webkit');

//   test('fail in WebKit 1', async ({ page }) => {
//     test.fail();
//     await expect(page).toHaveURL(/.*fail/);
//   });
//   test('fail in WebKit 2', async ({ page }) => {
//     test.fail();
//     await expect(page).toHaveURL(/.*fail/);
//   });
// });