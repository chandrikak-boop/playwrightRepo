import { Page } from "@playwright/test";

export class Login{
    page:Page
    username:any
    password:any
    loginBtn:any
    constructor(page:Page)
    {
        this.page=page
        this.username=page.getByPlaceholder('Username')
        this.password=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button',{name:'Login'})
    }
    async enterUsername(username:string)
    {
        await this.username.fill(username)
    }
    async enterPassword(password:string)
    {
        await this.password.fill(password)
    }
    async clickLogin()
    {
        await this.loginBtn.click()
    }
}