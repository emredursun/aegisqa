import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Accounts Overview Page Object
 * 
 * Represents the ParaBank accounts overview/dashboard page.
 * Simplified selectors for reliable test execution.
 */
export class AccountsOverviewPage extends BasePage {
  // Locators
  private readonly accountsTable: Locator;
  private readonly logoutLink: Locator;
  private readonly openAccountLink: Locator;
  private readonly transferFundsLink: Locator;

  constructor(page: Page) {
    super(page);
    
    this.accountsTable = page.locator('#accountTable');
    this.logoutLink = page.locator('a:has-text("Log Out")');
    this.openAccountLink = page.locator('a:has-text("Open New Account")');
    this.transferFundsLink = page.locator('a:has-text("Transfer Funds")');
  }

  /**
   * Navigate to accounts overview
   */
  async goto(): Promise<void> {
    await this.page.goto('/overview.htm', { waitUntil: 'networkidle' });
    await this.waitForPageLoad();
  }

  /**
   * Wait for page to load
   */
  async waitForPageLoad(): Promise<void> {
    await this.accountsTable.waitFor({ state: 'visible', timeout: 30000 });
  }

  /**
   * Check if user is logged in
   */
  async isLoggedIn(): Promise<boolean> {
    try {
      return await this.logoutLink.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Get total balance
   */
  async getTotalBalance(): Promise<string> {
    const balance = this.page.locator('#accountTable tfoot td:last-child');
    return await balance.textContent() || '';
  }

  /**
   * Get all account IDs
   */
  async getAccountIds(): Promise<string[]> {
    const accountLinks = this.page.locator('#accountTable tbody a');
    const count = await accountLinks.count();
    const ids: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const text = await accountLinks.nth(i).textContent();
      if (text) ids.push(text.trim());
    }
    
    return ids;
  }

  /**
   * Click on specific account by ID
   */
  async clickAccount(accountId: string): Promise<void> {
    await this.page.locator(`a:has-text("${accountId}")`).click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to Open Account
   */
  async goToOpenAccount(): Promise<void> {
    await this.openAccountLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to Transfer Funds
   */
  async goToTransferFunds(): Promise<void> {
    await this.transferFundsLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await this.logoutLink.click();
    await this.page.waitForLoadState('networkidle');
  }
}
