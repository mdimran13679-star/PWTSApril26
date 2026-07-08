import {test, expect} from '@playwright/test'

test("Shadow dom elements", async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")
    await page.locator("#pizza").fill("Shadow dom")
    await expect(page.locator("#pizza")).toHaveValue("Shadow dom")
    await page.waitForTimeout(2000)
})

// https://www.geeksforgeeks.org/software-testing/shadow-dom-in-selenium-webdriver/
// What is the purpose of creating the shadow dom elements?
// In case if they have to change any kind of structure, any kind of styling, any kind of lets say formatting for some element, right, they do not want to change it for the other elements on the web page, then it make it as a shadow DOM element part.
// Certain elements are there which they want to make it as a italic, let us say, or bold or some elements that they want to implement with some different styles, right?
// Some different styles might be colour different, might be a font different and so on. They do not want to impact the other elements that are available on the Main page, right?
// So there it comes as a part of Shadow Dom elements.They'll add extra information to those elements.
// Displays shadow minus root (#shadow-root (open)) in this case, right? So that means all the value that are available inside this are not a part of the main document that you have given over here.