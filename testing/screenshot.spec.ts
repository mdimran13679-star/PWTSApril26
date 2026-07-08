import {test, expect} from '@playwright/test'

test("Screenshot of a Page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: "screenshot/page.jpeg"})
})

test("Screenshot of an Element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").screenshot({path:"screenshot/firstName.jpeg"})
})

test("Screenshot of Full Page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"screenshot/fullPage.jpeg", fullPage:true})
})

// Class & Object
// POM Framework (framework is to separate test data, locators and test case in a different different format. That is what known as a framework where you can maintain it in a better way)

// Major error, you will get only 2 things. One is timeout and second you will get it as strict mode violation that you have just seen few minutes ago, right? 
// When your locator is matching with more than one element, you will get this. 
// So these are the 2 things common or generally you will be getting. Apart from that, there will not be any exception or error inside the playwright.