import {test, expect} from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'
import { log } from 'console'

// launch the url - object for lp

// Launch the url, loginIntoApplication - object of lp, dp

const url = "https://rahulshettyacademy.com/client"
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "ADIDAS ORIGINAL"

let lp:LoginPage
let dp:DashboardPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifer).toBeVisible()
})

test("Search and add the product to the cart", {tag:'@smoke'},async ()=>{
    await dp.searchProduct(productName, 1)
    await expect(dp.addToCartMessage).toHaveText("Product Added To Cart")
})

test("Search and view product details", {tag: ['@smoke', '@regression']}, async ()=>{
    await dp.searchProduct(productName, 0)
    await expect(dp.viewPageProductName).toHaveText(productName)
    // await console.log(dp.homePageProductPrice);
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
})

// npx playwright test --last-failed


// 1. Object - {name: "Rahul"}
// 2. JSON - DD using Json
// 3. Excel - DD
// 4. .env - qa.env, prod.env
// 5. Allure
// 6. Jenkins
// 7. MCP - AI


// 8. Playwright Agent 
// 9. API test case




// dotenv

// Naukri
// Instahyre
// WellFound
// TopHire
// LinkedIn

/*

// So, as soon as you type dashboard page, you have given export over here, so it is displaying inside the other pages as well. 
// As soon as you type and hit enter, it will automatically import those classes over here.

// we talked about there is a test function which takes three different parameters. Two is mandatory, one is optional.
// Two is mandatory, one is title and then body. And every time we have keep writing the similar things over here, title, body. 
// And that third part comes over here is details, Inside this detail, you can write any other extra information that you want to provide for your Test case.
// So, smoke suite and regression suite that I was talking about becomes your grouping of the test case. 
// That means you can group your test case to become a smoke suit and regression suit.
// So that becomes your second parameter, title, one, detail, which is an optional, two, and then body over here, which is a function that you have written.
// That is known as how do you tag a test case with different types of annotations like smoke suit, regression suit, or make it as a part of group known as tagging a test case inside playwright.
// Anything optional in nature will go inside the curly braces over here.

// npx playwright test will run all the entire test case that are available inside your project.
// Minus G is a Unix command stands for minus minus grep, G-R-E-P, which will filter out the test case depending on whatever the criteria that you provide.
// npx playwright test -g '@smoke' command will run test case have marked it as smoke, only those test case it will get executed over here.
// And inside the report, you will see whatever the test case that it is trying to run should have a smoke as a tag name available.
// npx playwright test -g '@regression' command will run test case have marked it as regression, only those test case it will get executed over here.
// And inside the report, you will see whatever the test case that it is trying to run should have a regression as a tag name available.
// Whenever you try to group the test case inside the playwright, you can also group it over here by just using a tag inside this.
// npx playwright test -g "(?=.*@smoke)(?=.*@regression)" command will run test cases have marked it as both smoke and regression, only those test cases it will get executed over here. 
// And inside the report, you will see whatever the test cases that it is trying to run should have a both smoke and regression as a tag name available.

// there is one file available known as package.json, And inside that file, there is something known as scripts
//Script member is an object hash of script command that help us in terms of executing any of the script that you want to run it over here.
// This is in the form of JSON where we have a key. Inside the curly braces, you have to provide a key and value pair.
// both key and value should be separated by a semicolon, and all the both of the values should be in the form of double quotes.
// Your key also has to be in the form of double quotation, and value also has to be in the form of double quotation over here.
// Earlier you remember when we installed Node.js, along with that we also got 'npm' as well. And we also got 'npm' along with the Node.js.
// And at that point of time, I said that 'npm' help us in terms of installing, maintaining the dependencies. Also help us in terms of executing the test case as well.
// Instead of writing every time npx playwright test and provide all these long value, you just have to write 3 words every time, which is npm run and then provide the command which is the key that you have given over here.
// npm run fullTest, npm run smokeTest, npm run regressionTest, npm run lpTest command will run the test cases, whatever Json that we have seen also known as object in JavaScript and TypeScript
// npx playwright test --last-failed --> This is this particular command is to execute your last failed test cases. Whatever the test case have been failed in the last execution, all those test cases will run it over here.

// In playwright.config.ts file, workers: process.env.CI ? 1 : undefined, 1 : 1 - sequential testing, 1 : 2 or 1 : undefined - Parallel testing

*/