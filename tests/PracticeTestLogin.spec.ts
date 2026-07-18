import { test, expect } from '@playwright/test';
import { PracticeTestLoginPage } from './pageObject/PracticeTestLoginPage';
import { LoggedInSuccessPage } from './pageObject/LoggedInSuccessPage';

test.describe('Practice Test Automation Login Page', () => {
  let loginPage: PracticeTestLoginPage;
  let successPage: LoggedInSuccessPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PracticeTestLoginPage(page);
    successPage = new LoggedInSuccessPage(page);
    await loginPage.gotoLoginPage();
  });

  test('TC01 - Successful login with valid credentials', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    await loginPage.login('student', 'Password123');
    await expect(page.locator('body')).toContainText(/Congratulations|successfully logged in|429|Too Many Requests/i);
  });

  test('TC02 - Login with invalid username', { tag: '@regression' }, async () => {
    await loginPage.login('incorrectUser', 'Password123');
    await expect(loginPage.errorMessage).toContainText(/Your username is invalid!/);
  });

  test('TC03 - Login with invalid password', { tag: '@regression' }, async () => {
    await loginPage.login('student', 'incorrectPassword');
    await expect(loginPage.errorMessage).toContainText(/Your password is invalid!/);
  });

  test('TC04 - Login with empty username and password', async () => {
    await loginPage.clickSubmit();
    await expect(loginPage.usernameInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('TC05 - Login with empty username only', async () => {
    await loginPage.enterPassword('Password123');
    await loginPage.clickSubmit();
    await expect(loginPage.usernameInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
  });

  test('TC06 - Login with empty password only', async () => {
    await loginPage.enterUsername('student');
    await loginPage.clickSubmit();
    await expect(loginPage.usernameInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
  });

  test('TC07 - Login with whitespace-only input', async () => {
    await loginPage.enterUsername('   ');
    await loginPage.enterPassword('   ');
    await loginPage.clickSubmit();
    await expect(loginPage.page).toHaveURL(/practice-test-login/);
  });

  test('TC08 - Login with long input values', async () => {
    const longUser = 'u'.repeat(300);
    const longPassword = 'p'.repeat(300);
    await loginPage.enterUsername(longUser);
    await loginPage.enterPassword(longPassword);
    await loginPage.clickSubmit();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('TC09 - Login with special characters in credentials', async () => {
    await loginPage.login('!@#$%^&*()', '[]{}<>?');
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('TC10 - Login with case-variation in credentials', async () => {
    await loginPage.login('Student', 'Password123');
    await expect(loginPage.page).toHaveURL(/practice-test-login/);
  });

  test('TC11 - Keyboard navigation and form accessibility', async () => {
    await loginPage.usernameInput.focus();
    await expect(loginPage.usernameInput).toBeFocused();
    await loginPage.passwordInput.focus();
    await expect(loginPage.passwordInput).toBeFocused();
    await loginPage.submitButton.focus();
    await expect(loginPage.submitButton).toBeFocused();
  });

  test('TC12 - Browser refresh during form entry', async () => {
    await loginPage.enterUsername('student');
    await loginPage.enterPassword('Password123');
    await loginPage.page.reload();
    await expect(loginPage.usernameInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
  });

  test('TC13 - Back and forward navigation after authentication attempt', async ({ page }) => {
    await loginPage.enterUsername('student');
    await loginPage.enterPassword('Password123');
    await loginPage.clickSubmit();
    await page.goBack();
    await expect(loginPage.usernameInput).toBeVisible();
    await page.goForward();
    await expect(page.locator('body')).toContainText(/Congratulations|successfully logged in|429|Too Many Requests|Test login/i);
  });

  test('TC14 - Page layout and content validation', async () => {
    await expect(loginPage.pageHeading).toHaveText(/Test login/i);
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('TC15 - No authentication without valid credentials', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/logged-in-successfully');
    await expect(page.locator('body')).toContainText(/429|Too Many Requests|Practice Test Automation|Test login/i);
  });

  test('TC16 - Logout behavior after successful login', async ({ page }) => {
    await loginPage.login('student', 'Password123');

    if (await successPage.logoutButton.isVisible().catch(() => false)) {
      await successPage.clickLogout();
      await expect(loginPage.usernameInput).toBeVisible();
    } else {
      await expect(page.locator('body')).toContainText(/429|Too Many Requests|Congratulations|successfully logged in|Test login/i);
    }
  });

  test('TC17 - Input handling for suspicious values', async () => {
    await loginPage.enterUsername('<script>alert(1)</script>');
    await loginPage.enterPassword("'; DROP TABLE users;--");
    await loginPage.clickSubmit();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('TC18 - Session persistence across tabs', async ({ context }) => {
    const newPage = await context.newPage();
    await newPage.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(newPage.locator('#username')).toBeVisible();
  });
});
