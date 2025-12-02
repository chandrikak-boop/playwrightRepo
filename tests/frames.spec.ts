import {test,expect} from '@playwright/test'
import { url } from 'inspector'
test('',async({page})=>{
    page.on('dialog',async dialog=>{
        await dialog.dismiss()
    })
//finding all frames
const frames = await page.frames();
console.log(frames.length);

for (const frame of frames) {
  console.log(await frame.name());
}

await page.goto('https://vinothqaacademy.com/iframe/')
const frame1:any= page.frame({url:'https://vinothqaacademy.com/webtable/'})
await frame1.getByPlaceholder('Name').fill('test')
await page.waitForTimeout(3000)

//frame locator
const frame2=page.frameLocator('div div div div iframe').nth(1)
await frame2.getByRole('button',{name:'Alert Box'}).nth(0).click()

const frame3=page.locator('//iframe[@title="Registration Form"]').contentFrame()
await frame3.getByRole('radio',{name:'Male',exact:true}).click()
})