import { Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToDashboard() {
    await this.page.goto('/dashboard');
  }

  async performPrimaryAction() {
    await this.page.click('#primary-action');
  }

  async performActionA() {
    await this.page.click('#action-a');
  }

  async performActionB() {
    await this.page.click('#action-b');
  }

  async performActionC() {
    await this.page.click('#action-c');
  }

  async navigateViaMenu(selector: string) {
    await this.page.click(selector);
  }

  async expectSuccessfulAction() {
    await expect(this.page.locator('.success-message')).toBeVisible();
  }
}
