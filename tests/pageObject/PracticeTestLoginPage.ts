import { Locator, Page } from '@playwright/test';

export class PracticeTestLoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly pageHeading: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
    this.pageHeading = page.locator('h2');
    this.logoutButton = page.getByRole('button', { name: /log out/i }).first();
  }

  async gotoLoginPage() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  async clearFields() {
    await this.usernameInput.clear();
    await this.passwordInput.clear();
  }
}
