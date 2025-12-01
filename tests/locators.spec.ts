import {test,expect} from '@playwright/test'
import { doesNotReject } from 'assert'
test('',async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
await page.goto('https://testautomationpractice.blogspot.com')
await page.getByPlaceholder('Enter Name').fill('testuser')
await page.getByPlaceholder('Enter EMail').fill('testuser@gmail.com')
await page.getByPlaceholder('Enter Phone').fill('9876543210')
await page.getByLabel('Address:').fill('Bangalore')
await page.getByRole('radio',{name:'Male',exact:true}).click()
let days:string[]=["Sunday","Friday"]
for(let day of days)
{
    await page.getByRole('checkbox',{name:day}).check()
    await expect(page.getByRole('checkbox',{name:day})).toBeChecked()
}
await page.getByRole('combobox',{name:'Country:'}).selectOption(['India','Germany'])
await page.getByRole('listbox',{name:'Colors:'}).selectOption(['Red','Blue'])
await page.setInputFiles('#singleFileInput','/Users/testvagranttechnologies/Documents/testfile.rtf')
await page.setInputFiles('#multipleFilesInput',['/Users/testvagranttechnologies/Documents/testfile.rtf','/Users/testvagranttechnologies/Documents/testfile1.rtf'])
/*//Handling New Tab
let [newpage]=await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button',{name:'New Tab'}).click()
    
])
console.log(newpage.url());
await page.bringToFront()
//Handling pop-up window
const [newwindow]=await Promise.all([context.waitForEvent('page'),
    //page.getByRole('button',{name:'Popup Windows'}).click(),
    page.evaluate(()=>{window.open('https://www.selenium.dev/')})
])
console.log(await newwindow.title());
*/

//scrolling drop-down
await page.locator('//div[@class="widget-content"]/input[@id="comboBox"]').click()
await page.locator('//div[@class="option"]',{hasText:'Item 81'}).click()
})
