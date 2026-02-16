import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('TC-GF-001: User Login with Valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('validUser', 'validPassword');

  await expect(page).toHaveURL(/dashboard/);
});
