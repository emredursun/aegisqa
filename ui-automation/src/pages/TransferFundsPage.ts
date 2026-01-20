import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Transfer Funds Page Object
 * 
 * Represents the ParaBank fund transfer page.
 */
export class TransferFundsPage extends BasePage {
  // Locators
  private readonly amountInput: Locator;
  private readonly fromAccountSelect: Locator;
  private readonly toAccountSelect: Locator;
  private readonly transferButton: Locator;
  private readonly successMessage: Locator;
  private readonly errorMessage: Locator;
  private readonly transferComplete: Locator;

  constructor(page: Page) {
    super(page);
    
    this.amountInput = page.locator('#amount');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.toAccountSelect = page.locator('#toAccountId');
    this.transferButton = page.locator('input[value="Transfer"]');
    this.successMessage = page.locator('#showResult h1');
    this.errorMessage = page.locator('.error');
    this.transferComplete = page.locator('#showResult');
  }

  /**
   * Navigate to transfer funds page
   */
  async goto(): Promise<void> {
    await this.page.goto('/transfer.htm');
    await this.waitForPageLoad();
  }

  /**
   * Wait for page to load
   */
  async waitForPageLoad(): Promise<void> {
    await this.waitForVisible(this.amountInput);
  }

  /**
   * Enter transfer amount
   */
  async enterAmount(amount: string | number): Promise<void> {
    await this.safeFill(this.amountInput, amount.toString());
  }

  /**
   * Select from account
   */
  async selectFromAccount(accountId: string): Promise<void> {
    await this.fromAccountSelect.selectOption(accountId);
  }

  /**
   * Select to account
   */
  async selectToAccount(accountId: string): Promise<void> {
    await this.toAccountSelect.selectOption(accountId);
  }

  /**
   * Click transfer button
   */
  async clickTransfer(): Promise<void> {
    await this.safeClick(this.transferButton);
    await this.waitForNetworkIdle();
  }

  /**
   * Perform complete transfer
   */
  async transfer(amount: number, fromAccountId: string, toAccountId: string): Promise<void> {
    await this.enterAmount(amount);
    await this.selectFromAccount(fromAccountId);
    await this.selectToAccount(toAccountId);
    await this.clickTransfer();
  }

  /**
   * Check if transfer was successful
   */
  async isTransferSuccessful(): Promise<boolean> {
    return this.isVisible(this.transferComplete);
  }

  /**
   * Get success message
   */
  async getSuccessMessage(): Promise<string> {
    return this.getText(this.successMessage);
  }

  /**
   * Get available from accounts
   */
  async getFromAccountOptions(): Promise<string[]> {
    const options = this.fromAccountSelect.locator('option');
    const count = await options.count();
    const values: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const value = await options.nth(i).getAttribute('value');
      if (value) values.push(value);
    }
    
    return values;
  }

  /**
   * Get available to accounts
   */
  async getToAccountOptions(): Promise<string[]> {
    const options = this.toAccountSelect.locator('option');
    const count = await options.count();
    const values: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const value = await options.nth(i).getAttribute('value');
      if (value) values.push(value);
    }
    
    return values;
  }
}
