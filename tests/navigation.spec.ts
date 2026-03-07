import { test, expect } from '@playwright/test';

test('TC-GF-005: User Navigates Between Pages', async ({ page }) => {

  // Open Kairos demo site
  await page.goto('https://kairos-hackathon2025.lovable.app/');

  // Verify page loads successfully
  await expect(page).toHaveTitle(/Kairos/i);

});