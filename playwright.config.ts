import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    baseURL: 'https://example.com',
    screenshot: 'only-on-failure',
  },
});
