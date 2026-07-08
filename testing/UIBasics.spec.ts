// testfile.spec.ts
// testfile.test.ts

// 1. How do we enter an input inside the textbox
// 2. Validate if the input field have a value "input"
// 3. Click on the element

import {test, expect} from '@playwright/test'

test("Login into application using valid credentials", async function({page}){

    // Goto the url
    // fill the username
    // fill the password
    // click on submit button
    // expect if the dashboard page is visible

    // goto(url:string) - It help us in launching the url on the given browser.
    // url should consists of http/https.

    // fill("string") - Set the value inside the input field
    // click() - click on an element
    // expect()

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // await page.getByRole('textbox', {name:'Username'})
    await page.getByLabel("Username").fill("student")

    // toHaveValue("value") - Checks if an INPUT field is having the value as "value"

    await expect(page.getByLabel("Username")).toHaveValue("student")

    // pressSequentially("string") - Set the value inside the input field but character by character
    // await page.waitForTimeout(3000) // which is a Hardwait over here i.e., 3 seconds
    await page.locator("#password").pressSequentially("Password123")
    // await page.locator("#password").pressSequentially("Password123", {delay:500}) // delay of 500 ms (milli seconds) i.e., press first character then wait for 500ms again press second character then wait for 500 ms and so on

    await page.getByRole('button', {name: 'Submit'}).click()

    // 1. There should be an element which should have a text value as "Logged In Successfully"
    // 2. Logout should be visible on the page

    // toHaveText("string") - Which validate if an element have "string" as text value
    // toContainText("string") - Validate contains text or not
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

    // toBeVisible() - Check if the element is visible on the page or not
    await expect(page.getByText("Log out", {exact:true})).toBeVisible()

})

// select radio/checkbox
test("Handling radio button and checbox", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // click() - Click on an element
    // check() - It validates if the element is already checked/selected, if it
    // is not selected then it click on the element. Only work for checkbox or radio button

    // uncheck() - It validates if the element is not already checked/selected, if it
    // is selected then it click on the element.

    // await page.getByRole('radio', {name:'Female'}).click() // we use here either click or check
    await page.getByRole('radio', {name:'Female'}).check()
    // toBeChecked() - Which validates if the element is checked or not
    await expect(page.getByRole('radio', {name:'Female'})).toBeChecked()
    
    // await page.getByRole('checkbox', {name:'Thursday'}).click()
    await page.getByRole('checkbox', {name:'Thursday'}).check()

    await expect(page.getByRole('checkbox', {name:'Thursday'})).toBeChecked()

    // await page.getByRole('checkbox', {name:'Thursday'}).click() // validates uncheck the element
    await page.getByRole('checkbox', {name:'Thursday'}).uncheck()

    await expect(page.getByRole('checkbox', {name:'Thursday'})).not.toBeChecked() // negative assertion will add as .not
 
    const checkbox =  page.getByRole('checkbox')
    //count() - Which will return the total number of matching element
    const count = await checkbox.count()

    for(let i=0; i<count; i++){
        checkbox.nth(i).click()
        await page.waitForTimeout(1000) // Hardwait here and 1000 milli seconds = 1 second (1000ms = 1sec)
    }

})


// get the text value of an element/multiple elements

test("Get the text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - return the text value from the matching element even if the element is not visible on the page
    // innerText() - return the text value from visible element on the page

    // const text = await page.locator("h1.title").textContent() // textContent() or innerText() - use anyone here
    const text = await page.locator("h1.title").innerText()
    console.log(text);

    // Get the text value from multiple elements

    // allTextContents() - return us the text value from all the matching elements in an array
    // allInnerTexts()

    const allTexts = await page.locator("h2.title").allTextContents() // allTextContents() or allInnerTexts() - use anyone here
    // const allTexts = await page.locator("h2.title").allInnerTexts()
    console.log(allTexts)

})



// Drop-down element