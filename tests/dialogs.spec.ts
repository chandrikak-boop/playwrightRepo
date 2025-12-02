import {test} from '@playwright/test'
test('dialogs',async({page})=>{
page.on('dialog',dialog=>{
    console.log(dialog.message());
    console.log(dialog.type());
    
    dialog.accept("testuser")
})
await page.goto('https://testautomationpractice.blogspot.com')
await page.getByRole('button',{name:'Simple Alert'}).click()
await page.getByRole('button',{name:'Confirmation Alert'}).click()
await page.getByRole('button',{name:'Prompt Alert'}).click()
})