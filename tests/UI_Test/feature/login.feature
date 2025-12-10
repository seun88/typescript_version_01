@login
Feature: Verify login


   Feature Description

   Background - Log into Eco Application

   Verify user is able to login with valid and invalid credentials

   Scenario: Verify user is able to login with valid credentials
      Given I navigate to "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
      And I enter E-Mail Address "seanpaul@maillinator.com"
      And I enter password "Test1234"
