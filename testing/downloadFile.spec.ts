// File Download

//  Step by step process to handle multiple tabs/windows using PW (Playwright):

// 1. Launch the url = page.goto()
// 2. Wait for "download" event to appear on the page without using "await"  
// - const download = page.waitForEvent("download")
// 3. Identify and click on the element which is responsible for generation of "download" event on the page.
// 4. Wait for the completion of the downloading.
// const download1 = await download
// 5. by using path module we can generate the path to store the downloadable file
// 6. Download - suggestedFilename() - Will return us the filename of the downloaded file
// 7. saveAs(pathofthefile)
// 8. fs (file system) - Validate if the fileName is available inside the download folder or not


import {test, expect} from '@playwright/test'
import path from 'path'

test("Handling file download scenario", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")

    const downloadResult = page.waitForEvent('download')
    // console.log(downloadResult);

    await page.locator("#downloadButton").click()

    const download = await downloadResult
    // console.log(download);
    

    const downloadDir = await path.join(__dirname,"../downloads")
    console.log(downloadDir);
    
    // C:\Users\pkroy\Videos\PWTSMay26\downloads\abcd.jpg

    // suggestedFilename() - Return the downloaded file name

    const fileName = await download.suggestedFilename()
    console.log(fileName);
    
    const filePath = path.join(downloadDir, fileName)
    console.log(filePath)

    // saveAs(filepath) - Copy the download to a user-specified path

    await download.saveAs(filePath)

    await expect(filePath).toContain(fileName)
})

// test.only("Handling file download scenario1", async ({page})=>{
//     await page.goto("https://demoqa.com/upload-download")

//     const downloadResult = page.waitForEvent('download')
//     // console.log(downloadResult);

//     await page.locator("#downloadButton").click()

//     const download = await downloadResult
//     // console.log(download);
    

//     const downloadDir = await path.join(__dirname,"../downloads")
//     console.log(downloadDir);
    
//     // C:\Users\pkroy\Videos\PWTSMay26\downloads\abcd.jpg

//     // suggestedFilename() - Return the downloaded file name

//     const fileName = await download.suggestedFilename()+1
//     console.log(fileName);
    
//     const filePath = path.join(downloadDir, fileName)
//     console.log(filePath)

//     // saveAs(filepath) - Copy the download to a user-specified path

//     await download.saveAs(filePath)

//     await expect(filePath).toContain(fileName)

// })

// In playwright.config.ts file change - workers: process.env.CI ? 1 : 2, // to run 2 tests at a time