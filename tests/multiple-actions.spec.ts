import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

// Skipped because the demo environment does not implement
// authentication or backend workflow functionality.

test.skip('TC-GF-004: User Performs Multiple Actions in One Session', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.login('validUser', 'validPassword');

  await dashboardPage.navigateViaMenu('#menu-option-a');
  await dashboardPage.navigateViaMenu('#menu-option-b');
  await dashboardPage.navigateViaMenu('#menu-option-c');
});
