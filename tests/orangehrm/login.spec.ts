import {test,expect} from '@playwright/test'
import {Login} from '../../pages/orangehrm/login.page.ts'
test('login',async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage()
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

const loginObj=new Login(page)
await loginObj.enterUsername('Admin')
await loginObj.enterPassword('admin123')
await loginObj.clickLogin()
await page.context().storageState({path:'auth.json'})
})