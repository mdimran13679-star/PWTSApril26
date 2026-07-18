import { Locator, Page } from '@playwright/test';

export class LoggedInSuccessPage {
  readonly page: Page;
  readonly successMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.getByText(/Congratulations|successfully logged in/i);
    this.logoutButton = page.getByRole('button', { name: /log out/i });
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}
