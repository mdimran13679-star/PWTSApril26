import {test, expect} from '@playwright/test'

test("Handling calendar", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    await page.locator(".ui-datepicker-trigger").click()

    const targetDay = "15"
    const targetMonth = "May"
    const targetYear = "2027"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    // This is to select one future date over here inside the calendar
   
    /*

    // First way using AND operator
    // while(!((false) && (false))) // while(!(false)) i.e., not equal to false = true i.e., while(true) till loop ends April 2027 after that while(!(true)) is false then it will go after the while loop ends means it will select targetDay
    while(!((await monthPicker.textContent() == targetMonth) && (await yearPicker.textContent() == targetYear)))
    {
        await page.getByText("Next", {exact:true}).click()
    }

    await page.getByText(targetDay, {exact:true}).click()

    await page.waitForTimeout(2000)

    
    // Second way using OR operator
    while((await monthPicker.textContent() != targetMonth) || (await yearPicker.textContent() != targetYear))
    {
        await page.getByText("Next", {exact:true}).click()
    }

    await page.getByText(targetDay, {exact:true}).click()

    await page.waitForTimeout(2000)

    */

    // Third way
    while(true){
        if((await monthPicker.textContent() == targetMonth) 
            && (await yearPicker.textContent() == targetYear))
        {
            await page.getByText(targetDay, {exact:true}).click()
            break
        }
        else{
            await page.getByText("Next", {exact:true}).click()
        }
    }

    await page.waitForTimeout(2000)

})

// codegen - Code generation