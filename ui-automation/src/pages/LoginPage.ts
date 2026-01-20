import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Login Page Object
 * 
 * Represents the ParaBank login page with all interactions.
 * Simplified selectors for reliable test execution.
 */
export class LoginPage extends BasePage {
  // Locators - simplified for reliability
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly registerLink: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    
    // Simple, reliable selectors
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
    this.registerLink = page.locator('a:has-text("Register")');
    this.errorMessage = page.locator('.error, p.error');
  }

  /**
   * Navigate to login page
   */
  async goto(): Promise<void> {
    // Use absolute URL to avoid baseURL resolution issues with local Docker
    const baseURL = process.env.PARABANK_URL || 'http://localhost:8080/parabank';
    await this.page.goto(`${baseURL}/index.htm`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await this.waitForPageLoad();
  }

  /**
   * Wait for login page to load
   */
  async waitForPageLoad(): Promise<void> {
    await this.usernameInput.waitFor({ state: 'visible', timeout: 30000 });
  }

  /**
   * Enter username
   */
  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  /**
   * Enter password
   */
  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Click login button
   */
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  /**
   * Perform complete login
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string> {
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.errorMessage.textContent() || '';
    } catch {
      return '';
    }
  }

  /**
   * Check if login page is displayed
   */
  async isDisplayed(): Promise<boolean> {
    try {
      return await this.loginButton.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Click register link
   */
  async clickRegister(): Promise<void> {
    await this.registerLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
