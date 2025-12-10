import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { Page } from '@playwright/test';
import { test } from '../fixture/fixtures';
import { LoginPage } from '../page/loginPage';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ logInPage, page }, url) => {
  await logInPage.navigateToURL(url);
});

Given(
  'I enter E-Mail Address {string}',
  async ({ logInPage }, emailAddress) => {
    await logInPage.enterEmail(emailAddress);
  }
);

Given('I enter password {string}', async ({ logInPage }, password) => {
  await logInPage.enterPassword(password);
});
