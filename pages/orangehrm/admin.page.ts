import { Page } from "@playwright/test";

export class Admin{
    adminLink:any
    page:any
    username:any
    empoptions:any
    userrole:any
    empname:any
    status:any
    search:any
    constructor(page:Page)
    {
        this.page=page
        // Use a text-based locator for the Admin menu link (fallback if role isn't available)
        this.adminLink = page.locator('text=Admin').first()
        this.username=page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//input[@class="oxd-input oxd-input--active"]')
        this.userrole=page.locator('//div[@class="oxd-select-wrapper"]//div[@class="oxd-select-text--after"]').nth(0)
        this.empname=page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div[@class="oxd-autocomplete-wrapper"]//input')
        this.empoptions=page.locator('//div[@class="oxd-autocomplete-option"]').nth(0)
        this.status=page.locator('//div[@class="oxd-select-wrapper"]//div[@class="oxd-select-text--after"]').nth(1)
        this.search=page.getByRole('button',{name:'Search'})
    }

    async enterDetails(username:string,empname:string)
    {
        await this.adminLink.click()
        await this.username.fill(username)
        await this.userrole.click()
        await this.page.locator('//div[@class="oxd-select-option"]').nth(2).click()
        await this.empname.fill(empname)
        await this.empoptions.waitFor()
        await this.empoptions.click() 
        await this.status.click()
        await this.page.locator('//div[@class="oxd-select-option" and .="Enabled"]').click()
        await this.page.pause()
        await this.search.click()
    }
}