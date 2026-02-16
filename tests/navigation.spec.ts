import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('TC-GF-005: User Navigates Between Pages', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.login('validUser', 'validPassword');

  await dashboardPage.navigateViaMenu('#menu-option-a');
  await dashboardPage.navigateViaMenu('#menu-option-b');
  await dashboardPage.navigateViaMenu('#menu-option-c');
});
