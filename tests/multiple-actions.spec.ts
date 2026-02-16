import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('TC-GF-004: User Performs Multiple Actions in One Session', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.login('validUser', 'validPassword');

  await dashboardPage.performActionA();
  await dashboardPage.performActionB();
  await dashboardPage.performActionC();

  await dashboardPage.expectSuccessfulAction();
});
