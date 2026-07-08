// Locators and methods related to Login Page

import { Locator, Page } from "@playwright/test";

export class DashboardPage{

    private page: Page
    private products: Locator
    addToCartMessage: Locator
    viewPageProductName: Locator
    viewPageProductPrice: Locator
    // cat_fashion: Locator
    homePageProductPrice: string

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartMessage = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice = this.page.locator("div.rtl-text h3")
        this.homePageProductPrice = ""
    }


    async searchProduct(productName: string, index:number){
        await this.products.nth(0).waitFor()
        const countOfProduct = await this.products.count() 
        console.log(this.homePageProductPrice);
        
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName){
                this.homePageProductPrice = await this.products.nth(i).locator("div.text-muted").innerText()
                await this.products.nth(i).locator("button").nth(index).click()
                break
            }
         }
    }

}

// see, as soon as you have given page and hit enter, it will automatically import that. i.e., import { Page } from "@playwright/test";