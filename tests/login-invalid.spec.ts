import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('TC-GF-002: User Login with Invalid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('invalidUser', 'wrongPassword');

  await loginPage.expectLoginError();
});
