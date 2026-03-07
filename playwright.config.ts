import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    baseURL: 'https://kairos-hackathon2025.lovable.app/',
    screenshot: 'only-on-failure',
  },
});
