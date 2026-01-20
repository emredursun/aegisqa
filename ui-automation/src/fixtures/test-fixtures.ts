import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

/**
 * AegisQA Test Fixtures
 * 
 * Extends Playwright's base test with page object fixtures.
 * This enables dependency injection of page objects into tests.
 */

// Define fixture types
type AegisQAFixtures = {
  loginPage: LoginPage;
  accountsPage: AccountsOverviewPage;
  transferPage: TransferFundsPage;
};

/**
 * Extended test with page object fixtures
 */
export const test = base.extend<AegisQAFixtures>({
  // Login Page fixture
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Accounts Overview Page fixture
  accountsPage: async ({ page }, use) => {
    const accountsPage = new AccountsOverviewPage(page);
    await use(accountsPage);
  },

  // Transfer Funds Page fixture
  transferPage: async ({ page }, use) => {
    const transferPage = new TransferFundsPage(page);
    await use(transferPage);
  },
});

/**
 * Re-export expect for convenience
 */
export { expect } from '@playwright/test';

/**
 * Test user credentials
 */
export const TEST_USER = {
  username: 'john',
  password: 'demo',
};
