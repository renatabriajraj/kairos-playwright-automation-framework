import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Skipped because the Kairos demo environment is UI-only.
// Authentication and dashboard routing are not implemented.

test.skip('TC-GF-001: User Login with Valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('validUser', 'validPassword');

  await expect(page).toHaveURL(/dashboard/);
});
