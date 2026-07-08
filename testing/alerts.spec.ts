// Alert - "dialog" event appeared on the page

// 1. Simple alert - Only one button
// 2. Confirm alert - Yes/No, Submit/Cancel
// 3. Prompt alert - Along with Yes/No - Input box as well

// dialog event - alert
// popup event - Child window/tab/page
// download event - File download

import {test, expect} from '@playwright/test'

test("Handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    // Before you click on an element which is responsible for generation of an alert
    // we need to wait for "dialog" event to appear on the page. Because playwright
    // handles the dialog event as soon as it appears on the page.

    // Dialog
    // 1. dialog.accept(argument) - To click on OK/Submit/Yes
    // 2. dialog.dismiss() - To click on Cancel/No
    // 3. dialog.message() - To get the text displayed on the alert

    const prompt = "Prompt" // const prompt = "Testing"
    await page.on("dialog", async (dialog)=>{  // async (dialog) - you can provide any name over here i.e., async (name)
        await console.log(dialog.message())
        await dialog.accept(prompt)
        // await dialog.accept()
        // await dialog.dismiss()
    })

    await page.locator("#alertButton").click()

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")
    // await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel")

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText(`You entered ${prompt}`)

})


