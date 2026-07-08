// Drop down (DD) - A collection of different or multiple elements

// 2 Types of DD

// 1. Static drop down - The value will never changes - Gender/country
    // a. Single select DD
    // b. Multi select DD


// 2. Dynamic drop down - The value will be changeable - electronics
    // a. Single select DD
    // b. Multi select DD


// Development of DD

// 1. Using <select> tag
// 2. NON select tag - div, span, li, ul,......


// 1. DD developed using <select> tag

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down using - 
// selectOption("value", {label or value or index})

// Example: page.locator("#dd").selectOption("AL", {value: "DZ"} or {label: "Bahrain"})
// OR {index:10}

// 4. If the drop down is multi-select - selectOption(["AS", "BS", "CS"])


// ***********************************************/

// 2. DD developed using NON select tag

// Step by step procedure to select the value from the DD


// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in the step #2
// 4. Identify and click on the element that you want to select from the drop down
// 5. If the drop down is multi-select - you click on multiple times for multiple drop down over here that's it 

import {test, expect} from '@playwright/test'

test("Handling drop down developed using SELECT tag", async ({page})=>{
    // 1. Launch the url
    await page.goto("https://practice.expandtesting.com/dropdown")

    // 2. Locate the drop down element by writing the locator
    const countryDD = page.locator("#country")

    // 3. Get the value from the drop down using - 
    // selectOption("value", {label or value or index})
    await countryDD.selectOption("AU") // AU - value attribute // default way done
    
    // toHaveValue("AU")
    await expect(countryDD).toHaveValue("AU")

    // 2nd way we can also use 'value' as an optional parameter
    await countryDD.selectOption({value:"BR"}) // key:value

    // 3rd way - by using 'label' as an optional parameter
    await countryDD.selectOption({label:'Wallis and Futuna'})

    // 4th way - by using 'index' as an optional parameter
    await countryDD.selectOption({index: 102})


    await page.goto("https://demoqa.com/select-menu")
    const carDD = await page.locator("#cars")

    // 4. If the drop down is multi-select - selectOption(["AS", "BS", "CS"])
    await carDD.selectOption(["volvo", "opel"])

    // toHaveValues(["volvo", "opel"]) // select multiple elements
    await expect(carDD).toHaveValues(["volvo", "opel"])
    
    await carDD.selectOption([{label:'Saab'}, {index:3}, {value:'volvo'}])



})

// Assignment to complete - 
// Select the value from the drop down which have been developed using NON SELECT tag

// https://demoqa.com/select-menu

test("Handling drop down developed using NON SELECT tag", async ({ page }) => {
    
    // 1. Launch the url
    await page.goto("https://demoqa.com/select-menu");

    // --- 1. SELECT VALUE DROPDOWN (NON-SELECT TAG) ---
    
    // 2. Locate the drop down element by writing the locator
    const selectValueDD = page.locator("#withOptGroup");
    
    // 3. Click on the drop down element identified in the step #2
    await selectValueDD.click();

    // 4. Identify and click on the element that you want to select from the drop down
    const valueOption = page.locator("#react-select-2-option-0-1");
    await valueOption.click();

    // Assertion to verify selected value text
    await expect(selectValueDD).toContainText("Group 1, option 2");

    // --- 2. SELECT ONE DROPDOWN (NON-SELECT TAG) ---
    
    // 2. Locate the drop down element by writing the locator
    const selectOneDD = page.locator("#selectOne");
    
    // 3. Click on the drop down element identified in the step #2
    await selectOneDD.click();

    // 4. Identify and click on the element that you want to select from the drop down
    const titleOption = page.getByText('Mr.', { exact: true });
    await titleOption.click();

    // Assertion to verify selected title text
    await expect(selectOneDD).toContainText("Mr.");

    // --- 3. MULTISELECT DROP DOWN (NON-SELECT TAG) ---
    
    // 2. Locate the drop down element by writing the locator
    const multiSelectDD = page.locator
    ("#selectMenuContainer >> xpath=.//p[b[text()='Multiselect drop down']]/following-sibling::div//div[contains(@class, 'control')]"); 
    
    // 3. Click on the drop down element identified in the step #2
    await multiSelectDD.click();

    // 5. If the drop down is multi-select
    
    // Clicking 1st time for Green
    const greenColor = page.locator("#react-select-4-option-0"); 
    await greenColor.click();

    // Clicking 2nd time for Black
    const blackColor = page.locator("#react-select-4-option-2"); 
    await blackColor.click();

    // Clicking 3rd time for Blue
    const blueColor = page.locator("#react-select-4-option-1"); 
    await blueColor.click();

    // Assertion to verify all three selected colors (Green, Black, Blue) are visible
    await expect(multiSelectDD).toContainText("Green");
    await expect(multiSelectDD).toContainText("Black");
    await expect(multiSelectDD).toContainText("Blue");
});