// import { test, expect } from '@playwright/test'; - TS
import { test, expect, request} from '@playwright/test';

// const {test, expect} = require('@playwright/test') - JS

// fixture - Special object which help us in setting up and tear down the process
// page, browser, context, request

// page - browser fixture

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();


  await page.getByText("Pagination Web Table", {exact: true})
  await page.getByRole('heading', {name:'Practice Form', exact:true})
  await page.getByRole('radio', {name:'Female'})
  await page.getByRole('checkbox', {name:'Tuesday'})
  await page.getByRole('button', {name:'Submit'})
});

// Promise - Pending, success , failure


// Playwright by default runs in headless mode - Browser will not open

// npx playwright test --reporter=list - to run the testcase with to see title also


//import {test, expect} from '@playwright/test'

// test() - Helps us in terms of writing the test cases in Playwright
// expect() - It helps us in terms of writing the assertion in playwright


test("Title", function(){ // anonymous function
    //......

    // Launch the url
    // fill the username
    // fill the password
    // click on login button
    // validate if the login is successful or not

})

test("Title1", ()=>{ // arrow function

    // Launch the url
    // fill the username
    // fill the password
    // click on login button
    // validate if the login is succ..

})

// async - await


// async - asynchronous


// JS & TS are asynchronous in nature


// Locators 

// 1. css selector - 2
// 2. xpath - 3
// 3. Playwright getBy locators - 1


