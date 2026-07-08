// Locators and methods related to Login Page

import { Locator, Page } from "@playwright/test";

export class LoginPage{

    // Locators  - Properties

    page: Page
    private email :Locator 
    private password: Locator
    private loginBtn: Locator
    errorMessage : Locator
    homePageIdentifer : Locator

    constructor(page:Page){
        this.page = page 
        this.email = this.page.getByPlaceholder("email@example.com") 
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifer = this.page.locator("[routerlink='/dashboard/']")
    }

    // Methods

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, passsword: string){
        await this.email.fill(username)
        await this.password.fill(passsword)
        await this.loginBtn.click()
    }

    // LoginPage(){}
}

/*

// In your organization, they might be writing one centralised locator. 
// Centralised locator means they'll just create one page, and inside that page itself, or one class, 
// and inside that one class itself, they'll write all the different types of locators.
// Most of the organisation follows, write the locator for a specific page inside the specific page itself.
// Some of the organisation also follows that they create one particular class, let's say locator.ts.
// And inside that itself, they'll write all the different locators for all the classes, all the pages that we have inside the pages. 
// And wherever we have to call it, we'll simply create an object for that class and access it. So do not get confused in that case. 
// That is also one of our options where all the different locators will be written inside the same file.
// standard way most of the organisation follows to write it inside a specific page so that whenever we'll have to create any kind of changes.
// We can directly jump to a specific page itself instead of scrolling down inside a larger file.

// So always remember that any value that you have to hard code or any data that you have to use it.
// any data that you have to use it, do not try to store it inside a page class.
// Only the things that you need it inside the page is the locators, methods, whatever the method that you have to call, like go to, fill, click, and so on.
// If, in case, if it is necessary to add the test data, either write it inside the test data folder by creating any files or any folder, 
// or you can also write it inside the test file as well.
// Writing the test data inside the test file is acceptable, but not inside your page file.
// Storing the data inside the page class is not acceptable.

*/