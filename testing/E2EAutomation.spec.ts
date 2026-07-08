import {test, expect} from '@playwright/test'

let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let country = "Singapore"
let productName = "iphone 13 pro"

test("E2E automation scenario", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")

    await page.getByPlaceholder("email@example.com").fill(email)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.locator("#login").click()

    await expect(page.locator(".fa-sign-out")).toBeVisible()

    // Find the number of products are displaying on the page

    const products  = page.locator("div.card-body") // 3

    // WaitFor is a method which will return when the element specified by the locator satisfied waiting for an element on the web page. That means we are saying that wait for at least one product To be available and for this auto weighting concept will be applicable because this locator that you have written is matching with one single element on the web page.
    await products.nth(0).waitFor()

    // count() - Returns the number of element matching with the locator
    const countOfProduct = await products.count() // 3 - [0,1,2]

    // filter() - Filter out the value depending on the criteria
    await products.filter({hasText:`${productName}`}).locator("button").last().click()

    // for(let i=0; i<countOfProduct; i++){
    //     // div.card-body b
    //     const productText = await products.nth(i).locator("b").textContent()
    //     if(productText === productName){
    //         await products.nth(i).locator("button").last().click()
    //         break
    //     }
    // }

    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByRole("button", {name:'Checkout'}).click()
    await expect(page.locator("div.user__name input").first()).toHaveValue(email)

    await page.locator("div.user__name input").last().pressSequentially("in")

    const ddresult = page.locator("section.ta-results button")

    await ddresult.nth(0).waitFor()

    const countOfddResult = await ddresult.count()

    await ddresult.filter({hasText:`${country}`}).click()

    // for(let i=0; i<countOfddResult; i++){
    //     const countryText = await ddresult.nth(i).textContent()
    //     if(countryText === country){
    //         await ddresult.nth(i).click()
    //         break
    //     }
    // }

    await page.getByText("Place Order").click()
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")

    const orderText = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    // console.log(orderText)
 
    // const orderID = orderText?.replaceAll("|"," ").trim() // This line Trainer's written code
    // const orderID = orderText!.replaceAll("|"," ").trim()
    const orderID = (orderText as any)!.replaceAll("|", " ").trim() // This line myself written code
    console.log(orderID)

    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await expect(page.locator("table tbody")).toBeVisible()

    // Table - Combination of rows and columns
        // thead - Table Heading
        // tbody - Table body - Which will consists of all the data inside the table
            // tr - Table row
                //td - Table definition - Table Column


    const rows = page.locator("table tbody tr")
    const rowCount = await rows.count()

    await rows.filter({ hasText: orderID }).locator("button").first().click()

    // for(let i=0; i<rowCount; i++){
    //     const orderText = await rows.nth(i).locator("th").textContent()

    //     if(orderText === orderID){
    //         await rows.nth(i).locator("button").first().click()
    //         break
    //     }
    // }

    // await expect(page.locator("div.col-text")).toHaveText(orderID!)
    await expect(page.locator("div.col-text")).toHaveText(orderID)





})

