// Generated from: tests\UI_Test\feature\login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixtures.ts";

test.describe("Verify login", () => {
  test(
    "Verify user is able to login with valid credentials",
    { tag: ["@login"] },
    async ({ Given, And, logInPage, page }) => {
      await Given(
        'I navigate to "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"',
        null,
        { logInPage, page },
      );
      await And('I enter E-Mail Address "seanpaul@maillinator.com"', null, {
        logInPage,
      });
      await And('I enter password "Test1234"', null, { logInPage });
    },
  );
});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: "test", box: true }],
  $uri: [
    ({}, use) => use("tests\\UI_Test\\feature\\login.feature"),
    { scope: "test", box: true },
  ],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [
  // bdd-data-start
  {
    pwTestLine: 6,
    pickleLine: 11,
    tags: ["@login"],
    steps: [
      {
        pwStepLine: 7,
        gherkinStepLine: 12,
        keywordType: "Context",
        textWithKeyword:
          'Given I navigate to "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"',
        stepMatchArguments: [
          {
            group: {
              start: 14,
              value:
                '"https://ecommerce-playground.lambdatest.io/index.php?route=account/login"',
              children: [
                {
                  start: 15,
                  value:
                    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 8,
        gherkinStepLine: 13,
        keywordType: "Context",
        textWithKeyword:
          'And I enter E-Mail Address "seanpaul@maillinator.com"',
        stepMatchArguments: [
          {
            group: {
              start: 23,
              value: '"seanpaul@maillinator.com"',
              children: [
                {
                  start: 24,
                  value: "seanpaul@maillinator.com",
                  children: [{ children: [] }],
                },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
      {
        pwStepLine: 9,
        gherkinStepLine: 14,
        keywordType: "Context",
        textWithKeyword: 'And I enter password "Test1234"',
        stepMatchArguments: [
          {
            group: {
              start: 17,
              value: '"Test1234"',
              children: [
                { start: 18, value: "Test1234", children: [{ children: [] }] },
                { children: [{ children: [] }] },
              ],
            },
            parameterTypeName: "string",
          },
        ],
      },
    ],
  },
]; // bdd-data-end
