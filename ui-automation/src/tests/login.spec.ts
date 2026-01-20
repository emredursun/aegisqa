import { test, expect, TEST_USER } from '../fixtures/test-fixtures';
import { allure } from 'allure-playwright';

/**
 * Login Tests
 * 
 * Test suite for ParaBank authentication functionality.
 */

test.describe('Login Functionality', () => {
  
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should display login page', async ({ loginPage }) => {
    await allure.feature('Authentication');
    await allure.story('Login Page Display');
    
    const isDisplayed = await loginPage.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('should login with valid credentials', async ({ loginPage, accountsPage }) => {
    await allure.feature('Authentication');
    await allure.story('Successful Login');
    await allure.severity('critical');

    // Perform login
    await loginPage.login(TEST_USER.username, TEST_USER.password);

    // Verify successful login
    const isLoggedIn = await accountsPage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await allure.feature('Authentication');
    await allure.story('Invalid Login');
    await allure.severity('normal');

    // Attempt login with invalid credentials
    await loginPage.login('invaliduser', 'wrongpassword');

    // Verify error message
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Error');
  });

  test('should show error for empty credentials', async ({ loginPage }) => {
    await allure.feature('Authentication');
    await allure.story('Empty Credentials');

    // Attempt login with empty fields
    await loginPage.clickLogin();

    // Should remain on login page
    const isDisplayed = await loginPage.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('should navigate to registration page', async ({ loginPage, page }) => {
    await allure.feature('Authentication');
    await allure.story('Navigate to Register');

    // Click register link
    await loginPage.clickRegister();

    // Verify navigation
    expect(page.url()).toContain('register');
  });

  test('should logout successfully', async ({ loginPage, accountsPage }) => {
    await allure.feature('Authentication');
    await allure.story('Logout');
    await allure.severity('critical');

    // Login first
    await loginPage.login(TEST_USER.username, TEST_USER.password);
    expect(await accountsPage.isLoggedIn()).toBe(true);

    // Logout
    await accountsPage.logout();

    // Verify logged out
    const isLoginDisplayed = await loginPage.isDisplayed();
    expect(isLoginDisplayed).toBe(true);
  });
});
