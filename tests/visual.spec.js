import { test, expect } from '@playwright/test';

test('homepage visual check', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'homepage.png' });
  await expect(page).toHaveTitle(/InsurPremium/);
});

test('quote flow visual check', async ({ page }) => {
  await page.goto('/quote');
  await page.screenshot({ path: 'quoteflow.png' });
  await page.fill('input[name="age"]', '65');
  await page.click('button:has-text("Continue")');
  await page.screenshot({ path: 'quoteflow-step2.png' });
});

test('plans page visual check', async ({ page }) => {
  await page.goto('/plans');
  await page.screenshot({ path: 'plans.png' });
  await expect(page.locator('h1')).toContainText('Recommended Plans');
});
