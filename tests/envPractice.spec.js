import {test,expect} from '@playwright/test'
test('env practice @testingEnv',async({page,baseURL})=>{
await page.goto(process.env.BASE_URL)
await page.getByPlaceholder('Username').fill(process.env.USERNAME)
await page.getByPlaceholder('Password').fill(process.env.PASSWORD)
await page.getByRole('button',{name:'Login'}).click()
})