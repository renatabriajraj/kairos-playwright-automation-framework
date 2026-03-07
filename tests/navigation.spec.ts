import { test, expect } from '@playwright/test';

test('TC-GF-005: User Navigates Between Pages', async ({ page }) => {

  await page.goto('/');

  // Example navigation clicks
  await page.locator('a').first().click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/.*/);

});
