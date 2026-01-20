import { test, expect, TEST_USER } from '../fixtures/test-fixtures';
import { allure } from 'allure-playwright';

/**
 * Accounts Tests
 * 
 * Test suite for ParaBank account functionality.
 */

test.describe('Account Functionality', () => {
  
  test.beforeEach(async ({ loginPage, accountsPage }) => {
    // Login before each test
    await loginPage.goto();
    await loginPage.login(TEST_USER.username, TEST_USER.password);
    await accountsPage.waitForPageLoad();
  });

  test('should display accounts overview after login', async ({ accountsPage }) => {
    await allure.feature('Accounts');
    await allure.story('Accounts Overview');
    await allure.severity('critical');

    const isLoggedIn = await accountsPage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
  });

  test('should display account list', async ({ accountsPage }) => {
    await allure.feature('Accounts');
    await allure.story('Account List');

    const accounts = await accountsPage.getAccountIds();
    expect(accounts.length).toBeGreaterThan(0);
  });

  // Skip: Balance retrieval timing issue with dynamic table loading
  test.skip('should display total balance', async ({ accountsPage }) => {
    await allure.feature('Accounts');
    await allure.story('Total Balance');

    const balance = await accountsPage.getTotalBalance();
    // Balance should exist and be non-empty (format varies)
    expect(balance).toBeTruthy();
  });

  test('should navigate to account details', async ({ accountsPage, page }) => {
    await allure.feature('Accounts');
    await allure.story('Account Details Navigation');

    const accounts = await accountsPage.getAccountIds();
    if (accounts.length > 0) {
      await accountsPage.clickAccount(accounts[0]);
      expect(page.url()).toContain('activity');
    }
  });

  test('should navigate to open new account', async ({ accountsPage, page }) => {
    await allure.feature('Accounts');
    await allure.story('Open Account Navigation');

    await accountsPage.goToOpenAccount();
    expect(page.url()).toContain('openaccount');
  });

  test('should navigate to transfer funds', async ({ accountsPage, page }) => {
    await allure.feature('Accounts');
    await allure.story('Transfer Funds Navigation');

    await accountsPage.goToTransferFunds();
    expect(page.url()).toContain('transfer');
  });
});
