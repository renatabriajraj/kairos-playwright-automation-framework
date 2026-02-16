import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('TC-GF-003: User Performs Primary Action After Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.login('validUser', 'validPassword');

  await dashboardPage.performPrimaryAction();
  await dashboardPage.expectSuccessfulAction();
});
