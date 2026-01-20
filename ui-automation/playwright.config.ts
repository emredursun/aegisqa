import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

/**
 * Playwright Configuration for AegisQA UI Tests
 * 
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Test directory
  testDir: './src/tests',

  // Test file pattern
  testMatch: '**/*.spec.ts',

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: true,
    }],
  ],

  // Global timeout
  timeout: parseInt(process.env.TEST_TIMEOUT || '30000', 10),

  // Shared settings for all projects
  use: {
    // Base URL for ParaBank
    baseURL: process.env.PARABANK_URL || 'http://localhost:8080/parabank',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on failure
    video: 'on-first-retry',

    // Headless mode
    headless: process.env.HEADLESS !== 'false',

    // Slow down execution for debugging
    launchOptions: {
      slowMo: parseInt(process.env.SLOW_MO || '0', 10),
    },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Mobile viewports
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Output folder for test artifacts
  outputDir: 'test-results/',

  // Global setup
  // globalSetup: './src/fixtures/global-setup.ts',
});
