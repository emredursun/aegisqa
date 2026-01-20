import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Accounts Overview Page Object
 * 
 * Represents the ParaBank accounts overview/dashboard page.
 */
export class AccountsOverviewPage extends BasePage {
  // Locators
  private readonly welcomeMessage: Locator;
  private readonly accountsTable: Locator;
  private readonly totalBalance: Locator;
  private readonly logoutLink: Locator;
  
  // Navigation links
  private readonly openAccountLink: Locator;
  private readonly transferFundsLink: Locator;
  private readonly billPayLink: Locator;
  private readonly findTransactionsLink: Locator;
  private readonly requestLoanLink: Locator;

  constructor(page: Page) {
    super(page);
    
    // Initialize locators
    this.welcomeMessage = page.locator('#leftPanel .smallText');
    this.accountsTable = page.locator('#accountTable');
    this.totalBalance = page.locator('#accountTable tfoot td:nth-child(2)');
    this.logoutLink = page.locator('a[href*="logout"]');
    
    // Navigation
    this.openAccountLink = page.locator('a[href*="openaccount"]');
    this.transferFundsLink = page.locator('a[href*="transfer"]');
    this.billPayLink = page.locator('a[href*="billpay"]');
    this.findTransactionsLink = page.locator('a[href*="findtrans"]');
    this.requestLoanLink = page.locator('a[href*="requestloan"]');
  }

  /**
   * Navigate to accounts overview
   */
  async goto(): Promise<void> {
    await this.page.goto('/overview.htm');
    await this.waitForPageLoad();
  }

  /**
   * Wait for page to load
   */
  async waitForPageLoad(): Promise<void> {
    await this.waitForVisible(this.accountsTable);
  }

  /**
   * Check if user is logged in (page is displayed)
   */
  async isLoggedIn(): Promise<boolean> {
    return this.isVisible(this.logoutLink);
  }

  /**
   * Get welcome message
   */
  async getWelcomeMessage(): Promise<string> {
    return this.getText(this.welcomeMessage);
  }

  /**
   * Get total balance
   */
  async getTotalBalance(): Promise<string> {
    return this.getText(this.totalBalance);
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
    await this.waitForNetworkIdle();
  }

  /**
   * Navigate to Open Account
   */
  async goToOpenAccount(): Promise<void> {
    await this.safeClick(this.openAccountLink);
    await this.waitForNetworkIdle();
  }

  /**
   * Navigate to Transfer Funds
   */
  async goToTransferFunds(): Promise<void> {
    await this.safeClick(this.transferFundsLink);
    await this.waitForNetworkIdle();
  }

  /**
   * Navigate to Bill Pay
   */
  async goToBillPay(): Promise<void> {
    await this.safeClick(this.billPayLink);
    await this.waitForNetworkIdle();
  }

  /**
   * Navigate to Request Loan
   */
  async goToRequestLoan(): Promise<void> {
    await this.safeClick(this.requestLoanLink);
    await this.waitForNetworkIdle();
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await this.safeClick(this.logoutLink);
    await this.waitForNetworkIdle();
  }
}
