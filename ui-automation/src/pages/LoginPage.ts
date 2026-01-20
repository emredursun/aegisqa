import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Login Page Object
 * 
 * Represents the ParaBank login page with all interactions.
 */
export class LoginPage extends BasePage {
  // Locators
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly registerLink: Locator;
  private readonly errorMessage: Locator;
  private readonly forgotLoginLink: Locator;

  constructor(page: Page) {
    super(page);
    
    // Initialize locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
    this.registerLink = page.locator('a[href*="register"]');
    this.errorMessage = page.locator('.error');
    this.forgotLoginLink = page.locator('a[href*="lookup"]');
  }

  /**
   * Navigate to login page
   */
  async goto(): Promise<void> {
    await this.page.goto('/index.htm');
    await this.waitForPageLoad();
  }

  /**
   * Wait for login page to load
   */
  async waitForPageLoad(): Promise<void> {
    await this.waitForVisible(this.usernameInput);
    await this.waitForVisible(this.loginButton);
  }

  /**
   * Enter username
   */
  async enterUsername(username: string): Promise<void> {
    await this.safeFill(this.usernameInput, username);
  }

  /**
   * Enter password
   */
  async enterPassword(password: string): Promise<void> {
    await this.safeFill(this.passwordInput, password);
  }

  /**
   * Click login button
   */
  async clickLogin(): Promise<void> {
    await this.safeClick(this.loginButton);
  }

  /**
   * Perform complete login
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    await this.waitForNetworkIdle();
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string> {
    if (await this.isVisible(this.errorMessage)) {
      return this.getText(this.errorMessage);
    }
    return '';
  }

  /**
   * Check if login page is displayed
   */
  async isDisplayed(): Promise<boolean> {
    return this.isVisible(this.loginButton);
  }

  /**
   * Click register link
   */
  async clickRegister(): Promise<void> {
    await this.safeClick(this.registerLink);
  }

  /**
   * Click forgot login info link
   */
  async clickForgotLogin(): Promise<void> {
    await this.safeClick(this.forgotLoginLink);
  }
}
