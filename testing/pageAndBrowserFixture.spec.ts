import {test, expect} from '@playwright/test'

// Title of the case should be unique in the same file

// page - Using in UI Automation
// browser 
// context
// request - Using in API Testing

test("Title", async function({page}){

})

test("Title1", async ({browser})=>{

    const context = await browser.newContext() // Creates a context of a browser // newContext() - method // It will open the browser
    const page = await context.newPage() // newPage() - method // It will create a new page on the browser
    // const context1 = await browser.newContext()
    // const page1 = await context1.newPage()

    // await page.waitForTimeout(5000)
    // await page1.waitForTimeout(5000)


     // Creates a context of a browser


    // const page1 = await context.newPage() // this will create a second page on the context i.e., on the same browser

})  


// 1. page fixture will identify ONLY a single page on the browser whereas browser
// fixture will understand the complete browser - it may have more than one page as well.

// 2. browser fixture will not automatically launch the browser whereas the page fixture
// will automatically launches the browser and create a new page on the browser

