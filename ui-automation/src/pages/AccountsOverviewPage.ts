import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Accounts Overview Page Object
 * 
 * Represents the ParaBank accounts overview/dashboard page.
 * Optimized for cross-browser compatibility.
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
   * Wait for page to load - with retry for stability
   */
  async waitForPageLoad(): Promise<void> {
    // Wait for accounts table or redirect to handle both logged in and logged out states
    try {
      await this.accountsTable.waitFor({ state: 'visible', timeout: 30000 });
    } catch {
      // May have been redirected to login page
      await this.page.waitForLoadState('networkidle');
    }
  }

  /**
   * Check if user is logged in
   */
  async isLoggedIn(): Promise<boolean> {
    try {
      await this.page.waitForLoadState('networkidle');
      return await this.logoutLink.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Get total balance from accounts table
   * Uses the correct selector for the total row
   */
  async getTotalBalance(): Promise<string> {
    try {
      await this.accountsTable.waitFor({ state: 'visible', timeout: 10000 });
      // Get the total row - second column of tfoot
      const totalCell = this.page.locator('#accountTable tfoot tr td').nth(1);
      await totalCell.waitFor({ state: 'visible', timeout: 5000 });
      const text = await totalCell.textContent();
      return text?.trim() || '';
    } catch {
      return '';
    }
  }

  /**
   * Get all account IDs
   */
  async getAccountIds(): Promise<string[]> {
    try {
      await this.accountsTable.waitFor({ state: 'visible', timeout: 10000 });
      const accountLinks = this.page.locator('#accountTable tbody a');
      const count = await accountLinks.count();
      const ids: string[] = [];
      
      for (let i = 0; i < count; i++) {
        const text = await accountLinks.nth(i).textContent();
        if (text) ids.push(text.trim());
      }
      
      return ids;
    } catch {
      return [];
    }
  }

  /**
   * Click on specific account by ID
   */
  async clickAccount(accountId: string): Promise<void> {
    await this.page.locator(`#accountTable a:has-text("${accountId}")`).click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to Open Account
   */
  async goToOpenAccount(): Promise<void> {
    await this.openAccountLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.openAccountLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to Transfer Funds
   */
  async goToTransferFunds(): Promise<void> {
    await this.transferFundsLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.transferFundsLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await this.logoutLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.logoutLink.click();
    await this.page.waitForLoadState('networkidle');
  }
}
