import {test,expect} from '@playwright/test'
const STORAGE_STATE_PATH='auth.json'
test.use({storageState:STORAGE_STATE_PATH}) //use saved session
test('home page',async({page})=>{
    await page.goto('https://www.saucedemo.com/inventory.html')
    await page.click('#add-to-cart-sauce-labs-backpack')
})