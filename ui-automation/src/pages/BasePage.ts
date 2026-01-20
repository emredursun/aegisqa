import { Page, Locator } from '@playwright/test';

/**
 * Base Page Object
 * 
 * Abstract base class for all page objects following the Page Object Model pattern.
 * Provides common functionality and utilities for all pages.
 */
export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the page URL
   */
  abstract goto(): Promise<void>;

  /**
   * Wait for the page to be fully loaded
   */
  abstract waitForPageLoad(): Promise<void>;

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Get current URL
   */
  getCurrentUrl(): string {
    return this.page.url();
  }

  /**
   * Take screenshot
   */
  async takeScreenshot(name: string): Promise<Buffer> {
    return this.page.screenshot({ 
      path: `screenshots/${name}.png`,
      fullPage: true 
    });
  }

  /**
   * Wait for element to be visible
   */
  protected async waitForVisible(locator: Locator, timeout = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Wait for element to be hidden
   */
  protected async waitForHidden(locator: Locator, timeout = 10000): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  /**
   * Safe click with retry
   */
  protected async safeClick(locator: Locator, options?: { timeout?: number }): Promise<void> {
    await locator.click({ timeout: options?.timeout ?? 5000 });
  }

  /**
   * Safe fill with clear first
   */
  protected async safeFill(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
  }

  /**
   * Get text content safely
   */
  protected async getText(locator: Locator): Promise<string> {
    const text = await locator.textContent();
    return text?.trim() ?? '';
  }

  /**
   * Check if element is visible
   */
  protected async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  /**
   * Wait for network idle
   */
  protected async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
