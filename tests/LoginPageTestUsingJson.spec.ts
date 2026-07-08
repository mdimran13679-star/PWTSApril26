import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../testdata/testdata.json'


let lp:LoginPage
test.beforeEach(async ({page})=>{
   lp = new LoginPage(page)
   await lp.launchURL(data.url)
})

test("Test login with correct credentials", {tag:['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(data.email, data.password)
    await expect(lp.homePageIdentifer).toBeVisible()
})

test("Test login with incorrect credentials", {tag:'@regression'}, async ()=>{
    await lp.loginIntoApplication(data.email, data.invalidPassword)
    await expect(lp.errorMessage).toHaveText(data.errorMessage)
})

// Hooks in Playwright

// import data from '../testdata/testdata.json' - This will get stored in the form of object. 'data' becomes your object name.
// JSON over here to use it as a data storage file.
// stored the data, took the data from JSON file.
// you can also store your data inside a JSON file and then convert your Excel into a JSON file.
// Anything available inside the curly braces is known as object.
// What is data-driven testing? - Testing the same functionality with different set of data.