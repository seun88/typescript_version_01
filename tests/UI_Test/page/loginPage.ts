import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly email_box: Locator;
  readonly password_box: Locator;

  constructor(page: Page) {
    super(page);
    this.email_box = page.getByPlaceholder('E-Mail Address');
    this.password_box = page.getByPlaceholder('Password');
  }

  async navigateToURL(url: string) {
    await this.page.goto(url);
  }

  async enterEmail(emailAddress: string) {
    await this.email_box.fill(emailAddress);
  }

  async enterPassword(password: string) {
    await this.password_box.fill(password);
  }
}
